import React from "react";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";
import client6 from "../assets/client6.png";
import organizations from "../assets/organizations.png";
import associations from "../assets/associations.png";
import clubs from "../assets/clubs.png";

const logos = [client1, client2, client4, client5, client6];

const services = [
  {
    id: 1,
    title: "Membership Organisations",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
    img: organizations,
  },
  {
    id: 2,
    title: "National Associations",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
    img: associations,
  },
  {
    id: 3,
    title: "Clubs and Groups",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
    img: clubs,
  },
];

const Services = () => {
  return (
    <section className="container" id="service">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Our Clients
        </h2>
        <p className="text-neutralGrey">
          We have been working with some Fortune 500+ clients
        </p>
        {/* company logos */}
        <div className="flex flex-wrap my-12 justify-between items-center gap-8">
          {logos.map((logo) => (
            <img key={logo} src={logo} alt="logo" />
          ))}
        </div>
        {/* Services card */}
        <div className="mt-20 md:w-1/2 mx-auto text-center">
          <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
            We Manage entire community in a single system
          </h2>
        </div>
        {/* card */}
        <div className="mt-14 grid lg:grid-cols-3 mx-auto  md:grid-cols-2 grid-cols-1 md:w-11/12 gap-12">
          {services.map((service) => (
            <>
              <div
                className="px-4 py-8 text-center  md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer flex items-center justify-center"
                key={service.id}
              >
                <div>
                  <div className="bg-[#E8F5E9] h-14 w-14 mx-auto  rounded-full flex justify-center items-center">
                    <img src={service.img} alt="service" />
                  </div>
                  <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
                    {service.title}
                  </h4>
                  <p className="text-sm text-neutralGrey">
                    {service.description}
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
