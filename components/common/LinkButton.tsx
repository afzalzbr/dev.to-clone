import { ReactNode } from "react";
import { Button } from "@chakra-ui/react";

interface LinkButtonProps {
  children: ReactNode;
}

const LinkButton = ({ children }: LinkButtonProps) => {
  return (
    <Button
      _hover={{ color: "#323ebe", bg: "#e2e4e6" }}
      bg="transparent"
      width="14rem"
      padding="8px"
      fontWeight="normal"
      justifyContent="flex-start"
    >
      {children}
    </Button>
  );
};

export default LinkButton;
