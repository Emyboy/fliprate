import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
    const [showNav, setShow] = useState(false);

    return (
        <header id='pq-header' className='pq-header-default pb-3 relative'>
            <div className='pq-top-header'>
                <div className='container'>
                    <div className='row '>
                        <div className='col-md-6'>
                            <div className='pq-header-contact'>
                                <ul>
                                    <li>
                                        <a href='tel:+254 [0] 114569838'>
                                            <i className='fas fa-phone-flip'></i>
                                            <span>+254 [0] 114569838</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='mailto:info@flip.co.ke'>
                                            <i className='fas fa-envelope'></i>
                                            <span>info@flip.co.ke</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pq-bottom-header'>
                <div className='container'>
                    <div className='row '>
                        <div className='col-lg-12'>
                            <nav className='navbar  justify-between navbar-expand-lg navbar-light'>
                                <Link className='navbar-brand ' href='/'>
                                    <img
                                        className='img-fluid logo'
                                        src='/brand.png'
                                        alt='fliprate'
                                    />
                                </Link>

                                <div className='hidden lg:block'>
                                    <ul
                                        id='pq-main-menu'
                                        class='navbar-nav ml-auto '
                                    >
                                        <li class='menu-item manu-item-has-children'>
                                            <Link href='/'>Home</Link>
                                            <i class='fa pq-submenu-icon'></i>
                                        </li>
                                        <li class='menu-item manu-item-has-children'>
                                            <Link href='/#about-us'>
                                                About Us
                                            </Link>
                                            <i class='fa pq-submenu-icon'></i>
                                        </li>
                                        <li class='menu-item manu-item-has-children'>
                                            <Link href='/#our-services'>
                                                Services
                                            </Link>
                                            <i class='fa pq-submenu-icon'></i>
                                        </li>
                                        <li class='menu-item manu-item-has-children'>
                                            <Link href='/#our-team'>
                                                Our Team
                                            </Link>
                                            <i class='fa pq-submenu-icon'></i>
                                        </li>
                                        <li class='menu-item manu-item-has-children'>
                                            <Link href='/#contact-form'>
                                                Contact Us
                                            </Link>
                                            <i class='fa pq-submenu-icon'></i>
                                        </li>
                                    </ul>
                                </div>

                                <Link
                                    href='/download-app'
                                    className='pq-button'
                                >
                                    <div className='pq-button-block'>
                                        <span className='pq-button-text'>
                                            Download App
                                        </span>
                                    </div>
                                </Link>
                                <button
                                    onClick={() => setShow(!showNav)}
                                    className='navbar-toggler'
                                    type='button'
                                    data-bs-toggle='collapse'
                                    data-bs-target='#navbarSupportedContent'
                                    aria-controls='navbarSupportedContent'
                                    aria-expanded='false'
                                    aria-label='Toggle navigation'
                                >
                                    <i
                                        className={`fas fa-${
                                            showNav ? "close" : "bars"
                                        }`}
                                    ></i>
                                </button>
                            </nav>
                            <div
                                className={` navbar-collapse ${
                                    showNav
                                        ? `show block`
                                        : "collapse lg:overflow-none hidden   w-fit "
                                }`}
                                id='navbarSupportedContent'
                            >
                                <div
                                    id='pq-menu-contain'
                                    className='pq-menu-contain w-full'
                                >
                                    <ul
                                        id='pq-main-menu'
                                        className='navbar-nav ml-auto grid gap-4 pt-4'
                                    >
                                        <li className='menu-item manu-item-has-children'>
                                            <Link href='/#'>Home</Link>
                                            <i className='fa  pq-submenu-icon'></i>
                                        </li>
                                        <li className='menu-item manu-item-has-children  '>
                                            <Link href='/#about-us'>
                                                About Us
                                            </Link>
                                            <i className='fa  pq-submenu-icon'></i>
                                        </li>
                                        <li className='menu-item manu-item-has-children'>
                                            <Link href='/#our-services'>
                                                Services
                                            </Link>
                                            <i className='fa  pq-submenu-icon'></i>
                                        </li>
                                        <li className='menu-item manu-item-has-children'>
                                            <Link href='/#our-team'>
                                                Our Team
                                            </Link>
                                            <i className='fa  pq-submenu-icon'></i>
                                        </li>
                                        <li class='menu-item manu-item-has-children'>
                                            <Link href='/#contact-form'>
                                                Contact Us
                                            </Link>
                                            <i class='fa pq-submenu-icon'></i>
                                        </li>

                                        <Link
                                            href='/download-app'
                                            className='pq-button block w-fit px-3'
                                        >
                                            <div className='pq-button-block '>
                                                <span className='pq-button-text'>
                                                    Download App
                                                </span>
                                            </div>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
