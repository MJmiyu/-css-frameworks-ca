import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import tab1 from '../images/tab/tab-1.jpg';
import tab2 from '../images/tab/tab-2.jpg';
import tab3 from '../images/tab/tab-3.jpg';

import { Paragraph } from '../typography';
import styled from 'styled-components/macro';
import Share from './Share';

const HomeTabs = () => {
  return (
    <StyledTabs defaultActiveKey="First">
      <Tab eventKey="First" title="First">
        <TabContainer>
          <img src={tab1} height="150" alt="tab 1" />
          <TabText>
            <Paragraph>
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
              venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
              condimentum mattis rhoncus.
            </Paragraph>
            <Share />
          </TabText>
        </TabContainer>
      </Tab>
      <Tab eventKey="Second" title="Second">
        <TabContainer>
          <img src={tab2} height="150" alt="tab 2" />
          <TabText>
            <Paragraph>
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
              venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
              condimentum mattis rhoncus.
            </Paragraph>
            <Share />
          </TabText>
        </TabContainer>
      </Tab>
      <Tab eventKey="Third" title="Third">
        <TabContainer>
          <img src={tab3} height="150" alt="tab 3" />
          <TabText>
            <Paragraph>
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
              venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
              condimentum mattis rhoncus.
            </Paragraph>
            <Share />
          </TabText>
        </TabContainer>
      </Tab>
    </StyledTabs>
  );
};

const StyledTabs = styled(Tabs)`
  #yay & {
    margin: 0 50px;
    & > .nav-item {
      color: #e92569;
    }
  }
`;

const TabContainer = styled.div`
  display: flex;
  padding: 40px;
  background-color: #ffffff;
  margin: 0 50px 50px;
`;

const TabText = styled.div`
  display: flex;
  flex-direction: column;
`;

export default HomeTabs;
