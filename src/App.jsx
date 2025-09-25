import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';

export default function App() {
    return (
        <div>
            <Navigation />
            <HeroSection />
            <HowItWorks />
            {/* Other components to be added here */}
        </div>
    );
}

