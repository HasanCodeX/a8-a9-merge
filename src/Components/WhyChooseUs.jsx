// WhyChooseUs.jsx
import React from "react";
import { FaCheckCircle, FaUserFriends, FaCalendarAlt, FaShieldAlt } from "react-icons/fa";

const benefits = [
  {
    icon: <FaCalendarAlt />,
    title: "Curated Events",
    desc: "Find high-quality, handpicked events tailored for your interest.",
  },
  {
    icon: <FaUserFriends />,
    title: "Community Driven",
    desc: "Connect with fellow attendees and organizers.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Verified Listings",
    desc: "All events are screened to ensure legitimacy.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Easy Booking",
    desc: "Register and attend events with a few simple clicks.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Event Explorer?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {benefits.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="text-4xl text-blue-600 mb-4 mx-auto">{item.icon}</div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
