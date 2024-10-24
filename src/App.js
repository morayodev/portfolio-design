// import React, { useState } from "react";
// import { Phone, Clock, Award, Users, MessageCircle, Menu, X, ChevronRight, Map, Mail } from "lucide-react";

// // Navigation Component
// const Navigation = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinks = [
//     { name: "HOME", href: "#" },
//     { name: "ABOUT", href: "#" },
//     { name: "RESIDENTIAL PLUMBING", href: "#" },
//     { name: "COMMERCIAL PLUMBING", href: "#" },
//     { name: "DRAIN CLEANING", href: "#" },
//     { name: "OTHER SERVICES", href: "#" },
//     { name: "CONTACT", href: "#" },
//   ];

//   return (
//     <header className="bg-white shadow-sm fixed w-full z-50">
//       <div className="container mx-auto">
//         <div className="flex justify-between items-center py-3 px-4">
//           <div className="flex items-center space-x-8">
//             <div className="text-2xl font-bold text-orange-500">PLUMBING</div>
//             <nav className="hidden lg:flex space-x-6">
//               {navLinks.map((link) => (
//                 <a key={link.name} href={link.href} className="text-sm font-medium text-gray-700 hover:text-orange-500">
//                   {link.name}
//                 </a>
//               ))}
//             </nav>
//           </div>

//           <div className="flex items-center space-x-4">
//             <div className="hidden md:block text-right">
//               <div className="text-sm text-gray-500">EMERGENCY SERVICE</div>
//               <div className="text-lg font-bold text-gray-800">800-123-4567</div>
//             </div>
//             <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors">
//               Schedule Service
//             </button>
//             <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
//               {isOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {isOpen && (
//         <div className="lg:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-500"
//               >
//                 {link.name}
//               </a>
//             ))}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// // Hero Section Component
// const Hero = () => {
//   return (
//     <section className="relative bg-gray-800 text-white pt-24">
//       <div className="absolute inset-0  bg-cover bg-center opacity-50" />
//       <div className="relative container mx-auto px-4 py-24">
//         <div className="max-w-3xl">
//           <h1 className="text-4xl md:text-6xl font-bold mb-6">
//             WE ARE AVAILABLE FOR
//             <br />
//             EMERGENCY PLUMBING
//           </h1>
//           <p className="text-lg md:text-xl mb-8 max-w-2xl">
//             Our highly trained and skilled plumbers offer a full range of services for residential plumbing and
//             commercial plumbing
//           </p>
//           <div className="flex flex-wrap gap-4">
//             <button className="bg-white text-gray-800 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors">
//               Our Services
//             </button>
//             <button className="bg-orange-500 text-white px-8 py-3 rounded-md hover:bg-orange-600 transition-colors">
//               Emergency Service
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Service Card Component
// const ServiceCard = ({ title, description, imageSrc }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
//       <div className="h-48 bg-gray-200">
//         <img src="" alt={title} className="w-full h-full object-cover" />
//       </div>
//       <div className="p-6">
//         <h3 className="text-xl font-bold mb-2">{title}</h3>
//         <p className="text-gray-600 mb-4">{description}</p>
//         <a href="#" className="inline-flex items-center text-orange-500 hover:underline">
//           Read More
//           <ChevronRight className="h-4 w-4 ml-1" />
//         </a>
//       </div>
//     </div>
//   );
// };

// // Services Section Component
// const Services = () => {
//   const services = [
//     {
//       title: "Residential Plumbing",
//       description: "Professional plumbing services for your home, available 24/7 for any emergency.",
//     },
//     {
//       title: "Commercial Plumbing",
//       description: "Complete plumbing solutions for businesses of all sizes.",
//     },
//     {
//       title: "Drain Cleaning",
//       description: "Expert drain cleaning services using the latest equipment and techniques.",
//     },
//   ];

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="grid md:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <ServiceCard key={index} {...service} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // Contact Form Component
// const ContactForm = () => {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-lg">
//       <h3 className="text-2xl font-bold mb-6">Schedule Your Service</h3>
//       <form className="space-y-4">
//         <div>
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
//           />
//         </div>
//         <div>
//           <input
//             type="email"
//             placeholder="Email Address"
//             className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
//           />
//         </div>
//         <div>
//           <input
//             type="tel"
//             placeholder="Phone Number"
//             className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
//           />
//         </div>
//         <div>
//           <textarea
//             rows="4"
//             placeholder="Tell us about your plumbing needs"
//             className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
//           ></textarea>
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition-colors"
//         >
//           Submit Request
//         </button>
//       </form>
//     </div>
//   );
// };

// // Features Section Component
// const Features = () => {
//   return (
//     <section className="py-20">
//       <div className="container mx-auto px-4">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div>
//             <h2 className="text-3xl font-bold mb-6">
//               Emergency Plumbing Services, Residential & Commercial Plumbing Services
//             </h2>
//             <p className="text-gray-600 mb-8">
//               We have been serving the community for over 20 years with reliable and professional plumbing services. Our
//               team of experienced plumbers is available 24/7 for any emergency.
//             </p>
//             <div className="space-y-4">
//               <div className="flex items-center space-x-3">
//                 <Clock className="h-6 w-6 text-orange-500" />
//                 <span>24/7 Emergency Service</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Users className="h-6 w-6 text-orange-500" />
//                 <span>Licensed & Insured Plumbers</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Award className="h-6 w-6 text-orange-500" />
//                 <span>100% Satisfaction Guaranteed</span>
//               </div>
//             </div>
//           </div>
//           <ContactForm />
//         </div>
//       </div>
//     </section>
//   );
// };

// // Benefits Section Component
// const Benefits = () => {
//   const benefits = [
//     {
//       icon: <Users className="h-12 w-12 text-orange-500" />,
//       title: "Expert Plumbers",
//       description: "Our team consists of licensed and experienced professionals",
//     },
//     {
//       icon: <Clock className="h-12 w-12 text-orange-500" />,
//       title: "24/7 Service",
//       description: "Available round the clock for emergency services",
//     },
//     {
//       icon: <Award className="h-12 w-12 text-orange-500" />,
//       title: "Best Quality",
//       description: "Top-rated service with customer satisfaction guarantee",
//     },
//   ];

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="grid md:grid-cols-3 gap-8">
//           {benefits.map((benefit, index) => (
//             <div key={index} className="text-center">
//               <div className="flex justify-center mb-4">{benefit.icon}</div>
//               <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
//               <p className="text-gray-600">{benefit.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // Footer Component
// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid md:grid-cols-4 gap-8">
//           <div>
//             <h4 className="text-lg font-bold mb-4">Our Services</h4>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#" className="hover:text-orange-500">
//                   Residential Plumbing
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-orange-500">
//                   Commercial Plumbing
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-orange-500">
//                   Emergency Services
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-orange-500">
//                   Drain Cleaning
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="text-lg font-bold mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#" className="hover:text-orange-500">
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-orange-500">
//                   Contact
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-orange-500">
//                   Service Areas
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-orange-500">
//                   Careers
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="text-lg font-bold mb-4">Contact Info</h4>
//             <ul className="space-y-2">
//               <li className="flex items-center">
//                 <Map className="h-5 w-5 mr-2 text-orange-500" />
//                 123 Plumber Street, City, State
//               </li>
//               <li className="flex items-center">
//                 <Phone className="h-5 w-5 mr-2 text-orange-500" />
//                 800-123-4567
//               </li>
//               <li className="flex items-center">
//                 <Mail className="h-5 w-5 mr-2 text-orange-500" />
//                 info@plumbing.com
//               </li>
//             </ul>
//           </div>
//           <div>
//             <div className="text-2xl font-bold text-orange-500 mb-4">PLUMBING</div>
//             <p className="mb-4">
//               Professional plumbing services you can trust. Available 24/7 for all your plumbing needs.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" className="text-white hover:text-orange-500">
//                 <span className="sr-only">Facebook</span>
//                 Facebook
//               </a>
//               <a href="#" className="text-white hover:text-orange-500">
//                 <span className="sr-only">Twitter</span>
//                 Twitter
//               </a>
//               <a href="#" className="text-white hover:text-orange-500">
//                 <span className="sr-only">Instagram</span>
//                 Instagram
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="border-t border-gray-700 mt-8 pt-8 text-center">
//           <p>© 2024 Plumbing. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// // Main App Component
// const App = () => {
//   return (
//     <div className="min-h-screen">
//       <Navigation />
//       <main>
//         <Hero />
//         <Services />
//         <Features />
//         <Benefits />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default App;
import React from "react";

const PortfolioWebsite = () => {
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Work", href: "#" },
    { name: "Fun", href: "#" },
  ];

  const socialLinks = [
    { name: "Email", href: "#", label: "Email" },
    { name: "LinkedIn", href: "#", label: "LinkedIn" },
    { name: "Resume", href: "#", label: "Resume" },
    { name: "Twitter", href: "#", label: "ade_samuelz" },
  ];

  const infoCards = [
    {
      title: "Skills",
      description:
        "Mobile and Web app design, Responsive web design, User-Centric Design, User Research and Interviews, Competitive Analysis, Synthesizing Insights, Advanced Prototyping, Wireframing, Usability Testing.",
      icon: "/api/placeholder/64/64",
    },
    {
      title: "Tools",
      description:
        "I use Figma and Adobe XD for Interface design, for User Interview and Testing, I use Maze. To fuel Inspiration, I explore other live products (apps or web) as well as platforms like Awwwards, Behance, Dribbble, and Google.",
      icon: "/api/placeholder/64/64",
    },
    {
      title: "Education",
      description:
        "I hold a bachelor's degree in Electrical Electronics Engineering, and Google UX Design Certificate from Coursera. Additionally, I've obtained UX and UI Design certificates from platforms such as Udemy and Udacity.",
      icon: "/api/placeholder/64/64",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A]">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-yellow-400 flex items-center justify-center rounded">
              <span className="text-black text-xl">▶</span>
            </div>
            <span className="text-white font-medium">Design mixologist</span>
          </div>
          <div className="flex space-x-12">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 pt-20">
        <div className="flex justify-between items-start">
          <div className="max-w-2xl">
            <h1 className="text-7xl font-bold mb-8 text-white">Samuel Adetula.</h1>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed max-w-xl">
              I am a Product designer based on Earth with experience in seamless user interface and experience designs
              across all devices for any target audience. Providing solutions through design to improve lives is my
              goal.
            </p>
            <div className="flex items-center space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="relative w-[500px] h-[500px]">
            <img src="/api/placeholder/500/500" alt="3D UFO" className="object-cover" />
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-3 gap-8 mt-32">
          {infoCards.map((card) => (
            <div
              key={card.title}
              className="bg-gradient-to-br from-[#161616] to-[#111111] p-8 rounded-3xl border border-[#222222]"
            >
              <img src={card.icon} alt={card.title} className="mb-6" />
              <h2 className="text-2xl font-bold mb-4 text-white">{card.title}</h2>
              <p className="text-gray-400 leading-relaxed text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default PortfolioWebsite;
