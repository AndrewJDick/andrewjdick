import React from 'react';
import { Transition, Spring, Trail, Keyframes } from 'react-spring/renderprops';
import { TransitionState } from 'gatsby-plugin-transition-link';
import * as d3 from 'd3-ease';

const easeIn = t => d3.easeSinIn(t);
const easeOut = t => d3.easeSinOut(t);

export const FadeThrough = ({ children }) => {
  return (
    <TransitionState>
      {({ transitionStatus, exit, entry }) => {
        const mount = ['entered', 'entering'].includes(transitionStatus);
        const duration = mount ? entry.length : exit.length;

        return (
          <Transition
            native
            items={mount}
            from={mount && { s: 0.99 }}
            enter={mount && { s: 1 }}
            leave={!mount && { o: 0 }}
            config={{
              duration: duration ? duration * 1000 : 300,
              easing: t => d3.easeCubicOut(t),
            }}
          >
            {() => props => children(props)}
          </Transition>
        );
      }}
    </TransitionState>
  );
};

export const FadeIn = ({ children }) => {
  return (
    <TransitionState>
      {({ transitionStatus }) => {
        const mount = ['entered', 'entering'].includes(transitionStatus);

        return (
          <Transition
            native
            items={mount}
            from={{ o: 0 }}
            enter={{ o: 1 }}
            leave={{ o: 0 }}
            config={[{ duration: 210, delay: 200, easing: easeOut }]}
          >
            {mount => mount && (props => children(props))}
          </Transition>
        );
      }}
    </TransitionState>
  );
};

export const HeroSpring = ({ variant, children }) => {
  const positions = {
    default: [{ rem: 0 }, { border: -100 }],
    page: [{ rem: 12.5 }, { border: 0 }],
    post: [{ rem: 25 }, { border: 0 }],
  };

  const configs = {
    default: key =>
      key === 'border'
        ? {
            duration: 100,
            delay: 0,
            easing: easeIn,
          }
        : {
            duration: 400,
            delay: 400,
            easing: easeIn,
          },
    page: key =>
      key === 'border'
        ? {
            duration: 100,
            delay: 400,
            easing: easeOut,
          }
        : {
            duration: 400,
            delay: 0,
            easing: easeOut,
          },
    post: key =>
      key === 'border'
        ? {
            duration: 100,
            delay: 300,
            easing: easeOut,
          }
        : {
            duration: 300,
            delay: 0,
            easing: easeOut,
          },
  };

  const currentPosition = positions[variant];
  const currentConfig = configs[variant];

  return (
    <Spring
      native
      items={currentPosition}
      to={{
        rem: currentPosition[0].rem,
        border: currentPosition[1].border,
      }}
      config={currentConfig}
    >
      {props => children(props)}
    </Spring>
  );
};

export const BlogTrail = ({ items, children }) => {
  return (
    <Trail
      native
      items={items}
      keys={({ node }) => node.id}
      from={{ s: 0.92 }}
      to={{ s: 1 }}
      config={{ duration: 400, easing: easeOut }}
    >
      {item => props => children(item, props)}
    </Trail>
  );
};

export const DrawerSpring = Keyframes.Spring({
  open: {
    config: {
      duration: 300,
      delay: 0,
      easing: easeOut,
    },
    from: { x: -100 },
    x: 0,
  },
  close: {
    config: {
      duration: 250,
      delay: 150,
      easing: easeIn,
    },
    x: -100,
  },
});
