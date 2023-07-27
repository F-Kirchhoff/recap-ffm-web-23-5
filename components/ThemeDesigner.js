import { styled } from "styled-components";
import ColorPicker from "./ColorPicker";
import { useState } from "react";

export default function ThemeDesigner() {
  const [theme, setTheme] = useState({
    primary: "#ff00ff",
    surface: "#ffffff",
    surfaceOn: "#000000",
  });

  return (
    <Wrapper>
      <ColorPicker
        name="primary"
        color={theme.primary}
        onChoose={(newValue) => {
          setTheme({
            ...theme,
            primary: newValue,
          });
        }}
      />
      <ColorPicker
        name="surface"
        color={theme.surface}
        onChoose={(newValue) => {
          setTheme({
            ...theme,
            surface: newValue,
          });
        }}
      />
      <ColorPicker
        name="surface-on"
        color={theme.surfaceOn}
        onChoose={(newValue) => {
          setTheme({
            ...theme,
            surfaceOn: newValue,
          });
        }}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  gap: 2rem;
  align-content: start;
`;
