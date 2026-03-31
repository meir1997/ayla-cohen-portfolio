export const metadata = {
  title: 'אודות | אילה כהן',
  description: 'למד עוד על אילה כהן - מעצבת ואדריכלית',
}

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-light mb-8">אודות</h1>

        <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
          <p>
            אילה כהן היא מעצבת וארכיטקטלית בעלת יותר מ-15 שנות ניסיון בעיצוב מרחבים יוקרתיים.
            בעבודתה, היא משלבת טעם עדין עם פונקציונליות מעולה.
          </p>

          <p>
            כל פרויקט מתחיל בהקשבה עמוקה לצרכים ולחלומות של הלקוח.
            מכאן, אנחנו בונים דיוקן מרחבי שמשקף את האישיות והסטייל של כל בעל בית.
          </p>

          <p>
            המיוחד בגישתו של אילה הוא היכולת להפוך רעיונות מופשטים לממשי.
            כל פיקסל, כל חומר, וכל צבע נבחרים בעיון לשם יצירת הרמוניה וגדולה.
          </p>
        </div>

        <div className="mt-12 pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-light mb-6">ערכים</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'יוקרה', description: 'איכות בכל פרט' },
              { title: 'חדשנות', description: 'עיצוב מתקדם ומודרני' },
              { title: 'שירות אישי', description: 'הקשבה עמוקה לכל לקוח' }
            ].map((value) => (
              <div key={value.title} className="space-y-2">
                <h3 className="text-lg font-light">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
