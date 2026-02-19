import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Header />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Footer />
    </main>
  );
}
