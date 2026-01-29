import type { Metadata } from "next";
import { DM_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import ContactCard  from "@/components/ContactCard";
import Menu from "@/components/Menu";
import StructuredData from "@/components/StructuredData";

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-dm-sans",
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-montserrat",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://groat.nz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Andrew Watkins - Software Engineer | Groat.NZ",
    template: "%s | Groat.NZ",
  },
  description: "Software Engineer with 40+ years of experience in full-stack development, AI/ML integration, team leadership, and product management. Specializing in modern web technologies, serverless architecture, and production LLM systems.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "AI/ML",
    "LLM Integration",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "AWS",
    "Serverless Architecture",
    "Team Leadership",
    "Product Management",
    "New Zealand",
    "Auckland",
  ],
  authors: [{ name: "Andrew Watkins", url: siteUrl }],
  creator: "Andrew Watkins",
  publisher: "Groat.NZ",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: siteUrl,
    siteName: "Groat.NZ",
    title: "Andrew Watkins - Software Engineer",
    description: "Software Engineer with 40+ years of experience in full-stack development, AI/ML integration, and team leadership.",
    images: [
      {
        url: "/andrew-2025.jpg",
        width: 1200,
        height: 630,
        alt: "Andrew Watkins - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrew Watkins - Software Engineer",
    description: "Software Engineer with 40+ years of experience in full-stack development, AI/ML integration, and team leadership.",
    images: ["/andrew-2025.jpg"],
    creator: "@avowkind",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Technology",
};

const andrew = {
  name: "Andrew Watkins - Senior Software Engineer",
  email: "andrew@groat.nz",
  phone: "+64 27 7031007",
  linkedin: "andrewwatkinsnz",
  github: "avowkind",
  image: "/andrew-2025.jpg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${montserrat.variable} ${dmSans.className}`}>
        <StructuredData
          name={andrew.name}
          email={andrew.email}
          phone={andrew.phone}
          linkedin={andrew.linkedin}
          github={andrew.github}
          url={siteUrl}
          imagePath={andrew.image}
        />
        <nav className="md:sticky top-0 z-50 nav-header" aria-label="Main navigation" role="navigation">
          <div className="max-w-5xl mx-auto px-4 md:px-8 nav-header-content">
            <div className="flex items-start justify-between w-full">
              <ContactCard {...andrew} />
              <img 
                src="/groat.svg" 
                width={96} 
                height={96} 
                alt="Groat Logo" 
                className="hidden md:block w-24 h-24 rounded mt-4"
              />
            </div>
            <Menu/>
          </div>
        </nav>
        <main className="flex min-h-screen flex-col justify-between max-w-5xl mx-auto px-4 md:px-8 py-8" style={{ backgroundColor: 'rgb(255, 255, 240)' }} role="main">
          {children}
        </main>
      </body>
    </html>
  );
}
