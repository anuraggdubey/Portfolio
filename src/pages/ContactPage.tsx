import Contact from '@/components/sections/Contact';
import PageLayout from '@/components/PageLayout';
import Seo from '@/components/Seo';

const ContactPage = () => (
  <PageLayout>
    <Seo
      title="Contact"
      description="Get in touch with Anurag Dubey for freelance, collaboration, or full-stack development opportunities."
      path="/contact"
    />
    <Contact />
  </PageLayout>
);

export default ContactPage;
