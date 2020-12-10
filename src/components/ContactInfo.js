import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';

const ContactInfo = () => {
  return (
    <ContactInfoContainer>
      <Info>
        <Icon icon={faEnvelope} />
        <Text>hello@yay.com</Text>
      </Info>
      <Info>
        <Icon icon={faPhone} />
        <Text>123 456 7890</Text>
      </Info>
      <Info>
        <Icon icon={faMapMarkerAlt} />
        <Text>
          123 Some Street
          <br />
          Somewhere
          <br />
          Some City <br />
          10000
        </Text>
      </Info>
    </ContactInfoContainer>
  );
};

const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 100px;
`;

const Info = styled.div`
  display: flex;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 25px;
  color: #767676;
  margin: 0 25px 25px 10px;
`;

const Text = styled.p`
  color: #767676;
  font-family: 'Lato', sans-serif;
  font-size: 16px;
`;

export default ContactInfo;
