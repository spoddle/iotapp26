import Image from "next/image";
import type { Metadata } from "next"; 
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";


export default function HomePage() {
  return (
    <section className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-blue-800">
        Iotapp Next.js + Tailwind
      </h1>
      <p className="mb-6 text-gray-700"> This little project
made to demostrate monitoring system of different sensors in real time. Interface based on <strong>Next.js</
strong> using <strong>Tailwind CSS</strong> for quik adaptive design. Sensor data is visualised
in the form of graphs.
  </p>
      <p className="text-gray-700">
        У наступних
лабораторних роботах буде реалізовано підключення до
бекенду, авторизацію користувачів та оновлення даних у
реальному часі.

      </p>
    </section>
    
  );
}
