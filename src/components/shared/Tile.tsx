import * as React from "react";

import Container from "react-bootstrap/Container";

interface Props {
  children: any;
}

const Tile = ({ children }: Props) => {
  return (
    <Container fluid className="d-flex flex-column py-5">
      <Container className="bg-dark d-flex flex-column py-5">
        {children}
      </Container>
    </Container>
  );
};
export default Tile;
