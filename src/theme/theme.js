import { createTheme } from '@mui/material/styles';

/**
 * Define theme
 */
const theme = createTheme({
  palette: {
    primary: {
      main: '#ff1459',
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
    },
    text: { primary: '#3c4043' },
  },
});

export default theme;