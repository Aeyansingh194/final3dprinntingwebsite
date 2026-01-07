"use client";

import React from "react";
import { HeroSection } from "@/components/HeroSection";

export function HeroSection03() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND VIDEO */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 brightness-110 contrast-105"
        autoPlay
        loop
        muted
        playsInline
        >

        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY FOR READABILITY */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70 -z-10" /> */}


      {/* EXISTING HERO CONTENT (UNCHANGED) */}
      <div className="relative z-10">
        <HeroSection />
      </div>

    </div>
  );
}


