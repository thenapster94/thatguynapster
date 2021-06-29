import React from 'react';

import { NextSeo } from 'next-seo';
import Head from 'next/head';

import { Config } from '../configs/global_variables';

export default function Meta({ canonical }) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" key="charset" />
                <meta name="viewport" content="width=device-width,initial-scale=1" key="viewport" />
                <link rel="apple-touch-icon" href={`/apple-touch-icon.png`} key="apple" />
                <link rel="icon" type="image/png" sizes="32x32" href={`/favicon-32x32.ico`} key="icon32" />
                <link rel="icon" type="image/png" sizes="16x16" href={`/favicon-16x16.ico`} key="icon16" />
                <link rel="icon" type="image/png" sizes="128x128" href={`/favicon.ico`} key="favicon" />


                <link href="css/preloader.min.css" rel="stylesheet" />
                <link href="css/circle.css" rel="stylesheet" />
                <link href="css/font-awesome.min.css" rel="stylesheet" />
                <link href="css/fm.revealator.jquery.min.css" rel="stylesheet" />
                <link href="css/style.css" rel="stylesheet" />
                <link rel="stylesheet" type="text/css" title="red" href="css/yellow-skin.css" />
                <link rel="stylesheet" type="text/css" href="css/custom.css" />

                <script src="js/modernizr.custom.js"></script>
            </Head>
            <NextSeo
                title={Config.title}
                description={Config.description}
                canonical={canonical || process.env.NEXT_PUBLIC_BASE_URL}
                openGraph={{
                    title: Config.title,
                    description: Config.description,
                    url: Config.canonical || process.env.NEXT_PUBLIC_BASE_URL,
                    locale: Config.locale,
                    site_name: Config.site_name,
                }}
            />
        </>
    )
}
