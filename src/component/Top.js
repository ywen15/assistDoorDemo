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
  Divider,
  Stack
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

// import custom components


// import custom CSS
import '../css/top.css'

export default function Top(props) {
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
    <Grid className="user-select" container={true} justify="center">
      <Grid className="user-select-label" item={true} xs={12} textAlign="center">
        <Typography variant="h3">
          あなたは
        </Typography>
      </Grid>

      <Grid className="user-type" item={true} xs={6}>
        <Link variant="h5" href="/student/signin" underline="none">
          <img src="/icons/student.svg" />
          <br /><br />
          生徒
        </Link>
      </Grid>
      <Grid className="user-type" item={true} xs={6}>
        <Link variant="h5" href="/school/signin" underline="none">
          <img src="/icons/school.svg" />
          <br /><br />
          学校管理者
        </Link>
      </Grid>

    </Grid>
  );
}
