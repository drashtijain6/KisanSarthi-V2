import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative pt-20 pb-16 md:pt-24 md:pb-24 overflow-hidden bg-gradient-to-b from-white to-kisan-blue/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          {/* Hero Text Content */}
          <div className="sm:text-center lg:text-left lg:mr-8">
            <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Grow Better Crops</span>
              <span className="block text-kisan-green-dark">With Fertilizers</span>
            </h1>
            <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0 md:mt-5 md:text-xl">
              KisanSarthi helps farmers optimize their fertilizer usage, improve crop yields, 
              and cultivate sustainable farming practices through smart recommendations.
            </p>
            <div className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Button className="w-full flex items-center justify-center px-8 py-3 bg-kisan-green-dark hover:bg-kisan-green-light text-white md:py-4 md:text-lg md:px-10">
                  <Link href={"/fertilizer-recommendation"}>Get Started</Link>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="mt-12 relative lg:mt-0 flex justify-center animate-float">
            <div className="relative mx-auto w-full max-w-md">
              <div className="relative shadow-xl rounded-xl overflow-hidden">
                <Image
                  className="w-full h-auto"
                  src="/image-kisan.png"
                  alt="Lush green farm field with flowing river and mountains in Ghibli style"
                  width={200}
                  height={200}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-kisan-green-dark/20 to-transparent"></div>
              </div>
              
              {/* Floating Elements for Ghibli-like aesthetic */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-kisan-yellow rounded-full opacity-70 animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-kisan-blue rounded-full opacity-60 animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="hidden lg:block absolute bottom-0 right-0 w-32 h-32 bg-kisan-green-light/10 rounded-full -mb-10 -mr-10"></div>
      <div className="hidden lg:block absolute top-1/4 left-0 w-20 h-20 bg-kisan-yellow/20 rounded-full -ml-10"></div>
    </section>
  );
};

export default HeroSection;