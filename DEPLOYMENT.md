# 🚀 הוצאה לאוויר - אתר אילה כהן

מדריך מלא להוצאה לאוויר לVercel וחיבור דומיין.

## שלב 1: הכנה ב-GitHub

### 1.1 יוצרים חשבון GitHub (אם עדיין אין)
- כנסו ל: https://github.com
- צרו חשבון חדש
- אשרו את האימייל

### 1.2 יוצרים Repository חדש
```bash
cd "C:\Users\meirc\Documents\קלוד\קלוד קוד בתוכנה\אתר לאילה"
git init
git add .
git commit -m "Initial commit: Ayla Cohen portfolio website"
git branch -M main
```

### 1.3 דוחפים ל-GitHub
```bash
# בGitHub צרו repository חדש בשם "ayla-cohen-portfolio"
# אחר כך בוחרים HTTPs copy וחוק:

git remote add origin https://github.com/[USERNAME]/ayla-cohen-portfolio.git
git push -u origin main
```

---

## שלב 2: Vercel Deployment

### 2.1 כנסו ל-Vercel
- כנסו ל: https://vercel.com
- התחברו עם GitHub

### 2.2 Import Project
1. לחצו "New Project"
2. בחרו את ה-repository "ayla-cohen-portfolio"
3. Vercel יזהה את זה כ-Next.js project בצורה אוטומטית
4. לחצו "Deploy"

### 2.3 אחרי ה-Deploy
Vercel יעביד לכם URL כמו: `https://ayla-cohen-portfolio.vercel.app`

---

## שלב 3: חיבור דומיין

### 3.1 ב-Vercel Dashboard
1. לכו ל-Project Settings
2. בחרו "Domains"
3. לחצו "Add Domain"
4. הקלידו: `ayalacohen.co.il`

### 3.2 עדכנו DNS Records
Vercel יתן לכם DNS records:

**Type: A Record**
```
Name: @
Value: 76.76.19.165 (או לפי Vercel)
TTL: 3600
```

**Type: CNAME (אופציונלי)**
```
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

### 3.3 עדכנו ברישום הדומיין
1. כנסו לחשבון הדומיין שלכם (איפה שרכשתם את ayalacohen.co.il)
2. עדכנו את ה-DNS records בהתאם
3. חכו 15-30 דקות להפצה

### 3.4 בדקו שהדומיין עובד
```bash
ping ayalacohen.co.il
nslookup ayalacohen.co.il
```

---

## שלב 4: SSL Certificate

Vercel מעניק SSL certificate בחינם באופן אוטומטי.
האתר יהיה https://ayalacohen.co.il 🔒

---

## Continuous Deployment

**אחרי שסיימתם את ההוצאה לאוויר:**
- כל פעם שתדחפו קוד ל-GitHub
- Vercel תבנה וודפלוי אוטומטית
- להוסיף פרויקט חדש: עדכן את התמונות בתיקייה ודחוף ל-GitHub!

---

## Troubleshooting

### אתר לא נטען אחרי הוצאה לאוויר
- בדקו את Vercel logs
- ודא שפורט 3000 פתוח
- בדוק את vercel.json בדקות

### תמונות לא תוצגנו
- בדק את ה-API route
- וודא שהתמונות בתיקייה הנכונה
- בדוק בקונסול את ה-errors

### דומיין לא עובד
- חכה עוד זמן להפצת DNS
- בדוק את DNS records ברישום הדומיין
- וודא שהשם נכון: ayalacohen.co.il

---

## הפקודות המהירות

```bash
# פיתוח מקומי
npm run dev

# בדיקת build
npm run build

# רישום לGitHub
git add .
git commit -m "Update: [תיאור השינוי]"
git push origin main

# וודא שVercel בנה ודפלוי
# (הוא עושה זה אוטומטית)
```

---

## השלם ✅

אחרי שכל זה מוכן:
- ✅ אתר חי ב-https://ayalacohen.co.il
- ✅ SSL בטוח
- ✅ הוצאה לאוויר אוטומטית
- ✅ קל לעדכן פרויקטים חדשים

🎉 **מוכנים?** תתחילו עם שלב 1!
