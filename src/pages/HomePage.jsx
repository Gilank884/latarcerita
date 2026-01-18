import { useLayoutEffect } from 'react';
import HeroAnime from '../components/HeroAnime';
import Services from '../components/Services';
import ProblemSolution from '../components/ProblemSolution';
import PricingPreview from '../components/PricingPreview';
import Process from '../components/Process';
import Portfolio from '../components/Portfolio';
import Advantages from '../components/Advantages';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const HomePage = () => {
    useLayoutEffect(() => {
        // Refresh ScrollTrigger after all components mounted
        ScrollTrigger.refresh();

        // Sometimes React needs a tiny bit more time for layout to settle
        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="pt-0">
            <HeroAnime />
            <Services />
            <ProblemSolution />
            <PricingPreview />
            <Process />
            <Advantages />
            <Testimonials />
            <CTA />
        </div>
    );
};

export default HomePage;
