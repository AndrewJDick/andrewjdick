import styled from "styled-components";
import { Link, ExternalLink } from "../Link";
import { MEDIA } from "../../styles/media";
import { Text } from "../../styles/typography";

export const List = styled.ul`
  margin-bottom: 2em;
`;

export const ListItem = styled.li`
  margin-bottom: 1em;

  ${Text} {
    margin-left: 1em;
  }
`;

export const StyledExternalLink = styled(ExternalLink)`
  display: flex;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;

  ${MEDIA.print`
    pointer-events: none;
  `};
`;
