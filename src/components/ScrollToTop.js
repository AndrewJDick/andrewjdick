import React, { useEffect, useState } from 'react';
import throttle from 'lodash-es/throttle';
import { ThickArrowUpIcon } from '@modulz/radix-icons';
import { useSpring } from 'react-spring';
import styled, { css } from 'styled-components';
import { IconButton } from './Button';

const StyledButton = styled(IconButton)(({ theme, $visible }) => [
  css`
    background: ${theme.overlay15};
    color: ${theme.copyColor};
    border: 2px solid;
    border-color: var(--color-charcoal);
    border-radius: 50%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
    will-change: transform;
    pointer-events: none;
    transition: transform 0.2s ease-in, border 0.2s ease-out;
    transform: translate3d(0, -100px, 0);
  `,
  $visible &&
    css`
      pointer-events: auto;
      transform: translate3d(0, 0, 0);
      transition: transform 0.4s ease-out;
    `,
]);

export const ScrollToTop = () => {
  const _window = typeof window !== 'undefined' && window;
  const [y, setY] = useSpring(() => ({ y: 0 }));
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    if (_window) {
      setY({
        y: 0,
        reset: true,
        from: { y: _window.scrollY },
        onFrame: props => window.scroll(0, props.y),
      });
    }
  }

  useEffect(() => {
    function handleScroll() {
      const isBelowThreshold = window.scrollY > _window.innerHeight;
      setIsVisible(isBelowThreshold);
    }

    _window.addEventListener('scroll', throttle(handleScroll, 100));

    return () => window.removeEventListener('scroll', handleScroll);
  }, [_window]);

  return (
    <StyledButton
      $visible={isVisible}
      aria-label="Scroll to top"
      onClick={handleClick}
      tabIndex={isVisible ? 0 : -1}
    >
      <ThickArrowUpIcon width="1.75rem" height="1.75rem" />
    </StyledButton>
  );
};
