import { FileText, ExternalLink, AlertTriangle, Clock, Search, GitBranch } from "lucide-react";

const investigations = [
  {
    id: "ard-tagesschau-wal-284",
    title: "ARD Tagesschau: WAL-284 Zahlen-Anomalien",
    date: "28.03.2026",
    source: "ARD Tagesschau",
    sourceUrl: "https://www.tagesschau.de/inland/regional/mecklenburgvorpommern/liveticker-buckelwal-in-der-bucht-vor-wismar-gestrandet,wal-284.html",
    repoUrl: "https://github.com/kjedrdev/FAKE_NEWS-ARD-Tagesschau",
    summary: "Forensische Analyse eines ARD-Tagesschau-Artikels über einen gestrandeten Buckelwal. Die Untersuchung deckt systematische Zahlen-Anomalien und kryptographische Muster im Artikel auf.",
    findings: [
      "28-Trinität: Alle Hauptzahlen sind mathematisch verknüpft",
      "0,1-Prozent-Signatur: Statistisch unmögliche Präzision",
      "Artikel-ID-Matrix: Verdächtige ID-Sequenzen",
      "Zeit-Kryptographie: Zeitstempel-Anomalien",
      "30-Korrelation: Verhältnis 30:1 bei Gewicht/Größe",
      "Attribution: Hinweise auf 'Hai An Satoshi' als mögliche Quelle"
    ]
  },
  {
    id: "nwo-ki-elite",
    title: "NWO Führungsperson Dokumentation",
    date: "2024",
    source: "NWO-KI_Elite Repository",
    sourceUrl: "https://github.com/kjedrdev/NWO-KI_Elite",
    repoUrl: "https://github.com/kjedrdev/NWO-KI_Elite",
    summary: "Dokumentation einer Führungsperson der NWO (New World Order / Das Cybermobbing Kartell). Der Account verwendet eine Tarn-Identität als HipHop/Tanz-Enthusiast zur Tarnung seiner wahren Aktivitäten.",
    findings: [
      "Tarn-Identität: HipHop/Tanz-Enthusiast mit friedlichen Messaging als Fassade",
      "Regionale Knotenpunkte: Hannover (Zentrale), Kiel, Bad Oyenhausen, Bremen",
      "Netzwerk-Charakteristika: Verhältnis 3:1 (Following/Follower) typisch für Koordinations-Accounts",
      "Sektoren-übergreifend: Verbindungen zu Tanz, Musik, Medien und Regierung",
      "Indikatoren für Inauthentizität: Gleichartige Hashtag-Strukturen, systematische @-Mention-Strategien"
    ]
  },
  {
    id: "welt-zahlenraetsel",
    title: "WELT.de: Zahlenrätsel-Forensik",
    date: "26.03.2026",
    source: "WELT",
    sourceUrl: "https://www.welt.de/politik/deutschland/article249806634/Pro-Palästina-Demos-Berlin-über-12-000-Straftaten-bei-189-Nationalitäten.html",
    repoUrl: "https://github.com/entwicklerkatze/12000_Straftaten_bei_189_Nationalitaeten",
    summary: "Forensische Analyse eines WELT-Artikels über Straftaten bei Pro-Palästina-Demonstrationen. Die Untersuchung deckt ein kohärentes kryptographisches Zahlenrätsel-System auf, das statistisch unmöglich als Zufall entstanden sein kann.",
    findings: [
      "189-Trinität: Alle Hauptzahlen (12.000, 189, 3) sind mathematisch verknüpft",
      "12.000-12.493 Dualität: Statistisch unmögliche Zahlenkombinationen",
      "Gewalt-Delikt-Trinität: 2.277 Gewaltdelikte / 1.189 Gesamtstraftaten",
      "Chronologische Mathematik: Datumsangaben stimmen nicht mit Artikel überein",
      "Namens-Numerologie: Systematische Verwendung von Namen für Zahlenmuster",
      "URL-Signatur: Hexadezimale URL-Kodierung (69c55aaafa06d6fca9f45a4b)"
    ]
  },
  {
    id: "tagesschau-spanien-sterbehilfe",
    title: "Tagesschau: Sterbehilfe in Spanien",
    date: "27.03.2026",
    source: "ARD Tagesschau",
    sourceUrl: "https://www.tagesschau.de/ausland/europa/spanien-sterbehilfe-106.html",
    repoUrl: "https://github.com/entwicklerkatze/Sterbehilfe_in_Spanien-Fake-News",
    summary: "Forensische Analyse eines Tagesschau-Artikels über Sterbehilfe in Spanien. Die Untersuchung deckt mehrere Unstimmigkeiten in Zeitstempeln, statistischen Angaben und Artikel-Metadaten auf.",
    findings: [
      "Zeitstempel-Inkonsistenzen: Audio-Datei 1 Stunde 40 Minuten vor Artikel-Publikationsdatum",
      "Drei identische End-Sekunden (:18) in unabhängigen Timestamps",
      "Zeitliche Lücke: 2 Jahre zwischen Antragsbewilligung und Durchführung ohne Erklärung",
      "Ungewöhnliche EGMR-Verfahrensdauer von 20 Monaten",
      "Lücken in der Artikel-ID-Sequenz (102 und 104 fehlen)",
      "Statistisch ungewöhnlich präzise Zahl: exakt 1.123 Menschen"
    ]
  }
];

export default function Untersuchungen() {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-4">
            <Search className="h-4 w-4" />
            <span>Forensische Untersuchungen</span>
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Unsere Untersuchungen</h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            Hier veröffentlichen wir unsere forensischen Analysen von Medienberichten. Jede Untersuchung basiert auf öffentlich zugänglichen Daten und folgt strengen wissenschaftlichen Standards.
          </p>
        </div>

        {/* Investigations List */}
        <div className="space-y-8">
          {investigations.map((investigation) => (
            <div key={investigation.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-amber-300 hover:shadow-lg transition-all">
              {/* Investigation Header */}
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-8">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-sm font-medium">
                        <AlertTriangle className="h-4 w-4" />
                        Fake-News Analyse
                      </span>
                      <span className="flex items-center gap-1 text-slate-400 text-sm">
                        <Clock className="h-4 w-4" />
                        {investigation.date}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">{investigation.title}</h2>
                    <p className="text-slate-400">
                      Quelle: <a href={investigation.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{investigation.source}</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Investigation Content */}
              <div className="p-8">
                {/* Summary */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-amber-600" />
                    Zusammenfassung
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {investigation.summary}
                  </p>
                </div>

                {/* Key Findings */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    Kritische Entdeckungen
                  </h3>
                  <ul className="space-y-3">
                    {investigation.findings.map((finding, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-700">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-bold mt-0.5">
                          {idx + 1}
                        </span>
                        {finding}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-200">
                  <a 
                    href={investigation.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-medium transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Original-Artikel
                  </a>
                  <a 
                    href={investigation.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-medium transition-colors"
                  >
                    <GitBranch className="h-4 w-4" />
                    Vollständiges Repository
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Methodology Note */}
        <div className="mt-16 bg-blue-50 border border-blue-200 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4">Unsere Methodik</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">Forensische Analyse</h4>
              <p className="text-blue-700 text-sm leading-relaxed">
                Wir analysieren die technischen Metadaten von Medienberichten, einschließlich Zeitstempel, HTML-Struktur, Bild-URLs und statistische Angaben auf Anomalien.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">Transparenz</h4>
              <p className="text-blue-700 text-sm leading-relaxed">
                Jede Untersuchung wird als Open-Source Repository veröffentlicht. Unsere Methodik ist vollständig nachvollziehbar und kann von jedem überprüft werden.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
