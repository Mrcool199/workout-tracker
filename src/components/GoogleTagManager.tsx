import React from "react";
import { Helmet } from "react-helmet";

const GoogleTagManager = () => (
  <>
    {/* Google Tag Manager - Paste this code as high in the <head> of the page as possible */}
    <Helmet>
      <script>
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-T3JXCDPT');
        `}
      </script>
    </Helmet>
    {/* End Google Tag Manager */}

    {/* Google Tag Manager (noscript) - Paste this code immediately after the opening <body> tag */}
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-T3JXCDPT"
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      ></iframe>
    </noscript>
    {/* End Google Tag Manager (noscript) */}
  </>
);

export default GoogleTagManager;
