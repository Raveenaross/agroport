import { NavLink, Link } from "react-router-dom"
import logo from '../../assets/logo.jpg';
import greenbg_logo from '../../assets/greenbg_logo.png';
import './About.css';
const About = () => {
    const disableRightClick = (event) => {
        event.preventDefault();
    };
    return (
        <div className="noselect" onContextMenu={disableRightClick}>
            <nav className="nav-container">
                <div className="logo-bx">
                    <NavLink to="/" className="logo"><img src={greenbg_logo} loading="lazy" alt="logo" width={115} height={90} onContextMenu={disableRightClick} /></NavLink>
                </div>
                <div className="link-bx">
                    <NavLink to="/" className="nav-links">Home</NavLink>
                    <NavLink to="/services" className="nav-links">Services</NavLink>
                    <NavLink to="/about" className="nav-links">About</NavLink>
                    <NavLink to="/contact" className="nav-links">Contact</NavLink>
                </div>
            </nav>
            <section id="about_section">
                <div className="about-box1">
                    <div className="abox1">
                        <h1 className="abox-hd1">About Us</h1>
                    </div>
                    <div className="abox2">
                        <p id="abox2_para">Sri Kannan Regular Services was started thirty years ago by Mr and Mrs Ramanathan.</p>
                    </div>
                </div>
            </section>
            <footer>
                <div className="footer">
                    <div className="foot-box">
                        <img src={logo} alt="image not found" loading="lazy" width={200} height={150} onContextMenu={disableRightClick} />
                    </div>
                    <div className="foot-box">
                        <h3 id="nhd1">Navigation</h3>
                        <ul className="list-items">
                            <li><Link to="/" className="links">Home</Link></li>
                            <li><Link to="/services" className="links">Services</Link></li>
                            <li><Link to="/about" className="links">About</Link></li>
                            <li><Link to="/contact" className="links">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="foot-box">
                        <h3 id="nhd2">Address</h3>
                        <p>Sri Kannan Regular Services,</p>
                        <p>Ramalingapuram,<br />
                            Tamil Nadu,<br />
                            India,<br />
                            PIN - 628205.</p>
                    </div>
                    <div className="foot-box">
                        <h3 id="nhd3">Contact Us</h3>
                        <p>srikannanregularservices@gmail.com</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default About
