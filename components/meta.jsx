import React from 'react';

import { NextSeo } from 'next-seo';
import Head from 'next/head';

import { Config } from '../configs/global_variables';

export default function Meta(props) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" key="charset" />
                <meta name="viewport" content="width=device-width,initial-scale=1" key="viewport" />
                {/* <link rel="apple-touch-icon" href={`${process.env.baseUrl}/apple-touch-icon.png`} key="apple" /> */}
                {/* <link rel="icon" type="image/png" sizes="32x32" href={`${process.env.baseUrl}/favicon-32x32.ico`} key="icon32" /> */}
                {/* <link rel="icon" type="image/png" sizes="16x16" href={`${process.env.baseUrl}/favicon-16x16.ico`} key="icon16" /> */}
                <link rel="icon" type="image/png" href={`${process.env.baseUrl}/favicon.ico`} key="favicon" />


                <link href="css/preloader.min.css" rel="stylesheet" />
                <link href="css/circle.css" rel="stylesheet" />
                <link href="css/font-awesome.min.css" rel="stylesheet" />
                <link href="css/fm.revealator.jquery.min.css" rel="stylesheet" />
                <link href="css/style.css" rel="stylesheet" />
                <link rel="stylesheet" type="text/css" title="red" href="css/yellow-skin.css" />

                <script src="js/modernizr.custom.js"></script>
            </Head>
            <NextSeo
                title={Config.title}
                description={Config.description}
                canonical={Config.canonical || process.env.NEXT_PUBLIC_BASE_URL}
                openGraph={{
                    title: Config.title,
                    description: props.description,
                    url: props.canonical || process.env.NEXT_PUBLIC_BASE_URL,
                    locale: Config.locale,
                    site_name: Config.site_name,
                }}
            />
        </>
    )
}
