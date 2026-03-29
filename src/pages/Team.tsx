import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Elena Rostova",
    role: "Direktorin & Leitende Forscherin",
    bio: "Promovierte Kommunikationswissenschaftlerin mit Fokus auf algorithmische Manipulation und Informationskriege. Zuvor tätig in der OSINT-Analyse für internationale NGOs.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    socials: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "Marcus Weber, M.Sc.",
    role: "Leiter KI-Forensik",
    bio: "Spezialist für Machine Learning und Computer Vision. Entwickelt unsere proprietären Detektionsmodelle zur Erkennung von Deepfakes und synthetischen Texten.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop",
    socials: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "Sarah Lindner",
    role: "Investigativjournalistin",
    bio: "Ausgezeichnete Journalistin mit Schwerpunkt auf digitale Netzwerke, Finanzierungsstrukturen von Desinformationskampagnen und extremistische Radikalisierung.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    socials: { twitter: "#", mail: "#" }
  },
  {
    name: "David Chen",
    role: "Datenanalyst & OSINT-Spezialist",
    bio: "Experte für Netzwerkanalyse und Data Mining. Visualisiert komplexe Verbreitungswege von Fake-News über verschiedene Social-Media-Plattformen hinweg.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    socials: { linkedin: "#", github: "#" }
  }
];

export default function Team() {
  return (
    <div className="bg-slate-50 py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Unser Team</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Ein interdisziplinäres Team aus Datenwissenschaftlern, Journalisten und Forensikern, vereint im Kampf gegen digitale Desinformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300 group">
              <div className="aspect-[4/5] overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium text-sm mb-4">{member.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>
                <div className="flex items-center gap-4 text-slate-400">
                  {member.socials.twitter && (
                    <a href={member.socials.twitter} className="hover:text-blue-400 transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                  )}
                  {member.socials.linkedin && (
                    <a href={member.socials.linkedin} className="hover:text-blue-700 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {member.socials.github && (
                    <a href={member.socials.github} className="hover:text-slate-900 transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {member.socials.mail && (
                    <a href={member.socials.mail} className="hover:text-red-500 transition-colors">
                      <Mail className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Us CTA */}
        <div className="mt-24 bg-blue-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Unterstützen Sie unsere Mission</h2>
            <p className="text-blue-100 mb-8 text-lg">
              Wir sind stets auf der Suche nach talentierten OSINT-Analysten, Entwicklern und Journalisten, die sich für die Integrität unserer Informationslandschaft einsetzen möchten.
            </p>
            <a href="mailto:karriere@imra-institut.de" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white hover:bg-blue-50 transition-colors">
              Initiativbewerbung senden
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
