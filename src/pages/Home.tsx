import { ShieldCheck, Search, FileText, AlertTriangle, BrainCircuit, Activity, Database } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop"
            alt="Data Analysis Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-6 border border-blue-500/30">
              <Activity className="h-4 w-4" />
              <span>Unabhängige Medienanalyse</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Wahrheit im Zeitalter der <span className="text-blue-400">Desinformation</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
              Wir sind ein spezialisiertes Institut für Medienrecherche. Unsere Mission ist die Erkennung, Analyse und Aufklärung von Fake-News, Fake-Stories und KI-gestützter Manipulation in der digitalen Informationslandschaft.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/repository"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-slate-900 bg-blue-400 hover:bg-blue-300 transition-colors shadow-lg shadow-blue-500/30"
              >
                Zum Forschungs-Repository
              </Link>
              <Link
                to="/team"
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-600 text-base font-medium rounded-md text-white hover:bg-slate-800 transition-colors"
              >
                Unser Team kennenlernen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Focus Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Unsere Schwerpunkte</h2>
            <p className="text-slate-600 text-lg">
              Mit modernsten Analysemethoden und forensischer Recherche decken wir systematische Desinformationskampagnen auf.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Area 1 */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                <AlertTriangle className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Fake-News Erkennung</h3>
              <p className="text-slate-600 leading-relaxed">
                Systematische Überprüfung von Nachrichtenquellen und viralen Behauptungen. Wir analysieren Verbreitungsmuster und identifizieren koordinierte Inauthentizität.
              </p>
            </div>

            {/* Area 2 */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6 text-purple-600">
                <BrainCircuit className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">KI-Desinformation</h3>
              <p className="text-slate-600 leading-relaxed">
                Forensische Analyse von Deepfakes, KI-generierten Texten und synthetischen Medien. Wir entwickeln Gegenmaßnahmen gegen automatisierte Propaganda.
              </p>
            </div>

            {/* Area 3 */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 text-emerald-600">
                <Search className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Medienrecherche</h3>
              <p className="text-slate-600 leading-relaxed">
                Tiefgehende investigative Recherchen zu den Urhebern und Finanzierungsstrukturen hinter großen Fake-Story-Netzwerken im deutschsprachigen Raum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Media Directory Preview Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-16 border border-slate-200 shadow-sm flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
                <Database className="h-4 w-4" />
                <span>Medien-Verzeichnis</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Transparenz in der Medienlandschaft</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Wir pflegen ein kuratiertes Verzeichnis der Top 50 deutschen Nachrichtenportale. Dieses dient uns als Referenz für journalistische Standards und als Grundlage für unsere KI-gestützten Integritätsprüfungen.
              </p>
              <Link
                to="/medien"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-xl text-white bg-slate-900 hover:bg-slate-800 transition-all"
              >
                Zum Verzeichnis
              </Link>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              {[
                "ARD Tagesschau", "ZDFheute", "Der Spiegel", "SZ Online",
                "FAZ.NET", "Zeit Online", "Handelsblatt", "n-tv"
              ].map((site, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-100 p-4 rounded-xl text-slate-500 text-sm font-medium text-center">
                  {site}
                </div>
              ))}
              <div className="col-span-2 text-center text-slate-400 text-xs mt-2 italic">
                ... und 42 weitere verifizierte Quellen
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Unsere Philosophie</h2>
              <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                <p>
                  In einer Zeit, in der die Grenzen zwischen Fakt und Fiktion zunehmend verschwimmen, sehen wir es als unsere gesellschaftliche Pflicht, für informationelle Integrität einzustehen.
                </p>
                <p>
                  Wir glauben nicht an Zensur, sondern an <strong>Transparenz und Aufklärung</strong>. Unser Ansatz ist streng wissenschaftlich, politisch neutral und methodisch transparent. Jede unserer Analysen ist nachvollziehbar dokumentiert und Open-Source zugänglich.
                </p>
                <p>
                  Die rasante Entwicklung generativer KI-Modelle hat die Erstellung von Desinformation demokratisiert. Wir setzen dieser Entwicklung unsere eigene technologische und investigative Expertise entgegen.
                </p>
              </div>
              <div className="mt-8">
                <ul className="space-y-4">
                  {[
                    "Evidenzbasierte Methodik",
                    "Politische Unabhängigkeit",
                    "Open-Source Intelligence (OSINT)",
                    "Transparente Forschungsergebnisse"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <ShieldCheck className="h-5 w-5 text-blue-400 flex-shrink-0" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-3xl opacity-20 transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                alt="Data Analysis Dashboard"
                className="relative rounded-2xl shadow-2xl border border-slate-700 object-cover h-[500px] w-full"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
