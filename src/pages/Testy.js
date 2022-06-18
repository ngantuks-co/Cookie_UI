import React from "react";
// Icons
import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

const Testy = () => {
  return (
    <div>
      <div className="container">
        {/* Testimonial */}
        <div className="mt-5">
          <h3 className="text-center mb-5">
            <i>Testimonial</i>
          </h3>

          {/* carousel */}
          <div id="carouselExampleIndicators" class="carousel slide py-3" style={{ height: "290px" }} data-bs-ride="true">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active bg-secondary" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" className="bg-secondary"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" className="bg-secondary"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4" className="bg-secondary"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5" className="bg-secondary"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6" className="bg-secondary"></button>
            </div>
            <div class="carousel-inner text-center">
              <div class="carousel-item active text-secondary fs-5 ">
                <p>"Great service & selection, perfect for last minute gifts as well with their same-day delivery! The lemon tart is always a hit!"</p>
                <p className="fw-bold pt-3 text-dark">Rebecca Jo-Rushdy (Google reviews)</p>
              </div>
              <div class="carousel-item text-secondary fs-5">
                <p>"Delicate and scrumptious. Definitely top-notch dessert in Msia. Will order again for future occasions!"</p>
                <p className="fw-bold pt-3 text-dark">Siaujuen Chin (Google Review)</p>
              </div>
              <div class="carousel-item text-secondary fs-5">
                <p>
                  "Lacher Patisserie is my go to place when i need a reliable birthday cake provider. I ordered the jivarra mousse cake twice and hazelnut praline twice over the span of 8 months (so many birthdays during MCO period!). The
                  cakes look good, simple and classy. Perfect for a small and intimate bday celebration. Well done!"
                </p>
                <p className="fw-bold pt-3 text-dark">Dirk WD (Google Review)</p>
              </div>
              <div class="carousel-item text-secondary fs-5">
                <p>
                  "I trust them with the quality of patisseries (HALAL & REAL FINEST INGREDIENT) and delivery. Definitely if you are looking for a true gourmand, they know how to be creative with their desserts and understand how they
                  travel to your doorstop. Whatever you see on their website THAT is exactly what you will get and more."
                </p>
                <p className="fw-bold pt-3 text-dark">Adeline Soo (Google Review)</p>
              </div>
              <div class="carousel-item text-secondary fs-5">
                <p>
                  "This is one of the best bakers in KL! My favourite is their valrhona cakes (hazelnut & raspberry) and the gateau fromage (which is basically a cheesecake) is awesome too! Their mini desserts are great if you want it for a
                  small number of people and want to try all the different types of cakes they have."
                </p>
                <p className="fw-bold pt-3 text-dark">Julie Lee (Google Review)</p>
              </div>
              <div class="carousel-item text-secondary fs-5">
                <p>
                  "the cake was delivered to me as a gift and when I had my first bite on it I was OMG how come I never heard of this shop!! the pastry is superb and being a fussy dessert eater, their pastry is one of the best in kl. better
                  than those 5 star dining places. really amazing"
                </p>
                <p className="fw-bold pt-3 text-dark">Siaujuen Chin (Google Review)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Blog */}
        <div>
          <h3 className="text-center mt-5">
            <i>From the blog</i>
          </h3>
          {/* blog-card */}
          <div className="mt-5 d-md-flex gap-5">
            <div className="fs-5 w-100 mb-sm-5">
              <img src="https://cdn.shopify.com/s/files/1/0040/2305/8561/articles/cny-wishes_600x.jpg?v=1641350220" alt="blog1" className="w-100" />
              <h5 className="py-4">25 Chinnese New Year Whishes in Chinese & English for CNY 2022!</h5>
              <p>One of the best ways to send your family and friends your good blessings for the year 2022 is of course, through words of encouragement,...</p>
              <a href="#" className="text-secondary">
                Read more
              </a>
            </div>

            <div className="fs-5 w-100">
              <img src="https://cdn.shopify.com/s/files/1/0040/2305/8561/articles/2021-christmas-edition-slider_1200x.jpg?v=1639814151" alt="blog2" className="w-100" />
              <h5 className="py-4">2 captivating 2021 Christmas cakes that will WOW your friends and family!</h5>
              <p>Don't you think it's time to spice up your Christmas dessert table with something new, fresh, and jaw-dropping all at the same time? We do!...</p>
              <a href="#" className="text-secondary">
                Read more
              </a>
            </div>
          </div>
          <div className="text-center mt-4">
            <button className="py-3 px-5 border-0 text-white bg-secondary fs-5">View all</button>
          </div>
        </div>
      </div>

      {/* footer */}
      <div style={{ backgroundColor: "#FFF7B2" }}>
        <div className="container py-5 text-secondary fs-5 mt-5">
          <div className="row ">
            <div className="col">
              <p className="fw-bold">Lachér Patisserie</p>
              <p style={{ textAlign: "justify" }}>
                We serve quality French desserts in Malaysia. All our cakes are professionally made from scratch using only the finest halal ingredients. We provide same-day delivery to KL and Selangor (T&Cs apply).
              </p>
            </div>
            <div className="col">
              <p className="fw-bold">Follow Our Socials</p>
              <div className="fs-2">
                <AiFillFacebook />
                <AiOutlineInstagram className="mx-2" />
                <FaTiktok className="fs-4" />
              </div>
            </div>
            <div className="col">
              <p className="fw-bold">Quick Links</p>
              <a href="#" className="text-decoration-none text-secondary d-block">
                Same Day Cake & Dessert Delivery
              </a>
              <a href="#" className="text-decoration-none text-secondary d-block pt-2">
                Free Delivery to KL & Selangor (Min Amount Spend)
              </a>
              <a href="#" className="text-decoration-none text-secondary d-block pt-2">
                Our Store Location (For Pickup Only)
              </a>
              <a href="#" className="text-decoration-none text-secondary d-block pt-2">
                Allergen and Diet Information
              </a>
              <a href="#" className="text-decoration-none text-secondary d-block pt-2">
                FAQ
              </a>
              <a href="#" className="text-decoration-none text-secondary d-block pt-2">
                Blogs
              </a>
              <a href="#" className="text-decoration-none text-secondary d-block pt-2">
                Join Our Team
              </a>
              <a href="#" className="text-decoration-none text-secondary d-block pt-2">
                Contact Us
              </a>
              <a href="#" className="text-decoration-none text-secondary d-block pt-2">
                Delivery/Refund/Cancellation Policy
              </a>
              <a href="#" className="text-decoration-none text-secondary d-block pt-2">
                Terms of Service
              </a>
              <a href="#" className="text-decoration-none text-secondary d-block pt-2">
                Privacy Policy
              </a>
            </div>
            <div className="col">
              <p className="fw-bold">Be In The Know</p>
              <p style={{ textAlign: "justify" }}>Join our mailing list for updates on new product launches and seasonal specials!</p>
              <input type="email" className="py-3 px-4" placeholder="Enter Email" style={{ backgroundColor: "#FFF7B2", outline: "none", width: "70%" }} />
              <FiChevronRight className="fs-2 ms-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testy;
