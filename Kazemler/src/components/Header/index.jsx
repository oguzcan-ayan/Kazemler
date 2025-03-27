import { useEffect, useState } from 'react';
import './index.scss';
import { IoArrowUp, IoSearch } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdMail } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

const Header = () => {

    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isHamburgerButtonOpen, setIsHamburgerButonOpen] = useState(false);
    const [isScroll, setIsScroll] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleHamburgerMenuBtn = () => {
        setIsHamburgerButonOpen(!isHamburgerButtonOpen);
    }

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;

            if (scrolled <= 150) {
                setIsScroll(false);
            }
            else {
                setIsScroll(true);
            }

            if (scrolled < lastScrollY) {
                setIsVisible(true);
            }

            else {
                setIsVisible(false);
            }

            setLastScrollY(window.scrollY);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [lastScrollY]);
    return (
        <>
            <header>
                <div className={`header-container ${isScroll ? 'fixed' : ''}`}>
                    <div className='logo'>
                        <a href="/">
                            <img src="../../../../assets/vite.svg" alt="Content not found" />
                        </a>
                    </div>
                    <nav className='homepage-btns'>
                        <NavLink to='/'><button>Homepage</button></NavLink>
                        <NavLink to='/about-us'><button>About Us</button></NavLink>
                        <div className="items-container">
                            <button><span>Products</span><IoIosArrowDown /></button>
                            <div className="items-wrapper">
                                <div className="items">
                                    <button>For Men</button>
                                    <button>For Women</button>
                                    <button>For Skincare</button>
                                </div>
                            </div>
                        </div>
                        <button>E-Catalog</button>
                        <button>References</button>
                        <div className='items-container'>
                            <button><span>Contact Us</span><IoIosArrowDown /></button>
                            <div className='items-wrapper'>
                                <div className='items'>
                                    <a href="https://wa.me/+905559990000" target='_blank'><button>Text <span><FaWhatsapp /></span></button></a>
                                    <a href="tel:+905559990000" target='_blank'><button>Call <span><IoIosCall /></span></button></a>
                                    <a href="mailto:example@example.com" target='_blank'><button>Mail <span><MdMail /></span></button></a>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div className='calling-and-search-btns'>
                        <div className='search-btn'>
                            <button onClick={() => setIsSearchOpen(true)}>
                                <IoSearch />
                            </button>
                        </div>
                        <div className='calling-btn'>
                            <a href="tel:+905559990000" target='_blank'><button>Call Now!</button></a>
                        </div>
                    </div>
                </div>
            </header>
            {isSearchOpen &&
                <div className={`modal-container ${isSearchOpen ? 'active' : ''}`}>
                    <div className='modal-close-btn'>
                        <button onClick={() => setIsSearchOpen(false)}>
                            <MdClose />
                        </button>
                    </div>
                    <form onSubmit={(e) => e.preventDefault}>
                        <input
                            type="search"
                            placeholder='Search...'
                            onChange={(e) => e.target.value}
                        />
                        <button type='submit'>
                            <IoSearch />
                        </button>
                    </form>
                </div>
            }
            <div className='hamburger-menu'>
                <button
                    onClick={toggleHamburgerMenuBtn}
                    className='hamburger-menu-btn'
                >
                    {!isHamburgerButtonOpen ? <RxHamburgerMenu /> : <MdClose />}
                </button>
                <div className={`hamburger-menu-content ${isHamburgerButtonOpen ? 'open' : ''}`}>
                    <nav className='homepage-btns '>
                        <button>Homepage</button>
                        <button>About Us</button>
                        <div className="items-container">
                            <button><span>Products</span><IoIosArrowDown /></button>
                            <div className="items-wrapper">
                                <div className="items">
                                    <button>For Men</button>
                                    <button>For Women</button>
                                    <button>For Skincare</button>
                                </div>
                            </div>
                        </div>
                        <button>E-Catalog</button>
                        <button>References</button>
                        <div className='items-container'>
                            <button><span>Contact Us</span><IoIosArrowDown /></button>
                            <div className='items-wrapper'>
                                <div className='items'>
                                    <a href="https://wa.me/+905559990000" target='_blank'><button>Text <span><FaWhatsapp /></span></button></a>
                                    <a href="tel:+905559990000" target='_blank'><button>Call <span><IoIosCall /></span></button></a>
                                    <a href="mailto:example@example.com" target='_blank'><button>Mail <span><MdMail /></span></button></a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <button className={`scroll-to-top-btn ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}><IoArrowUp className='arrow-up'/></button>
        </>
    )
}
export default Header;