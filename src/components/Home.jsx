import React from "react";
// import { Carousel } from "flowbite-react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../assets/banner1.png";

const Home = () => {
  return (
    <section className="bg-neutralSilver" id="home">
      <div className="container min-h-screen h-screen">
        <Carousel className="w-full mx-auto">
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner1} alt="" />
            </div>
            <div className="md:w-1/2 text-start max-md:hidden">
              <h1 className="text-5xl max-sm:text-4xl max-sm:whitespace-normal font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug whitespace-nowrap">
                Lessons and insights <br />
                <span className="text-primary leading-snug">from 8 years</span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Where you can learn and grow your skils
              </p>
              <button>Register</button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner1} alt="" />
            </div>
            <div className="md:w-1/2 text-start max-md:hidden ">
              <h1 className="text-5xl max-sm:text-4xl max-sm:whitespace-normal font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug whitespace-nowrap">
                Lessons and insights <br />
                <span className="text-primary leading-snug">from 8 years</span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Where you can learn and grow your skils
              </p>
              <button>Register</button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner1} alt="" />
            </div>
            <div className="md:w-1/2 text-start max-md:hidden">
              <h1 className="text-5xl max-sm:text-4xl max-sm:whitespace-normal font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug whitespace-nowrap">
                Lessons and insights <br />
                <span className="text-primary leading-snug">from 8 years</span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Where you can learn and grow your skils
              </p>
              <button>Register</button>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Home;
