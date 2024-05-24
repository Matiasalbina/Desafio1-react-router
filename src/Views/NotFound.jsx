import { Container } from "react-bootstrap";

export const NotFound = () => {
  return (
    <Container className="text-center mt-5">
      <h1 className="mb-4"><strong>Error 404</strong></h1>
      <h3>La ruta que estás intentando abrir no existe o no se encuentra disponible.
        <br /> !Revisa la dirección! </h3>
    </Container>
  );
};
