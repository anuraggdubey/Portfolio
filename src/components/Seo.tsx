import { Helmet } from "react-helmet-async";
import { siteConfig } from "../../seo.config.js";

type SeoProps = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

const absoluteUrl = (value = "/") => new URL(value, siteConfig.siteUrl).toString();

const Seo = ({
  title,
  description = siteConfig.defaultDescription,
  path = "/",
  image = siteConfig.image,
  noIndex = false
}: SeoProps) => {
  const resolvedTitle =
    title && title !== siteConfig.defaultTitle
      ? `${title} | ${siteConfig.siteName}`
      : siteConfig.defaultTitle;
  const canonicalUrl = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return (
    <Helmet>
      <html lang="en" />
      <title>{resolvedTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      <meta name="keywords" content={siteConfig.keywords.join(", ")} />
      <meta name="author" content={siteConfig.author} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={siteConfig.type} />
      <meta property="og:site_name" content={siteConfig.siteName} />
      <meta property="og:locale" content={siteConfig.locale} />
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};

export default Seo;
