import MyClicks from '@/components/sections/MyClicks';
import PageLayout from '@/components/PageLayout';
import Seo from '@/components/Seo';

const ClicksPage = () => (
  <PageLayout>
    <Seo
      title="My Clicks | Pinterest Picks"
      description="Browse Anurag Dubey's curated Pinterest pins — designs, moods, and visual bookmarks that inspire."
      path="/clicks"
    />
    <MyClicks />
  </PageLayout>
);

export default ClicksPage;
