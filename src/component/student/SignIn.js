// import React libraries
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// import third-party libraries
import {
  Container,
  Grid,
  Typography,
  Box,
  Avatar,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Link,
  Divider
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

// import custom components
import SignInProvider from './SignInProvider';

// import custom CSS
import '../../css/signin.css'

export default function SignIn(props) {
  /**
   *  React variables
   */
  const navigate = useNavigate();

  /**
   *  React Effects
   */
  React.useEffect(() => {
    props.setIsLoading(false);
  }, []);

  /**
   *  Custom functions
   */


  /**
   *  Render the component
   */
  return (
    <Container className="signin" component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >

        <Typography component="h1" variant="h5">
          はじめる
        </Typography>

        <Grid item={true} xs={12}>&nbsp;</Grid>

        <SignInProvider />

      </Box>
    </Container>
  );
}
