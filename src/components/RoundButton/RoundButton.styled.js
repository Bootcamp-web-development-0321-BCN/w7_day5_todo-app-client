import styled from 'styled-components';

const SCRoundButton = styled.button`
  width: 72px;
  height: 72px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 36px;
  border: ${(props) => `4px solid ${props.theme.color.black}`};
`;

export default SCRoundButton;