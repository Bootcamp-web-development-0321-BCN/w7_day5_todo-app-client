import styled, { withTheme } from 'styled-components';

const Text = styled.p`
  font-family: ${({ theme, weight = 'gelion' }) => theme.typography[weight]};
  color: ${({ theme, color = 'primary' }) => theme.color[color]};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
  font-size: ${({ theme, size = 's' }) => theme.typographySizes[size].size};
  line-height: ${({ theme, size = 's' }) => theme.typographySizes[size].line}; 
`;

export default withTheme(Text);