import React from "react";
import { Helmet } from "react-helmet";
import OgImage from "assets/images/og-image.jpg"

type SeoProps = {
  title?: string;
  description?: string;
  canonical?: string;
};

const Seo: React.FC<SeoProps> = ({title, description, canonical}) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={OgImage} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={OgImage} />
      
    </Helmet>
  );
};

export default Seo;
