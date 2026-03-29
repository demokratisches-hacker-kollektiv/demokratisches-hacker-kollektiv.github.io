export default function Datenschutz() {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-10 rounded-2xl shadow-sm border border-slate-200">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Datenschutzerklärung (GDPR)</h1>
        
        <div className="space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="font-medium text-slate-900 mt-4 mb-2">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="font-medium text-slate-900 mt-4 mb-2">Datenschutz</h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p className="mt-4">
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
            </p>
            <h3 className="font-medium text-slate-900 mt-4 mb-2">Hinweis zur verantwortlichen Stelle</h3>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="mt-2">
              Institut für Medienrecherche und -analyse (IMRA) e.V.<br />
              Musterstraße 123<br />
              10115 Berlin<br />
              E-Mail: datenschutz@imra-institut.de
            </p>
            <p className="mt-4 text-sm italic">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">3. Ihre Rechte als betroffene Person</h2>
            <p>
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen (Art. 15-21 DSGVO) jederzeit das Recht auf:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Auskunft:</strong> Erhalt einer Kopie Ihrer bei uns gespeicherten Daten.</li>
              <li><strong>Berichtigung:</strong> Korrektur unrichtiger oder unvollständiger Daten.</li>
              <li><strong>Löschung:</strong> Entfernung Ihrer Daten, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</li>
              <li><strong>Einschränkung der Verarbeitung:</strong> Begrenzung der Nutzung Ihrer Daten.</li>
              <li><strong>Datenübertragbarkeit:</strong> Erhalt Ihrer Daten in einem gängigen, maschinenlesbaren Format.</li>
              <li><strong>Widerspruch:</strong> Widerspruch gegen die Verarbeitung Ihrer Daten aus besonderen Gründen.</li>
            </ul>
            <p className="mt-6">
              Zudem haben Sie gemäß Art. 77 DSGVO das Recht, sich bei einer Aufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">4. Analyse-Tools und Tools von Drittanbietern</h2>
            <p>
              Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen. Die Analyse Ihres Surf-Verhaltens erfolgt in der Regel anonym; das Surf-Verhalten kann nicht zu Ihnen zurückverfolgt werden.
            </p>
            <p className="mt-4">
              Als Forschungsinstitut für Medienanalyse legen wir besonderen Wert auf Datensparsamkeit und nutzen ausschließlich datenschutzkonforme (DSGVO/GDPR), selbst gehostete Analyse-Tools ohne Weitergabe an Dritte.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">5. Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
