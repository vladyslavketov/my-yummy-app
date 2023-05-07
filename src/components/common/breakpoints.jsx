export const breakpoint = {
  mobile: 375,
  tablet: 768,
  desktop: 1440,
};

// export const breakpointPx = {
//   mobile: `${breakpoint.mobile}px`,
//   tablet: `${breakpoint.tablet}px`,
//   desktop: `${breakpoint.desktop}px`,
// };

export const minDevice = {
  mobile: `(min-width: ${breakpoint.mobile}px)`,
  tablet: `(min-width: ${breakpoint.tablet}px)`,
  desktop: `(min-width: ${breakpoint.desktop}px)`,
};

export const maxDevice = {
  mobile: `(max-width: ${breakpoint.mobile - 1}px)`,
  tablet: `(max-width: ${breakpoint.tablet - 1}px)`,
  desktop: `(max-width: ${breakpoint.desktop - 1}px)`,
};