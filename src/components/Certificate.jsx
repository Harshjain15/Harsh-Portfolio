import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import certificate from "../assets/certificate.json";



const Certificate = () => {
  return (
    <div id="work">
      <h2>Certificate</h2>
      <section>
        <article>
          <Carousel
            showArrows={true}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            interval={1500}
            infiniteLoop={true}
            autoPlay={true}
          >
            {certificate.projects.map((i) => (
              <div key={i.title} className="workItem">
                <img src={i.imgSrc} alt={i.title} />
                <aside>
                  <h3>{i.title}</h3>
                  <p>{i.description}</p>
                  {/* <a target={"blank"} href={i.url}>
                    View Demo                             This is for the Demo
                  </a> */}
                </aside>
              </div>
            ))}
          </Carousel>
        </article>
      </section>
    </div>
  );
};

export default Certificate;
