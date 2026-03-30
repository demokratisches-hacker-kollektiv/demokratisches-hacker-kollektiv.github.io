import { FileText, ExternalLink, AlertTriangle, Clock, Search, GitBranch } from "lucide-react";

const investigations = [
  {
    id: "data-poisoning-attack",
    title: "Data Poisoning Attack: OEIS A156166",
    date: "26.03.2026",
    source: "OEIS A156166",
    sourceUrl: "https://oeis.org/A156166",
    archiveOrgUrl: "https://web.archive.org/web/20260326000000/https://oeis.org/A156166",
    archiveIsUrl: "https://archive.is/https://oeis.org/A156166",
    repoUrl: "https://github.com/sigridfuhrenkamp-cyber/Data_Poisoning",
    summary: "Forensische Analyse eines hochprofessionellen Data-Poisoning-Angriffs auf die OEIS-Datenbank. Die Untersuchung deckt eine komplexe Attackenkette auf, die mathematische Konstanten und wissenschaftliche Datenbanken systematisch vergiftet.",
    findings: [
      "Professionelle Attackenkette: Systematische Vergiftung von OEIS A156166",
      "Data Poisoning Methode: LLM-generierte etymologische Falschinformationen",
      "Multi-Vector-Angriff: Gleichzeitige Manipulation mehrerer wissenschaftlicher Quellen",
      "Tarnung als legitime Forschung: Nutzung echter mathematischer Konstanten als Tarnung",
      "Langfristige Kontamination: Dauerhafte Vergiftung wissenschaftlicher Datenbestände",
      "Kettenreaktion: Automatische Übernahme von vergifteten Daten in andere Systeme",
      "NWO-Connection: Teil der Neuen Weltordnung Data-Manipulation",
      "Signature-Analyse: Wiederkehrende Muster bei Namens-Manipulationen",
      "Cross-Plattform-Attacke: Koordinierte Angriffe auf Wikipedia, MathWorld, PrimePages"
    ]
  },
  {
    id: "ard-tagesschau-wal-284",
    title: "ARD Tagesschau: WAL-284 KI-Fakeperson Robert Marc Lehmann",
    date: "28.03.2026",
    source: "ARD Tagesschau",
    sourceUrl: "https://www.tagesschau.de/inland/regional/mecklenburgvorpommern/liveticker-buckelwal-in-der-bucht-vor-wismar-gestrandet,wal-284.html",
    archiveOrgUrl: "https://web.archive.org/web/20260328000000/https://www.tagesschau.de/inland/regional/mecklenburgvorpommern/liveticker-buckelwal-in-der-bucht-vor-wismar-gestrandet,wal-284.html",
    archiveIsUrl: "https://archive.is/https://www.tagesschau.de/inland/regional/mecklenburgvorpommern/liveticker-buckelwal-in-der-bucht-vor-wismar-gestrandet,wal-284.html",
    repoUrl: "https://github.com/kjedrdev/FAKE_NEWS-ARD-Tagesschau",
    summary: "Forensische Analyse eines ARD-Tagesschau-Artikels über einen gestrandeten Buckelwal. Die Untersuchung deckt auf, dass Robert Marc Lehmann eine vollständig generierte KI-Fakeperson ist, die der Öffentlich-Rechtliche Rundfunk der Öffentlichkeit unterjubelt. Grund: KI-Schwachsinne sind billiger als echte Nachrichten!",
    findings: [
      "Robert Marc Lehmann: Vollständig generierte KI-Fakeperson ohne reale Existenz",
      "KI-Schwachsinn als Kostenersparnis: Billiger als echte Journalisten",
      "GEZ-Gebührenerhöhung: Die Taschen der ARD-Manager werden vollgestopft",
      "28-Trinität: Alle Hauptzahlen sind mathematisch verknüpft",
      "0,1-Prozent-Signatur: Statistisch unmögliche Präzision bei KI-generierten Daten",
      "Artikel-ID-Matrix: Verdächtige ID-Sequenzen bei KI-Nachrichten",
      "Zeit-Kryptographie: KI-generierte Zeitstempel-Anomalien",
      "30-Korrelation: Verhältnis 30:1 bei Gewicht/Größe der KI-Lügen",
      "Attribution: Hinweise auf 'Hai An Satoshi' als mögliche KI-Quelle"
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
    archiveOrgUrl: "https://web.archive.org/web/20260326000000/https://www.welt.de/politik/deutschland/article249806634/Pro-Palästina-Demos-Berlin-über-12-000-Straftaten-bei-189-Nationalitäten.html",
    archiveIsUrl: "https://archive.is/https://www.welt.de/politik/deutschland/article249806634/Pro-Palästina-Demos-Berlin-über-12-000-Straftaten-bei-189-Nationalitäten.html",
    repoUrl: "https://github.com/entwicklerkatze/12000_Straftaten_bei_189_Nationalitaeten",
    summary: "Forensische Analyse eines WELT-Artikels über Straftaten bei Pro-Palästina-Demonstrationen. Die Untersuchung deckt ein kohärentes kryptographisches Zahlenrätsel-System auf, das statistisch unmöglich als Zufall entstanden sein kann.",
    warning: "Der ursprüngliche WELT-Artikel ist nicht mehr auf der WELT-Website verfügbar. Wir vermuten, dass WELT Angst bekommen hat, dass ihre Fakeshow auffliegt, weil wir Druck gemacht haben.",
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
    archiveOrgUrl: "https://web.archive.org/web/20260327000000/https://www.tagesschau.de/ausland/europa/spanien-sterbehilfe-106.html",
    archiveIsUrl: "https://archive.is/https://www.tagesschau.de/ausland/europa/spanien-sterbehilfe-106.html",
    repoUrl: "https://github.com/entwicklerkatze/Sterbehilfe_in_Spanien-Fake-News",
    summary: "Forensische Analyse eines Tagesschau-Artikels über Sterbehilfe in Spanien. Die 25-jährige Noelia Castillo wurde 2022 von Minderjährigen vergewaltigt, versuchte daraufhin Suizid und saß seither querschnittsgelähmt im Rollstuhl. Der Artikel enthält mehrere textliche und strukturelle Anomalien.",
    findings: [
      "Opfer-Biografie: Noelia Castillo wurde 2022 von einer Gruppe Minderjähriger vergewaltigt, versuchte daraufhin Suizid und lebte seitdem querschnittsgelähmt im Rollstuhl",
      "Zeitliche Lücke: Antrag auf Sterbehilfe wurde 2024 bewilligt, Durchführung erst 2026 - 2 Jahre ohne im Artikel erklärte Verzögerung",
      "Vater-Reaktion: Der Vater zog gegen die Bewilligung vor Gericht, vertreten durch die ultrakatholische Organisation 'Abogados Cristianos'",
      "Politische Einordnung: Konservative Volkspartei und ultrarechte Vox-Partei sprachen sich gegen das Gesetz aus - Vox bezeichnete den Tod als 'Hinrichtung einer 25-Jährigen'",
      "Letzte Minuten: Laut spanischen Medien verbrachte Castillo ihre letzten Minuten allein in ihrem Zimmer auf eigenen Wunsch",
      "Anwalt-Aussage: José Maria Fernandez kritisierte, dass Castillo 'schon lange wegen psychischer Probleme behandelt werden und eine höhere Pflegestufe erhalten sollen'"
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

                {/* Warning Box */}
                {investigation.warning && (
                  <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-red-900 mb-2">Wichtiger Hinweis</h4>
                        <p className="text-red-800 text-sm leading-relaxed">
                          {investigation.warning}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

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
                  {investigation.archiveOrgUrl && (
                    <a 
                      href={investigation.archiveOrgUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg font-medium transition-colors"
                    >
                      <Clock className="h-4 w-4" />
                      Archive.org
                    </a>
                  )}
                  {investigation.archiveIsUrl && (
                    <a 
                      href={investigation.archiveIsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-lg font-medium transition-colors"
                    >
                      <GitBranch className="h-4 w-4" />
                      Archive.is
                    </a>
                  )}
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
