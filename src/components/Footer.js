import "../styles/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faTelegram, faMailchimp, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';



export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-navs">
        <div className="categories">
          <ul>
            <li style={{ fontWeight: "bold" }}> Categories</li>
            <li> Market</li>
            <li> Web3</li>
            <li> News</li>
            <li> Trending</li>
            <li> Articles</li>
          </ul>
        </div>
        <div className="categories" style={{marginRight:'10px'}}>
        <ul>
            <li style={{ fontWeight: "bold" }}> Learn</li>
            <li> Learn Overview</li>
            <li> Learn Web3</li>
            <li> Trading Strategies</li>
            <li> Glossory</li>
            
          </ul>
        </div>
        <div className="categories">
        <ul>
            <li style={{ fontWeight: "bold" }}> Features</li>
            <li> Overview</li>
            <li> Pricing</li>
            <li> Support</li>
            <li> Promotions</li>
            <li> CryptoPacks</li>
          </ul>
        </div>
        
      </div>
      <div className="footer-misc">
        <ul>
          <li>About Us</li>
          <li>Contact</li>
          <li>Privacy Polict</li>
          <li>Terms& Conditions</li>
        </ul>
        
        <ul style={{color:'none'}}>
          <li><FontAwesomeIcon icon={faFacebookF} /></li>
          <li><FontAwesomeIcon icon={faTwitter}/></li>
          <li><FontAwesomeIcon icon={faInstagram}/></li>
          <li><FontAwesomeIcon icon={faTelegram}/></li>
          <li><FontAwesomeIcon icon={faYoutube}/></li>
          <li><FontAwesomeIcon icon={faLinkedin}/></li>
        </ul>
      </div>

      <hr className="horizontal-line" />
      <div className="copyright">
        <p>&copy; 2024 Vipul's Company</p>
      </div>
    </div>
  );
}
