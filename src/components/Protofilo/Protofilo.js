import React, { useEffect, useState } from "react";
import "./Protofilo.css";
import image0 from "../image/main.jpg";
import image1 from "../image/1.jpg";
import image2 from "../image/2.jpg";
import image3 from "../image/3.jpg";
import image0RealEstate from "../image/realEstate1.jpg";
import image1RealEstate from "../image/realEstate2.jpg";
import image2RealEstate from "../image/realEstate3.jpg";
import image3RealEstate from "../image/realEstate4.jpg";
import image4RealEstate from "../image/realEstate5.jpg";
import image5RealEstate from "../image/realEstate6.jpg";
import image6RealEstate from "../image/realEstate7.jpg";
import image7RealEstate from "../image/realEstate8.jpg";
import image8RealEstate from "../image/realEstate9.jpg";
import image9RealEstate from "../image/realEstate10.jpg";
import image10RealEstate from "../image/realEstate11.jpg";
import image11RealEstate from "../image/realEstate12.jpg";
import image12RealEstate from "../image/realEstate13.jpg";
import image13RealEstate from "../image/realEstate14.jpg";
import image44 from "../image/4.jpg";
import image55 from "../image/5.jpg";
import image66 from "../image/6.jpg";
import image77 from "../image/7.jpg";
import image88 from "../image/8.jpg";
import image99 from "../image/9.jpg";
import image1010 from "../image/10.jpg";
import image1111 from "../image/11.jpg";
import image1212 from "../image/12.jpg";
import image4 from "../../image/photo_2023-12-05_21-59-26.jpg";
import image5 from "../../image/photo_2023-09-24_15-10-48.jpg";
import image7 from "../../image/facebook.jpg";
import image8 from "../../image/photo_2023-08-26_13-31-40.jpg";
import image9 from "../image/baytii.jpg";
import image10 from "../../image/landing1.jpg";
import image11 from "../../image/landing2.jpg";
import image12 from "../../image/photo_2023-06-01_11-43-30.jpg";
import { Element } from "react-scroll";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgZoom from "lightgallery/plugins/zoom";

const Protofilo = () => {
  const [activebtn, setactivebtn] = useState(true);
  return (
    <Element name="Portfolio">
      <section className="Protofilo">
        <h5>My Recent Works</h5>
        <h2>Portfolio</h2>

        {activebtn && (
          <div className="container protofilo_container">
            <article className="Protofilo_item">
              <div className="Protofilo_item-image">
                <LightGallery
                  // onInit={onInit}
                  className="gallery"
                  speed={500}
                  plugins={[lgThumbnail, lgZoom, lgFullscreen]}
                >
                  <a href={image0}>
                    <img alt="Home Page in English" src={image0} />
                  </a>
                  <a href={image1} style={{ display: "none" }}>
                    <img alt="Login Page" src={image1} />
                  </a>
                  <a href={image2} style={{ display: "none" }}>
                    <img alt="Home Page in Arabic" src={image2} />
                  </a>
                  <a href={image3} style={{ display: "none" }}>
                    <img alt="Home Page in English" src={image3} />
                  </a>
                  <a href={image44} style={{ display: "none" }}>
                    <img alt="Products List Page Skeleton" src={image44} />
                  </a>
                  <a href={image55} style={{ display: "none" }}>
                    <img alt="Products List Page" src={image55} />
                  </a>
                  <a href={image66} style={{ display: "none" }}>
                    <img alt="Products List Page" src={image66} />
                  </a>
                  <a href={image77} style={{ display: "none" }}>
                    <img alt="Add Product Page" src={image77} />
                  </a>
                  <a href={image88} style={{ display: "none" }}>
                    <img alt="Categories List Page" src={image88} />
                  </a>
                  <a href={image99} style={{ display: "none" }}>
                    <img alt="Sub Categories List" src={image99} />
                  </a>
                  <a href={image1010} style={{ display: "none" }}>
                    <img alt="Add Category Page" src={image1010} />
                  </a>
                  <a href={image1111} style={{ display: "none" }}>
                    <img alt="Home Images List" src={image1111} />
                  </a>
                  <a href={image1212} style={{ display: "none" }}>
                    <img alt="Users List" src={image1212} />
                  </a>
                </LightGallery>
              </div>
              <h3>E-commerce Dashboard</h3>
              <p
                style={{
                  fontSize: "15px",
                  opacity: "0.5",
                }}
              >
                Click to view the site
              </p>
            </article>

            <article className="Protofilo_item">
              <div className="Protofilo_item-image">
                <a href="https://baytii.com/" target="_blank">
                  <img src={image9} alt="" />
                </a>
              </div>
              <h3>Baytii - Real Estate Application</h3>
              <p
                style={{
                  fontSize: "15px",
                  opacity: "0.5",
                }}
              >
                Click to visit the site
              </p>
            </article>

            <article className="Protofilo_item">
              <div className="Protofilo_item-image">
                <a href="http://154.62.109.112:3000/" target="_blank">
                  <img src={image4} alt="" />
                </a>
              </div>
              <h3>Wabel E-commerce</h3>
              <p
                style={{
                  fontSize: "15px",
                  opacity: "0.5",
                }}
              >
                Click to visit the site
              </p>
            </article>

            <article className="Protofilo_item">
              <div className="Protofilo_item-image">
                <LightGallery
                  // onInit={onInit}
                  className="gallery"
                  speed={500}
                  plugins={[lgThumbnail, lgZoom, lgFullscreen]}
                >
                  <a href={image0RealEstate}>
                    <img alt="Home Page in English" src={image0RealEstate} />
                  </a>
                  <a href={image1RealEstate} style={{ display: "none" }}>
                    <img alt="Real Estates List Page" src={image1RealEstate} />
                  </a>
                  <a href={image2RealEstate} style={{ display: "none" }}>
                    <img alt="Add Real Estate Page" src={image2RealEstate} />
                  </a>
                  <a href={image3RealEstate} style={{ display: "none" }}>
                    <img alt="Add Real Estate Page" src={image3RealEstate} />
                  </a>
                  <a href={image4RealEstate} style={{ display: "none" }}>
                    <img
                      alt="Add News Page"
                      src={image4RealEstate}
                    />
                  </a>
                  <a href={image5RealEstate} style={{ display: "none" }}>
                    <img alt="Advertise a Property Skeleton Page" src={image5RealEstate} />
                  </a>
                  <a href={image6RealEstate} style={{ display: "none" }}>
                    <img alt="Advertise a Property Page" src={image6RealEstate} />
                  </a>
                  <a href={image7RealEstate} style={{ display: "none" }}>
                    <img alt="Customer Reviews Page" src={image7RealEstate} />
                  </a>
                  <a href={image8RealEstate} style={{ display: "none" }}>
                    <img alt="Add Area Modal for Project" src={image8RealEstate} />
                  </a>
                  <a href={image9RealEstate} style={{ display: "none" }}>
                    <img alt="Add Project Page" src={image9RealEstate} />
                  </a>
                  <a href={image10RealEstate} style={{ display: "none" }}>
                    <img alt="Users List Page" src={image10RealEstate} />
                  </a>
                  <a href={image11RealEstate} style={{ display: "none" }}>
                    <img alt="Ads List Page" src={image11RealEstate} />
                  </a>
                  <a href={image12RealEstate} style={{ display: "none" }}>
                    <img alt="Current Ads List" src={image12RealEstate} />
                  </a>
                  <a href={image13RealEstate} style={{ display: "none" }}>
                    <img alt="Add Service Page" src={image13RealEstate} />
                  </a>
                </LightGallery>
              </div>
              <h3>Real Estates Dashboard</h3>
              <p
                style={{
                  fontSize: "15px",
                  opacity: "0.5",
                }}
              >
                Click to view the site
              </p>
            </article>

            <article className="Protofilo_item">
              <div className="Protofilo_item-image">
                <a href="http://154.62.109.112:3050/" target="_blank">
                  <img src={image8} alt="" />
                </a>
              </div>
              <h3>Afia App</h3>
              <p
                style={{
                  fontSize: "15px",
                  opacity: "0.5",
                }}
              >
                Click to visit the site
              </p>
            </article>

            <article className="Protofilo_item">
              <div className="Protofilo_item-image">
                <a
                  href="https://saeed-qujjah.github.io/KFC-website/"
                  target="_blank"
                >
                  <img src={image5} alt="" />
                </a>
              </div>
              <h3>KFC WebSite</h3>
              <p
                style={{
                  fontSize: "15px",
                  opacity: "0.5",
                }}
              >
                Click to visit the site
              </p>
            </article>
            {/* <article className="Protofilo_item">
              <div className="Protofilo_item-image">
                <a
                  href="https://saeedkoja.github.io/Landing_page1/"
                  target="_blank"
                >
                  <img src={image11} alt="" />
                </a>
              </div>
              <h3>Landing page1</h3>
              <p
                style={{
                  fontSize: "15px",
                  opacity: "0.5",
                }}
              >
                Click to visit the site
              </p>
            </article> */}

            {/* <article className="Protofilo_item">
              <div className="Protofilo_item-image">
                <a
                  href="https://saeedkoja.github.io/Landing_page2/"
                  target="_blank"
                >
                  <img src={image10} alt="" />
                </a>
              </div>
              <h3>Landing page2</h3>
              <p
                style={{
                  fontSize: "15px",
                  opacity: "0.5",
                }}
              >
                Click to visit the site
              </p>
            </article> */}

            {/* <article className="Protofilo_item">
              <div className="Protofilo_item-image">
                <a href="http://recruitment.alyousser.com/" target="_blank">
                  <img src={image12} alt="" />
                </a>
              </div>
              <h3>HR WebSite</h3>
              <p
                style={{
                  fontSize: "15px",
                  opacity: "0.5",
                }}
              >
                Click to visit the site
              </p>
            </article> */}

            <article className="Protofilo_item">
              <div className="Protofilo_item-image">
                <a href={image7} target="_blank">
                  <img src={image7} alt="" />
                </a>
              </div>
              <h3>Small Social Media App</h3>
              <p
                style={{
                  fontSize: "15px",
                  opacity: "0.5",
                }}
              >
                Click to view the design
              </p>
            </article>
          </div>
        )}
      </section>
    </Element>
  );
};

export default Protofilo;
