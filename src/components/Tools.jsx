export default function Tools() {
    const frontendTool = ["HTML/CSS", "Javascript", "Boostrap", "Tailwind", "React", "Vue", "SASS", "Figma"]
    const backendTool = ["Python", "Flask", "Node.js", "Express.js", "SQLite", "MongoDB", "PostgreSQL", "REST API", "Git/Github",];
    
    return (
        <div className="flex justify-center flex-col items-center mt-16">
            <div className="w-1/3">
                <p className="text-lg font-medium mb-4 tracking-wide text-stone-700">Kullandığım Araçlar <span className="text-2xl">&#129520;</span></p>
                <div>
                    <p className="font-medium mb-2 underline tracking-wide text-stone-600">Frontend</p>
                    <div>
                        {
                            frontendTool.map((tool, i) => <span key={i} className="inline-block text-stone-800 border border-stone-400 rounded px-4 py-1 text-sm mr-4 mb-4 tracking-wide ">{tool}</span>)
                        }
                    </div>
                </div>
            </div>
            <div className="w-1/3 mt-8">
                <div>
                    <p className="font-medium mb-2 underline tracking-wide text-stone-600">Backend</p>
                    <div>
                        {
                            backendTool.map((tool, i) => <span key={i} className="inline-block text-stone-800 border border-stone-400 rounded px-4 py-1 text-sm mr-4 mb-4 tracking-wide">{tool}</span>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}