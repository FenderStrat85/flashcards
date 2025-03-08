import { Button } from "@mantine/core";

type ActionButtonProps = {
  text: string;
  onClick: () => void;
};

export default function ActionButton({
  text,
  onClick,
  ...props
}: ActionButtonProps) {
  return (
    <Button
      variant="filled"
      radius="xl"
      size="md"
      onClick={onClick}
      color="primary.1"
      // color="grape"
      {...props}
    >
      {text}
    </Button>
  );
}
