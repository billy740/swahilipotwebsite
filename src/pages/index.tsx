import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

// Import your new homepage sections
import Hero from "@/components/landing/Hero";
import AboutSection from "@/components/landing/aboutsection";
import ProgramsSection from "@/components/landing/Programssection";
import EventsSection from "@/components/landing/EventsSection";
import PartnersSection from "@/components/landing/PartnersSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} min-h-screen p-8 pb-20 sm:p-20`}>
      {/* Hero Section */}
      <Hero />
      {/* About Swahilipot */}
      <AboutSection />

      {/* Programs Section */}
      <ProgramsSection />

      {/* Upcoming Events */}
      <EventsSection />

      {/* Partners Section */}
      <PartnersSection />


  

      {/* Footer */}
      <footer className="flex gap-6 flex-wrap items-center justify-center mt-10">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
