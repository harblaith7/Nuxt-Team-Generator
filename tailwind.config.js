/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
const colors = {
  indigo: '#5c6ac4',
  blue: '#007ace',
  red: '#de3618',
  grey: "rgba(128, 128, 128, 0.363)"
}

 const fontSize = {
      // Desktop font size
      'desktop-error': '19.375rem', // 310px
      'desktop-hero': '4rem', // 64px
      'desktop-32': '2rem', // 32px
      'desktop-h1': '2.5rem', // 40px
      'desktop-h2': '1.875rem', // 30px
      'desktop-h3': '1.5rem', // 20px
      'desktop-h4': '1.0625rem', // 17px
      'desktop-h5': '0.9375rem', // 15px
      'desktop-h6': '0.8125rem', // 13px
      'desktop-body': '1rem', // 16px
      'desktop-note': '0.6875rem', // 11px
      // Mobile font size
      'mobile-error': '10.4rem', // 156px
      'mobile-hero': '2.4rem', // 36px
      'mobile-h1': '2.133rem', // 32px
      'mobile-h2': '1.6rem', // 24px
      'mobile-h3': '1.133rem', // 17px
      'mobile-h5': '0.866rem', // 13px
      'mobile-h6': '0.733rem', // 11px
      'mobile-body': '1rem', // 15px
      'mobile-note': '0.533rem' // 8px
    }

module.exports = {
  theme: {
    colors,
    fontSize
  },
  variants: {},
  plugins: []
}
