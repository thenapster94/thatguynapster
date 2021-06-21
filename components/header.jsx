
export const Header = ({ currentPage }) => {

    return (
        <>
            <header className="header" id="navbar-collapse-toggle">
                {/* Fixed Navigation Starts */}
                <ul className="icon-menu d-none d-lg-block revealator-slideup revealator-once revealator-delay1">
                    <li className={`icon-box${currentPage === 'home' ? ' active' : ''}`}>
                        <i className="fa fa-home"></i>
                        <a href="/">
                            <h2>Home</h2>
                        </a>
                    </li>
                    <li className={`icon-box${currentPage === 'about' ? ' active' : ''}`}>
                        <i className="fa fa-user"></i>
                        <a href="/about">
                            <h2>About</h2>
                        </a>
                    </li>
                    <li className={`icon-box${currentPage === 'portfolio' ? ' active' : ''}`}>
                        <i className="fa fa-briefcase"></i>
                        <a href="/portfolio">
                            <h2>Portfolio</h2>
                        </a>
                    </li>
                    <li className={`icon-box${currentPage === 'contact' ? ' active' : ''}`}>
                        <i className="fa fa-envelope-open"></i>
                        <a href="/contact">
                            <h2>Contact</h2>
                        </a>
                    </li>
                </ul>
                {/* Fixed Navigation Ends */}

                {/* Mobile Menu Starts */}
                <nav role="navigation" className="d-block d-lg-none">
                    <div id="menuToggle">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul className="list-unstyled" id="menu">
                            <li className={`${currentPage === 'home' ? 'active' : ''}`}>
                                <a href="/">
                                    <i className="fa fa-home"></i>
                                    <span>Home</span>
                                </a>
                            </li>
                            <li className={`${currentPage === 'about' ? 'active' : ''}`}>
                                <a href="/about">
                                    <i className="fa fa-user"></i>
                                    <span>About</span>
                                </a>
                            </li>
                            <li className={`${currentPage === 'portfolio' ? 'active' : ''}`}>
                                <a href="/portfolio">
                                    <i className="fa fa-folder-open"></i>
                                    <span>Portfolio</span>
                                </a>
                            </li>
                            <li className={`${currentPage === 'contact' ? 'active' : ''}`}>
                                <a href="/contact">
                                    <i className="fa fa-envelope-open"></i>
                                    <span>Contact</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}
