import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Share = () => {
  return (
    <ShareContainer>
      SHARE <Icon icon={faFacebookF} />
      <Icon icon={faTwitter} />
    </ShareContainer>
  );
};

const ShareContainer = styled.div`
  margin: 10px 50px;
  color: #0a0a0a;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-left: 10px;
`;

export default Share;
