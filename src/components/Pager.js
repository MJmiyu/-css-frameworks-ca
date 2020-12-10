import Pagination from 'react-bootstrap/Pagination';
import styled from 'styled-components/macro';

const Pager = () => {
  return (
    <StyledPagination>
      <Item active>1</Item>
      <Item>2</Item>
      <Item>3</Item>
      <Item>4</Item>
    </StyledPagination>
  );
};

const StyledPagination = styled(Pagination)`
  #yay & {
    margin: 50px;
  }
`;

const Item = styled(Pagination.Item)`
  #yay & {
    .page-link {
      border: solid 1px #e92569;
      color: #e92569;
    }
  }
  #yay &.active {
    .page-link {
      background-color: #e92569;
      color: #fff;
    }
  }
`;

export default Pager;
