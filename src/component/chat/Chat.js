// import React libraries
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// import third-party libraries
import Moment from 'moment-timezone';
import 'moment/locale/ja';
import {
  Grid,
  Button,
  TextField, InputAdornment,
  Chip,
  Divider,
  Stack
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SendIcon from '@mui/icons-material/Send';

// import custom components


// import custom CSS
import '../../css/chat.css'

export default function Chat(props) {
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
    <Grid className="chat-wrapper" container={true} justify="center">
      <Grid className="chat-header" item={true} xs={12} textAlign="center">
        <Button variant="outlined" startIcon={<ArrowBackIosNewIcon />} component={Link} to="/chat">
          メッセージ一覧に戻る
        </Button>
      </Grid>

      <Grid className="chat-body" container={true} textAlign="center">
        <Grid item={true} xs={12}>&nbsp;</Grid>
        <Grid className="chat-date" item={true} xs={12}>
          <Divider textAlign="center">
            {Moment().locale('ja').format('LLL')}
          </Divider>
        </Grid>
        <Grid item={true} xs={12}>&nbsp;</Grid>
        <Grid item={true} xs={12} textAlign="right">
          <Chip label="はじめまして、◯◯高校のXXです。" color="info" />
        </Grid>
        <Grid item={true} xs={12}>&nbsp;</Grid>
        <Grid item={true} xs={12} textAlign="left">
          <Chip label="ご連絡ありがとうございます。" />
        </Grid>
      </Grid>

      <Grid className="chat-tool" container={true} textAlign="center">
        <TextField className="msg-box" label="メッセージ" variant="outlined" color="primary" InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SendIcon />
            </InputAdornment>
          ),
        }} />
      </Grid>

    </Grid>
  );
}
