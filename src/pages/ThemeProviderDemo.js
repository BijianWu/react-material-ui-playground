import { Button, Slider } from '@mui/material';
import Typography from '@mui/material/Typography';
import "../assets/css/styles.css";
import { ThemeProvider, alpha, createTheme, styled } from '@mui/material/styles';



export default function ThemeProviderDemo() {
  const theme = createTheme({
    components: {
      // Name of the component
      MuiButtonBase: {
        defaultProps: {
          // The props to change the default for.
          disableRipple: true, // No more ripple, on the whole application 💣!
        },
      },
      MuiButton: {
        styleOverrides: { // change the style of the button
          // Name of the slot
          root: {
            // Some CSS
            fontSize: '1rem',
          },
        },
      },
    },
  });

    return (
        <>
          <ThemeProvider theme={theme}>
            <Button>This button has disabled ripples.</Button>
          </ThemeProvider>
        </>
    )
}