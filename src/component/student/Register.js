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
  FormControlLabel, FormControl, FormLabel, InputLabel,
  Select, MenuItem,
  RadioGroup, Radio,
  Autocomplete
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

// import custom components


// import custom CSS
import '../../css/signin.css'

export default function Register(props) {
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
    navigate("/school/search")
    /*
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    */
  };

  const schoolList = ["旭川理容美容専門学校", "北見美容専門学校", "釧路理容美容専門学校", "札幌ビューティーアート専門学校", "札幌ビューティックアカデミー", "札幌ベルエポック美容専門学校", "函館理容美容専門学校", "北海道美容専門学校", "北海道理容美容専門学校", "青森県ビューティー&メディカル専門学校", "青森県ヘアアーチスト専門学校", "八戸理容美容専門学校", "岩手理容美容専門学校", "北日本ヘア・スタイリストカレッジ", "東北ヘア－モード学院", "盛岡ヘアメイク専門学校", "SENDAI中央理容美容専門学校", "仙台ビューティーアート専門学校", "仙台ヘアメイク専門学校", "仙台理容美容専門学校", "東北芸術高等専修学校", "秋田県理容美容専門学校", "秋田ヘアビューティカレッジ", "Beauty アカデミー山形", "山形美容専門学校", "AIZUビューティーカレッジ", "iwakiヘアメイクアカデミー", "郡山ヘアメイクカレッジ", "国際ビューティー＆フード大学校", "福島県高等理容美容学院", "茨城理容美容専門学校", "EIKA美容専門学校", "WFAビューティアカデミー", "水戸ビューティーカレッジ", "水戸美容専門学校", "足利デザイン・ビューティ専門学校", "国際自動車・ビューティ専門学校", "国際テクニカル美容専門学校", "国際テクニカル理容美容専門学校", "センスビューティカレッジ", "栃木県美容専門学校", "伊勢崎美容専門学校", "群馬県美容専門学校", "高崎ビューティモード専門学校", "大宮ビューティー＆ブライダル専門学校", "大宮理容美容専門学校", "グルノーブル美容専門学校", "埼玉県理容美容専門学校", "専門学校 トータルビューティカレッジ川越", "専門学校 東萌ビューティーカレッジ", "ミス・パリ・ビューティ専門学校 大宮校", "ジェイ ヘアメイク専門学校", "千葉ビューティー＆ブライダル専門学校", "千葉美容専門学校", "東京ベイカレッジ", "東洋理容美容専門学校", "パリ総合美容専門学校 柏校", "パリ総合美容専門学校 千葉校", "ユニバーサルビューティーカレッジ", "アポロ美容理容専門学校", "大竹高等専修学校", "窪田理容美容専門学校", "国際共立学園高等専修学校", "国際文化理容美容専門学校 国分寺校", "国際文化理容美容専門学校 渋谷校", "国際理容美容専門学校", "コーセー美容専門学校", "資生堂美容技術専門学校", "住田美容専門学校", "専門学校 エビスビューティカレッジ", "高山美容専門学校", "タカラ美容専門学校", "中央理美容専門学校", "東京総合美容専門学校", "東京ビューティーアート専門学校", "東京ビューティー＆ブライダル専門学校", "東京美容専門学校", "東京文化美容専門学校", "東京ベルエポック美容専門学校", "東京マックス美容専門学校", "東京モード学園", "日本美容専門学校", "ハリウッド美容専門学校", "ベルエポック美容専門学校", "町田美容専門学校", "真野美容専門学校", "マリー・ルイズ美容専門学校", "ミスパリ ビューティ専門学校", "山野美容芸術短期大学", "山野美容専門学校", "早稲田美容専門学校", "アイム湘南美容教育専門学校", "アーティスティックＢ横浜美容専門学校", "M.D.F BEAUTY COLLEGE", "神奈川ビューティー＆ビジネス専門学校", "鎌倉早見美容芸術専門学校", "国際総合ビューティーカレッジ", "湘南ビューティカレッジ", "横浜 ｆ カレッジ（ビューティースタイリスト科）", "横浜芸術高等専修学校", "横浜市立横浜商業高等学校別科（美容科）", "横浜ビューティー＆ブライダル専門学校", "横浜理容美容専門学校", "クレア ヘアモード専門学校", "国際ビューティモード専門学校", "長岡美容専門学校", "新潟美容専門学校 ジャパン・ビューティ・アカデミー", "新潟理容美容専門学校", "臼井美容専門学校", "専門学校 富山ビューティーカレッジ", "富山県理容美容専門学校", "石川県理容美容専門学校", "専門学校 金沢美専", "大原スポーツ医療保育福祉専門学校（美容科）", "福井県理容美容専門学校", "山梨県美容専門学校", "長野理容美容専門学校", "松本理容美容専門学校", "岐阜美容専門学校", "ベルフォート美容専校", "池田美容学校", "静岡アルス美容専門学校", "静岡県西部理容美容専門学校", "静岡県東部総合美容専門学校", "静岡県美容専門学校", "静岡新美容専門学校", "タカヤマ アドバンス ビューティー専門学校", "フリーエース美容学校", "ルネサンス デザイン・美容専門学校", "IG BEAUTY ACADEMY", "愛知県東三高等理容美容学校", "愛知中央美容専門学校", "愛知美容専門学校", "アクア理美容学校", "アリアーレビューティ専門学校", "セブンティーン美容専門学校", "セントラルビューティストカレッジ", "専門学校 中部ビューティ・デザイン・デンタルカレッジ", "中日美容専門学校", "中部美容専門学校 岡崎校", "中部美容専門学校 名古屋校", "東海美容学校", "名古屋綜合美容専門学校", "名古屋ビューティーアート専門学校", "名古屋ビューティ専門学校", "名古屋美容専門学校", "名古屋モード学園", "名古屋理容美容専門学校", "ビーキュービック美容学校", "美容専門学校 アーティス・ヘアー・カレッジ", "MOOビューティーアソシエイション", "旭美容専門学校", "伊勢理容美容専門学校", "ミエ・ヘア・アーチストアカデミー", "アミューズ美容専門学校", "京都医健専門学校", "京都美容専門学校", "京都理容美容専修学校", "YIC京都ビューティ専門学校", "アイム・近畿理容美容専門学校", "アーデントビューティーカレッジ", "ECCアーティスト美容専門学校", "ヴェールルージュ美容専門学校", "NRB日本理容美容専門学校", "大阪樟蔭女子大学（学芸学部化粧ファッション学科）", "大阪中央理容美容専門学校", "大阪ビューティーアート専門学校", "大阪美容専門学校", "大阪ベルェベル美容専門学校", "大阪モード学園", "桂make-upデザイン専門学校", "関西美容専門学校", "グラムール美容専門学校", "小出美容専門学校", "小出美容専門学校 大阪校", "高津理容美容専門学校", "堺女子短期大学（美容文化コース）", "スタリアビューティーカレッジ", "西日本ヘアメイクカレッジ 天王寺MiO校", "花園国際美容学院", "理容美容専門学校 西日本ヘアメイクカレッジ", "ル・トーア東亜美容専門学校", "ロゼ＆ビューティ美容専門学院", "尼崎理容美容専門学校", "アルファジャパン美容専門学校", "神戸ベルェベル美容専門学校", "神戸理容美容専門学校", "姫路理容美容専門学校", "BEAUTY ARTS KOBE 日本高等美容専門学校", "奈良理容美容専門学校", "ル・クレエ橿原美容専門学校", "IBW美容専門学校", "和歌山高等美容専門学校", "鳥取県理容美容専門学校", "島根県立東部高等技術校（美容科）", "浜田ビューティーカレッジ", "松江理容美容専門大学校", "岡山県理容美容専門学校", "専門学校 岡山ビューティモード", "専門学校 倉敷ビューティーカレッジ", "専門学校 マインドビューティーカレッジ", "広島県東部美容専門学校", "広島県理容美容専門学校", "広島ビューティ＆ブライダル専門学校", "広島美容専門学校", "下関理容美容専門学校", "東亜大学 芸術学部（トータルビューティ学科）", "山口県理容美容専門学校", "YICビューティモード専門学校", "専修学校 徳島県美容学校", "専門学校 徳島穴吹カレッジ", "徳島県立中央テクノスクール", "専修学校 香川県美容学校", "専門学校 穴吹ビューティカレッジ 高松", "一般社団法人 宇和島美容学校", "愛媛県美容専門学校", "河原ビューティモード専門学校", "東予理容美容専門学校", "高知理容美容専門学校", "龍馬デザイン・ビューティ専門学校", "麻生美容専門学校", "飯塚理容美容専門学校", "大村美容ファッション専門学校", "九州CTB専門学校", "ハリウッドワールド美容専門学校", "福岡ビューティーアート専門学校", "福岡美容専門学校 北九州校", "福岡美容専門学校 福岡校", "福岡ベルエポック美容専門学校", "福岡南美容専門学校", "福岡理容美容専門学校", "アイビービューティカレッジ", "エッジ国際美容専門学校", "佐世保美容専門学校", "長崎県美容専門学校", "九州美容専門学校", "熊本ベルェベル美容専門学校", "専修学校 モア・ヘアメイクカレッジ", "八代実業専門学校（美容師養成科）", "明日香美容文化専門大学校", "アンビシャス国際美容学校", "明星国際ビューティカレッジ", "宮崎サザンビューティ美容専門学校", "宮崎美容専門学校", "赤塚学園美容・デザイン専門学校", "鹿児島県美容専門学校", "鹿児島県理容美容専門学校", "鹿児島レディスカレッジ", "沖縄ホテル観光専門学校", "沖縄ビューティーアート専門学校", "専修学校 ビューティーモードカレッジ", "大育理容美容専門学校", "中部美容専門学校", "琉美インターナショナルビューティーカレッジ"];

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
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          ユーザ登録
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="姓"
                defaultValue="アシスト"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="名"
                name="lastName"
                defaultValue="ドア"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">性別</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel value="female" control={<Radio />} label="男性" />
                  <FormControlLabel value="male" control={<Radio />} label="女性" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={schoolList}
                renderInput={(params) => <TextField {...params} label="学校名" />}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">学年</InputLabel>
                <Select
                  label="grade"
                >
                  <MenuItem value={1}>一年生</MenuItem>
                  <MenuItem value={2}>二年生</MenuItem>
                  <MenuItem value={3}>三年生</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="利用規約に同意する"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            登録
          </Button>

        </Box>
      </Box>
    </Container>
  );
}
