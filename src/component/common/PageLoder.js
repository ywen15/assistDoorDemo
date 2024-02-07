// import third-party libraries
import { Backdrop, CircularProgress } from '@mui/material';

export default function PageLoader(props) {
  /**
   *  Render the component
   */
  return (
    <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={props.isLoading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}