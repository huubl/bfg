/* eslint-disable global-require */
module.exports = {
  prefix: ``,
  important: false,
  separator: `:`,
  theme: {
    screens: require(`./tailwind/screens`),
    colors: require(`./tailwind/colors`),
    spacing: require(`./tailwind/spacing`),
    aspectRatio: {
      square: [1, 1],
      '16/9': [16, 9],
    },
    backgroundColor: theme => theme(`colors`),
    backgroundPosition: {
      bottom: `bottom`,
      center: `center`,
      left: `left`,
      'left-bottom': `left bottom`,
      'left-top': `left top`,
      right: `right`,
      'right-bottom': `right bottom`,
      'right-top': `right top`,
      top: `top`,
    },
    backgroundSize: {
      auto: `auto`,
      cover: `cover`,
      contain: `contain`,
    },
    borderColor: theme => ({
      ...theme(`colors`),
      default: theme(`colors.gray.300`, `currentColor`),
    }),
    borderRadius: require(`./tailwind/border-radius`),
    borderWidth: require(`./tailwind/border-width`),
    boxShadow: require(`./tailwind/box-shadow`),
    container: {},
    customForms: require(`./tailwind/custom-forms`),
    cursor: {
      auto: `auto`,
      default: `default`,
      pointer: `pointer`,
      wait: `wait`,
      text: `text`,
      move: `move`,
      'not-allowed': `not-allowed`,
    },
    fill: {
      current: `currentColor`,
    },
    flex: {
      '1': `1 1 0%`,
      auto: `1 1 auto`,
      initial: `0 1 auto`,
      none: `none`,
    },
    flexGrow: {
      '0': `0`,
      default: `1`,
    },
    flexShrink: {
      '0': `0`,
      default: `1`,
    },
    fluidContainer: require(`./tailwind/fluid-container`),
    fontFamily: require(`./tailwind/font-family`),
    fontSize: require(`./tailwind/font-size`),
    fontWeight: {
      hairline: `100`,
      thin: `200`,
      light: `300`,
      normal: `400`,
      medium: `500`,
      semibold: `600`,
      bold: `700`,
      extrabold: `800`,
      black: `900`,
    },
    height: require(`./tailwind/height`),
    inset: require(`./tailwind/inset`),
    letterSpacing: require(`./tailwind/letter-spacing`),
    lineHeight: require(`./tailwind/line-height`),
    listStyleType: {
      none: `none`,
      disc: `disc`,
      decimal: `decimal`,
    },
    margin: (theme, { negative }) => ({
      auto: `auto`,
      ...theme(`spacing`),
      ...negative(theme(`spacing`)),
    }),
    maxHeight: require(`./tailwind/max-height`),
    maxWidth: require(`./tailwind/max-width`),
    minHeight: require(`./tailwind/min-height`),
    minWidth: require(`./tailwind/min-width`),
    objectPosition: {
      bottom: `bottom`,
      center: `center`,
      left: `left`,
      'left-bottom': `left bottom`,
      'left-top': `left top`,
      right: `right`,
      'right-bottom': `right bottom`,
      'right-top': `right top`,
      top: `top`,
    },
    opacity: require(`./tailwind/opacity`),
    order: {
      first: `-9999`,
      last: `9999`,
      none: `0`,
      '1': `1`,
      '2': `2`,
      '3': `3`,
      '4': `4`,
      '5': `5`,
      '6': `6`,
      '7': `7`,
      '8': `8`,
      '9': `9`,
      '10': `10`,
      '11': `11`,
      '12': `12`,
    },
    padding: theme => theme(`spacing`),
    placeholderColor: theme => theme(`colors`),
    stroke: {
      current: `currentColor`,
    },
    strokeWidth: {
      '0': `0`,
      '1': `1`,
      '2': `2`,
    },
    textColor: theme => theme(`colors`),
    width: require(`./tailwind/width`),
    zIndex: {
      auto: `auto`,
      '0': `0`,
      '10': `10`,
      '20': `20`,
      '30': `30`,
      '40': `40`,
      '50': `50`,
    },
    gap: theme => theme(`spacing`),
    gridTemplateColumns: {
      none: `none`,
      '1': `repeat(1, minmax(0, 1fr))`,
      '2': `repeat(2, minmax(0, 1fr))`,
      '3': `repeat(3, minmax(0, 1fr))`,
      '4': `repeat(4, minmax(0, 1fr))`,
      '5': `repeat(5, minmax(0, 1fr))`,
      '6': `repeat(6, minmax(0, 1fr))`,
      '7': `repeat(7, minmax(0, 1fr))`,
      '8': `repeat(8, minmax(0, 1fr))`,
      '9': `repeat(9, minmax(0, 1fr))`,
      '10': `repeat(10, minmax(0, 1fr))`,
      '11': `repeat(11, minmax(0, 1fr))`,
      '12': `repeat(12, minmax(0, 1fr))`,
    },
    gridColumn: {
      auto: `auto`,
      'span-1': `span 1 / span 1`,
      'span-2': `span 2 / span 2`,
      'span-3': `span 3 / span 3`,
      'span-4': `span 4 / span 4`,
      'span-5': `span 5 / span 5`,
      'span-6': `span 6 / span 6`,
      'span-7': `span 7 / span 7`,
      'span-8': `span 8 / span 8`,
      'span-9': `span 9 / span 9`,
      'span-10': `span 10 / span 10`,
      'span-11': `span 11 / span 11`,
      'span-12': `span 12 / span 12`,
    },
    gridColumnStart: {
      auto: `auto`,
      '1': `1`,
      '2': `2`,
      '3': `3`,
      '4': `4`,
      '5': `5`,
      '6': `6`,
      '7': `7`,
      '8': `8`,
      '9': `9`,
      '10': `10`,
      '11': `11`,
      '12': `12`,
      '13': `13`,
    },
    gridColumnEnd: {
      auto: `auto`,
      '1': `1`,
      '2': `2`,
      '3': `3`,
      '4': `4`,
      '5': `5`,
      '6': `6`,
      '7': `7`,
      '8': `8`,
      '9': `9`,
      '10': `10`,
      '11': `11`,
      '12': `12`,
      '13': `13`,
    },
    gridTemplateRows: {
      none: `none`,
      '1': `repeat(1, minmax(0, 1fr))`,
      '2': `repeat(2, minmax(0, 1fr))`,
      '3': `repeat(3, minmax(0, 1fr))`,
      '4': `repeat(4, minmax(0, 1fr))`,
      '5': `repeat(5, minmax(0, 1fr))`,
      '6': `repeat(6, minmax(0, 1fr))`,
    },
    gridRow: {
      auto: `auto`,
      'span-1': `span 1 / span 1`,
      'span-2': `span 2 / span 2`,
      'span-3': `span 3 / span 3`,
      'span-4': `span 4 / span 4`,
      'span-5': `span 5 / span 5`,
      'span-6': `span 6 / span 6`,
    },
    gridRowStart: {
      auto: `auto`,
      '1': `1`,
      '2': `2`,
      '3': `3`,
      '4': `4`,
      '5': `5`,
      '6': `6`,
      '7': `7`,
    },
    gridRowEnd: {
      auto: `auto`,
      '1': `1`,
      '2': `2`,
      '3': `3`,
      '4': `4`,
      '5': `5`,
      '6': `6`,
      '7': `7`,
    },
    transformOrigin: {
      center: `center`,
      top: `top`,
      'top-right': `top right`,
      right: `right`,
      'bottom-right': `bottom right`,
      bottom: `bottom`,
      'bottom-left': `bottom left`,
      left: `left`,
      'top-left': `top left`,
    },
    scale: require(`./tailwind/scale`),
    rotate: require(`./tailwind/rotate`),
    translate: require(`./tailwind/translate`),
    skew: require(`./tailwind/skew`),
    transitionProperty: require(`./tailwind/transition-property`),
    transitionTimingFunction: require(`./tailwind/transition-timing-function`),
    transitionDuration: require(`./tailwind/transition-duration`),
  },
  variants: {
    accessibility: [`responsive`, `focus`],
    alignContent: [`responsive`],
    alignItems: [`responsive`],
    alignSelf: [`responsive`],
    appearance: [`responsive`],
    aspectRatio: [`responsive`],
    backgroundAttachment: [`responsive`],
    backgroundColor: [`responsive`, `hover`, `focus`, `group-hover`],
    backgroundPosition: [`responsive`],
    backgroundRepeat: [`responsive`],
    backgroundSize: [`responsive`],
    borderCollapse: [`responsive`],
    borderColor: [`responsive`, `hover`, `focus`, `group-hover`],
    borderRadius: [`responsive`],
    borderStyle: [`responsive`],
    borderWidth: [`responsive`],
    boxShadow: [`responsive`, `hover`, `focus`, `group-hover`],
    boxSizing: [`responsive`],
    cursor: [`responsive`],
    display: [`responsive`],
    fill: [`responsive`],
    flex: [`responsive`],
    flexDirection: [`responsive`],
    flexGrow: [`responsive`],
    flexShrink: [`responsive`],
    flexWrap: [`responsive`],
    float: [`responsive`],
    clear: [`responsive`],
    fontFamily: [`responsive`],
    fontSize: [`responsive`],
    fontSmoothing: [`responsive`],
    fontStyle: [`responsive`],
    fontWeight: [`responsive`, `hover`, `focus`],
    height: [`responsive`],
    inset: [`responsive`],
    justifyContent: [`responsive`],
    letterSpacing: [`responsive`],
    lineHeight: [`responsive`],
    listStylePosition: [`responsive`],
    listStyleType: [`responsive`],
    margin: [`responsive`],
    maxHeight: [`responsive`],
    maxWidth: [`responsive`, `group-hover`],
    minHeight: [`responsive`],
    minWidth: [`responsive`],
    objectFit: [`responsive`],
    objectPosition: [`responsive`],
    opacity: [`responsive`, `hover`, `focus`, `group-hover`],
    order: [`responsive`],
    outline: [`responsive`, `focus`],
    overflow: [`responsive`],
    padding: [`responsive`],
    placeholderColor: [`responsive`, `focus`],
    pointerEvents: [`responsive`],
    position: [`responsive`],
    resize: [`responsive`],
    stroke: [`responsive`],
    strokeWidth: [`responsive`],
    tableLayout: [`responsive`],
    textAlign: [`responsive`],
    textColor: [`responsive`, `hover`, `focus`, `group-hover`],
    textDecoration: [`responsive`, `hover`, `focus`],
    textTransform: [`responsive`],
    userSelect: [`responsive`],
    verticalAlign: [`responsive`],
    visibility: [`responsive`],
    whitespace: [`responsive`],
    width: [`responsive`],
    wordBreak: [`responsive`],
    zIndex: [`responsive`],
    gap: [`responsive`],
    gridAutoFlow: [`responsive`],
    gridTemplateColumns: [`responsive`],
    gridColumn: [`responsive`],
    gridColumnStart: [`responsive`],
    gridColumnEnd: [`responsive`],
    gridTemplateRows: [`responsive`],
    gridRow: [`responsive`],
    gridRowStart: [`responsive`],
    gridRowEnd: [`responsive`],
    transform: [`responsive`],
    transformOrigin: [`responsive`],
    scale: [`responsive`, `hover`, `focus`, `group-hover`],
    rotate: [`responsive`, `hover`, `focus`],
    translate: [`responsive`, `hover`, `focus`, `group-hover`],
    skew: [`responsive`, `hover`, `focus`],
    transitionProperty: [`responsive`],
    transitionTimingFunction: [`responsive`],
    transitionDuration: [`responsive`],
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require(`./tailwind/space`),
    require(`tailwindcss-aspect-ratio`),
    require(`@tailwindcss/custom-forms`),
    require(`tailwindcss-fluid-container`)({
      componentPrefix: ``,
      widthUtilities: false,
      paddingUtilities: false,
      marginUtilities: false,
      negativeMarginUtilities: false,
    }),
  ],
}
/* eslint-enable global-require */