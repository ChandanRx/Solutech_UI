import React from 'react';

const Services = () => {
  const cards = [
    {
      img: "https://www.sweetprocess.com/wp-content/uploads/2024/03/file.jpg",
      title: "Startups & Founders",
      desc: "Launch quickly with tools that scale as you grow. Solutech simplifies the journey."
    },
    {
      img: "https://assetdigitalcom.com/wp-content/uploads/2023/05/B2B-Digital-Marketing-Agency-scaled.jpeg",
      title: "Marketing Agencies",
      desc: "Deliver stunning digital experiences with zero dev overhead. Efficiency meets creativity."
    },
    {
      img: "https://cdn.prod.website-files.com/619c916dd7a3fa284adc0b27/65fb02b7bd986196ec31eb5b_a0727440-011c-48a9-817a-c4b541e72f09.png",
      title: "SMBs & Enterprises",
      desc: "Robust infrastructure and customization options designed for long-term performance."
    },
  ];

  return (
    <section className="w-full min-h-screen px-4 sm:px-6 md:px-12 lg:px-20 py-20 bg-gradient-to-br from-purple-800 via-purple-600 to-pink-500 text-white font-[Poppins]" id="services">
      <div className="text-center max-w-3xl mx-auto mb-16 px-2 sm:px-4">
        <p className="uppercase text-pink-200 tracking-wide font-semibold text-sm mb-2">Customers</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Built for teams that build the future
        </h2>
        <p className="text-purple-200 text-sm sm:text-md md:text-lg">
          Solutech serves startups, agencies, and enterprises looking for powerful yet elegant tech solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-[1440px] mx-auto">
        {cards.map((item, index) => (
          <div
            key={index}
            className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-[1.03] hover:shadow-2xl"
          >
            <div className="overflow-hidden">
              <img
                src={item.img}
                alt={`card-${index}`}
                className="w-full h-52 sm:h-56 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-5 sm:p-6 text-left text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm sm:text-base text-purple-100 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
