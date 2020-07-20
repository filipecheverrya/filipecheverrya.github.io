import styled from 'styled-components';

function measures(x) {
  switch (x) {
    case 'small':
      return '24px';
    case 'large':
      return '40px';
  
    default:
      return '28px';
  }
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  max-width: ${props => measures(props.size)};
`;

export const ContainerIconSwitcher = styled.div`
  position: relative;
  height: 20px;
  width: 40px;
  margin: 0 8px;
`;

export const Circle = styled.div`
  background: #F1F1F1;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.24),
    0px 0px 2px rgba(0, 0, 0, 0.12);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  position: absolute;
  transition: left .2s;
  left: 0;

  &.active {
    left: 20px;
  }
`;

export const Background = styled.div`
  background-color: rgba(255, 255, 255, 0.26);
  width: 34px;
  height: 14px;
  border-radius: 16px;
  position: absolute;
  top: 3px;
  left: 3px;
`;
