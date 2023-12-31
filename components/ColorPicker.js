import { styled } from "styled-components";

export default function ColorPicker({ name, color, onChoose }) {
  return (
    <Wrapper chosenColor={color}>
      <label htmlFor="">{name}</label>
      <input
        type="color"
        value={color}
        onChange={(event) => onChoose(event.target.value)}
      />
      <input
        type="text"
        value={color}
        onChange={(event) => onChoose(event.target.value)}
      />
    </Wrapper>
  );
}

const Wrapper = styled.form`
  padding: 1.5rem 3rem;
  border-radius: 2rem;
  background-color: ${({ chosenColor }) => chosenColor};
  display: grid;
  gap: 1rem;

  input[type="color"] {
    width: 100%;
    height: 3rem;
  }
`;
