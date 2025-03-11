const quotes = {
    en: [
        {
            quote: "The best way to predict your future is to create it.",
            author: "Abraham Lincoln",
            authorLink: "https://en.wikipedia.org/wiki/Abraham_Lincoln",
        },
        {
            quote: "Success is the sum of small efforts, repeated day in and day out.",
            author: "Robert Collier",
            authorLink: "https://en.wikipedia.org/wiki/Robert_Collier_(author)",
        },
        {
            quote: "The only limit to our realization of tomorrow is our doubts of today.",
            author: "Franklin D. Roosevelt",
            authorLink: "https://en.wikipedia.org/wiki/Franklin_D._Roosevelt",
        },
        {
            quote: "In the middle of every difficulty lies opportunity.",
            author: "Albert Einstein",
            authorLink: "https://en.wikipedia.org/wiki/Albert_Einstein",
        },
        {
            quote: "Don’t be afraid to give up the good to go for the great.",
            author: "John D. Rockefeller",
            authorLink: "https://en.wikipedia.org/wiki/John_D._Rockefeller",
        },
        {
            quote: "Opportunities don't happen, you create them.",
            author: "Chris Grosser",
            authorLink: "https://en.wikipedia.org/wiki/Chris_Grosser",
        },
        {
            quote: "Success doesn’t come from what you do occasionally, it comes from what you do consistently.",
            author: "Marie Forleo",
            authorLink: "https://en.wikipedia.org/wiki/Marie_Forleo",
        },
        {
            quote: "Act as if what you do makes a difference. It does.",
            author: "William James",
            authorLink: "https://en.wikipedia.org/wiki/William_James",
        },
        {
            quote: "The harder you work for something, the greater you’ll feel when you achieve it.",
            author: "Anonymous",
            authorLink: "",
        },
        {
            quote: "Your limitation—it’s only your imagination.",
            author: "Anonymous",
            authorLink: "",
        },
        {
            quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            author: "Winston Churchill",
            authorLink: "https://en.wikipedia.org/wiki/Winston_Churchill",
        },
        {
            quote: "What seems impossible today will one day become your warm-up.",
            author: "Anonymous",
            authorLink: "",
        },
    ],
    ka: [
        {
            quote: "წარმატება არის მარცხიდან მარცხამდე შეუჩერებელი სვლა ენთუზიაზმის დაკარგვის გარეშე",
            author: "უინსტონ ჩერჩილი",
            authorLink:
                "https://ka.wikipedia.org/wiki/%E1%83%A3%E1%83%98%E1%83%9C%E1%83%A1%E1%83%A2%E1%83%9D%E1%83%9C_%E1%83%A9%E1%83%94%E1%83%A0%E1%83%A9%E1%83%98%E1%83%9A%E1%83%98",
        },
        {
            quote: "რაც უფრო მეტს ვვარჯიშობ, მით უფრო იღბლიანი ვხდები",
            author: "გერი ფლეიერი",
            authorLink:
                "https://ka.wikipedia.org/wiki/%E1%83%92%E1%83%94%E1%83%A0%E1%83%98_%E1%83%A4%E1%83%9A%E1%83%94%E1%83%98%E1%83%A0%E1%83%98",
        },
        {
            quote: "მე არ ვქმნი ფილმებს ფულის საშოვნელად. მე ვშოულობ ფულს ფილმების შესაქმნელად",
            author: "უოლტ დისნეი",
            authorLink:
                "https://ka.wikipedia.org/wiki/%E1%83%A3%E1%83%9A%E1%83%A2_%E1%83%93%E1%83%98%E1%83%A1%E1%83%9C%E1%83%94",
        },
        {
            quote: "მხოლოდ იმ შეცდომას შეიძლება ეწოდოს ნამდვილი შეცდომა, იმ მარცხს შეიძლება ეწოდოს ნამდვილი მარცხი, რომლისგანაც ვერაფერს ვისწავლით",
            author: "ჰენრი ფორდი",
            authorLink:
                "https://ka.wikipedia.org/wiki/%E1%83%B0%E1%83%94%E1%83%9C%E1%83%A0%E1%83%98_%E1%83%A4%E1%83%9D%E1%83%A0%E1%83%93%E1%83%98",
        },
        {
            quote: "როცა მწვერვალს შეჰყურებ, იცი, რომ ის შენი სამიზნეა, რომელიც უნდა დაიპყრო და მთელ ენერგიას ამ მიზნისაკენ მიმართავ, მაგრამ რასაც მალე ისწავლი, არის ის, რომ მწვერვალი, რომელიც ქვემოდან მოჩანს, ფარავს სხვა მწვერვალს მის უკან, ის კი, თავის მხრივ, სხვა მწვერვალს, და ასე შემდეგ",
            author: "დევიდ გიზელსი",
            authorLink: "https://en.wikipedia.org/wiki/David_Giesel",
        },
        {
            quote: "უფალო, არ ვითხოვ სასწაულებსა და მირაჟებს, არამედ ვითხოვ ძალას ყოველი დღისთვის. მასწავლე პატარა ნაბიჯების ხელოვნება",
            author: "ანტუან დე სენტ-ეგზიუპერი",
            authorLink:
                "https://ka.wikipedia.org/wiki/%E1%83%90%E1%83%9C%E1%83%A2%E1%83%A3%E1%83%90%E1%83%9C_%E1%83%93%E1%83%94_%E1%83%A1%E1%83%94%E1%83%9C%E1%83%A2-%E1%83%94%E1%83%92%E1%83%96%E1%83%98%E1%83%9E%E1%83%94%E1%83%A0%E1%83%98",
        },
        {
            quote: "თუ ყოველ დილით შენს საწოლს გაასწორებ, დღის პირველი საქმე შესრულებული გექნება. ეს მოგანიჭებს სიამაყის განცდას და გიბიძგებს შემდეგი საქმის შესრულებისკენ...",
            author: "ადმირალი უილიამ მაკრავენი",
            authorLink:
                "https://ka.wikipedia.org/wiki/%E1%83%90%E1%83%93%E1%83%9B%E1%83%98%E1%83%A0%E1%83%90%E1%83%9A%E1%83%98_%E1%83%A3%E1%83%98%E1%83%9A%E1%83%98%E1%83%90%E1%83%9B_%E1%83%9B%E1%83%90%E1%83%99%E1%83%A0%E1%83%90%E1%83%95%E1%83%94%E1%83%9C%E1%83%98",
        },
        {
            quote: "თავი შორს დაიჭირეთ მათგან, ვინც თქვენი ამბიციების შეკვეცას ცდილობს. ამას პატარა ადამიანები აკეთებენ. ნამდვილად დიდები კი გაგრძნობინებენ, რომ თქვენც შეგიძლიათ, დიდი გახდეთ",
            author: "მარკ ტვენი",
            authorLink:
                "https://ka.wikipedia.org/wiki/%E1%83%9B%E1%83%90%E1%83%A0%E1%83%99_%E1%83%A2%E1%83%95%E1%83%94%E1%83%9C%E1%83%98",
        },
        {
            quote: "შვიდჯერ დაეცი, რვაჯერ ადექი",
            author: "იაპონური სიბრძნე",
            authorLink: "https://en.wikipedia.org/wiki/Japanese_proverb",
        },
        {
            quote: "თუ დიდი საქმეების კეთება არ შეგიძლიათ, პატარები დიდებულად აკეთეთ",
            author: "ნაპოლეონ ჰილსი",
            authorLink: "https://en.wikipedia.org/wiki/Napoleon_Hill",
        },
        {
            quote: "ცხოვრების ხელოვნება უფრო ბრძოლის ხელოვნებას წააგავს, ვიდრე როკვისას, რადგან მუდმივ მზადყოფნასა და სიმტკიცეს მოითხოვს...",
            author: "მარკუს ავრელიუსი",
            authorLink:
                "https://ka.wikipedia.org/wiki/%E1%83%9B%E1%83%90%E1%83%A0%E1%83%99%E1%83%A3%E1%83%A1_%E1%83%90%E1%83%95%E1%83%A0%E1%83%94%E1%83%9A%E1%83%98%E1%83%A3%E1%83%A1%E1%83%98",
        },
    ],
};

export function getRandomQuote(locale: "en" | "ka") {
    const randomIndex = Math.floor(Math.random() * quotes[locale].length);
    const selectedQuote = quotes[locale][randomIndex];
    return selectedQuote;
}
