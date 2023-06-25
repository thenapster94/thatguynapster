import React from "react";

import { NextSeo } from "next-seo";
import Head from "next/head";

import { config } from "../configs/global_variables";

export default function Meta({ canonical }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="apple-touch-icon"
          href={`/apple-touch-icon.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`/favicon-32x32.ico`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`/favicon-16x16.ico`}
          key="icon16"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="128x128"
          href={`/favicon.ico`}
          key="favicon"
        />
      </Head>
      <NextSeo
        title={config.title}
        description={config.description}
        canonical={canonical}
        openGraph={{
          title: config.title,
          description: config.description,
          url: config.canonical,
          locale: config.locale,
          site_name: config.site_name,
        }}
      />
    </>
  );
}
