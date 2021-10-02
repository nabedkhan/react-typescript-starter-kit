export default {
  MuiAvatar: {
    styleOverrides: {
      fallback: {
        height: '75%',
        width: '75%'
      }
    }
  },
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'none'
      }
    }
  },
  MuiCssBaseline: {
    styleOverrides: {
      '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
      },
      html: {
        width: '100%',
        height: '100%',
        WebkitOverflowScrolling: 'touch',
        MozOsxFontSmoothing: 'grayscale',
        WebkitFontSmoothing: 'antialiased'
      },
      body: {
        width: '100%',
        height: '100%'
      },
      input: {
        '&[type=number]': {
          MozAppearance: 'textfield',
          '&::-webkit-outer-spin-button': {
            margin: 0,
            WebkitAppearance: 'none'
          },
          '&::-webkit-inner-spin-button': {
            margin: 0,
            WebkitAppearance: 'none'
          }
        }
      },
      '#root': {
        width: '100%',
        height: '100%'
      },
      '#nprogress .bar': {
        zIndex: '2000 !important'
      }
    }
  },
  MuiCardHeader: {
    defaultProps: {
      titleTypographyProps: {
        variant: 'h6'
      }
    }
  },
  MuiLinearProgress: {
    styleOverrides: {
      root: {
        borderRadius: 3,
        overflow: 'hidden'
      }
    }
  },
  MuiListItemIcon: {
    styleOverrides: {
      root: {
        minWidth: 'auto',
        marginRight: '16px'
      }
    }
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundImage: 'none'
      }
    }
  }
};
