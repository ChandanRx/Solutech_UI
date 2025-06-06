import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCube,
  faRocket,
  faShieldAlt,
  faBriefcase
} from '@fortawesome/free-solid-svg-icons';
import {
  faWebflow,
  faGithub,
  faGoogle,
  faMicrosoft,
  faAmazon,
  faFacebook,
  faSlack,
  faSpotify,
  faSalesforce
} from '@fortawesome/free-brands-svg-icons';

const Sliders = () => {
  const logos = [
    { icon: faWebflow, name: 'Webflow' },
    { icon: faGithub, name: 'GitHub' },
    { icon: faGoogle, name: 'Google' },
    { icon: faMicrosoft, name: 'Microsoft' },
    { icon: faAmazon, name: 'Amazon' },
    { icon: faFacebook, name: 'Facebook' },
    { icon: faSlack, name: 'Slack' },
    { icon: faSpotify, name: 'Spotify' },
    { icon: faSalesforce, name: 'Salesforce' },
    { icon: faCube, name: 'Relume' },
    { icon: faRocket, name: 'Launchify' },
    { icon: faShieldAlt, name: 'SecureTech' },
    { icon: faBriefcase, name: 'WorkZone' }
  ];

  // Repeat logos to enable infinite scrolling
  const repeatedLogos = Array(4).fill(logos).flat();

  return (
    <section className="min-h-screen flex flex-col justify-center bg-gradient-to-r from-pink-500 via-purple-500 to-purple-700 overflow-hidden relative px-4 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold font-[Poppins] mb-4">
          Trusted by Innovative Teams
        </h2>
        <p className="text-purple-200 text-base sm:text-lg md:text-xl font-medium font-[Poppins] max-w-2xl mx-auto">
          Industry leaders rely on Solutech to deliver scalable, secure, and high-performing software solutions.
        </p>
      </div>

      {/* Scrolling Logos */}
      <div className="w-full overflow-hidden">
        <div className="flex w-max animate-scroll-left space-x-12 items-center">
          {repeatedLogos.map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-1 text-white min-w-[100px]">
              <FontAwesomeIcon icon={item.icon} className="text-3xl sm:text-4xl" />
              <span className="text-xs sm:text-sm font-medium font-[Poppins]">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animation */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Sliders;
