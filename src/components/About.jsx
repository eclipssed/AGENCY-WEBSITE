import React from "react";
import banner3 from "../assets/banner3.png";
import payments from "../assets/payments.png";
import members from "../assets/members.png";
import clubs from "../assets/clubs.png";
import eventBookings from "../assets/eventBookings.png";

const About = () => {
  return (
    <section className="">
      {/* about text */}
      <div className="container my-32" id="feature">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img src={banner3} alt="" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              We focus on practical not on theroy
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
      {/* company stats */}
      <div className="container bg-neutralSilver py-16 ">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 ">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              We have a big team
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              We reached here with our hard work and dedication
            </p>
          </div>
          {/* stats */}
          <div className="md:w-1/2 mx-auto  flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src={members} alt="" />
                <div>
                  <h4 className="text-2xl font-semibold text-neutralDGrey">
                    2,245,341
                  </h4>
                  <p>Members</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src={clubs} alt="" />
                <div>
                  <h4 className="text-2xl font-semibold text-neutralDGrey">
                    46
                  </h4>
                  <p>Branches</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src={eventBookings} alt="" />
                <div>
                  <h4 className="text-2xl font-semibold text-neutralDGrey">
                    828,867
                  </h4>
                  <p>Event Bookings</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src={payments} alt="" />
                <div>
                  <h4 className="text-2xl font-semibold text-neutralDGrey">
                    1,926,436
                  </h4>
                  <p>Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
