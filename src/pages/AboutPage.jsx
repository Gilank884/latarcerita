import About from '../components/About';
import Values from '../components/Values';
import Team from '../components/Team';
import CTA from '../components/CTA';
import History from '../components/History';
import Achievements from '../components/Achievements';
import WhyUs from '../components/WhyUs';
import Process from '../components/Process';

const AboutPage = () => {
    return (
        <div className="pt-20">
            <About />
            <History />
            <Values />
            <Achievements />
            <WhyUs />
            <Process />
            <Team />
            <CTA />
        </div>
    );
};

export default AboutPage;
