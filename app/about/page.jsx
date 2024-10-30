'use client';
import Element from "@/components/Element";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Photographer from "@/components/Photographer";
import React from "react";
import Preloader from "@/components/Preloader";
import { useEffect, useState } from "react";

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Sesuaikan waktu loading sesuai kebutuhan
  }, []);

  return (
    <div>
      {isLoading && <Preloader />}
      <Navbar />
      <Element />
      <Photographer />
      <Footer />
    </div>
  );
};

export default Page;
