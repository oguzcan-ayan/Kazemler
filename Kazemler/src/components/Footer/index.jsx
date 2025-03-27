import './index.scss';
import { GiWorld } from "react-icons/gi";
import { MdOutlinePrivacyTip } from "react-icons/md";

const Footer = () => {
    return (
        <>
            <footer>
                <div className='footer-container'>
                    <div className='footer-title-section'>
                        <h3>We are all around of the World <GiWorld /></h3>
                        <p>Be the winner with our visions and thoughts</p>
                    </div>
                    <div className='footer-wrapper'>
                        <div className='contact-section'>
                            <img src="../../../../assets/vite.svg" alt="Content not found" />
                            <a href="tel:+905559990000" target='_blank'>
                                <p>0 555 999 00 00</p>
                            </a>
                            <a href="mailto:example@example.com" target='_blank'>
                                <p>example@example.com</p>
                            </a>
                        </div>
                        <div className='connection-section'>
                            <h4>Website Connections</h4>
                            <ul>
                                <li>Homepage</li>
                                <li>About Us</li>
                                <li>Products</li>
                                <li>E-Catalog</li>
                                <li>References</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div className='services-section'>
                            <h4>Services</h4>
                            <ul>
                                <li>Lorem</li>
                                <li>Lorem</li>
                                <li>Lorem</li>
                            </ul>
                        </div>
                        <div className='preferences-section'>
                            <h4>Why should you prefer us?</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minus facilis dignissimos numquam consectetur vero, quo officiis nihil, ullam quisquam blanditiis. Doloribus voluptates incidunt soluta facere, obcaecati quod dolore aspernatur?</p>
                        </div>
                    </div>
                    <div className='privacy-policy'>
                        <MdOutlinePrivacyTip />
                        <p>2025 <span>KAZEMLER GROUP</span> All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;