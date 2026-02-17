import { Helmet } from "react-helmet-async";
import { LocationData } from "../data/locations";

interface SEOProps {
    title: string;
    description: string;
    canonicalUrl?: string;
    type?: string;
    noIndex?: boolean;
    location?: LocationData;
}

export function SEO({
    title,
    description,
    canonicalUrl = "https://sydneydrivewayrepair.com",
    type = "website",
    noIndex = false,
    location
}: SEOProps) {
    const siteTitle = "Sydney Driveway Repair";

    const locationSchema = location ? {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `Sydney Driveway Repair – ${location.name}`,
        "description": `Emergency driveway repair services in ${location.name} and surrounding suburbs. 24/7 rapid response for dangerous cracks, collapses and trip hazards.`,
        "telephone": "+61432149176",
        "url": `https://sydneydrivewayrepair.com/${location.slug}`,
        "image": "https://sydneydrivewayrepair.com/hero-image.webp",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": location.name,
            "addressRegion": "NSW",
            ...(location.postalCode && { "postalCode": location.postalCode }),
            "addressCountry": "AU"
        },
        "areaServed": location.suburbs.map(suburb => ({
            "@type": "City",
            "name": suburb
        }))
    } : null;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonicalUrl} />
            {noIndex && <meta name="robots" content="noindex, nofollow" />}

            {/* Open Graph */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:site_name" content={siteTitle} />

            {/* Twitter Cards */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />

            {locationSchema && (
                <script type="application/ld+json">{JSON.stringify(locationSchema)}</script>
            )}
        </Helmet>
    );
}
