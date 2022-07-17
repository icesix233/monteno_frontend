import React , { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';

import logo from '../../assets/fake-data/logo';

const Footer = () => {

    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > 500) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener("scroll", toggleVisibility);
  
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <>
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer__body">
                      <Link to="/">
                        <img src={logo} alt="Monteno" data-aos="fade-down" width={440} height={100} />
                      </Link>
                        
                        <p className="desc fs-18" data-aos="fade-up">
                        Qatarlaeeb is a fully autonomous community project, every member of the community is the initiator of the project.
                        </p>
                    </div>
                    <div className="footer_bottom">
                        <p className="fs-16">Copyright © 2022, Qatarlaeeb. </p>
                        <ul>
                            <li><Link to="#">Terms & Condition</Link></li>
                            <li><Link to="#">Privacy Policy</Link></li>
                            <li><Link to="#">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        {
            isVisible && 
            <Link onClick={scrollToTop}  to='#' id="scroll-top"></Link>
        }</>
        
    );
}

export default Footer;