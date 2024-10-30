"use client";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Preloader from "@/components/Preloader";
import { useEffect, useState } from "react";
import GalleryFilter from "@/components/GalleryFilter";

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
      <Carousel />
      <GalleryFilter />
      <Footer />
    </div>
  );
};

export default Page;
