import React from 'react';

const JsonLdSchema = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BusinessHub",
    "url": "https://businesshub.in",
    "logo": "https://businesshub.in/logo.png",
    "description": "India's most trusted platform for business registration, GST, MSME, trademark, and compliance services. 5000+ businesses registered with 4.9/5 rating.",
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400001",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-98765-43210",
      "contactType": "customer service",
      "email": "info@businessconsultancy.com",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://twitter.com/businesshub",
      "https://linkedin.com/company/businesshub",
      "https://instagram.com/businesshub"
    ]
  };

  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "itemReviewed": {
      "@type": "Organization",
      "name": "BusinessHub"
    },
    "ratingValue": "4.9",
    "bestRating": "5",
    "ratingCount": "5000",
    "reviewCount": "4850"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does the registration process take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Registration timelines vary by service type. Private Limited Company registration typically takes 7-10 business days, GST registration takes 3-7 days, and Trademark registration takes 1-2 days for application filing with 4-6 months for approval. We provide clear timeline estimates after intake."
        }
      },
      {
        "@type": "Question",
        "name": "What documents do I need?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Required documents vary by service. Common requirements include PAN card, Aadhaar card, passport-size photos, address proof, and business-specific documents. Our advisor will provide a complete checklist tailored to your specific registration type during the intake process."
        }
      },
      {
        "@type": "Question",
        "name": "Is my data secure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we take data security very seriously. All documents are submitted through our secure portal with encryption. We follow industry-standard security practices and never share your data with third parties without your consent."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide post-registration support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide comprehensive post-registration support including compliance roadmap, ongoing filing reminders, annual return assistance, and dedicated advisor access. Our goal is to keep your business in good standing."
        }
      },
      {
        "@type": "Question",
        "name": "How long does business registration take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Timelines vary by service and jurisdiction. We provide a clear estimate after intake. Most registrations complete within 7-15 business days."
        }
      },
      {
        "@type": "Question",
        "name": "Is this service available across India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our services are available across all states in India. Our 100% online process means you can register your business from anywhere."
        }
      },
      {
        "@type": "Question",
        "name": "What is your refund policy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer transparent pricing with clear scope. If we are unable to complete your registration due to reasons within our control, we provide a full refund. Terms and conditions apply."
        }
      },
      {
        "@type": "Question",
        "name": "Do you handle trademark disputes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We primarily handle trademark registration and filing. For disputes and litigation, we can connect you with our partner legal firms who specialize in intellectual property law."
        }
      }
    ]
  };

  const servicesSchema = [
    { name: "Private Limited Company Registration", description: "Register your private limited company with limited liability protection, easy funding access, and separate legal entity status. Starting at ₹6,999." },
    { name: "GST Registration", description: "Get GST registration for businesses meeting turnover thresholds. Applicable for qualifying businesses with expert guidance. Starting at ₹1,999." },
    { name: "Trademark Registration", description: "Protect your brand identity, logo, and name legally with trademark registration in India. Starting at ₹4,999." },
    { name: "MSME/Udyam Registration", description: "Register for MSME/Udyam to access government programs, subsidies, and eligibility benefits. Starting at ₹999." },
    { name: "Partnership Firm Registration", description: "Register your partnership firm for 2+ partners sharing profits and losses with formal legal structure. Starting at ₹5,999." },
    { name: "LLP Registration", description: "Register a Limited Liability Partnership combining partnership flexibility with limited liability protection. Starting at ₹7,999." },
    { name: "One Person Company Registration", description: "Register an OPC for single owners wanting limited liability protection and corporate structure. Starting at ₹5,499." },
    { name: "FSSAI License", description: "Get FSSAI license required for eligible food-related businesses in India. Starting at ₹2,499." },
    { name: "ISO Certification", description: "Obtain ISO certification for operational credibility and international quality standards. Starting at ₹12,999." },
  ].map(service => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.name,
    "provider": {
      "@type": "Organization",
      "name": "BusinessHub"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "description": service.description
  }));

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://businesshub.in/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://businesshub.in/#services"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {servicesSchema.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
};

export default JsonLdSchema;
