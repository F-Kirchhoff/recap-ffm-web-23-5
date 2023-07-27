import { css, styled } from "styled-components";

export default function Demo({ theme }) {
  return (
    <DemoWrapper theme={theme}>
      <Heading>Demo Page</Heading>
      <Card>
        <h2>Lorem ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia veniam
          numquam odio, porro dolorem soluta aut in, asperiores vero sint
          molestias natus autem illo. Facere rerum eos dolorem incidunt porro.
        </p>
      </Card>
      <Card highlight>
        <h2>Lorem ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia veniam
          numquam odio, porro dolorem soluta aut in, asperiores vero sint
          molestias natus autem illo. Facere rerum eos dolorem incidunt porro.
        </p>
      </Card>
      <Card>
        <h2>Lorem ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia veniam
          numquam odio, porro dolorem soluta aut in, asperiores vero sint
          molestias natus autem illo. Facere rerum eos dolorem incidunt porro.
        </p>
      </Card>
    </DemoWrapper>
  );
}

const DemoWrapper = styled.section`
  --primary: ${({ theme }) => theme.primary};
  --surface: ${(props) => props.theme.surface};
  --surface-on: ${(props) => props.theme.surfaceOn};

  padding: 2rem;
  border-radius: 2rem;
  box-shadow: 0 0 4px rgb(0 0 80 / 0.3);
  background-color: var(--surface);
  color: var(--surface-on);
`;

const Heading = styled.h1`
  color: var(--primary);
`;

const Card = styled.article`
  padding: 2rem;
  border-radius: 1rem;
  background-color: rgb(0 0 0 / 0.1);
  margin-bottom: 2rem;

  ${(props) =>
    props.highlight &&
    css`
      background-color: var(--primary);
      color: var(--surface);
    `}
`;
