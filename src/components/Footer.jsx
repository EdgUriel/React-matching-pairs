import React from "react";
import styled from "styled-components";

import { ReactComponent as TwitterLogo } from "../assets/icons/twitter.svg";
import { ReactComponent as GitHubLogo } from "../assets/icons/github.svg";

const FooterStyled = styled.footer`
  position: absolute;
  bottom: 0;
  padding: 1.5rem;
`;

const Link = styled.a`
  padding: 1rem;
  opacity: 0.7;
`;

function Footer() {
  return (
    <FooterStyled>
      <Link
        href="https://github.com/EdgUriel"
        target="_blank"
      >
        <GitHubLogo />
      </Link>
    </FooterStyled>
  );
}

export default Footer;
