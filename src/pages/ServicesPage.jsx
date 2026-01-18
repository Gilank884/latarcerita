import ServicesHero from '../components/ServicesHero';
import Services from '../components/Services';
import ServiceShowcase from '../components/ServiceShowcase';
import Process from '../components/Process';
import Advantages from '../components/Advantages';
import CTA from '../components/CTA';

const ServicesPage = () => {
    return (
        <div className="pt-0"> {/* Adjusted padding since Hero has its own padding */}
            <ServicesHero />
            <Services />
            <ServiceShowcase />
            <Process />
            <Advantages />
            <CTA />
        </div>
    );
};

export default ServicesPage;
