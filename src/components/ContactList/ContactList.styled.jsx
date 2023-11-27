import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(2)};
  margin-top: ${p => p.theme.spacing(2)};
`;

export const ContactListMessage = styled.p`
  margin-top: ${p => p.theme.spacing(2)};
  font-style: italic;
  color: ${p => p.theme.colors.error};
`;
