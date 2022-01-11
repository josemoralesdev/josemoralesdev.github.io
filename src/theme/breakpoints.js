export const breakpoints = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  desktop: "1024px",
  desktopL: "1440px",
}

export const devices = {
  mobileS: `(min-width: ${breakpoints.mobileS})`,
  mobileM: `(min-width: ${breakpoints.mobileM} )`,
  mobileL: `(min-width: ${breakpoints.mobileL} )`,
  tablet: `(min-width: ${breakpoints.tablet} )`,
  desktop: `(min-width: ${breakpoints.desktop} )`,
  desktopL: `(min-width: ${breakpoints.desktopL} )`,
}
