import { Outlet, Link, useLocation } from "react-router-dom";
import { ShieldCheck, Menu, X, Github } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Startseite", path: "/" },
    { name: "Team", path: "/team" },
    { name: "Forschungs-Repo", path: "/repository" },
    { name: "Untersuchungen", path: "/untersuchungen" },
    { name: "Medien-Verzeichnis", path: "/medien" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      {/* Navbar */}
      <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-3">
                <ShieldCheck className="h-8 w-8 text-blue-400" />
                <div className="flex flex-col">
                  <span className="font-bold text-xl leading-tight tracking-tight">IMRA</span>
                  <span className="text-xs text-slate-400 uppercase tracking-widest">Institut für Medienrecherche</span>
                </div>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-blue-400",
                    location.pathname === link.path ? "text-blue-400" : "text-slate-300"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300 hover:text-white focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium",
                    location.pathname === link.path
                      ? "bg-slate-900 text-blue-400"
                      : "text-slate-300 hover:bg-slate-700 hover:text-white"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="h-6 w-6 text-blue-400" />
                <span className="font-bold text-lg text-white tracking-tight">IMRA</span>
              </div>
              <p className="text-sm leading-relaxed max-w-xs">
                Unabhängiges Institut zur Erkennung von Fake-News, Fake-Stories und KI-gestützter Desinformation in digitalen Medien.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Rechtliches</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/impressum" className="hover:text-white transition-colors">Impressum</Link>
                </li>
                <li>
                  <Link to="/datenschutz" className="hover:text-white transition-colors">Datenschutz (GDPR)</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Open Source</h3>
              <p className="text-sm mb-4">
                Unsere Analyse-Tools und Datensätze sind öffentlich zugänglich.
              </p>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
                GitHub Repository
              </a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 text-sm text-center">
            &copy; {new Date().getFullYear()} Institut für Medienrecherche und -analyse. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    </div>
  );
}
