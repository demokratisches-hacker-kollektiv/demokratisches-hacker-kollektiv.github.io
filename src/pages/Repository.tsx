import { Github, ExternalLink, Code, Database } from "lucide-react";
import { Link } from "react-router-dom";

const githubRepos = [
  {
    name: "imra-deepfake-detector",
    description: "Open-Source Modell zur Erkennung von KI-generierten Gesichtern in Videos und Bildern.",
    language: "Python",
    stars: 1240,
    link: "https://github.com/imra-institut/deepfake-detector"
  },
  {
    name: "disinfo-network-graph",
    description: "Tools zur Visualisierung und Analyse von Bot-Netzwerken auf X (Twitter) und Telegram.",
    language: "TypeScript",
    stars: 856,
    link: "https://github.com/imra-institut/disinfo-network-graph"
  },
  {
    name: "llm-hallucination-benchmark",
    description: "Datensatz und Evaluierungsskripte für Faktenüberprüfung in großen Sprachmodellen.",
    language: "Jupyter Notebook",
    stars: 532,
    link: "https://github.com/imra-institut/llm-hallucination-benchmark"
  },
  {
    name: "osint-scraper-toolkit",
    description: "Sammlung von Skripten zum sicheren und anonymen Sammeln von öffentlich zugänglichen Daten.",
    language: "Python",
    stars: 2105,
    link: "https://github.com/imra-institut/osint-scraper-toolkit"
  }
];

export default function Repository() {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Forschungs-Repository</h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            Transparenz ist unser oberstes Gebot. Hier finden Sie unsere Open-Source Tools, Datensätze und Analyse-Frameworks zur Bekämpfung von Desinformation.
          </p>
        </div>

        {/* GitHub Repositories */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <Code className="h-8 w-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-900">Open-Source Tools & Modelle</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {githubRepos.map((repo, idx) => (
              <a 
                key={idx} 
                href={repo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-md transition-all group block"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2 text-blue-600 font-semibold text-lg group-hover:text-blue-700">
                    <Github className="h-5 w-5" />
                    {repo.name}
                  </div>
                  <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-blue-500" />
                </div>
                <p className="text-slate-600 text-sm mb-6 line-clamp-2">
                  {repo.description}
                </p>
                <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                  <span className="flex items-center gap-1">
                    <span className={`w-2 h-2 rounded-full ${repo.language === 'Python' ? 'bg-blue-500' : repo.language === 'TypeScript' ? 'bg-blue-400' : 'bg-orange-400'}`}></span>
                    {repo.language}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="h-4 w-4 text-slate-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    {repo.stars.toLocaleString()}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Call to Action for Media Directory */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-500/20 p-4 rounded-2xl border border-blue-500/30">
                <Database className="h-10 w-10 text-blue-400" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">Besuchen Sie unser Medien-Verzeichnis</h2>
            <p className="text-slate-300 mb-8 text-lg leading-relaxed">
              Neben unseren technischen Tools pflegen wir ein umfassendes Verzeichnis der Top 50 deutschen Medienplattformen, die wir kontinuierlich auf Integrität und journalistische Standards prüfen.
            </p>
            <Link to="/medien" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-slate-900 bg-blue-400 hover:bg-blue-300 transition-all shadow-xl shadow-blue-500/20">
              Zum Medien-Verzeichnis
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
