import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Background } from './components/layout/Background';
import { Hero } from './components/home/Hero';
import { ProblemStatement } from './components/home/problem/ProblemStatement';
import { WhatWeDo } from './components/home/WhatWeDo';
import { HowItWorks } from './components/home/howitworks/HowItWorks';
import { Testimonials } from './components/home/Testimonials';
import { ProfileBuilder } from './pages/ProfileBuilder';
import { Recommendations } from './pages/Recommendations';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <Background />
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen">
              <Header />
              <main>
                <Hero />
                <ProblemStatement />
                <WhatWeDo />
                <HowItWorks />
                <Testimonials />
              </main>
              <Footer />
            </div>
          }
        />
        <Route path="/profile" element={<ProfileBuilder />} />
        <Route path="/recommendations" element={<Recommendations />} />
      </Routes>
    </BrowserRouter>
  );
}