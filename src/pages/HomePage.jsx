import HeroAnime from '../components/HeroAnime';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const HomePage = () => {
    return (
        <div className="pt-0"> {/* No padding needed as HeroAnime has its own */}
            <HeroAnime />
            <Testimonials />
            <CTA />
        </div>
    );
};

export default HomePage;
