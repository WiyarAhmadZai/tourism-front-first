import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
// Import the CSS files
import '../assets/css/style.css';
import '../assets/css/home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Slide data
  const slides = [
    {
      id: 1,
      image: "/src/assets/img/slides/slide_home_3.jpg",
      title: "Discover Afghanistan's Hidden Treasures",
      subtitle: "Experience the rich history, stunning landscapes, and warm hospitality of Afghanistan",
      cta1: "Explore Tours",
      cta2: "View Packages"
    },
    {
      id: 2,
      image: "/src/assets/img/slides/slide_home_2.jpg",
      title: "Breathtaking Mountain Landscapes",
      subtitle: "Journey through the majestic Hindu Kush mountains and pristine valleys",
      cta1: "Book Adventure",
      cta2: "Learn More"
    },
    {
      id: 3,
      image: "/src/assets/img/slides/slide_home_1.jpg",
      title: "Ancient Cultural Heritage",
      subtitle: "Explore millennia-old monuments and experience authentic Afghan culture",
      cta1: "Start Journey",
      cta2: "Find Accommodations"
    }
  ];

  // Auto slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  return (
    <Layout>
      {/* Hero Section - Carousel */}
      <div id="carousel-home" className="hero-section relative w-full h-[80vh] overflow-hidden">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
                <div className="container mx-auto px-4">
                  <div className="row justify-content-center justify-content-md-start">
                    <div className="col-lg-8 static">
                      <div className="slide-text white">
                        <h2 className="owl-slide-animated owl-slide-title text-4xl md:text-5xl font-bold text-white mb-4">
                          {slide.title}
                        </h2>
                        <p className="owl-slide-animated owl-slide-subtitle text-xl text-white mb-6">
                          {slide.subtitle}
                        </p>
                        <div className="owl-slide-animated owl-slide-cta flex flex-col sm:flex-row gap-4">
                          <a 
                            className="btn_1 bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-block" 
                            href="all_tours_list.html" 
                            role="button"
                          >
                            {slide.cta1}
                          </a>
                          <a 
                            className="btn_1 outline bg-transparent border-2 border-white text-white hover:bg-white hover:text-amber-600 font-bold py-3 px-6 rounded-lg transition duration-300 inline-block" 
                            href="#featured-tours" 
                            role="button"
                          >
                            {slide.cta2}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-3 rounded-full hover:bg-opacity-50 transition z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-3 rounded-full hover:bg-opacity-50 transition z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentSlide ? 'bg-amber-500' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
        <div id="icon_drag_mobile"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="white_bg">
        <div className="margin_60">
          <div className="row small-gutters categories_grid">
            <div className="col-sm-12 col-md-6">
              <a href="all_tours_list.html" className="block relative group">
                <img src="/src/assets/img/img_cat_home_1.jpg" alt="" className="img-fluid w-full h-auto rounded-xl" />
                <div className="wrapper absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-xl flex flex-col justify-end p-6">
                  <h2 className="text-white text-3xl font-bold mb-2">Special Offers</h2>
                  <p className="text-white text-lg">1150 Locations</p>
                </div>
              </a>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="row small-gutters mt-md-0 mt-sm-2">
                <div className="col-sm-6">
                  <a href="all_tours_list.html" className="block relative group">
                    <img src="/src/assets/img/img_cat_home_2.jpg" alt="" className="img-fluid w-full h-auto rounded-xl" />
                    <div className="wrapper absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-xl flex flex-col justify-end p-4">
                      <h2 className="text-white text-2xl font-bold mb-1">Tours</h2>
                      <p className="text-white text-sm">800 Locations</p>
                    </div>
                  </a>
                </div>
                <div className="col-sm-6">
                  <a href="all_hotels_list.html" className="block relative group">
                    <img src="/src/assets/img/img_cat_home_3.jpg" alt="" className="img-fluid w-full h-auto rounded-xl" />
                    <div className="wrapper absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-xl flex flex-col justify-end p-4">
                      <h2 className="text-white text-2xl font-bold mb-1">Hotels</h2>
                      <p className="text-white text-sm">650 Locations</p>
                    </div>
                  </a>
                </div>
                <div className="col-sm-12 mt-sm-2">
                  <a href="all_restaurants_list.html" className="block relative group">
                    <img src="/src/assets/img/img_cat_home_4.jpg" alt="" className="img-fluid w-full h-auto rounded-xl" />
                    <div className="wrapper absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-xl flex flex-col justify-end p-4">
                      <h2 className="text-white text-2xl font-bold mb-1">Restaurants</h2>
                      <p className="text-white text-sm">1132 Locations</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="margin_60">
        <div className="main_title text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Featured <span className="text-amber-600">Tours</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Discover our most popular tours and experiences in Afghanistan
          </p>
        </div>

        <div className="owl-carousel owl-theme list_carousel tours_carousel add_bottom_30">
          <div className="item">
            <div className="tour_container bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-xl">
              <div className="ribbon_3 popular bg-amber-600 text-white"><span>Popular</span></div>
              <div className="img_container relative">
                <a href="single_tour.html">
                  <img src="/src/assets/img/tour_box_1.jpg" width="800" height="533" className="img-fluid w-full h-56 object-cover" alt="Arc Triomphe tour" />
                  <div className="short_info absolute bottom-0 left-0 bg-white bg-opacity-90 p-3 rounded-tr-xl">
                    <i className="icon_set_1_icon-44 text-amber-600"></i>Historic Buildings<span className="price text-amber-600 font-bold"><sup>$</sup>39</span>
                  </div>
                </a>
              </div>
              <div className="tour_title p-4">
                <h3 className="font-bold text-lg"><strong>Arc Triomphe</strong> tour</h3>
                <div className="rating flex items-center mt-2">
                  <i className="icon-smile voted text-amber-400"></i>
                  <i className="icon-smile voted text-amber-400"></i>
                  <i className="icon-smile voted text-amber-400"></i>
                  <i className="icon-smile voted text-amber-400"></i>
                  <i className="icon-smile text-gray-300"></i>
                  <small className="text-gray-500 ml-2">(75)</small>
                </div>
                <div className="wishlist mt-2">
                  <a className="tooltip_flip tooltip-effect-1 text-amber-600 hover:text-amber-700" href="javascript:void(0);" title="Add to wishlist">+
                    <span className="tooltip-content-flip">
                      <span className="tooltip-back">Add to wishlist</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="item">
            <div className="tour_container bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-xl">
              <div className="ribbon_3 popular bg-amber-600 text-white"><span>Popular</span></div>
              <div className="img_container relative">
                <a href="single_tour.html">
                  <img src="/src/assets/img/tour_box_2.jpg" width="800" height="533" className="img-fluid w-full h-56 object-cover" alt="Notredame tour" />
                  <div className="short_info absolute bottom-0 left-0 bg-white bg-opacity-90 p-3 rounded-tr-xl">
                    <i className="icon_set_1_icon-43 text-amber-600"></i>Churches<span className="price text-amber-600 font-bold"><sup>$</sup>45</span>
                  </div>
                </a>
              </div>
              <div className="tour_title p-4">
                <h3 className="font-bold text-lg"><strong>Notredame</strong> tour</h3>
                <div className="rating flex items-center mt-2">
                  <i className="icon-smile voted text-amber-400"></i>
                  <i className="icon-smile voted text-amber-400"></i>
                  <i className="icon-smile voted text-amber-400"></i>
                  <i className="icon-smile voted text-amber-400"></i>
                  <i className="icon-smile text-gray-300"></i>
                  <small className="text-gray-500 ml-2">(75)</small>
                </div>
                <div className="wishlist mt-2">
                  <a className="tooltip_flip tooltip-effect-1 text-amber-600 hover:text-amber-700" href="javascript:void(0);" title="Add to wishlist">+
                    <span className="tooltip-content-flip">
                      <span className="tooltip-back">Add to wishlist</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="item">
            <div className="tour_container bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-xl">
              <div className="ribbon_3 popular bg-amber-600 text-white"><span>Popular</span></div>
              <div className="img_container relative">
                <a href="single_tour.html">
                  <img src="/src/assets/img/tour_box_3.jpg" width="800" height="533" className="img-fluid w-full h-56 object-cover" alt="Versailles tour" />
                  <div className="badge_save absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-bold">Save<strong>30%</strong></div>
                  <div className="short_info absolute bottom-0 left-0 bg-white bg-opacity-90 p-3 rounded-tr-xl">
                    <i className="icon_set_1_icon-44 text-amber-600"></i>Historic Buildings<span className="price text-amber-600 font-bold"><sup>$</sup>48</span>
                  </div>
                </a>
              </div>
              <div className="tour_title p-4">
                <h3 className="font-bold text-lg"><strong>Versailles</strong> tour</h3>
                <div className="rating flex items-center mt-2">
                  <i className="icon-smile voted text-amber-400"></i>
                  <i className="icon-smile voted text-amber-400"></i>
                  <i className="icon-smile voted text-amber-400"></i>
                  <i className="icon-smile voted text-amber-400"></i>
                  <i className="icon-smile text-gray-300"></i>
                  <small className="text-gray-500 ml-2">(75)</small>
                </div>
                <div className="wishlist mt-2">
                  <a className="tooltip_flip tooltip-effect-1 text-amber-600 hover:text-amber-700" href="javascript:void(0);" title="Add to wishlist">+
                    <span className="tooltip-content-flip">
                      <span className="tooltip-back">Add to wishlist</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="item">
            <div className="tour_container bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-xl">
              <div className="ribbon_3 bg-sky-600 text-white"><span>Top rated</span></div>
              <div className="img_container relative">
                <a href="single_tour.html">
                  <img src="/src/assets/img/tour_box_4.jpg" width="800" height="533" className="img-fluid w-full h-56 object-cover" alt="Pompidue tour" />
                  <div className="badge_save absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-bold">Save<strong>20%</strong></div>
                  <div className="short_info absolute bottom-0 left-0 bg-white bg-opacity-90 p-3 rounded-tr-xl">
                    <i className="icon_set_1_icon-30 text-amber-600"></i>Walking tour<span className="price text-amber-600 font-bold"><sup>$</sup>36</span>
                  </div>
                </a>
              </div>
              <div className="tour_title p-4">
                <h3 className="font-bold text-lg"><strong>Pompidue</strong> tour</h3>
                <div className="rating flex items-center mt-2">
                  <i className="icon-smile voted text-amber-400"></i>
                  <i className="icon-smile voted text-amber-400"></i>
                  <i className="icon-smile voted text-amber-400"></i>
                  <i className="icon-smile voted text-amber-400"></i>
                  <i className="icon-smile text-gray-300"></i>
                  <small className="text-gray-500 ml-2">(75)</small>
                </div>
                <div className="wishlist mt-2">
                  <a className="tooltip_flip tooltip-effect-1 text-amber-600 hover:text-amber-700" href="javascript:void(0);" title="Add to wishlist">+
                    <span className="tooltip-content-flip">
                      <span className="tooltip-back">Add to wishlist</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="item">
            <div className="tour_container bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-xl">
              <div className="ribbon_3 bg-sky-600 text-white"><span>Top rated</span></div>
              <div className="img_container relative">
                <a href="single_tour.html">
                  <img src="/src/assets/img/tour_box_14.jpg" width="800" height="533" className="img-fluid w-full h-56 object-cover" alt="Tour Eiffel" />
                  <div className="short_info absolute bottom-0 left-0 bg-white bg-opacity-90 p-3 rounded-tr-xl">
                    <i className="icon_set_1_icon-28 text-amber-600"></i>Skyline tours<span className="price text-amber-600 font-bold"><sup>$</sup>42</span>
                  </div>
                </a>
              </div>
              <div className="tour_title p-4">
                <h3 className="font-bold text-lg"><strong>Tour Eiffel</strong> tour</h3>
                <div className="rating flex items-center mt-2">
                  <i className="icon-smile voted text-amber-400"></i>
                  <i className="icon-smile voted text-amber-400"></i>
                  <i className="icon-smile voted text-amber-400"></i>
                  <i className="icon-smile voted text-amber-400"></i>
                  <i className="icon-smile text-gray-300"></i>
                  <small className="text-gray-500 ml-2">(75)</small>
                </div>
                <div className="wishlist mt-2">
                  <a className="tooltip_flip tooltip-effect-1 text-amber-600 hover:text-amber-700" href="javascript:void(0);" title="Add to wishlist">+
                    <span className="tooltip-content-flip">
                      <span className="tooltip-back">Add to wishlist</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-center add_bottom_30">
          <a href="all_tours_list.html" className="btn_1 bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg inline-block transition">View all Tours</a>
        </p>

        <hr className="mt-5 mb-5" />

        <div className="main_title text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Featured <span className="text-amber-600">Hotels</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Discover our most recommended accommodations in Afghanistan
          </p>
        </div>

        <div className="owl-carousel owl-theme list_carousel hotels_carousel add_bottom_30">
          <div className="item">
            <div className="hotel_container bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-xl">
              <div className="ribbon_3 popular bg-amber-600 text-white"><span>Popular</span></div>
              <div className="img_container relative">
                <a href="single_hotel.html">
                  <img src="/src/assets/img/hotel_1.jpg" width="800" height="533" className="img-fluid w-full h-56 object-cover" alt="Park Hyatt Hotel" />
                  <div className="score absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-bold"><span>7.5</span>Good</div>
                  <div className="short_info hotel absolute bottom-0 left-0 bg-white bg-opacity-90 p-3 rounded-tr-xl">
                    <span className="price text-amber-600 font-bold"><sup>$</sup>59</span>
                  </div>
                </a>
              </div>
              <div className="hotel_title p-4">
                <h3 className="font-bold text-lg"><strong>Park Hyatt</strong> Hotel</h3>
                <div className="rating flex items-center mt-2">
                  <i className="icon-star voted text-amber-400"></i>
                  <i className="icon-star voted text-amber-400"></i>
                  <i className="icon-star voted text-amber-400"></i>
                  <i className="icon-star voted text-amber-400"></i>
                  <i className="icon-star-empty text-gray-300"></i>
                </div>
                <div className="wishlist mt-2">
                  <a className="tooltip_flip tooltip-effect-1 text-amber-600 hover:text-amber-700" href="#" title="Add to wishlist">+
                    <span className="tooltip-content-flip">
                      <span className="tooltip-back">Add to wishlist</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="item">
            <div className="hotel_container bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-xl">
              <div className="ribbon_3 popular bg-amber-600 text-white"><span>Popular</span></div>
              <div className="img_container relative">
                <a href="single_hotel.html">
                  <img src="/src/assets/img/hotel_2.jpg" width="800" height="533" className="img-fluid w-full h-56 object-cover" alt="Mariott Hotel" />
                  <div className="score absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-bold"><span>9.0</span>Superb</div>
                  <div className="short_info hotel absolute bottom-0 left-0 bg-white bg-opacity-90 p-3 rounded-tr-xl">
                    <span className="price text-amber-600 font-bold"><sup>$</sup>45</span>
                  </div>
                </a>
              </div>
              <div className="hotel_title p-4">
                <h3 className="font-bold text-lg"><strong>Mariott</strong> Hotel</h3>
                <div className="rating flex items-center mt-2">
                  <i className="icon-star voted text-amber-400"></i>
                  <i className="icon-star voted text-amber-400"></i>
                  <i className="icon-star voted text-amber-400"></i>
                  <i className="icon-star voted text-amber-400"></i>
                  <i className="icon-star-empty text-gray-300"></i>
                </div>
                <div className="wishlist mt-2">
                  <a className="tooltip_flip tooltip-effect-1 text-amber-600 hover:text-amber-700" href="#" title="Add to wishlist">+
                    <span className="tooltip-content-flip">
                      <span className="tooltip-back">Add to wishlist</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="item">
            <div className="hotel_container bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-xl">
              <div className="ribbon_3 bg-sky-600 text-white"><span>Top rated</span></div>
              <div className="img_container relative">
                <a href="single_hotel.html">
                  <img src="/src/assets/img/hotel_3.jpg" width="800" height="533" className="img-fluid w-full h-56 object-cover" alt="Lumiere Hotel" />
                  <div className="score absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-bold"><span>9.5</span>Superb</div>
                  <div className="short_info hotel absolute bottom-0 left-0 bg-white bg-opacity-90 p-3 rounded-tr-xl">
                    <span className="price text-amber-600 font-bold"><sup>$</sup>39</span>
                  </div>
                </a>
              </div>
              <div className="hotel_title p-4">
                <h3 className="font-bold text-lg"><strong>Lumiere</strong> Hotel</h3>
                <div className="rating flex items-center mt-2">
                  <i className="icon-star voted text-amber-400"></i>
                  <i className="icon-star voted text-amber-400"></i>
                  <i className="icon-star voted text-amber-400"></i>
                  <i className="icon-star voted text-amber-400"></i>
                  <i className="icon-star-empty text-gray-300"></i>
                </div>
                <div className="wishlist mt-2">
                  <a className="tooltip_flip tooltip-effect-1 text-amber-600 hover:text-amber-700" href="#" title="Add to wishlist">+
                    <span className="tooltip-content-flip">
                      <span className="tooltip-back">Add to wishlist</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="item">
            <div className="hotel_container bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-xl">
              <div className="ribbon_3 bg-sky-600 text-white"><span>Top rated</span></div>
              <div className="img_container relative">
                <a href="single_hotel.html">
                  <img src="/src/assets/img/hotel_4.jpg" width="800" height="533" className="img-fluid w-full h-56 object-cover" alt="Novelle Hotel" />
                  <div className="score absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-bold"><span>7.5</span>Good</div>
                  <div className="short_info hotel absolute bottom-0 left-0 bg-white bg-opacity-90 p-3 rounded-tr-xl">
                    <span className="price text-amber-600 font-bold"><sup>$</sup>45</span>
                  </div>
                </a>
              </div>
              <div className="hotel_title p-4">
                <h3 className="font-bold text-lg"><strong>Novelle</strong> Hotel</h3>
                <div className="rating flex items-center mt-2">
                  <i className="icon-star voted text-amber-400"></i>
                  <i className="icon-star voted text-amber-400"></i>
                  <i className="icon-star voted text-amber-400"></i>
                  <i className="icon-star voted text-amber-400"></i>
                  <i className="icon-star-empty text-gray-300"></i>
                </div>
                <div className="wishlist mt-2">
                  <a className="tooltip_flip tooltip-effect-1 text-amber-600 hover:text-amber-700" href="javascript:void(0);" title="Add to wishlist">+
                    <span className="tooltip-content-flip">
                      <span className="tooltip-back">Add to wishlist</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="item">
            <div className="hotel_container bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-xl">
              <div className="ribbon_3 bg-sky-600 text-white"><span>Top rated</span></div>
              <div className="img_container relative">
                <a href="single_hotel.html">
                  <img src="/src/assets/img/hotel_5.jpg" width="800" height="533" className="img-fluid w-full h-56 object-cover" alt="Louvre Hotel" />
                  <div className="score absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-bold"><span>8.0</span>Good</div>
                  <div className="short_info hotel absolute bottom-0 left-0 bg-white bg-opacity-90 p-3 rounded-tr-xl">
                    <span className="price text-amber-600 font-bold"><sup>$</sup>39</span>
                  </div>
                </a>
              </div>
              <div className="hotel_title p-4">
                <h3 className="font-bold text-lg"><strong>Louvre</strong> Hotel</h3>
                <div className="rating flex items-center mt-2">
                  <i className="icon-star voted text-amber-400"></i>
                  <i className="icon-star voted text-amber-400"></i>
                  <i className="icon-star voted text-amber-400"></i>
                  <i className="icon-star voted text-amber-400"></i>
                  <i className="icon-star-empty text-gray-300"></i>
                </div>
                <div className="wishlist mt-2">
                  <a className="tooltip_flip tooltip-effect-1 text-amber-600 hover:text-amber-700" href="#" title="Add to wishlist">+
                    <span className="tooltip-content-flip">
                      <span className="tooltip-back">Add to wishlist</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-center nopadding">
          <a href="all_hotels_list.html" className="btn_1 bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg inline-block transition">View all Hotels</a>
        </p>
      </div>

      <div className="white_bg">
        <div className="margin_60">
          <div className="main_title text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">Plan <span className="text-amber-600">Your Tour</span> Easily</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              We make your Afghanistan travel experience seamless and memorable
            </p>
          </div>
          <div className="row feature_home_2">
            <div className="col-md-4 text-center">
              <img src="/src/assets/img/adventure_icon_1.svg" alt="" width="75" height="75" className="mx-auto" />
              <h3 className="text-xl font-bold mt-4 mb-2">Itineraries studied in detail</h3>
              <p className="text-gray-600">Suscipit invenire petentium per in. Ne magna assueverit vel. Vix movet perfecto facilisis in, ius ad maiorum corrumpit, his esse docendi in.</p>
            </div>
            <div className="col-md-4 text-center">
              <img src="/src/assets/img/adventure_icon_2.svg" alt="" width="75" height="75" className="mx-auto" />
              <h3 className="text-xl font-bold mt-4 mb-2">Room and food included</h3>
              <p className="text-gray-600">Cum accusam voluptatibus at, et eum fuisset sententiae. Postulant tractatos ius an, in vis fabulas percipitur, est audiam phaedrum electram ex.</p>
            </div>
            <div className="col-md-4 text-center">
              <img src="/src/assets/img/adventure_icon_3.svg" alt="" width="75" height="75" className="mx-auto" />
              <h3 className="text-xl font-bold mt-4 mb-2">Everything organized</h3>
              <p className="text-gray-600">Integre vivendo percipitur eam in, graece suavitate cu vel. Per inani persius accumsan no. An case duis option est, pro ad fastidii contentiones.</p>
            </div>
          </div>

          <div className="banner_2 mt-12">
            <div className="wrapper d-flex align-items-center opacity-mask bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-8 md:p-12 text-white shadow-xl" data-opacity-mask="rgba(0, 0, 0, 0.3)" style={{backgroundColor: "rgba(0, 0, 0, 0.3)"}}>
              <div className="max-w-2xl">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">Your Perfect<br />Tour Experience</h3>
                <p className="text-lg md:text-xl mb-8 opacity-90">Experience the rich history, stunning landscapes, and warm hospitality of Afghanistan with our expertly crafted tours and accommodations.</p>
                <a href="all_tours_list.html" className="btn_1 bg-white text-black rounded hover:bg-amber-50 font-bold py-3 px-8 rounded-lg inline-block transition duration-300 transform hover:-translate-y-1 shadow-lg">Discover More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="margin_60">
        <div className="main_title text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Latest <span className="text-amber-600">Blog</span> News</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Discover stories, tips, and insights about traveling in Afghanistan
          </p>
        </div>

        <div className="row">
          <div className="col-lg-6 mb-6">
            <a className="box_news block bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-xl" href="blog.html">
              <figure className="relative">
                <img src="/src/assets/img/news_home_1.jpg" alt="" className="w-full h-64 object-cover" />
                <figcaption className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-lg">
                  <strong>28</strong>Dec
                </figcaption>
              </figure>
              <div className="p-6">
                <ul className="flex items-center text-gray-500 text-sm mb-3">
                  <li>Mark Twain</li>
                  <li className="mx-2">•</li>
                  <li>20.11.2017</li>
                </ul>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Pri oportere scribentur eu</h4>
                <p className="text-gray-600">Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse....</p>
              </div>
            </a>
          </div>
          <div className="col-lg-6 mb-6">
            <a className="box_news block bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-xl" href="blog.html">
              <figure className="relative">
                <img src="/src/assets/img/news_home_2.jpg" alt="" className="w-full h-64 object-cover" />
                <figcaption className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-lg">
                  <strong>28</strong>Dec
                </figcaption>
              </figure>
              <div className="p-6">
                <ul className="flex items-center text-gray-500 text-sm mb-3">
                  <li>Jhon Doe</li>
                  <li className="mx-2">•</li>
                  <li>20.11.2017</li>
                </ul>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Duo eius postea suscipit ad</h4>
                <p className="text-gray-600">Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse....</p>
              </div>
            </a>
          </div>
          <div className="col-lg-6 mb-6">
            <a className="box_news block bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-xl" href="blog.html">
              <figure className="relative">
                <img src="/src/assets/img/news_home_3.jpg" alt="" className="w-full h-64 object-cover" />
                <figcaption className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-lg">
                  <strong>28</strong>Dec
                </figcaption>
              </figure>
              <div className="p-6">
                <ul className="flex items-center text-gray-500 text-sm mb-3">
                  <li>Luca Robinson</li>
                  <li className="mx-2">•</li>
                  <li>20.11.2017</li>
                </ul>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Elitr mandamus cu has</h4>
                <p className="text-gray-600">Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse....</p>
              </div>
            </a>
          </div>
          <div className="col-lg-6 mb-6">
            <a className="box_news block bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-xl" href="blog.html">
              <figure className="relative">
                <img src="/src/assets/img/news_home_4.jpg" alt="" className="w-full h-64 object-cover" />
                <figcaption className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-lg">
                  <strong>28</strong>Dec
                </figcaption>
              </figure>
              <div className="p-6">
                <ul className="flex items-center text-gray-500 text-sm mb-3">
                  <li>Paula Rodrigez</li>
                  <li className="mx-2">•</li>
                  <li>20.11.2017</li>
                </ul>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Id est adhuc ignota delenit</h4>
                <p className="text-gray-600">Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse....</p>
              </div>
            </a>
          </div>
        </div>
        <p className="btn_home_align text-center">
          <a href="blog.html" className="btn_1 rounded bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg inline-block transition">View all news</a>
        </p>
      </div>
      </div>
    </Layout>
  );
};

export default Home;