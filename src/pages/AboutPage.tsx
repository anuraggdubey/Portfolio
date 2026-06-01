import About from '@/components/sections/About';
import PageLayout from '@/components/PageLayout';
import Seo from '@/components/Seo';

const AboutPage = () => (
  <PageLayout>
    <Seo
      title="About"
      description="Learn more about Anurag Dubey, his development background, experience, and the approach behind his full-stack portfolio work."
      path="/about"
    />
    <About />
  </PageLayout>
);

export default AboutPage;
