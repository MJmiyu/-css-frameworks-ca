import { Header, Paragraph } from '../typography';
import ImageCarousel from '../components/ImageCarousel';
import HomeTabs from '../components/HomeTabs';
import { useMediaPredicate } from 'react-media-hook';
import HomeTabCollapse from '../components/HomeTabCollapse';

const Home = () => {
  const isDesktopSize = useMediaPredicate('(min-width: 768px)');
  return (
    <>
      <ImageCarousel />
      <Header>We do YAY things</Header>
      <Paragraph>
        Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a
        rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend
        finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet,
        consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa
        euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a,
        varius eget massa.
      </Paragraph>

      {isDesktopSize ? <HomeTabs /> : <HomeTabCollapse />}
    </>
  );
};

export default Home;
