import { styled } from "styled-components";
import ColorPicker from "./ColorPicker";

export default function ThemeDesigner() {
  const [primary, setPrimary] = useState("#ff00ff");
  const [surface, setSurface] = useState("#ff00ff");
  const [surfaceOn, setSurfaceOn] = useState("#ff00ff");

  return (
    <Wrapper>
      <ColorPicker name="primary" color={primary} onChoose={setPrimary} />
      <ColorPicker name="surface" color={surface} onChoose={setSurface} />
      <ColorPicker
        name="surface-on"
        color={surfaceOn}
        onChoose={setSurfaceOn}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  gap: 2rem;
  align-content: start;
`;
