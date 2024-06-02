import { Container, Logo, BackButton, BackIcon } from "./styles";

import logoImg from "@assets/logo.png";

export type HeaderProps = {
  showBackIcon?: boolean;
};

export function Header({ showBackIcon = false }: HeaderProps) {
  return (
    <Container>
      {showBackIcon && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}

      <Logo source={logoImg} />
    </Container>
  );
}
