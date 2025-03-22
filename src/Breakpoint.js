
export const BREAKPOINTS = {
   tabletMin: 600,
   laptopMin: 1100,
   desktopMin: 1500,
};

export const QUERIES = {
   mobileAndDown: `(max-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
   tabletAndDown: `(max-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
};