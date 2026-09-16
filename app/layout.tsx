import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "iotapp",
  description: "spoddl",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0d0f17] text-slate-200 flex min-h-screen`}
      >
        <Navbar />

        <div className="flex-1 flex flex-col min-w-0">
          {/* Top Bar matching reference */}
          <header className="h-16 border-b border-[#1f2438] bg-[#111422]/60 backdrop-blur px-8 flex items-center justify-between sticky top-0 z-10">
            <div className="relative w-72">
              <input
                type="text"
                placeholder="Search sensors, events..."
                className="w-full bg-[#161a2d] border border-[#232942] rounded-xl px-4 py-1.5 text-xs text-slate-300 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-500 ring-2 ring-indigo-500/30 flex items-center justify-center text-xs font-bold text-white">
                MF
              </div>
              <div className="text-right leading-tight">
                <p className="text-xs font-semibold text-slate-200">Sensor Admin</p>
                <p className="text-[11px] text-slate-500">live-iot@render.internal</p>
              </div>
            </div>
          </header>

          <main className="p-8 flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
