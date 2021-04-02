import styled from 'styled-components'

const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  color: white;
  cursor: pointer;

  transition: background-color 0.2s;

  &:hover {
    background-color: blue;
  }

  .icon {
    font-size: 36px;

    path {
      stroke: white;
    }
  }
`

export default Button
