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
import '../../css/school.css'

export default function School(props) {
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
    <Grid className="school-info" container={true} justify="center">
      <Grid className="school-info-label" item={true} xs={12} textAlign="center">
        <Typography variant="h4">
          旭川理容美容専門学校
        </Typography>
      </Grid>



    </Grid>
  );
}
