const theme = {
  color: {
    primary: '#C20C0C'
  },
  mixin: {
    wrapv1: `
      width: 1100px; 
      margin: 0 auto;
    `,
    textNowrap: `
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;`
  }
}

export type Theme = typeof theme

export default theme
