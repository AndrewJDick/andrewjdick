import { mix } from 'polished';

const LIGHT_THEME = {
  background: 'var(--color-white)',
  headerColor: 'var(--color-charcoal)',
  copyColor: 'var(--color-black)',
  linkColor: 'var(--color-blue-700)',
  highlightColor: 'var(--color-blue-600)',
  auxiliaryColor: 'var(--color-gray-700)',
  borderColor: 'var(--color-charcoal)',
  cardColor: 'var(--color-black)',
  cardLinkColor: 'var(--color-blue-600)',
  cardHeaderColor: 'var(--color-black)',
  cardInfoColor: 'var(--color-charcoal)',
  inputColor: 'var(--color-black)',
  inputCaretColor: 'var(--color-gray-600)',
  inputBorderColor: 'var(--color-gray-600)',
  inputLabelColor: 'var(--color-charcoal)',
  inputPlaceholderColor: 'rgba(0, 0, 0, 0.33)',
  inputAutofillColor: 'var(--color-blue-600)',
  cvHeaderColor: 'var(--color-black)',
  cvSubheaderColor: 'var(--color-charcoal)',
  cvInterfaceColor: 'var(--color-charcoal)',
  cvBorderColor: 'var(--color-charcoal)',
  blogSyntaxColor: 'var(--color-gray-600)',
  navLinkHover: 'var(--color-orange-500)',
  overlay5: `${mix(0.9, 'rgb(255,255,255)', 'rgb(0, 0, 0)')}`,
  overlay10: `${mix(0.95, 'rgb(255,255,255)', 'rgb(0,0,0)')}`,
};

const DARK_THEME = {
  background: 'var(--color-black)',
  headerColor: 'var(--color-gray-200)',
  copyColor: 'var(--color-white)',
  linkColor: 'var(--color-blue-400)',
  highlightColor: 'var(--color-orange-400)',
  auxiliaryColor: 'var(--color-gray-400)',
  borderColor: 'var(--color-charcoal)',
  cardColor: 'var(--color-gray-200)',
  cardLinkColor: 'var(--color-blue-600)',
  cardHeaderColor: 'var(--color-orange-200)',
  cardInfoColor: 'var(--color-gray-200)',
  inputColor: 'var(--color-white)',
  inputCaretColor: 'var(--color-gray-400)',
  inputBorderColor: 'var(--color-gray-600)',
  inputLabelColor: 'var(--color-gray-200)',
  inputPlaceholderColor: 'rgba(255, 255, 255, 0.33)',
  inputAutofillColor: 'var(--color-orange-400)',
  cvHeaderColor: 'var(--color-orange-400)',
  cvSubheaderColor: 'var(--color-orange-200)',
  cvInterfaceColor: 'var(--color-gray-600)',
  cvBorderColor: 'var(--color-orange-400)',
  blogSyntaxColor: 'var(--color-orange-400)',
  navLinkHover: 'var(--color-blue-500)',
  overlay5: `${mix(0.95, 'rgb(0,0,0)', 'rgb(255, 255, 255)')}`,
  overlay10: `${mix(0.925, 'rgb(0,0,0)', 'rgb(255,255,255)')}`,
};

export const THEMES = {
  light: LIGHT_THEME,
  dark: DARK_THEME,
};

export const DEFAULT_THEME = 'dark';
