import Link from "next/link";
import { StyledFooter } from "./layout.styled";

export const Footer = () => {
  return (
    <StyledFooter>
      <Link href={"https://github.com/Suyeon-B"} target="_blank">
        @Suyeon Bak
      </Link>
    </StyledFooter>
  );
};
