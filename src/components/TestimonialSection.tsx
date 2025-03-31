import React from 'react';
import { 
  Card, 
  CardContent,
  CardFooter
} from "@/components/ui/card";
import { Quote } from 'lucide-react';
import Image from 'next/image';

// Testimonial type
interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  location: string;
  avatar?: string;
}

// Sample testimonials data
const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "KisanSarthi has completely transformed how I manage fertilizers on my farm. My crop yield increased by 35% in just one season!",
    author: "Ranjeet Singh",
    role: "Wheat Farmer",
    location: "Punjab",
  },
  {
    id: 2,
    quote: "The soil analysis recommendations have saved me money while improving my soil health. Sustainable farming is finally achievable.",
    author: "Anita Desai",
    role: "Organic Rice Farmer",
    location: "West Bengal",
  },
  {
    id: 3,
    quote: "I was skeptical at first, but the personalized recommendations for my tea plantation have made a remarkable difference in leaf quality.",
    author: "Lakshmi Nair",
    role: "Tea Plantation Owner",
    location: "Kerala",
  }
];

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-kisan-blue/5 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Trusted by Farmers Across India
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            See how KisanSarthi is helping farmers improve their harvests and livelihoods.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="ghibli-card overflow-hidden transform transition duration-300 hover:-translate-y-2">
              <CardContent className="pt-6 relative">
                <Quote className="absolute top-2 left-2 h-8 w-8 text-kisan-green-light opacity-20" />
                <p className="text-gray-700 mt-2 relative z-10">
                  {testimonial.quote}
                </p>
              </CardContent>
              <CardFooter className="pt-2 pb-6 flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-kisan-green-light">
                    {testimonial.avatar ? (
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="h-full w-full bg-kisan-green-light flex items-center justify-center text-white">
                        {testimonial.author.charAt(0)}
                      </div>
                    )}
                  </div>
                </div>
                <div className="ml-4">
                  <div className="text-base font-medium text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.location}</div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* Ghibli-style decorative elements */}
        <div className="mt-12 relative">
          <div className="hidden md:block absolute -bottom-16 right-8 w-32 h-32 bg-kisan-yellow/20 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
          <div className="hidden md:block absolute -top-8 left-1/4 w-16 h-16 bg-kisan-green-light/30 rounded-full animate-float" style={{ animationDelay: '1.2s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;