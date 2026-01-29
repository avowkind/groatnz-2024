import React from "react";

type PersonData = {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  url: string;
};

const StructuredData: React.FC<PersonData> = ({ name, email, phone, linkedin, github, url }) => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: name,
    jobTitle: "Software Engineer",
    url: url,
    sameAs: [
      `https://github.com/${github}`,
      `https://www.linkedin.com/in/${linkedin}`,
    ],
    email: email,
    telephone: phone,
    address: {
      "@type": "PostalAddress",
      addressCountry: "NZ",
      addressLocality: "Auckland",
    },
    knowsAbout: [
      "Software Engineering",
      "Full Stack Development",
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
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Groat.NZ",
    url: url,
    author: {
      "@type": "Person",
      name: name,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Resume",
        item: `${url}/resume`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Technical Skills",
        item: `${url}/tech-skills`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Management Skills",
        item: `${url}/sfia-skills`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
};

export default StructuredData;
