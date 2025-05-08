import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BootstrapClient from "./components/BootstrapClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Erika Hoertig - Italian Language Teacher",
  description: "Learn Italian with a native speaker through personalized online lessons",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
          <div className="container">
            <a className="navbar-brand fw-bold" href="/EHsite/" style={{ color: 'var(--italian-green)' }}>
              Erika Hoertig
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/EHsite/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/EHsite/about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/EHsite/experience">Experience</a>
                </li>
                <li className="nav-item">
                  <a className="btn btn-primary ms-2" href="/EHsite/schedule">Schedule</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <main className="pt-5">
          {children}
        </main>
        <BootstrapClient />
      </body>
    </html>
  );
}
