import { Helmet } from "react-helmet-async";

const BASE_URL = "https://www.soyawala.com";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;

/**
 * Reusable SEO component using react-helmet-async.
 *
 * @param {{
 *   title?: string,
 *   description?: string,
 *   keywords?: string,
 *   canonical?: string,
 *   ogImage?: string,
 *   ogType?: string,
 *   noIndex?: boolean,
 *   structuredData?: object
 * }} props
 */
export const SEO = ({
  title = "Soyawala | Fresh Soya-Based Dairy Products – Lactose Free & Organic",
  description = "Soyawala offers fresh, organic soya-based dairy products including soya milk, paneer, yogurt, cheese and ice cream. Sugar free, gluten free & lactose free. Home delivered in Kolkata.",
  keywords = "soya milk, soya paneer, lactose free milk, organic dairy, plant-based milk, soya cheese, soya yogurt, Kolkata dairy, Soyawala",
  canonical = BASE_URL,
  ogImage = DEFAULT_IMAGE,
  ogType = "website",
  noIndex = false,
  structuredData = null,
}) => {
  const fullTitle = title.includes("Soyawala") ? title : `${title} | Soyawala`;

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1"
        />
      )}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:site_name" content="Soyawala" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data (JSON-LD) */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};
