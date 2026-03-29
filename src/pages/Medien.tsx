import { Database, ExternalLink, ShieldAlert, Search } from "lucide-react";

const topMediaSites = [
  { name: "ARD Tagesschau", url: "https://www.tagesschau.de", category: "Öffentlich-Rechtlich" },
  { name: "ZDFheute", url: "https://www.zdf.de/nachrichten", category: "Öffentlich-Rechtlich" },
  { name: "Der Spiegel", url: "https://www.spiegel.de", category: "Überregional" },
  { name: "Süddeutsche Zeitung", url: "https://www.sueddeutsche.de", category: "Überregional" },
  { name: "Frankfurter Allgemeine", url: "https://www.faz.net", category: "Überregional" },
  { name: "Zeit Online", url: "https://www.zeit.de", category: "Überregional" },
  { name: "Welt", url: "https://www.welt.de", category: "Überregional" },
  { name: "Stern", url: "https://www.stern.de", category: "Magazin" },
  { name: "Focus Online", url: "https://www.focus.de", category: "Magazin" },
  { name: "Handelsblatt", url: "https://www.handelsblatt.com", category: "Wirtschaft" },
  { name: "n-tv", url: "https://www.n-tv.de", category: "Nachrichtensender" },
  { name: "RTL News", url: "https://www.rtl.de/news", category: "Privatsender" },
  { name: "Bild", url: "https://www.bild.de", category: "Boulevard" },
  { name: "t-online", url: "https://www.t-online.de", category: "Portal" },
  { name: "Deutschlandfunk", url: "https://www.deutschlandfunk.de", category: "Öffentlich-Rechtlich" },
  { name: "NDR", url: "https://www.ndr.de", category: "Öffentlich-Rechtlich" },
  { name: "WDR", url: "https://www.wdr.de", category: "Öffentlich-Rechtlich" },
  { name: "BR24", url: "https://www.br.de/nachrichten", category: "Öffentlich-Rechtlich" },
  { name: "SWR", url: "https://www.swr.de", category: "Öffentlich-Rechtlich" },
  { name: "MDR", url: "https://www.mdr.de", category: "Öffentlich-Rechtlich" },
  { name: "RBB24", url: "https://www.rbb24.de", category: "Öffentlich-Rechtlich" },
  { name: "Hessenschau", url: "https://www.hessenschau.de", category: "Öffentlich-Rechtlich" },
  { name: "SR", url: "https://www.sr.de", category: "Öffentlich-Rechtlich" },
  { name: "Radio Bremen", url: "https://www.butenunbinnen.de", category: "Öffentlich-Rechtlich" },
  { name: "Phoenix", url: "https://www.phoenix.de", category: "Öffentlich-Rechtlich" },
  { name: "Arte", url: "https://www.arte.tv", category: "Öffentlich-Rechtlich" },
  { name: "3sat", url: "https://www.3sat.de", category: "Öffentlich-Rechtlich" },
  { name: "Kicker", url: "https://www.kicker.de", category: "Sport" },
  { name: "Sport1", url: "https://www.sport1.de", category: "Sport" },
  { name: "Heise Online", url: "https://www.heise.de", category: "Technologie" },
  { name: "Golem", url: "https://www.golem.de", category: "Technologie" },
  { name: "Netzpolitik.org", url: "https://netzpolitik.org", category: "Digitalpolitik" },
  { name: "Correctiv", url: "https://correctiv.org", category: "Investigativ" },
  { name: "taz", url: "https://taz.de", category: "Überregional" },
  { name: "Der Freitag", url: "https://www.freitag.de", category: "Wochenzeitung" },
  { name: "Cicero", url: "https://www.cicero.de", category: "Magazin" },
  { name: "Manager Magazin", url: "https://www.manager-magazin.de", category: "Wirtschaft" },
  { name: "WirtschaftsWoche", url: "https://www.wiwo.de", category: "Wirtschaft" },
  { name: "RND", url: "https://www.rnd.de", category: "Netzwerk" },
  { name: "Funke Mediengruppe", url: "https://www.funkemedien.de", category: "Regionalgruppe" },
  { name: "Ippen Digital", url: "https://www.ippen.media", category: "Regionalgruppe" },
  { name: "Rheinische Post", url: "https://rp-online.de", category: "Regional" },
  { name: "Tagesspiegel", url: "https://www.tagesspiegel.de", category: "Regional" },
  { name: "Berliner Morgenpost", url: "https://www.morgenpost.de", category: "Regional" },
  { name: "Stuttgarter Zeitung", url: "https://www.stuttgarter-zeitung.de", category: "Regional" },
  { name: "Kölner Stadt-Anzeiger", url: "https://www.ksta.de", category: "Regional" },
  { name: "Hamburger Abendblatt", url: "https://www.abendblatt.de", category: "Regional" },
  { name: "Münchner Merkur", url: "https://www.merkur.de", category: "Regional" },
  { name: "tz München", url: "https://www.tz.de", category: "Regional" },
  { name: "B.Z. Berlin", url: "https://www.bz-berlin.de", category: "Regional" }
];

export default function Medien() {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            <Search className="h-4 w-4" />
            <span>Medien-Verzeichnis</span>
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Top 50 Medienplattformen Deutschland</h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            Dieses Verzeichnis dient als Referenz für unsere tägliche Analysearbeit. Wir überwachen diese Plattformen auf journalistische Standards, Faktentreue und die Abwesenheit von koordinierten Desinformationskampagnen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {topMediaSites.map((site, idx) => (
            <a 
              key={idx}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-slate-400 text-xs font-mono">#{idx + 1}</span>
                <ExternalLink className="h-4 w-4 text-slate-300 group-hover:text-blue-500 transition-colors" />
              </div>
              <div>
                <h3 className="text-slate-900 font-bold group-hover:text-blue-600 transition-colors">{site.name}</h3>
                <p className="text-slate-400 text-xs mt-1 uppercase tracking-wider">{site.category}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 border border-blue-200 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
          <div className="bg-blue-600 p-4 rounded-2xl text-white">
            <ShieldAlert className="h-10 w-10" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-blue-900 mb-2">Wichtiger Hinweis zur Analyse</h4>
            <p className="text-blue-800 leading-relaxed">
              Die Aufnahme in dieses Verzeichnis bedeutet nicht, dass wir jeden Inhalt dieser Plattformen ungeprüft übernehmen. Vielmehr dienen diese Medien als Benchmark für etablierte journalistische Prozesse. Unsere KI-gestützten Systeme analysieren Abweichungen von diesen Standards in Echtzeit, um potenzielle Fake-News-Kampagnen frühzeitig zu erkennen.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
