import React from 'react';
import styled from 'styled-components';
import { CONTACT_DETAILS, SOCIAL_LINKS, SITE_URL } from '../constants';
import { Text } from '../styles/typography';
import { ExternalLink } from './Link';
import { EmailIcon, GitHubIcon, LinkedInIcon, HomeIcon } from './icons';

const List = styled.ul`
  margin-bottom: 2em;
`;

const ListItem = styled.li`
  margin-bottom: 1em;

  ${Text} {
    margin-left: 1em;
  }
`;

const StyledExternalLink = styled(ExternalLink)`
  display: flex;
  align-items: center;
`;

const iconProps = {
  width: '2rem',
  height: '2rem',
};

const RawContact = () => {
  const { email } = CONTACT_DETAILS;
  const { github, linkedIn } = SOCIAL_LINKS;

  return (
    <nav aria-label="Contact">
      <List>
        <ListItem>
          <StyledExternalLink href={SITE_URL} aria-label="Return to homepage">
            <HomeIcon {...iconProps} />
            <Text>ajames.dev</Text>
          </StyledExternalLink>
        </ListItem>

        <ListItem>
          <StyledExternalLink href={`mailto:${email}`} aria-label="Email me">
            <EmailIcon {...iconProps} />
            <Text>{email}</Text>
          </StyledExternalLink>
        </ListItem>

        <ListItem>
          <StyledExternalLink href={github.url} aria-label="GitHub profile">
            <GitHubIcon {...iconProps} />
            <Text>{github.handle}</Text>
          </StyledExternalLink>
        </ListItem>

        <ListItem>
          <StyledExternalLink href={linkedIn.url} aria-label="LinkedIn profile">
            <LinkedInIcon {...iconProps} />
            <Text>{linkedIn.handle}</Text>
          </StyledExternalLink>
        </ListItem>
      </List>
    </nav>
  );
};

export const Contact = styled(RawContact)``;
