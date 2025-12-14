import { Helmet } from "react-helmet-async";

interface SEOProps {
    title: string;
    description: string;
    canonicalUrl?: string;
    type?: string;
    noIndex?: boolean;
}

export function SEO({
    title,
    description,
    canonicalUrl = "https://sydneydrivewayrepair.com",
    type = "website",
    noIndex = false
}: SEOProps) {
    const siteTitle = "Woollahra Driveway Repairs";
    // If title doesn't strictly include the brand, we might want to append it, 
    // but for now we'll take the title as is or let the pages control it.

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
        </Helmet>
    );
}
