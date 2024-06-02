import { Container, Message } from "./styles";

export type EmptyListProps = {
  message: string;
};

export function EmptyList({ message }: EmptyListProps) {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
}
