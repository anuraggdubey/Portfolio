import Projects from '@/components/sections/Projects';
import PageLayout from '@/components/PageLayout';
import Seo from '@/components/Seo';

const ProjectsPage = () => (
  <PageLayout>
    <Seo
      title="Projects"
      description="Browse selected projects by Anurag Dubey, including product builds, frontend experiences, and practical engineering work."
      path="/projects"
    />
    <Projects />
  </PageLayout>
);

export default ProjectsPage;
