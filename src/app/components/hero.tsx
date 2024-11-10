'use client';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-5 md:px-20 py-10">
        {/* Left Column - Text */}
        <div className="border p-5 rounded-lg shadow-md flex flex-col space-y-4 text-center md:text-left max-w-md mx-auto md:mx-0">
          <h1 className="text-[#EB8317] text-4xl font-bold">Hello, I am Asif</h1>
          <p className="text-lg">
            I am a graphic designer and front-end developer specializing in HTML,
            CSS, and JavaScript. With a keen eye for design and technical
            expertise, I bring creativity and precision to web projects.
          </p>
          <Link href="/about">
            <Button className="bg-[#EB8317]">About me</Button>
          </Link>
        </div>

        {/* Right Column - Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="https://cdn.pixabay.com/photo/2023/10/09/07/23/industry-8303482_1280.jpg"
            width={600}
            height={600}
            alt="Person Image"
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </main>
  );
}
