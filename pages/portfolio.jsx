import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Header } from '../components/header';
import Meta from '../components/meta';
import PageScripts from '../components/pageScripts';

const OwlCarousel = dynamic(
    () => import('../components/carousel'),
    { loading: () => <></>, ssr: false }
);

export default function Portfolio() {

    const projects = [
        {
            name: 'swoove',
            preview: '/img/projects/swoove.jpg',
            link: 'https://swoove.delivery',
            client: 'Roots Digital',
            tools: ['nextjs', 'bootstrap','nodejs']
        }, {
            name: 'curiashops',
            preview: '/img/projects/curiashops.jpg',
            link: 'https://curishops.com/',
            client: 'Roots Digital',
            tools: ['nextjs', 'bootstrap']
        }, {
            name: 'ananse hub',
            preview: '/img/projects/ananse.jpg',
            link: 'https://ananssehub.com/',
            client: 'Roots Digital',
            tools: ['nextjs', 'typescript', 'tailwind']
        },
    ]

    const isDesktopOrLaptop = useMediaQuery({ minWidth: 992 });

    useEffect(() => {
        document.querySelector("body").classList.add("portfolio")
    });


    return (
        <>
            <Meta />

            <Header currentPage="portfolio" />


            {/* Page Title Starts */}
            <section className="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1">
                <h1>
                    <span>portfolio</span>
                </h1>
            </section>
            {/* Page Title Ends */}

            <section className="main-content text-center revealator-slideup revealator-once revealator-delay1">
                <div className="row mx-0 h-100 align-items-center">
                    <div className="col-10 px-0 mx-auto">
                        <OwlCarousel
                            name='carousel_2'
                            showDots={true}
                            autoplay={false}
                            autoplayTimeout={3000}
                            loop={true}
                            responsive={
                                {
                                    0: {
                                        items: 1
                                    },
                                }
                            }
                        // customDots={'custom-dots'}
                        >
                            {
                                projects.map((_proj, i) => {
                                    return (
                                        <div className="row mx-0" key={i}>
                                            <div className="pr-3 col-lg-3 my-auto text-center">
                                                <div className="row mx-0">
                                                    {_proj.tools.map((_tool, i) => {
                                                        return (
                                                            <div className="col-lg-4 col-2 mb-3 mx-auto" key={i}>
                                                                <img src={`/img/tech/${_tool}.png`} alt={_tool} />
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mx-auto portfolio-item">
                                                <div className="card-body">
                                                    <h5 className="portfolio-title">{_proj.name}</h5>
                                                    <img className="card-img-top" src={_proj.preview} alt="project 1" />
                                                </div>
                                            </div>
                                            <div className="pl-3 col-lg-3 my-auto text-break">
                                                <p>Client: <b> {_proj.client} </b> </p>
                                                <p>Preview: <a href={_proj.link} target="_blank" rel="noreferrer"> {_proj.link} <i className="fa fa-external-link pr-2"></i> </a> </p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </section>

            <PageScripts />
        </>
    )
}
