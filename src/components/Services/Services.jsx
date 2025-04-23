import { NavLink, Link } from "react-router-dom";
import greenbg_logo from '../../assets/greenbg_logo.png';
import agriculturist from '../../assets/agriculturist.jpg';
import market from '../../assets/market.jpg';
import banana_farm from '../../assets/banana_farm.jpg';
import logo from '../../assets/logo.jpg';
import pdt1 from '../../assets/banana.png'
import pdt2 from '../../assets/banana-leaf.jpg';
import pdt3 from '../../assets/coconut.png';
import pdt4 from '../../assets/green-mango.jpeg';
import pdt5 from '../../assets/curry-leaves.jpg';
import { Stack } from "@mui/material";
import './Services.css';
const Services = () => {
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
      <section>
        <div className="service-box1">
          <div className="sbx1">
            <img src={agriculturist} loading="lazy" alt="image not found" width={500} height={500} onContextMenu={disableRightClick} />
          </div>
          <div className="sbx2">
            <h1 id="sbx2_hd">What We Provide</h1>
            <p id="sbx2_para">We aim to transport our agricultural products in time to the commission shops for auction situated in the big markets.In return we transport vegetables from the market to the vegetable shops, ensuring timely deliveries.</p>
          </div>
        </div>
        <div className="service-box2">
          <div className="sbx3">
            <h1 id="sbx3_hd">What We Transport</h1>
            <p id="sbx3_para">We transport a variety of agricultural products, including unripe green bananas,green banana leaves,coconuts,curry leaves and
              other agricultural products.</p>
          </div>
          <div className="sbx4">
            <img src={market} loading="lazy" alt="image not found" onContextMenu={disableRightClick} width={500} height={300} />
          </div>
        </div>
        <div className="service-box3">
          <div className="sbx5">
            <img src={banana_farm} loading="lazy" alt="image not found" onContextMenu={disableRightClick} width={500} height={500} />
          </div>
          <div className="sbx6">
            <h1 id="sbx6_hd">Daily Capacity</h1>
            <p id="sbx6_para">Our services transport approximately 3 tonnes of agricultural products per day.</p>
          </div>
        </div>
        <h1 id="pdt-hd">Our AgroProducts</h1>
        <p id="pdt-para">Sustainably sourced agricultural products, transported with precision to meet your needs</p>
        <Stack
          className="pdt-bx1"
          direction={{ xs: 'column', sm: 'row' }}
          spacing={3}
          justifyContent="center"
          alignItems="center">
          <figure>
            <img src={pdt1} alt="image not found" loading="lazy" onContextMenu={disableRightClick} width={400} height={300} className="pdt-img" />
            <p className="pdt-name">Bananas</p>
          </figure>
          <figure>
            <img src={pdt2} alt="image not found" loading="lazy" onContextMenu={disableRightClick} width={400} height={300} className="pdt-img" />
            <p className="pdt-name">Banana leaves</p>
          </figure>
          <figure>
            <img src={pdt5} alt="image not found" loading="lazy" onContextMenu={disableRightClick} width={400} height={300} className="pdt-img" />
            <p className="pdt-name">Curry leaves</p>
          </figure>
        </Stack>
        <Stack
          className="pdt-bx2"
          direction={{ xs: 'column', sm: 'row' }}
          spacing={8}
          justifyContent="center"
          alignItems="center">
          <figure>
            <img src={pdt3} loading="lazy" onContextMenu={disableRightClick} alt="image not found" className="pdt-img" width={400} height={440} />
            <p className="pdt-name">Coconuts</p>
          </figure>
          <figure>
            <img src={pdt4} loading="lazy" onContextMenu={disableRightClick} alt="image not found" width={400} height={440} className="pdt-img" />
            <p className="pdt-name">Green mangoes</p>
          </figure>
        </Stack>
      </section>
      <footer>
        <div className="footer">
          <div className="foot-box">
            <img src={logo} loading="lazy" onContextMenu={disableRightClick} alt="image not found" width={200} height={150} />
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

export default Services
