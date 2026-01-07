import React from "react";
import { Navbar } from "@/components/Navbar";
import { CartDrawer } from "@/components/CartDrawer";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";
import { HeroSection03 } from "@/components/ui/hero-03";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CartDrawer />

      {/* HERO WITH BACKGROUND VIDEO */}
      <HeroSection03 />

      <FeaturedProducts />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
