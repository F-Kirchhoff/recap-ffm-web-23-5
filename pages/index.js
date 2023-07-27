import { styled } from "styled-components";
import Demo from "../components/Demo";
import ThemeDesigner from "../components/ThemeDesigner";
import { useState } from "react";

export default function Home() {
  const theme = {
    primary: "#ff00ff",
    surface: "#ffffff",
    surfaceOn: "#000000",
  };

  return (
    <PageGrid>
      <ThemeDesigner />
      <Demo theme={theme} />
    </PageGrid>
  );
}

const PageGrid = styled.main`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 2rem;
  padding: 2rem;
  min-height: 100vh;
`;
