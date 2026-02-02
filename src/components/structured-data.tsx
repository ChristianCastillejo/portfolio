export function StructuredData() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Christian Castillejo",
        "url": "https://christiancastillejo.com",
        "jobTitle": "Design Engineer",
        "email": "christiancastillejo@proton.me",
        "image": "https://christiancastillejo.com/images/profile.jpg",
        "address": {
            "@type": "PostalAddress",
            "addressRegion": "Europe/CET"
        },
        "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": "University of Seville",
            "sameAs": "https://www.us.es/"
        },
        "sameAs": [
            "https://www.linkedin.com/in/christiancastillejo",
            "https://github.com/christiancastillejo"
        ],
        "knowsAbout": [
            "Design Engineer",
            "Design Engineering",
            "Next.js",
            "Shopify Headless",
            "Design Systems",
            "Figma",
            "TypeScript",
            "AI Workflows"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}