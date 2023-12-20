import React from "react";
import banner2 from "../assets/banner2.png";
import banner4 from "../assets/banner4.png";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";
import client6 from "../assets/client6.png";

const logos = [client1, client2, client4, client5, client6];

const Products = () => {
  return (
    <section>
      <div className="container my-32" id="product">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img src={banner2} alt="" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              How to design your site and apps in few months
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
            <button>Learn More</button>
          </div>
        </div>
        <div className="container my-16">
          <div className="flex flex-col md:flex-row gap-16 justify-center items-center">
            <div>
              <img src={banner4} alt="" />
            </div>
            <div className="flex flex-col md:w-2/3" id="testimonial">
              <p className="mb-4 text-neutralDGrey">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
                eu enim metus. Vivamus sed libero ornare, tristique quam in,
                gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                laoreet elit at ligula molestie, nec molestie mi blandit.
                Suspendisse cursus tellus sed augue ultrices, quis tristique
                nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                eget efficitur libero condimentum id. Curabitur id nibh id sem
                dignissim finibus ac sit amet magna.
              </p>
              <h4 className="text-2xl font-semibold text-primary mb-4">
                Tim Smith
              </h4>
              <p className="text-neutralDGrey mb-4">
                British Dragon Boat Racing Association
              </p>
              <div className="flex items-center flex-wrap gap-8">
                {logos.map((logo) => (
                  <div>
                    <img src={logo} alt="logo" />
                  </div>
                ))}
                <a
                  href="/"
                  className="text-primary text-lg font-bold hover:text-neutralDGrey"
                >
                  Meet all customers
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
