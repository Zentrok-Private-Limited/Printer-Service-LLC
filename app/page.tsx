
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen">
      
      <Hero />
      {/* Main Content About Section */}
      <main className="max-w-7xl mx-auto px-8 mt-12 lg:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Text Column */}
        <div className="space-y-8">
          <h1 className="text-2xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            About Printer Service LLC <br /> Solutions
          </h1>
          
          <p className="text-sm lg:text-lg text-gray-500 max-w-md leading-relaxed">
            We are a trusted provider of high-quality printers and professional repair services across the USA. From helping businesses choose the right printing solutions to delivering fast and reliable repairs, our mission is simple — keep your printing operations running smoothly and efficiently
            With experienced technicians, genuine parts, and customer-first service, we ensure performance you can depend on.
          </p>

          <Link href="/About" className="px-10 py-3 border-2 border-gray-900 rounded-lg text-lg font-medium bg-gray-900 hover:text-white transition-all duration-300">
            Learn More
          </Link>
        </div>

        {/* Right Image Column */}
        <div className="relative w-full aspect-4/3 rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/img1.png"
            alt="HP Printer Technician at work"
            fill
            className="object-cover"
            priority
          />
        </div>
      </main>

      {/* Main Commitment Section */}
      <main className="max-w-7xl mx-auto px-8 mt-12 lg:mt-30 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Text Column */}
        <div className="relative w-full h-full rounded-3xl">
          <Image
            src="/img2.png"
            alt="HP Printer Technician at work"
            height={500}
            width={400}
            className="object-contain"
          />
        </div>

        {/* Right Image Column */}
        <div className="space-y-8">
          <h1 className="text-2xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            Our Commitment
          </h1>
          
          <p className="text-sm lg:text-lg text-gray-500 max-w-md leading-relaxed">
            We are committed to delivering reliable printing solutions backed by expert service and honest support. From providing high-quality printers to offering fast and efficient repair services, we prioritize performance, transparency, and customer satisfaction. Our goal is to ensure every client experiences seamless printing with minimal downtime and maximum value.
          </p>
        </div>
        
      </main>
      <Services />
      <Contact />
      
    </main>
  );
}
