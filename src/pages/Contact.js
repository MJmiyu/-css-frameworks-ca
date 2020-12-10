import ContactForm from '../components/ContactForm';
import { Header } from '../typography';
import styled from 'styled-components/macro';
import ContactInfo from '../components/ContactInfo';
import TabCollapse from '../components/HomeTabCollapse';

const Contact = () => {
  return (
    <>
      <Header>Submit your details</Header>
      <Container>
        <ContactForm />
        <ContactInfo />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export default Contact;
