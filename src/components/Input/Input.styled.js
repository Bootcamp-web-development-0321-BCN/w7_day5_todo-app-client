import styled from 'styled-components';

export const SCFormItemWrapper = styled.div`
  width: ${({ width }) => width || '100%'};
  height: fit-content;
  font-size: 16px;
  border-radius: 2px;
  position: relative; 
`;

export const SCInput = styled.input`
  background: ${({ theme }) => theme.color.white};
  border: 2px solid ${({ theme, error }) => theme.color[error ? 'red' : 'black']};
  box-sizing: border-box;
  width: ${({ inputWidth = '100%' }) => inputWidth};
  max-width: 100%;
  padding: 0 16px;
  opacity: ${({ disabled }) => ((disabled) ? '0.4' : '1')};
  font-family: ${({ theme }) => theme.typography.gelion};
  font-style: normal;
  height: 51px;
  font-size: 16px;
  border-radius: 8px;

  color:${({ theme }) => theme.color.black} ;
  cursor: ${({ readOnly }) => (readOnly ? 'default' : 'text')};
  &::placeholder {
    font-family: ${({ theme }) => theme.typography.gelion};
    font-style: normal;
    font-size: 16px;
    line-height: 19px;
    color: #C9C9C9;
    opacity: 0.5;
  }
  &:focus{
      outline:none;
  }
  @media screen and (min-width:${({ theme }) => theme.breakpoints.desktopMin}){
    
  }
`;

export const SCLabel = styled.label`
  font-family: ${({ theme }) => theme.typography.gelion};
  font-style: normal;
  font-size: 16px;
  line-height: 19px;
  color:${({ theme }) => theme.color.black};
  padding-left: ${({ theme }) => theme.spacing.small};
  display:flex;
  align-items:center;
  >div{
    margin-top:4px;
    width:fit-content;
  }
  margin-bottom: 4px;
`;