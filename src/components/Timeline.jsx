export default function Timeline() {
    const timeLine = [
        {
            date: "2019/2023",
            title: "Bilgisayar Mühendisliği Eğitimi",
            description: "Malatya İnönü Üniversitesi Bilgisayar Mühendisliği bölümüne 2019 da başladım. 2023 yılında mezun olmayı hedefliyorum.",
        },
        {
            date: "24/05/2023",
            title: "İlk İş Deneyimi",
            description: "Malatya Teknokent da bulunan Ayssoft Bilgi Teknolojileri şirketinde çalışmaya başladım. Burada Frontend Developer olarak görev yapıyorum.React.js ile web uygulamaları geliştiriyorum."
        }
    ]

    return (
        <div className="flex justify-center mt-16" id="timeline">
            <div className="w-1/3">
                <p className="text-lg font-medium mb-8 tracking-wide text-stone-600">Yol Haritam <span className="text-2xl">&#128640;</span></p>
                <div className="border-l-2 pl-8 border-stone-500 relative">
                    {
                        timeLine.map((time, i) => (
                            <div key={i} className="flex items-center mb-8">
                                <span className="absolute w-4 h-4 rounded-full bg-white border-2 border-stone-600 -left-2"></span>
                                <div className="ml-4 bg-white px-8 py-4 w-full rounded border border-stone-400">
                                    <p className="text-xs font-light text-stone-700 mb-1">{time.date}</p>
                                    <p className="text-base font-medium text-stone-700 mb-2">{time.title}</p>
                                    <p className="text-sm text-stone-600">{time.description}</p>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>
        </div>
    )
}