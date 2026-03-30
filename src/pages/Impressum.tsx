export default function Impressum() {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-10 rounded-2xl shadow-sm border border-slate-200">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Impressum</h1>
        
        <div className="space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="font-bold">Toni Cubano</p>
            <p>
              Berliner Ring 23<br />
              31226 Peine<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Kontakt</h2>
            <p>
              Telefon: +49 (0) 5172 666-333<br />
              Telefax: +49 (0) 5172 666-999<br />
              E-Mail: kontakt@imra-institut.de<br />
              Web: www.imra-institut.de
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Registereintrag</h2>
            <p>
              Eintragung im Vereinsregister.<br />
              Registergericht: Amtsgericht Peine<br />
              Registernummer: VR 66693 B
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE 366.666.933
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              Toni Cubano<br />
              Berliner Ring 23<br />
              31226 Peine
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Aufsichtsbehörde</h2>
            <p>
              Landesbeauftragte für Datenschutz und Informationsfreiheit Berlin<br />
              Friedrichstraße 219<br />
              10969 Berlin
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>.<br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            <p className="mt-4">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
