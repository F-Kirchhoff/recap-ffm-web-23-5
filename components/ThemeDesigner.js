import { styled } from "styled-components";
import ColorPicker from "./ColorPicker";

export default function ThemeDesigner() {
  return (
    <Wrapper>
      <ColorPicker name="primary" />
      <ColorPicker name="surface" />
      <ColorPicker name="surface-on" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  gap: 2rem;
  align-content: start;
`;
