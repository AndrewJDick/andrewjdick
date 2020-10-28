import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { navigate } from 'gatsby-link';
import { SEO } from '../components/SEO';
import { Text } from '../components/Text';
import { TickIcon } from '../components/icons';
import { Link } from '../components/Link';
import { Footer } from '../components/Footer';
import { MEDIA, BREAKPOINTS } from '../styles/media';
import { convertPxToRem } from '../utils/unitConversion';
import { encode } from '../utils/encode';
import { fadeInAnimation, scrollLeftAnimation } from '../styles/animation';

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 76px;
  margin-bottom: 0;
  margin-right: auto;
  margin-left: auto;
  padding: 0;
  width: 100%;
  max-width: ${convertPxToRem(BREAKPOINTS.tablet)};

  ${MEDIA.tablet`
  padding: 0 var(--spacing-huge);
  margin-bottom: var(--spacing-massive);
  ${scrollLeftAnimation};
  `}
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  width: 100%;
  min-height: 100vh;
`;

const Input = styled.input(
  ({ theme }) => css`
    width: 100%;
  `,
);

const TextArea = styled.textarea(
  ({ theme }) => css`
    display: block;
    min-width: 100%;
    max-width: 100%;
    border-radius: 4px;
  `,
);

const Button = styled.button`
  padding: var(--spacing-small) var(--spacing-large);
  background-color: #2b6cb0;
  color: rgba(255, 255, 255, 0.9);
  border: 0;
  min-width: 150px;
  border-radius: 4px;
  transition: background-color 0.2s ease-out;
  cursor: pointer;

  &:hover {
    background-color: var(--color-blue-600);
  }

  &:active {
    background-color: var(--color-orange-400);
  }

  ${MEDIA.tablet`
  align-self: flex-start;
  padding: var(--spacing-tiny) var(--spacing-large);
  `}
`;

const Form = styled.form(
  ({ theme }) => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: var(--spacing-massive) var(--spacing-medium);
    background-color: ${theme.overlay10};
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    border-top: 2px solid var(--color-orange-400);

    & > * {
      ${fadeInAnimation};
    }

    ${MEDIA.tablet`
    flex: 0 1 auto;
    border-top: none;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    margin-bottom: var(--spacing-massive);
    padding: var(--spacing-massive);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, .18);
    
    &::after {
      border-top-right-radius: 4px;
      border-top-left-radius: 4px;
    }
    `}
  `,
);

const StyledLink = styled(Link)(
  ({ theme }) => css`
    display: block;
    color: ${theme.linkColor};

    ${MEDIA.tablet`
    display: inline-block;
  `}
  `,
);

const Title = styled(Text)`
  color: white;
  margin-bottom: var(--spacing-large);

  ${MEDIA.tablet`
    opacity: 0;
    pointer-events: none;
  `}
`;

export default function Contact({ location }) {
  const [state, setState] = useState({});
  const { success } = location.state || {};

  function handleChange(event) {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;

    console.log('huh');

    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() =>
        navigate(form.getAttribute('action'), {
          state: { success: true },
          replace: true,
        }),
      )
      .catch(error => alert(error));
  }

  return (
    <>
      <SEO path="/contact" title="Contact" description="Get in touch with me" />
      <Wrapper>
        <Main>
          <Title as="h1" size="4xl" id="contact">
            Contact
          </Title>
          <Form
            name="contact"
            method="POST"
            action="/contact"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            {success ? (
              <>
                <TickIcon
                  width="3rem"
                  height="3rem"
                  css="color: var(--color-green-400); margin-bottom: var(--spacing-huge);"
                />
                <Text
                  size="xxxl"
                  as="h2"
                  css="margin-bottom: var(--spacing-huge);"
                >
                  Thanks!
                </Text>
                <Text as="p" css="margin-bottom: var(--spacing-medium);">
                  Your message has been successfully submitted. I&apos;ll be in
                  touch shortly.
                </Text>
                <Text as="p" css="margin-bottom: var(--spacing-medium);">
                  Forget to ask something?{' '}
                  <StyledLink to="/contact" getProps={() => {}}>
                    Submit another message
                  </StyledLink>
                </Text>
              </>
            ) : (
              <>
                <label htmlFor="form-name" hidden>
                  <Text>Netlify requires this:</Text>
                  <Input
                    id="form-name"
                    name="form-name"
                    value="contact"
                    readOnly
                  />
                </label>

                <label htmlFor="bot-field" hidden>
                  <Text>Don’t fill this out:</Text>
                  <Input id="bot-field" name="bot-field" />
                </label>

                <label
                  htmlFor="email"
                  css="margin-bottom: var(--spacing-huge);"
                >
                  <Text
                    size="xs"
                    css="display: block; margin-bottom: var(--spacing-tiny);"
                  >
                    From
                  </Text>
                  <Input
                    id="email"
                    type="email"
                    name="contact-email"
                    placeholder="your@email.com"
                    onChange={handleChange}
                    required
                  />
                </label>

                <label
                  htmlFor="subject"
                  css="margin-bottom: var(--spacing-huge);"
                >
                  <Text
                    size="xs"
                    css="display: block; margin-bottom: var(--spacing-tiny);"
                  >
                    Subject
                  </Text>
                  <Input
                    id="subject"
                    name="contact-subject"
                    placeholder="Let's get in touch"
                    onChange={handleChange}
                    required
                  />
                </label>

                <label
                  htmlFor="message"
                  css="margin-bottom: var(--spacing-massive);"
                >
                  <Text
                    size="xs"
                    css="display: block; margin-bottom: var(--spacing-medium);"
                  >
                    Message
                  </Text>
                  <TextArea
                    id="message"
                    name="contact-message"
                    rows="6"
                    minlength="20"
                    onChange={handleChange}
                    required
                  />
                </label>

                <Button type="submit">Send</Button>
              </>
            )}
          </Form>
        </Main>
        <Footer />
      </Wrapper>
    </>
  );
}
