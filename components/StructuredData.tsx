import React from "react";

type PersonData = {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  url: string;
  imagePath?: string;
};

const StructuredData: React.FC<PersonData> = ({ name, email, phone, linkedin, github, url, imagePath }) => {
  const personId = `${url}#person`;
  const websiteId = `${url}#website`;
  const webPageId = `${url}#webpage`;

  const sameAs = [
    `https://github.com/${github}`,
    `https://www.linkedin.com/in/${linkedin}`,
  ];

  const knowsAbout = [
    "Software Engineering",
    "Full Stack Development",
    "Systems Architecture",
    "Serverless Architecture",
    "AWS",
    "Python",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "GraphQL",
    "AI",
    "Machine Learning",
    "LLM integration",
    "Prompt management",
    "Team leadership",
    "Product development",
  ];

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url,
        name: "Groat.NZ",
        inLanguage: "en-NZ",
        publisher: { "@id": personId },
      },
      {
        "@type": "WebPage",
        "@id": webPageId,
        url,
        name: "Andrew Watkins - Groat.NZ",
        isPartOf: { "@id": websiteId },
        about: { "@id": personId },
        inLanguage: "en-NZ",
      },
      {
        "@type": "Person",
        "@id": personId,
        name,
        url,
        image: imagePath ? `${url}${imagePath}` : undefined,
        jobTitle: "Senior Software Engineer",
        email,
        telephone: phone,
        address: {
          "@type": "PostalAddress",
          addressCountry: "NZ",
          addressLocality: "Auckland",
        },
        sameAs,
        knowsAbout,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: url },
          { "@type": "ListItem", position: 2, name: "Resume", item: `${url}/resume` },
          { "@type": "ListItem", position: 3, name: "Technical Skills", item: `${url}/tech-skills` },
          { "@type": "ListItem", position: 4, name: "Management Skills", item: `${url}/sfia-skills` },
        ],
      },
    ].filter(Boolean),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
    </>
  );
};

export default StructuredData;
