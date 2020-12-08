import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVimeo, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <Icon icon={faVimeo} />
        <Icon icon={faYoutube} />
      </div>
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

  margin-top: 50px;
  padding: 10px 50px;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-left: 10px;
  font-size: 25px;
`;

const Text = styled.div`
  font-size: 16px;
`;

export default Footer;
