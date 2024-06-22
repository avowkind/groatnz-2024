import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ContactCard  from "@/components/ContactCard";
import Menu from "@/components/Menu";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Groat.NZ",
  description: "The website for Andrew Watkins and Groat.NZ",
};

const andrew = {
  name: "Andrew Watkins - Groat.NZ",
  email: "andrew@groat.nz",
  phone: "+64 27 7031007",
  linkedin: "andrewwatkinsnz",
  github: "avowkind",
  image: "/andrew-watkins-thumb.jpg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <ContactCard {...andrew} />
          <Menu/>
        </nav>
        <main className="flex min-h-screen m-12 flex-col justify-between max-w-4xl">
          {children}
        </main>
      </body>
    </html>
  );
}
