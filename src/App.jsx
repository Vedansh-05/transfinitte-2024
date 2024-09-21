import React, { Suspense } from 'react';

const Header = React.lazy(() => import('./components/Header'));
const Hero = React.lazy(() => import('./components/Hero'));
const AboutUs = React.lazy(() => import('./components/AboutUs'));
const Judges = React.lazy(() => import('./components/Judges'));
const Sponsors = React.lazy(() => import('./components/Sponsors'));
const Faq = React.lazy(() => import('./components/Faq'));
const Footer = React.lazy(() => import('./components/Footer'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <>
        <Header />
        <Hero />
        <AboutUs />
        <Judges />
        <Sponsors />
        <Faq />
        <Footer />
      </>
    </Suspense>
  );
}

export default App;