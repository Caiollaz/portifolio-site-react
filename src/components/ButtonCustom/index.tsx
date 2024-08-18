import { ReactNode } from "react";
import { Botao } from "./styles";
import { ButtonProps } from "react-bootstrap/Button";

interface ButtonPropsCustom extends ButtonProps {
  children: ReactNode;
}

export function ButtonCustom({ children, ...props }: ButtonPropsCustom) {
  return (
    <>
      <Botao {...props}>{children}</Botao>
    </>
  );
}
