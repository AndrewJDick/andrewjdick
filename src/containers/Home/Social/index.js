import React from "react";
import {
  GitHubIcon,
  MediumIcon,
  TwitterIcon,
  LinkedInIcon
} from "components/icons";
import { SOCIAL_LINKS } from "constants.js";
import { SocialLinks, SocialLink } from "./styles";

const iconProps = {
  width: "2.5em",
  height: "2.5em"
};

export const Social = () => (
  <SocialLinks>
    <SocialLink href={SOCIAL_LINKS.github.url}>
      <GitHubIcon {...iconProps} />
    </SocialLink>

    <SocialLink href={SOCIAL_LINKS.medium.url}>
      <MediumIcon {...iconProps} />
    </SocialLink>

    <SocialLink href={SOCIAL_LINKS.twitter.url}>
      <TwitterIcon {...iconProps} />
    </SocialLink>

    <SocialLink href={SOCIAL_LINKS.linkedIn.url}>
      <LinkedInIcon {...iconProps} />
    </SocialLink>
  </SocialLinks>
);
