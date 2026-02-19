import React from 'react';
import Image from 'next/image';
import { Settings, ShoppingCart, ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Printer Repair",
    description: "Expert diagnostic and repair services for all major brands. We fix hardware failures, paper jams, and connectivity issues on-site.",
    image: "/service1.png", // Replace with your collage image
    icon: <Settings className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Printer Selling",
    description: "Premium selection of laser, inkjet, and multifunction printers tailored for home offices and large enterprise environments.",
    image: "/service2.png", // Replace with your collage image
    icon: <ShoppingCart className="w-6 h-6 text-blue-600" />,
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Our Professional Services
          </h2>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 leading-relaxed">
            Reliable printer repair and sales solutions tailored for businesses across the USA. 
            We ensure your workflow never stops.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
            >
              {/* Image Container with Zoom Effect */}
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content Area */}
              <div className="p-8 relative">
                <div className="absolute -top-10 left-8 bg-white p-4 rounded-2xl shadow-lg z-20 group-hover:rotate-6 transition-transform">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-3 mt-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 line-clamp-3">
                  {service.description}
                </p>
                
                <button className="flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors group/btn">
                  Learn More 
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}