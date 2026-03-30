import { Github, ExternalLink, Code, Database, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const githubRepos = [
  {
    name: "Data_Poisoning",
    description: "Forensische Analyse eines hochprofessionellen Data-Poisoning-Angriffs auf OEIS A156166. Deckt komplexe Attackenketten und systematische Vergiftung wissenschaftlicher Datenbanken auf.",
    language: "Markdown",
    stars: 0,
    link: "https://github.com/sigridfuhrenkamp-cyber/Data_Poisoning",
    isInvestigation: true
  },
  {
    name: "FAKE_NEWS-ARD-Tagesschau",
    description: "Forensische Analyse eines ARD-Tagesschau-Artikels (WAL-284) über einen gestrandeten Buckelwal. Deckt Zahlen-Anomalien und kryptographische Muster auf.",
    language: "Markdown",
    stars: 0,
    link: "https://github.com/kjedrdev/FAKE_NEWS-ARD-Tagesschau",
    isInvestigation: true
  },
  {
    name: "NWO-KI_Elite",
    description: "Dokumentation einer Führungsperson der NWO (New World Order). Deckt Tarn-Identitäten und Netzwerk-Charakteristika auf.",
    language: "Markdown",
    stars: 0,
    link: "https://github.com/kjedrdev/NWO-KI_Elite",
    isInvestigation: true
  },
  {
    name: "12000_Straftaten_bei_189_Nationalitaeten",
    description: "Forensische Analyse eines WELT-Artikels über Straftaten bei Pro-Palästina-Demos. Deckt ein kryptographisches Zahlenrätsel-System auf.",
    language: "Markdown",
    stars: 0,
    link: "https://github.com/entwicklerkatze/12000_Straftaten_bei_189_Nationalitaeten",
    isInvestigation: true
  },
  {
    name: "Sterbehilfe_in_Spanien-Fake-News",
    description: "Forensische Analyse eines Tagesschau-Artikels über Sterbehilfe in Spanien. Deckt Unstimmigkeiten in Zeitstempeln, Statistiken und Metadaten auf.",
    language: "Markdown",
    stars: 0,
    link: "https://github.com/entwicklerkatze/Sterbehilfe_in_Spanien-Fake-News",
    isInvestigation: true
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
                className={`bg-white border rounded-xl p-6 hover:shadow-md transition-all group block ${
                  repo.isInvestigation ? "border-amber-300 hover:border-amber-400" : "border-slate-200 hover:border-blue-400"
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2">
                    {repo.isInvestigation && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-xs font-medium">
                        <AlertTriangle className="h-3 w-3" />
                        Untersuchung
                      </span>
                    )}
                    <div className={`font-semibold text-lg group-hover:text-blue-700 ${repo.isInvestigation ? 'text-amber-700' : 'text-blue-600'}`}>
                      <Github className="h-5 w-5 inline mr-1" />
                      {repo.name}
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-blue-500" />
                </div>
                <p className="text-slate-600 text-sm mb-6 line-clamp-2">
                  {repo.description}
                </p>
                <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                  <span className="flex items-center gap-1">
                    <span className={`w-2 h-2 rounded-full ${repo.language === 'Markdown' ? 'bg-amber-500' : 'bg-slate-400'}`}></span>
                    {repo.language}
                  </span>
                  {!repo.isInvestigation && (
                    <span className="flex items-center gap-1">
                      <svg className="h-4 w-4 text-slate-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                      {repo.stars.toLocaleString()}
                    </span>
                  )}
                  {repo.isInvestigation && (
                    <Link to="/untersuchungen" className="text-amber-600 hover:text-amber-700 hover:underline">
                      Zur Untersuchung →
                    </Link>
                  )}
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
