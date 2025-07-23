import React from 'react';
import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D1D25] via-[#11212D] to-[#06141B] text-white flex flex-col">
      <main className="flex-grow px-6 py-10 max-w-4xl mx-auto w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
