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
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

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
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          サインイン
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="メールアドレス"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="パスワード"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="パスワードを記憶する"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            サインイン
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                ログイン情報をお忘れの方
              </Link>
            </Grid>
            <Grid item>
              <Link href="/school/register" variant="body2">
                新規登録
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
