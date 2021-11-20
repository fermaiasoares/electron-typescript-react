import styled from 'styled-components';

export const Container = styled.div`

`;

export const InputElement = styled.input.attrs({
  placeholderTextColor: '#c6c6c6',
})`
  background-color: #ffffff;
  border-radius: 16px;
  border: none;
  height: 56px;
  width: 100%;
  margin-bottom: 16px;

  padding: 0 16px;

  font-size: 16px;

  &::before {
    content: 'oi';
    position: absolute;
    left: 0;
    top: 0;
  }

  &:hover {
    border: 2px solid #0078BC;
  }

  & + & {
    margin-bottom: 24px;
  }
`;