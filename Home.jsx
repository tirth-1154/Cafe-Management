import { React,useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ai1 from '../assets/images/asterisk-icon.svg'
import iabi1 from '../assets/images/icon-about-body-item-1.svg'
import iabi2 from '../assets/images/icon-about-body-item-2.svg'
import aui1 from '../assets/images/about-us-image.jpg'
import pti1 from '../assets/images/pricing-tab-image-1.jpg'
import pm1 from '../assets/images/pricing-menu-1.png'
import pm2 from '../assets/images/pricing-menu-2.png'
import pm3 from '../assets/images/pricing-menu-3.png'
import pm4 from '../assets/images/pricing-menu-4.png'
import fi1 from '../assets/images/offer-image.jpg'
import oci1 from '../assets/images/offer-circle-image-1.jpg'
import oci2 from '../assets/images/offer-circle-image-2.jpg'
import as1 from '../assets/images/author-signature.svg'
import as2 from '../assets/images/about-restaurant-img.jpg'

import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";

const Home = () => {
      const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/getProducts");
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        console.error("Failed to fetch products");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <Navbar />
    {/* <!-- Hero Section Start --> */}
    <div className="hero parallaxie">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-8 col-md-10">
                    {/* <!-- Hero Content Start --> */}
                    <div className="hero-content">
                        {/* <!-- Section Title Start --> */}
                        <div className="section-title">
                            <h3 className="wow fadeInUp">crafted with love, served with passion</h3>
                            <h1 className="text-anime-style-3" data-cursor="-opaque">Step into the aroma of freshly coffee</h1>
                            <p className="wow fadeInUp" data-wow-delay="0.2s">Discover a place where every cup is a masterpiece, crafted with passion and precision. From the rich, bold flavors of our signature blends to the cozy ambiance that feels like home.</p>
                        </div>
                    </div>
                    {/* <!-- Hero Content End --> */}
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Scrolling Ticker Section Start --> */}
    <div className="our-scrolling-ticker">
        {/* <!-- Scrolling Ticker Start --> */}
        <div className="scrolling-ticker-box">
            <div className="scrolling-content">
                <span><img src={ai1} alt="" />Espresso</span>
                <span><img src={ai1} alt="" />Americano</span>
                <span><img src={ai1} alt="" />Latte</span>
                <span><img src={ai1} alt="" />Cappuccino</span>
                <span><img src={ai1} alt="" />Mocha</span>
                <span><img src={ai1} alt="" />Macchiato</span>
                <span><img src={ai1} alt="" />Cold Brew</span>
                <span><img src={ai1} alt="" />Espresso</span>
                <span><img src={ai1} alt="" />Americano</span>
                <span><img src={ai1} alt="" />Latte</span>
                <span><img src={ai1} alt="" />Cappuccino</span>
                <span><img src={ai1} alt="" />Mocha</span>
                <span><img src={ai1} alt="" />Macchiato</span>
                <span><img src={ai1} alt="" />Cold Brew</span>
            </div>
        </div>
    </div>

     {/* <!-- About us Section Start --> */}
     <div className="about-us">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    {/* <!-- About us Content Start --> */}
                    <div className="about-us-content">
                        {/* <!-- Section Title Start --> */}
                        <div className="section-title">
                            <h3 className="wow fadeInUp">about us</h3>
                            <h2 className="text-anime-style-3text-white" data-cursor="-opaque">Bringing people together, one cup at a time</h2>
                        </div>
                        {/* <!-- Section Title End --> */}
                         
                        {/* <!-- About Body List Start --> */}
                        <div className="about-body-list">
                            {/* <!-- About Body Item Start --> */}
                            <div className="about-body-item wow fadeInUp" data-wow-delay="0.2s">
                                <div className="icon-box">
                                    <img src={iabi1} alt="" />
                                </div>
                                <div className="about-body-list-content text-white">
                                    <h3>Food delivery</h3>
                                    <p>With our fast and reliable food delivery service, your favorite coffee, snacks, and treats are just a click away.</p>
                                </div>
                            </div>
                            {/* <!-- About Body Item End --> */}
                            
                            {/* <!-- About Body Item Start --> */}
                            <div className="about-body-item wow fadeInUp" data-wow-delay="0.4s">
                                <div className="icon-box">
                                    <img src={iabi2} alt="" />
                                </div>
                                <div className="about-body-list-content text-white">
                                    <h3>Event elegance</h3>
                                    <p>Host your special moments with us! From intimate gatherings to vibrant celebrations offers.</p>
                                </div>
                            </div>
                            {/* <!-- About Body Item End --> */}
                        </div>
                        {/* <!-- About Body List End -->*/}
                    </div>
                    {/* <!-- About us Content End --> */}
                </div>

                <div className="col-lg-6">
                    {/* <!-- About Us Image Start --> */}
                    <div className="about-us-image">
                        {/* <!-- About Us Image Start --> */}
                        <div className="about-us-img">
                            <figure className="image-anime">
                                <img src={aui1} alt="" />
                            </figure>
                        </div>
                        {/* <!-- About Us Image End -->
                        
                        <!-- Opening Time Box Start --> */}
                        <div className="opening-time-box">
                            {/* <!-- Icon Box Start --> */}
                            <div className="icon-box">
                                <i className="fa-regular fa-clock"></i>
                            </div>
                            {/* <!-- Icon Box End -->
                            
                            <!-- Opening Time Content Start --> */}
                            <div className="opening-time-content">
                                <h3>Open hours</h3>
                                <ul>
                                    <li>Monday - Friday<span>09:30 - 7:30</span></li>
                                    <li>Saturday<span>10:30 - 5:00</span></li>
                                    <li>Sunday<span>24 hours open</span></li>
                                </ul>
                            </div>
                            {/* <!-- Opening Time Content End --> */}
                        </div>
                        {/* <!-- About Menu Box End --> */}
                    </div>
                    {/* <!-- Opening Time Box End --> */}
                </div>
            </div>
        </div>
    </div>
    
     {/* <!-- Our Pricing Section Start --> */}
    <div class="our-pricing">
        <div class="container">
            <div class="row section-row">
                <div class="col-lg-12">
                    {/* <!-- Section Title Start --> */}
                    <div class="section-title">
                        <h3 class="wow fadeInUp">Our pricing</h3>
                        <h2 class="text-anime-style-3 text-white" data-cursor="-opaque">Savor every moment, without the premium price</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="our-pricing-box tab-content" id="pricingtab">
                        <div class="pricing-boxes tab-pane fade show active" id="all" role="tabpanel">
                            <div class="row align-items-center">
                                <div class="col-lg-6">
                                    {/* <!-- Pricing Image Start --> */}
                                    <div class="pricing-image">
                                        <figure class="image-anime">
                                            <img src={pti1} alt="" />
                                        </figure>
                                    </div>
                                    {/* <!-- Pricing Image End --> */}
                                </div>

                                <div class="col-lg-6">
                                    {/* <!-- Our Menu List Start --> */}
                                    <div class="our-menu-list">
                                        {/* <!-- Our Menu Item Start --> */}
                                        <div class="menu-list-item">
                                            {/* <!-- Our Menu Image Start --> */}
                                            <div class="menu-list-image">
                                                <figure>
                                                    <img src={pm1} alt="" />
                                                </figure>
                                            </div>
                                            {/* <!-- Our Menu Image End -->
        
                                            <!-- Menu Item Body Start --> */}
                                            <div class="menu-item-body text-white">
                                                {/* <!-- Menu Item Title Start --> */}
                                                <div class="menu-item-title">
                                                    <h3>chips & dip</h3>
                                                    <hr />
                                                    <span>₹16.00</span>
                                                </div>
                                                {/* <!-- Menu Item Title End -->
        
                                                <!-- Menu Item Content Start --> */}
                                                <div class="menu-item-content text-white">
                                                    <p>A perfect pairing of crispy, freshly made chips and rich, flavorful dips that bring a burst of taste in every bite.</p>
                                                </div>
                                                {/* <!-- Menu Item Content End --> */}
                                            </div>
                                            {/* <!-- Menu Item Body End --> */}
                                        </div>
                                        
                                        {/* <!-- Our Menu Item Start --> */}
                                        <div class="menu-list-item">
                                            {/* <!-- Our Menu Image Start --> */}
                                            <div class="menu-list-image">
                                                <figure>
                                                    <img src={pm2} alt="" />
                                                </figure>
                                            </div>
                                            {/* <!-- Our Menu Image End -->
        
                                            <!-- Menu Item Body Start --> */}
                                            <div class="menu-item-body text-white">
                                                {/* <!-- Menu Item Title Start --> */}
                                                <div class="menu-item-title">
                                                    <h3>tender octopus</h3>
                                                    <hr />
                                                    <span>₹16.00</span>
                                                </div>
                                                {/* <!-- Menu Item Title End -->
        
                                                <!-- Menu Item Content Start --> */}
                                                <div class="menu-item-content text-white">
                                                    <p>A perfect pairing of crispy, freshly made chips and rich, flavorful dips that bring a burst of taste in every bite.</p>
                                                </div>
                                                {/* <!-- Our Menu Item End -->
                                                <!-- Menu Item Content End --> */}
                                            </div>
                                            {/* <!-- Menu Item Body End --> */}
                                        </div>
                                        {/* <!-- Our Menu Item End -->
                                        
                                        <!-- Our Menu Item Start --> */}
                                        <div class="menu-list-item">
                                            {/* <!-- Our Menu Image Start --> */}
                                            <div class="menu-list-image">
                                                <figure>
                                                    <img src={pm3} alt="" />
                                                </figure>
                                            </div>
                                            {/* <!-- Our Menu Image End -->
        
                                            <!-- Menu Item Body Start --> */}
                                            <div class="menu-item-body ">
                                                {/* <!-- Menu Item Title Start --> */}
                                                <div class="menu-item-title text-white">
                                                    <h3>grilled veal filet</h3>
                                                    <hr />
                                                    <span>₹16.00</span>
                                                </div>
                                                {/* <!-- Menu Item Title End -->
        
                                                <!-- Menu Item Content Start --> */}
                                                <div class="menu-item-content text-white">
                                                    <p>A perfect pairing of crispy, freshly made chips and rich, flavorful dips that bring a burst of taste in every bite.</p>
                                                </div>
                                                {/* <!-- Menu Item Content End --> */}
                                            </div>
                                            {/* <!-- Menu Item Body End --> */}
                                        </div>
                                        {/* <!-- Our Menu Item End -->

                                        <!-- Our Menu Item Start --> */}
                                        <div class="menu-list-item">
                                            {/* <!-- Our Menu Image Start --> */}
                                            <div class="menu-list-image">
                                                <figure>
                                                    <img src={pm4} alt="" />
                                                </figure>
                                            </div>
                                            {/* <!-- Our Menu Image End -->
        
                                            <!-- Menu Item Body Start --> */}
                                            <div class="menu-item-body">
                                                {/* <!-- Menu Item Title Start --> */}
                                                <div class="menu-item-title text-white">
                                                    <h3>Mexican soup</h3>
                                                    <hr />
                                                    <span>₹16.00</span>
                                                </div>
                                                {/* <!-- Menu Item Title End -->
        
                                                <!-- Menu Item Content Start --> */}
                                                <div class="menu-item-content text-white">
                                                    <p>A perfect pairing of crispy, freshly made chips and rich, flavorful dips that bring a burst of taste in every bite.</p>
                                                </div>
                                                {/* <!-- Menu Item Content End --> */}
                                            </div>
                                            {/* <!-- Menu Item Body End --> */}
                                        </div>
                                        {/* <!-- Our Menu Item End --> */}
                                    </div>
                                    {/* <!-- Our Menu List End --> */}
                                </div>
                            </div>
                        </div>
                        <div class="section-footer-text wow fadeInUp text-white" data-wow-delay="0.2s">
                            <p>craving the perfect brew? <a href="book-table.html">visit us today!</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    

    {/* <!-- Our Offers Section Start --> */}
    <div class="our-offers">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-5">
                    {/* <!-- Our Offers Content Start --> */}
                    <div class="our-offers-content">
                        {/* <!-- Section Title Start --> */}
                        <div class="section-title">
                            <h3 class="wow fadeInUp">What we offer ?</h3>
                            <h2 class="text-anime-style-3 text-white" data-cursor="-opaque">Host private events in an intimate setting</h2>
                            <p class="wow fadeInUp" data-wow-delay="0.2s">We offer a warm and inviting space perfect for your private events. Whether it's a birthday celebration, a small gathering, or an exclusive business meeting</p>
                        </div>
                        {/* <!-- Section Title End -->

                        <!-- Offer Accordian Start --> */}
                        <div class="offers-accordion" id="offer-accordion">
                            {/* <!-- Offer Accordian Item Start --> */}
                            <div class="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                                <h2 class="accordion-header" id="offersheading1">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#offerscollapse1" aria-expanded="true" aria-controls="offerscollapse1">
                                        Private dining room
                                    </button>
                                </h2>
                                <div id="offerscollapse1" class="accordion-collapse collapse show" aria-labelledby="offersheading1" data-bs-parent="#offer-accordion">
                                    <div class="accordion-body">
                                        <p>Experience an elevated dining experience in our exclusive Private Dining Room.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Offer Accordian Item End -->
                            
                            <!-- Offer Accordian Item Start --> */}
                            <div class="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                                <h2 class="accordion-header" id="offersheading2">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#offerscollapse2" aria-expanded="true" aria-controls="offerscollapse2">
                                        Organize a wedding
                                    </button>
                                </h2>
                                <div id="offerscollapse2" class="accordion-collapse collapse" aria-labelledby="offersheading2" data-bs-parent="#offer-accordion">
                                    <div class="accordion-body">
                                        <p>Experience an elevated dining experience in our exclusive Private Dining Room.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Offer Accordian Item End -->
                            
                            <!-- Offer Accordian Item Start --> */}
                            <div class="accordion-item wow fadeInUp" data-wow-delay="0.8s">
                                <h2 class="accordion-header" id="offersheading3">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#offerscollapse3" aria-expanded="true" aria-controls="offerscollapse3">
                                        Birthday party
                                    </button>
                                </h2>
                                <div id="offerscollapse3" class="accordion-collapse collapse" aria-labelledby="offersheading3" data-bs-parent="#offer-accordion">
                                    <div class="accordion-body">
                                        <p>Experience an elevated dining experience in our exclusive Private Dining Room.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Offer Accordian Item End --> */}
                        </div>
                        {/* <!-- Offer Accordian End -->

                        <!-- Offer Button Start --> */}
                        <div class="offer-button wow fadeInUp" data-wow-delay="1s">
                            <a href="book-table.html" class="btn-default">Schedule your event</a>
                        </div>
                        {/* <!-- Offer Button End --> */}
                    </div>
                    {/* <!-- Our Offers Content End --> */}
                </div>
                
                <div class="col-lg-7">
                    {/* <!-- Our Offer Images Start --> */}
                    <div class="our-offers-images">
                        {/* <!-- Offer Image Start --> */}
                        <div class="offer-image">
                            <figure class="image-anime">
                                <img src={fi1} alt="" />
                            </figure>
                        </div>
                        {/* <!-- Offer Image End -->
                        
                        <!-- Offer Circle Image 1 Start --> */}
                        <div class="offer-circle-image-1">
                            <figure class="image-anime">
                                <img src={oci1} alt="" />
                            </figure>
                        </div>  
                        {/* <!-- Offer Circle Image 1 End --> */}
                        
                        {/* <!-- Offer Circle Image 2 Start --> */}
                        <div class="offer-circle-image-2">
                            <figure class="image-anime">
                                <img src={oci2} alt="" />
                            </figure>
                        </div>
                        {/* <!-- Offer Circle Image 2 End --> */}
                    </div>
                    {/* <!-- Our Offer Images End --> */}
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Our Offers Section End --> */}

    {/* <!-- About Restaurant Section Start --> */}
    <div class="about-restaurant light-bg-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 order-lg-1 order-md-1">
                    {/* <!-- About Restaurant Content Start --> */}
                    <div class="about-restaurant-content">
                        {/* <!-- Section Title Start --> */}
                        <div class="section-title">
                            <h3 class="wow fadeInUp">About restaurant</h3>
                            <h2 class="text-anime-style-3 text-white" data-cursor="-opaque">Our philosophy</h2>
                        </div>
                        {/* <!-- Section Title End -->

                        <!-- About Restaurant Info Start --> */}
                        <div class="about-restaurant-info">
                            <h3 class="wow fadeInUp text-white" data-wow-delay="0.2s">A place where food, design, and ambiance come together to create a experience.</h3>
                            <p class="wow fadeInUp text-white" data-wow-delay="0.4s">Experience Ray's incomparable outdoor riverside dining at Ray's on the river, along with scenic.</p>
                            <p class="wow fadeInUp text-white" data-wow-delay="0.6s">While social distancing is one of our top priorities, guests may still enjoy beautiful surrounding.</p>
                        </div>
                        {/* <!-- About Restaurant Info End -->
                        
                        <!-- About Author Start --> */}
                        <div class="about-author-box wow fadeInUp" data-wow-delay="0.8s">
                            <img src={as1} alt="" />
                            <h3>johnathan - chef master</h3>
                        </div>
                        {/* <!-- About Author End --> */}
                    </div>
                    {/* <!-- About Restaurant Content End --> */}
                </div>
                
                <div class="col-lg-4 order-lg-2 order-md-3">
                    {/* <!-- About Restaurant Image Start --> */}
                    <div class="about-restaurant-image">
                        <figure class="image-anime">
                            <img src={as2} alt="" /    >
                        </figure>
                    </div>
                    {/* <!-- About Restaurant Image End --> */}
                </div>
                
                <div class="col-lg-4 col-md-6 order-lg-3 order-md-2">
                    {/* <!-- Restaurant Timing Box Start --> */}
                    <div class="restaurant-timing-box">
                        {/* <!-- Section Title Start --> */}
                        <div class="section-title">
                            <h3 class="wow fadeInUp">Time of luxury</h3>
                            <h2 class="text-anime-style-3 text-white" data-cursor="-opaque">open hour time</h2>
                        </div>
                        {/* <!-- Section Title End -->
                        
                        <!-- Restaurant Timing Body Start --> */}
                        <div class="restaurant-time-body">
                            <h3 class="wow fadeInUp text-white" data-wow-delay="0.2s">Come and experience the classy atmosphere with delicious food and music.</h3>
                            <ul class="wow fadeInUp text-white" data-wow-delay="0.4s">
                                <li>Monday - Friday : 9.00am — 22.00pm</li>
                                <li>Saturday: 10.00am — 23.00pm</li>
                                <li>Sunday: 5.00pm — 23.00pm</li>
                                <li>Holidays: Closed</li>
                                <li>Happy Hour: 18.00 pm — 20.00pm</li>
                            </ul>
                            <h3 class="about-author-box wow fadeInUp holiday " data-wow-delay="0.8s">“ On holidays is a special day, we will open and with special offer, we will announce! “</h3>
                        </div>
                        {/* <!-- Restaurant Timing Body End --> */}
                    </div>
                    {/* <!-- Restaurant Timing Box End --> */}
                </div>
            </div>
        </div>
    </div>
    {/* <!-- About Restaurant Section End --> */}

    <section className="products-section">
    <div className="container">
        <h2 className="section-title">Our Best Picks 🍴</h2>
        <div className="products-grid">
        {products.slice(0, 4).map((product) => (
            <div className="product-card" key={product._id}>
            <div className="product-image">
                <img
                src={`http://localhost:5000/uploads/${product.pimg}`}
                alt={product.pname}
                />
            </div>
            <div className="product-info">
                <h3>{product.pname}</h3>
                <p>{product.description?.slice(0, 80)}...</p>
                <span className="price">₹ {product.price}</span>
                <Link to={`/prodDetail/${product._id}`} className="btn">
                🍽 View Details
                </Link>
            </div>
            </div>
        ))}
        </div>
    </div>
    </section>

    <Footer />
    </>
     );
};

export default Home;