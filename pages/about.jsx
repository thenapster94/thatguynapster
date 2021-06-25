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

export default function About() {

    const isDesktopOrLaptop = useMediaQuery({ minWidth: 992 });
    const isTabletOrMobile = useMediaQuery({ maxWidth: 991 });

    useEffect(() => {
        document.querySelector("body").classList.add("about")
    }, []);

    const skills = ['javascript', 'unity', 'nextjs', 'html', 'css', 'bootstrap', 'typescript', 'nodejs', 'git', 'csharp', 'wordpress', 'react', 'tailwind', 'jquery']


    return (
        <>
            <Meta canonical={`${process.env.NEXT_PUBLIC_BASE_URL}portfolio`} />

            <Header currentPage="about" />

            {/* Page Title Starts */}
            <section className="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1">
                <h1>ABOUT <span>ME</span></h1>
            </section>
            {/* Page Title Ends */}

            {/* <!-- Main Content Starts --> */}
            <section className="main-content revealator-slideup revealator-once revealator-delay1">
                <div className="container">
                    <div className="row">
                        {/* <!-- Personal Info Starts --> */}
                        <div className="col-12 col-lg-5 col-xl-6">
                            <div className="row">
                                <div className="col-12">
                                    <h2 className="text-uppercase custom-title mb-0 ft-wt-600">personal info</h2>
                                </div>
                                {/* <div className="col-12 d-block d-sm-none">
                                    <img src="img/img-mobile.jpg" className="img-fluid main-img-mobile" alt="my picture" />
                                </div> */}
                                <div className="col-6">
                                    <ul className="about-list list-unstyled open-sans-font">
                                        <li>
                                            <span className="title">first name :</span>
                                            <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Andrew</span>
                                        </li>
                                        <li>
                                            <span className="title">last name :</span>
                                            <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Osei-Wusu</span>
                                        </li>
                                        <li>
                                            <span className="title">Nationality :</span>
                                            <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Ghanaian</span>
                                        </li>
                                        <li>
                                            <span className="title">Freelance :</span>
                                            <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Available</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul className="about-list list-unstyled open-sans-font">
                                        <li>
                                            <span className="title">phone :</span>
                                            <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">+233 275 246 704</span>
                                        </li>
                                        <li>
                                            <span className="title">Email :</span>
                                            <Link href="mailto:andrewosei94@gmail.com">
                                                <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block text-break">andrewosei94@gmail.com</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <span className="title">Instagram :</span>
                                            <a className="text-white" href="https://instagram.com/thatguynapster/" target="_blank" rel="noreferrer">
                                                <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">@thatguynapster</span>
                                            </a>
                                        </li>
                                        <li>
                                            <span className="title">Twitter :</span>
                                            <a className="text-white" href="https://twitter.com/thatguynapster" target="_blank" rel="noreferrer">
                                                <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">@thatguynapster</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 mt-3">
                                    <a className="button" href="/files/andrew-resume.pdf">
                                        <span className="button-text">Download CV</span>
                                        <span className="button-icon fa fa-download"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Personal Info Ends --> */}
                        {/* <!-- Boxes Starts --> */}

                        <div className={`col-12 col-lg-7 col-xl-6 ${isTabletOrMobile ? 'mt-5' : 'my-auto'}`}>
                            <div className="row">
                                <div className="col-6">
                                    <div className="box-stats with-margin">
                                        <h3 className="poppins-font position-relative">6</h3>
                                        <p className="open-sans-font m-0 position-relative text-uppercase">years of <span className="d-block">experience</span></p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="box-stats with-margin">
                                        <h3 className="poppins-font position-relative">5</h3>
                                        <p className="open-sans-font m-0 position-relative text-uppercase">completed <span className="d-block">projects</span></p>
                                    </div>
                                </div>
                                {/* <div className="col-6">
                                    <div className="box-stats">
                                        <h3 className="poppins-font position-relative">53</h3>
                                        <p className="open-sans-font m-0 position-relative text-uppercase">awards <span className="d-block">won</span></p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        {/* <!-- Boxes Ends --> */}
                    </div>
                    <hr className="separator" />
                    {/* <!-- Skills Starts --> */}
                    <div className="row">
                        <div className="col-12">
                            <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600">My Skills</h3>
                        </div>

                        <div className="col-12">
                            <OwlCarousel
                                name='carousel_2'
                                showDots={true}
                                autoplay={false}
                                autoplayTimeout={3000}
                                loop={true}
                                responsive={
                                    {
                                        0: {
                                            items: 3
                                        },
                                        768: {
                                            items: 6
                                        },
                                        991: {
                                            items: 7
                                        },
                                        1366: {
                                            items: 9
                                        }
                                    }
                                }
                            >
                                {
                                    skills.map((_skill, i) => {
                                        return (
                                            <img className="rounded" src={`/img/tech/${_skill}.png`} alt={_skill} key={i} />
                                        )
                                    })
                                }
                            </OwlCarousel>
                        </div>
                    </div>
                    {/* <!-- Skills Ends --> */}
                    <hr className="separator" />
                    {/* <!-- Experience & Education Starts --> */}
                    <div className="row">
                        <div className="col-12">
                            <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">Experience <span>&</span> Education</h3>
                        </div>
                        <div className="col-lg-6 m-15px-tb">
                            <div className="resume-box">
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <i className="fa fa-briefcase"></i>
                                        </div>
                                        <span className="time open-sans-font text-uppercase">2018 - Present</span>
                                        <h4 className="poppins-font text-uppercase">Web Application Developer <span className="place open-sans-font">roots digital ltd.</span></h4>
                                        {/* <p className="open-sans-font">Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit, </p> */}
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fa fa-briefcase"></i>
                                        </div>
                                        <span className="time open-sans-font text-uppercase">2015 - 2017</span>
                                        <h4 className="poppins-font text-uppercase">web developer<span className="place open-sans-font">trigger pixels</span></h4>
                                        {/* <p className="open-sans-font">Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt</p> */}
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fa fa-briefcase"></i>
                                        </div>
                                        <span className="time open-sans-font text-uppercase">2015</span>
                                        <h4 className="poppins-font text-uppercase">web developer intern <span className="place open-sans-font">trigger pixels</span></h4>
                                        {/* <p className="open-sans-font">Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt</p> */}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 m-15px-tb">
                            <div className="resume-box">
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <i className="fa fa-graduation-cap"></i>
                                        </div>
                                        <span className="time open-sans-font text-uppercase">2018</span>
                                        <h4 className="poppins-font text-uppercase">BSc. computer Engineering<span className="place open-sans-font">Ghana Technology University College</span></h4>
                                        {/* <p className="open-sans-font">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore</p> */}
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fa fa-graduation-cap"></i>
                                        </div>
                                        <span className="time open-sans-font text-uppercase">2013</span>
                                        <h4 className="poppins-font text-uppercase">High School <span className="place open-sans-font">St. Thomas Aquinas</span></h4>
                                        {/* <p className="open-sans-font">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut adipisicing</p> */}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Experience & Education Ends --> */}
                </div>
            </section>
            {/* <!-- Main Content Ends --> */}

            <PageScripts />
        </>
    )
}
