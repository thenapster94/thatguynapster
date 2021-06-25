import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Header } from '../components/header';
import Meta from '../components/meta';
import PageScripts from '../components/pageScripts';

export default function Contact() {

    const isDesktopOrLaptop = useMediaQuery({ minWidth: 992 });

    useEffect(() => {
        document.querySelector("body").classList.add("contact")
    });


    return (
        <>
            <Meta canonical={`${process.env.NEXT_PUBLIC_BASE_URL}portfolio`} />

            <Header currentPage="contact" />


            {/* Page Title Starts */}
            <section className="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1">
                <h1>
                    <span>get in touch</span>
                </h1>
            </section>
            {/* Page Title Ends */}

            <section className="main-content revealator-slideup revealator-once revealator-delay1">
                <div className="container">
                    <div className="row">
                        {/* <!-- Left Side Starts --> */}
                        <div className="col-12 col-lg-4 mx-lg-auto text-lg-center">
                            <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">hit me up</h3>
                            <p className="open-sans-font mb-3">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities. I want to be part of your dream and vision; if they scare me enough 😅.</p>

                            <p className="open-sans-font custom-span-contact pl-0">
                                <i className="fa fa-envelope-open my-auto"></i>
                                <label className="ml-3 my-auto" style={{ verticalAlign: 'super' }}>andrewosei94@gmail.com</label>
                            </p>

                            <p className="open-sans-font custom-span-contact pl-0">
                                <i className="fa fa-phone-square my-auto"></i>
                                <label className="ml-3 my-auto" style={{ verticalAlign: 'super' }}>+233 275 246 704</label>
                            </p>

                            <ul className="social list-unstyled pt-1 mb-5">
                                <li>
                                    <a title="Twitter" href="https://twitter.com/thatguynapster">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a title="Instagram" href="https://instagram.com/thatguynapster/">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a title="LinkedIn" href="#">
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- Left Side Ends --> */}
                        {/* <!-- Contact Form Starts --> */}
                        {/* <div className="col-12 col-lg-8">
                            <form className="contactform" method="post">
                                <div className="contactform">
                                    <div className="row">
                                        <div className="col-12 col-md-4">
                                            <input type="text" name="name" placeholder="YOUR NAME" />
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <input type="email" name="email" placeholder="YOUR EMAIL" />
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <input type="text" name="subject" placeholder="YOUR SUBJECT" />
                                        </div>
                                        <div className="col-12">
                                            <textarea name="message" placeholder="YOUR MESSAGE"></textarea>
                                            <button type="submit" className="button">
                                                <span className="button-text">Send Message</span>
                                                <span className="button-icon fa fa-send"></span>
                                            </button>
                                        </div>
                                        <div className="col-12 form-message">
                                            <span className="output_message text-center font-weight-600 text-uppercase"></span>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div> */}
                        {/* <!-- Contact Form Ends --> */}
                    </div>
                </div>

            </section>

            <PageScripts />
        </>
    )
}
