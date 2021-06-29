import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IconButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const IconButton = ({ children, onClick }: IconButtonProps) => {
  return (
    <Button
      padding="0.4rem"
      width="auto"
      height="auto"
      borderRadius="100%"
      bg="transparent"
      _hover={{ bg: "#f6f6f6" }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default IconButton;
