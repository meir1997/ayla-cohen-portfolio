import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(
  _request: NextRequest,
  { params }: { params: { projectId: string; imageName: string } }
) {
  try {
    const { projectId, imageName } = params

    // Decode project ID and image name
    const decodedProjectId = decodeURIComponent(projectId)
    const decodedImageName = decodeURIComponent(imageName)

    // Security: prevent directory traversal
    if (
      decodedImageName.includes('..') ||
      decodedImageName.includes('/') ||
      decodedImageName.includes('\\')
    ) {
      return NextResponse.json({ error: 'Invalid image name' }, { status: 400 })
    }

    // Map project ID to folder name
    const projectFolders: Record<string, string> = {
      'mevo-choron': 'מבוא חורון',
      'penthouse-jerusalem': 'פנטאוז בירושלים',
      'luxury-salon': 'סלון יוקרתי',
      'luxury-kitchen': 'מטבח יוקרתי',
    }

    const folderName = projectFolders[decodedProjectId]
    if (!folderName) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 })
    }

    const imagePath = path.join(
      process.cwd(),
      'portfolio_images',
      'numbered',
      folderName,
      decodedImageName
    )

    // Security: ensure the file is within the portfolio_images directory
    const realPath = fs.realpathSync(imagePath)
    const allowedDir = fs.realpathSync(
      path.join(process.cwd(), 'portfolio_images')
    )

    if (!realPath.startsWith(allowedDir)) {
      return NextResponse.json(
        { error: 'Access denied' },
        { status: 403 }
      )
    }

    // Check if file exists
    if (!fs.existsSync(realPath)) {
      return NextResponse.json({ error: 'Image not found' }, { status: 404 })
    }

    // Read the file
    const fileBuffer = fs.readFileSync(realPath)

    // Determine content type
    const ext = path.extname(decodedImageName).toLowerCase()
    const contentTypeMap: Record<string, string> = {
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.png': 'image/png',
      '.webp': 'image/webp',
      '.gif': 'image/gif',
    }

    const contentType = contentTypeMap[ext] || 'application/octet-stream'

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    })
  } catch (error) {
    console.error('Error serving image:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
