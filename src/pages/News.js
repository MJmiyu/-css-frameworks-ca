import CardNews from '../components/CardNews';
import { Header } from '../typography';
import Pager from '../components/Pager';

const News = () => {
  return (
    <>
      <Header>News</Header>
      <Pager />
      <CardNews />;
      <Pager />
    </>
  );
};

export default News;
