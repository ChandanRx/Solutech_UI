import React from 'react';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Wick",
      company: "Continental Inc.",
      testimonial: "Absolutely fantastic experience! The team was very responsive and the product exceeded my expectations.",
      img: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Jack Sparrow",
      company: "Pirates Inc.",
      testimonial: "Their innovative approach helped streamline our processes and improve collaboration.",
      img: "https://randomuser.me/api/portraits/men/45.jpg"
    }
  ];

  return (
    <section className="w-full min-h-screen px-6 md:px-20 py-24 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 text-white font-[Poppins]" id="testimonials">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Customer Testimonials</h1>
        <p className="text-purple-200 text-lg">
          Hear from our happy customers who transformed their business with Solutech.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {testimonials.map(({ name, company, testimonial, img }, i) => (
          <div
            key={i}
            className="bg-white/20 backdrop-blur-md rounded-xl shadow-xl p-8 flex flex-col gap-6 transition-transform hover:scale-[1.03]"
          >
            <div className="flex space-x-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="text-white text-base italic leading-relaxed">"{testimonial}"</p>
            <div className="flex items-center gap-4">
              <img
                src={img}
                alt={name}
                className="w-14 h-14 rounded-full border-2 border-white object-cover"
              />
              <div>
                <h3 className="font-semibold">{name}</h3>
                <p className="text-purple-200 text-sm">{company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
