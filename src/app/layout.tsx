"use client";

import "./globals.css";
import Sidebar from "./components/Sidebar";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Providers from "./components/Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="lg:flex">
            {/* Sidebar - hidden on mobile */}
            <div className="hidden lg:block fixed">
              <Sidebar />
            </div>

            {/* Navigation - hidden on mobile */}
            <div className="hidden lg:block fixed left-[72px]">
              <Navigation />
            </div>

            {/* Main content */}
            <div className="lg:ml-[352px] min-h-screen bg-gray-50">
              <Header />
              <main>{children}</main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
