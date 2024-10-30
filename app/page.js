"use client";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Sesuaikan waktu loading sesuai kebutuhan
  }, []);

  //when open page initial isLoading true show preloader. during that time useEffect will count 1second...after 1 second setTimeout hide preloader when setIsLoading is false

  return (
      <div>
        {/* return true when isLoading true...return nothing when isLoading false */}
        {isLoading && <Preloader />} 
        <Navbar />
        <Main />
        <Hero />
        <Card />
        <Footer />
      </div>
  );
}
