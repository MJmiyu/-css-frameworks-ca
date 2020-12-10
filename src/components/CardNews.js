import news1 from '../images/news/news-1.jpg';
import news2 from '../images/news/news-2.jpg';
import news3 from '../images/news/news-3.jpg';
import news4 from '../images/news/news-4.jpg';
import news5 from '../images/news/news-5.jpg';
import news6 from '../images/news/news-6.jpg';
import news7 from '../images/news/news-7.jpg';
import news8 from '../images/news/news-8.jpg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components/macro';

const CardNews = () => {
  return (
    <Cards>
      <StyledCard>
        <Image variant="top" src={news1} />
        <Card.Body>
          <Card.Title>Nunc porttitor vel</Card.Title>
          <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
          <MoreButton variant="primary">MORE</MoreButton>
        </Card.Body>
      </StyledCard>
      <StyledCard>
        <Image variant="top" src={news2} />
        <Card.Body>
          <Card.Title>Nunc porttitor vel</Card.Title>
          <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
          <MoreButton variant="primary">MORE</MoreButton>
        </Card.Body>
      </StyledCard>
      <StyledCard>
        <Image variant="top" src={news3} />
        <Card.Body>
          <Card.Title>Nunc porttitor vel</Card.Title>
          <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
          <MoreButton variant="primary">MORE</MoreButton>
        </Card.Body>
      </StyledCard>
      <StyledCard>
        <Image variant="top" src={news4} />
        <Card.Body>
          <Card.Title>Nunc porttitor vel</Card.Title>
          <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
          <MoreButton variant="primary">MORE</MoreButton>
        </Card.Body>
      </StyledCard>
      <StyledCard>
        <Image variant="top" src={news5} />
        <Card.Body>
          <Card.Title>Nunc porttitor vel</Card.Title>
          <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
          <MoreButton variant="primary">MORE</MoreButton>
        </Card.Body>
      </StyledCard>
      <StyledCard>
        <Image variant="top" src={news6} />
        <Card.Body>
          <Card.Title>Nunc porttitor vel</Card.Title>
          <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
          <MoreButton variant="primary">MORE</MoreButton>
        </Card.Body>
      </StyledCard>
      <StyledCard>
        <Image variant="top" src={news7} />
        <Card.Body>
          <Card.Title>Nunc porttitor vel</Card.Title>
          <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
          <MoreButton variant="primary">MORE</MoreButton>
        </Card.Body>
      </StyledCard>
      <StyledCard>
        <Image variant="top" src={news8} />
        <Card.Body>
          <Card.Title>Nunc porttitor vel</Card.Title>
          <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
          <MoreButton variant="primary">MORE</MoreButton>
        </Card.Body>
      </StyledCard>
    </Cards>
  );
};

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 50px;
`;

const StyledCard = styled(Card)`
  #yay & {
    width: 264px;
    margin: 14px;
    border-radius: 25px;
  }
`;

const Image = styled(Card.Img)`
  #yay & {
    border-radius: 25px 25px 0 0;
  }
`;

const MoreButton = styled(Button)`
  #yay & {
    background: linear-gradient(-90deg, #767676 10%, #e92569 10%);
    background-color: #e92569;
    color: #ffffff;
    font-size: 16px;
    border-radius: 3px;
    width: 90%;
  }
`;

export default CardNews;
