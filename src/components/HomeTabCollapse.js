import tab1 from '../images/tab/tab-1.jpg';
import tab2 from '../images/tab/tab-2.jpg';
import tab3 from '../images/tab/tab-3.jpg';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/esm/Card';
import Button from 'react-bootstrap/esm/Button';
import styled from 'styled-components/macro';
import Share from './Share';

const HomeTabCollapse = () => {
  return (
    <Accordion defaultActiveKey="1">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={StyledButton} variant="link" eventKey="1">
            First
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <CardBody>
            Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
            venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
            ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
            condimentum mattis rhoncus.
            <img src={tab1} height="175" alt="tab1" />
            <Share />
          </CardBody>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={StyledButton} variant="link" eventKey="2">
            Second
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <CardBody>
            Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
            venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
            ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
            condimentum mattis rhoncus.
            <img src={tab2} height="175" alt="tab2" />
            <Share />
          </CardBody>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={StyledButton} variant="link" eventKey="3">
            Third
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <CardBody>
            Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
            venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
            ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
            condimentum mattis rhoncus.
            <img src={tab3} height="175" alt="tab3" />
            <Share />
          </CardBody>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

const CardBody = styled(Card.Body)`
  #yay & {
    background-color: #efefef;
    color: #767676;
    font-family: 'Lato', sans-serif;
    font-size: 16px;
  }
`;

const StyledButton = styled(Button)`
  #yay & {
    color: #e92569;
  }
`;

export default HomeTabCollapse;
