// import React libraries
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
  Card, CardContent, CardMedia, Chip, CardActions, SvgIcon,
  Divider,
  Stack
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import SendIcon from '@mui/icons-material/Send';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SchoolIcon from '@mui/icons-material/School';
import ShareIcon from '@mui/icons-material/Share';
import LanguageIcon from '@mui/icons-material/Language';

// import custom components


// import custom CSS
import '../../css/school.css'

// import custom svgs
import { ReactComponent as YTicon } from '../../svg/yt.svg'
import { ReactComponent as Xicon } from '../../svg/x.svg'
import { ReactComponent as IGicon } from '../../svg/ig.svg'
import { ReactComponent as TKicon } from '../../svg/tk.svg'

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

      <Grid item={true} xs={12} textAlign="left" sx={{ padding: "10px" }}>
        <Card variant="outlined">
          <CardContent>
            <Stack direction="row" spacing={1} alignItems="center">
              <img src="/logos/asahikawa.jpg" style={{ width: "70px", height: "70px" }} />
              <Stack direction="column" justifyContent="flex-start" alignItems="flex-start">
                <Typography component="div" variant="h6" textAlign="left">
                  旭川理容美容専門学校
                </Typography>

                <Typography component={Link} to="https://atcbb.jp/" variant="caption" textAlign="left" color="primary">
                  atcbb.jp
                </Typography>
              </Stack>
            </Stack>

            <Grid item={true} xs={12}>&nbsp;</Grid>

            <Stack direction="column" spacing={1}>
              <Button variant="outlined" startIcon={<DownloadIcon />}>資料ダウンロード</Button>
              <Button variant="contained" component={Link} to="/chat" startIcon={<SendIcon />}>担当者とチャット</Button>
              <Button variant="outlined" startIcon={<FavoriteIcon />}>ブックマーク追加</Button>
            </Stack>

            <Grid item={true} xs={12}>&nbsp;</Grid>

            <Button variant="text" color="inherit" startIcon={<SchoolIcon />}>
              オープンキャンパス日程
            </Button>
            <Stack direction="row" spacing={2} alignItems="center">
              <Chip label="3/1" color="primary" variant="outlined"></Chip>
              <Chip label="3/4" color="primary" variant="outlined"></Chip>
              <Chip label="3/5" color="primary" variant="outlined"></Chip>
            </Stack>

            <Grid item={true} xs={12}>&nbsp;</Grid>

            <Button variant="text" color="inherit" startIcon={<ShareIcon />}>
              公式アカウント
            </Button>
            <Stack direction="row" spacing={2} alignItems="center">
              <SvgIcon component={YTicon} inheritViewBox />
              <SvgIcon component={TKicon} inheritViewBox />
              <SvgIcon component={IGicon} inheritViewBox />
              <SvgIcon component={Xicon} inheritViewBox />
              <LanguageIcon color="inherit" />
            </Stack>

            <Grid item={true} xs={12}>&nbsp;</Grid>
            <Divider variant="middle" />
            <Grid item={true} xs={12}>&nbsp;</Grid>

            <Typography variant="h6">
              教育方針　「心・技・礼」　理容師・美容師のプロとして活躍できる人材を育成
            </Typography>
            <Grid item={true} xs={12}>&nbsp;</Grid>
            <Typography variant="body2">

              “美しさを追求する”
              社会で即活躍する人材育成の源は、一人一人の学生に目を行き届かせた丁寧な技術指導と人間力を高める学校内での生活指導。全国から多くの求人が寄せられる。
            </Typography>
            <Grid item={true} xs={12}>&nbsp;</Grid>
          </CardContent>
          <Divider />
        </Card>
      </Grid>

      <Grid item={true} xs={12} textAlign="center">
        <Button variant="outlined" component={Link} to="/school/search">学校一覧に戻る</Button>
      </Grid>

      <Grid item={true} xs={12}>&nbsp;</Grid>
      <Grid item={true} xs={12}>&nbsp;</Grid>
      <Grid item={true} xs={12}>&nbsp;</Grid>

    </Grid>
  );
}
