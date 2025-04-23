import { Link, NavLink } from "react-router-dom"
import truck from '../../assets/icons/truck.gif';
import delivery from '../../assets/icons/delivery.gif';
import time from '../../assets/icons/time.gif';
import greenbg_logo from '../../assets/greenbg_logo.png';
import logo from '../../assets/logo.jpg'
import videobg from '../../assets/video/agrifarm.mp4';
import './Home.css';
import { Container, Box } from "@mui/material";
const Home = () => {
  const disableRightClick = (event) => {
    event.preventDefault();
  };
  return (
    <div className="noselect" onContextMenu={disableRightClick}>
      <nav className="nav-container">
        <div className="logo-bx">
          <NavLink to="/" className="logo"><img src={greenbg_logo} loading="lazy" onContextMenu={disableRightClick} alt="logo" width={115} height={90} /></NavLink>
        </div>
        <div className="link-bx">
          <NavLink to="/" className="nav-links">Home</NavLink>
          <NavLink to="/services" className="nav-links">Services</NavLink>
          <NavLink to="/about" className="nav-links">About</NavLink>
          <NavLink to="/contact" className="nav-links">Contact</NavLink>
        </div>
      </nav>
      <section className="termi">
        <video src={videobg}  autoPlay loop muted onContextMenu={disableRightClick} />
        <h1 id="video_hd">
          Delivering nature's bounty with care<br /> and commitment
        </h1>
        <div className="box1">
          <h1 className="hx1">Welcome aboard to Sri Kannan Regular Services!</h1>
          <p className="px1">Providing reliable and efficient agricultural transportation services, trusted by <br /> agriculturists and agribusinesses alike for seamless delivery solutions!</p>
        </div>
        <div className="box2">
          <h2 id="service_hd">Our Services</h2>
          <p id="service_para">Efficient transport solutions for all your agricultural needs</p>
          <div className="tribox1">
            <div className='mb1' >
              <img src={truck} alt="image not found" loading="lazy" width={100} height={100}  onContextMenu={disableRightClick}/>
              <h3 className="mb_hd">Comprehensive Transportation</h3>
              <p className="mb_para">
                We provide a wide range of transportation services tailored to the agricultural sector
              </p>
            </div>
            <div className='mb2'>
              <img src={delivery} alt="image not found" loading="lazy" width={100} height={100}  onContextMenu={disableRightClick} />
              <h3 className="mb_hd">Fresh Market Deliveries</h3>
              <p className="mb_para">From transporting agricultural products , in return to delivering fresh vegetables from the market to local shops, we cover it all</p>
            </div>
            <div className='mb3'>
              <img src={time} alt="image not found" loading="lazy" width={100} height={100}  onContextMenu={disableRightClick}/>
              <h3 className="mb_hd">On-Time and Reliable</h3>
              <p className="mb_para">Our service is designed to ensure that your products reach the auction shops on time, maintaining their freshness and quality. Whether you're transporting small or large quantities, we have the capacity and expertise to handle all your agricultural transport needs efficiently</p>
            </div>
          </div>
        </div>
        <h2 id="achieve_hd">Our Achievements</h2>
        <div className="doublebox1">
          <Container className="container" sx={{
            backgroundColor: '#D2FF72',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            width: "100px",
            height: '200px',
            marginTop: '10px',
            marginBottom: '80px',
            marginLeft: '80px',
            marginRight: '80px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '@media (max-width: 600px)': {
              padding: '10px',
            }
          }}>
            <Box sx={{ color: '#1A4870', fontSize: '18px', fontWeight: '400' }} >
              <b className="mpts">Punctuality</b> which was very necessary for the transport of agricultural products that are perishable products.
            </Box>
          </Container>
          <Container className="container" sx={{
            backgroundColor: '#D2FF72',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            width: "100px",
            height: '200px',
            marginTop: '10px',
            marginBottom: '80px',
            marginLeft: '80px',
            marginRight: '80px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '@media (max-width: 600px)': {
              padding: '10px',
            }
          }}>
            <Box sx={{ color: '#1A4870', fontSize: '18px', fontWeight: '400' }} >
              <b className="mpts">Honesty</b> in the service because the other agriculturists need not travel everyday to the market where the auction of their products take place and get the bill and cash for their products.
            </Box>
          </Container>
        </div>
      </section>
      <footer>
        <div className="footer">
          <div className="foot-box">
            <img src={logo} alt="image not found" loading="lazy"  onContextMenu={disableRightClick} width={200} height={150} />
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
export default Home
