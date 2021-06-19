import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react';
import { Header } from '../components/header';
import Meta from '../components/meta';
import PageScripts from '../components/pageScripts';

export default function Home() {

  useEffect(() => {
    document.querySelector("body").classList.add("home")
  });


  return (
    <>
      <Meta />

      <Header currentPage="home" />

      <section className="container-fluid main-container container-home p-0 revealator-slideup revealator-once revealator-delay1">
        {/* <div className="color-block d-none d-lg-block"></div> */}
        <div className="row home-details-container align-items-center">
          {/* <div className="col-lg-4 bg position-fixed d-none d-lg-block"></div> */}
          {/* <div className="col-12 col-lg-8 offset-lg-4 home-details text-left text-sm-center text-lg-left"> */}
          <div className="col-12 home-details text-left text-sm-center text-lg-left">
            <div className="col-lg-7 px-0">
              {/* <img src="img/img-mobile.jpg" className="img-fluid main-img-mobile d-none d-sm-block d-lg-none" alt="my picture" /> */}
              <h1 className="text-uppercase poppins-font">I'm andrew osei-wusu.<span>web designer</span></h1>
              <p className="open-sans-font text-white">I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
              <a className="button" href="/about">
                <span className="button-text">more about me</span>
                <span className="button-icon fa fa-arrow-right"></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <PageScripts />
    </>
  )
}
