import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components/macro';

const ContactForm = () => {
  return (
    <FormContainer>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Website</Form.Label>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>https://</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl type="url" />
        </InputGroup>
      </Form.Group>

      <Form.Group>
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      <Form.Check
        type="checkbox"
        label="Allow us to sell your personal details to whomever we want"
      />

      <StyledButton type="submit">Submit</StyledButton>
    </FormContainer>
  );
};

const FormContainer = styled(Form)`
  #yay & {
    background-color: #efefef;
    padding: 50px;
    margin-left: 50px;
  }
`;

const StyledButton = styled(Button)`
  #yay & {
    background-color: #767676;
    width: 100%;
    font-size: 20px;
    border: 1px solid #767676;
    & :hover {
      background-color: #c7c7c7;
      border: 1px solid #767676;
    }
  }
`;

export default ContactForm;
