// import third-party libraries
import {
  AppBar,
  Grid,
  Box,
  Toolbar,
  Typography
} from '@mui/material';

// import custom CSS
import '../../css/footer.css';

export default function Footer() {
  /**
   *  Render the component
   */
  return (
    <Grid container={true}>
      <Grid item={true} xs={12}>&nbsp;</Grid>
      <Grid item={true} xs={12}>&nbsp;</Grid>
      <Grid item={true} xs={12}>&nbsp;</Grid>
      <Grid item={true} xs={12}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="caption">
            &copy; {new Date().getFullYear()} AssistDoor
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}