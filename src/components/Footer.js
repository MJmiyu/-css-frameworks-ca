import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVimeo, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <FooterContainer>
      <Video>
        <Icon icon={faVimeo} />
        <Icon icon={faYoutube} />
      </Video>
      <Text>hello@yay.com</Text>
      <Text>Copyright 2020</Text>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  color: #767676;
  margin-top: auto;
  padding: 10px 50px;
  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const Video = styled.div`
  @media only screen and (max-width: 768px) {
    grid-column: 1 / 3;
    justify-self: center;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  margin-left: 10px;
  font-size: 25px;
`;

const Text = styled.div`
  font-size: 16px;
  text-align: center;
`;

export default Footer;
