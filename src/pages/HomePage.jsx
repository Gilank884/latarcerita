import HeroAnime from '../components/HeroAnime';
import Testimonials from '../components/Testimonials';
import LogoCloud from '../components/LogoCloud';
import CTA from '../components/CTA';

const HomePage = () => {
    return (
        <div className="pt-0"> {/* No padding needed as HeroAnime has its own */}
            <HeroAnime />
            <LogoCloud />
            <Testimonials />
            <CTA />
        </div>
    );
};

export default HomePage;
