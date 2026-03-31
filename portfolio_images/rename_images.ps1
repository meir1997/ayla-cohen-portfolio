# צור תיקייה חדשה לתמונות ממוספרות
$baseFolder = "C:\Users\meirc\Documents\קלוד\קלוד קוד בתוכנה\אתר לאילה\portfolio_images"
$outputFolder = "$baseFolder\numbered"

if (-not (Test-Path $outputFolder)) {
    New-Item -ItemType Directory -Path $outputFolder | Out-Null
}

# מיפוי התמונות לפי סדר כפי שהגדרתי בטבלה
$imageMap = @(
    # Misc images 1-2
    @{old = "misc/black-marble-patterned-texture-background-marble-thailand-abstract-natural-marble-black-white-design.webp"; new = "1.webp"}
    @{old = "misc/construction-plans-drawing-tools-blueprints.webp"; new = "2.webp"}
    
    # Project images 3-11
    @{old = "projects/PHOTO-2023-09-14-23-10-14.jpg"; new = "3.jpg"}
    @{old = "projects/PHOTO-2023-09-14-23-10-46.jpg"; new = "4.jpg"}
    @{old = "projects/PHOTO-2023-09-14-23-13-28.jpg"; new = "5.jpg"}
    @{old = "projects/PHOTO-2023-09-14-23-13-38.jpg"; new = "6.jpg"}
    @{old = "projects/PHOTO-2023-09-14-23-13-49.jpg"; new = "7.jpg"}
    @{old = "projects/PHOTO-2023-09-14-23-17-33.jpg"; new = "8.jpg"}
    @{old = "projects/1-1.jpg"; new = "9.jpg"}
    @{old = "projects/2-1.jpg"; new = "10.jpg"}
    @{old = "projects/3.jpg"; new = "11.jpg"}
    
    # Misc image 12
    @{old = "misc/PopupMenu-BG1.png"; new = "12.png"}
    
    # Profile images 13-16
    @{old = "profile/dsc_3388-_optimized-scaled.jpg"; new = "13.jpg"}
    @{old = "profile/IMG_4391.jpg"; new = "14.jpg"}
    @{old = "profile/IMG_4392.jpg"; new = "15.jpg"}
    @{old = "profile/reka-2.jpg"; new = "16.jpg"}
)

# עבור על כל הקבצים הנותרים ותן להם מספרים
$counter = 17
$processedFiles = @("PHOTO-2023-09-14-23-10-14.jpg", "PHOTO-2023-09-14-23-10-46.jpg", "PHOTO-2023-09-14-23-13-28.jpg", "PHOTO-2023-09-14-23-13-38.jpg", "PHOTO-2023-09-14-23-13-49.jpg", "PHOTO-2023-09-14-23-17-33.jpg", "1-1.jpg", "2-1.jpg", "3.jpg")

$projectFiles = Get-ChildItem "$baseFolder\projects" | Where-Object {$_.PSIsContainer -eq $false} | Sort-Object Name
foreach ($file in $projectFiles) {
    if ($file.Name -notin $processedFiles) {
        $newName = "$counter$($file.Extension)"
        $imageMap += @{old = "projects/$($file.Name)"; new = $newName}
        $counter++
    }
}

# בצע את הוספות
foreach ($mapping in $imageMap) {
    $oldPath = "$baseFolder\$($mapping.old)"
    $newPath = "$outputFolder\$($mapping.new)"
    
    if (Test-Path $oldPath) {
        Copy-Item -Path $oldPath -Destination $newPath
        Write-Host "✅ $($mapping.old) -> $($mapping.new)"
    }
}

Write-Host "`n✅ סיום! כל התמונות ב: $outputFolder"
