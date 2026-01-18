import Portfolio from '../components/Portfolio';
import Stats from '../components/Stats';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

const PortfolioPage = () => {
    return (
        <div className="pt-20">
            <Portfolio />
            <Stats />
            <FAQ />
            <CTA />
        </div>
    );
};

export default PortfolioPage;
