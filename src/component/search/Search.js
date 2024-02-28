// import React libraries
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// import third-party libraries
import {
  Grid,
  Typography,
  Button,
  TextField,
  Divider,
  Stack,
  Autocomplete,
  Card, CardContent, CardMedia, Chip, CardActions, SvgIcon
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SchoolIcon from '@mui/icons-material/School';
import ShareIcon from '@mui/icons-material/Share';
import LanguageIcon from '@mui/icons-material/Language';

// import custom components
import '../../css/search.css'

// import custom CSS

// import custom svgs
import { ReactComponent as YTicon } from '../../svg/yt.svg'
import { ReactComponent as Xicon } from '../../svg/x.svg'
import { ReactComponent as IGicon } from '../../svg/ig.svg'
import { ReactComponent as TKicon } from '../../svg/tk.svg'

export default function Search(props) {
  /**
   *  React variables
   */
  const navigate = useNavigate();
  const [showCriteria, setShowCriteria] = React.useState(false);

  /**
   *  React Effects
   */
  React.useEffect(() => {
    props.setIsLoading(false);
  }, []);

  /**
   *  Custom functions
   */

  const schoolList = ["旭川理容美容専門学校", "北見美容専門学校", "釧路理容美容専門学校", "札幌ビューティーアート専門学校", "札幌ビューティックアカデミー", "札幌ベルエポック美容専門学校", "函館理容美容専門学校", "北海道美容専門学校", "北海道理容美容専門学校", "青森県ビューティー&メディカル専門学校", "青森県ヘアアーチスト専門学校", "八戸理容美容専門学校", "岩手理容美容専門学校", "北日本ヘア・スタイリストカレッジ", "東北ヘア－モード学院", "盛岡ヘアメイク専門学校", "SENDAI中央理容美容専門学校", "仙台ビューティーアート専門学校", "仙台ヘアメイク専門学校", "仙台理容美容専門学校", "東北芸術高等専修学校", "秋田県理容美容専門学校", "秋田ヘアビューティカレッジ", "Beauty アカデミー山形", "山形美容専門学校", "AIZUビューティーカレッジ", "iwakiヘアメイクアカデミー", "郡山ヘアメイクカレッジ", "国際ビューティー＆フード大学校", "福島県高等理容美容学院", "茨城理容美容専門学校", "EIKA美容専門学校", "WFAビューティアカデミー", "水戸ビューティーカレッジ", "水戸美容専門学校", "足利デザイン・ビューティ専門学校", "国際自動車・ビューティ専門学校", "国際テクニカル美容専門学校", "国際テクニカル理容美容専門学校", "センスビューティカレッジ", "栃木県美容専門学校", "伊勢崎美容専門学校", "群馬県美容専門学校", "高崎ビューティモード専門学校", "大宮ビューティー＆ブライダル専門学校", "大宮理容美容専門学校", "グルノーブル美容専門学校", "埼玉県理容美容専門学校", "専門学校 トータルビューティカレッジ川越", "専門学校 東萌ビューティーカレッジ", "ミス・パリ・ビューティ専門学校 大宮校", "ジェイ ヘアメイク専門学校", "千葉ビューティー＆ブライダル専門学校", "千葉美容専門学校", "東京ベイカレッジ", "東洋理容美容専門学校", "パリ総合美容専門学校 柏校", "パリ総合美容専門学校 千葉校", "ユニバーサルビューティーカレッジ", "アポロ美容理容専門学校", "大竹高等専修学校", "窪田理容美容専門学校", "国際共立学園高等専修学校", "国際文化理容美容専門学校 国分寺校", "国際文化理容美容専門学校 渋谷校", "国際理容美容専門学校", "コーセー美容専門学校", "資生堂美容技術専門学校", "住田美容専門学校", "専門学校 エビスビューティカレッジ", "高山美容専門学校", "タカラ美容専門学校", "中央理美容専門学校", "東京総合美容専門学校", "東京ビューティーアート専門学校", "東京ビューティー＆ブライダル専門学校", "東京美容専門学校", "東京文化美容専門学校", "東京ベルエポック美容専門学校", "東京マックス美容専門学校", "東京モード学園", "日本美容専門学校", "ハリウッド美容専門学校", "ベルエポック美容専門学校", "町田美容専門学校", "真野美容専門学校", "マリー・ルイズ美容専門学校", "ミスパリ ビューティ専門学校", "山野美容芸術短期大学", "山野美容専門学校", "早稲田美容専門学校", "アイム湘南美容教育専門学校", "アーティスティックＢ横浜美容専門学校", "M.D.F BEAUTY COLLEGE", "神奈川ビューティー＆ビジネス専門学校", "鎌倉早見美容芸術専門学校", "国際総合ビューティーカレッジ", "湘南ビューティカレッジ", "横浜 ｆ カレッジ（ビューティースタイリスト科）", "横浜芸術高等専修学校", "横浜市立横浜商業高等学校別科（美容科）", "横浜ビューティー＆ブライダル専門学校", "横浜理容美容専門学校", "クレア ヘアモード専門学校", "国際ビューティモード専門学校", "長岡美容専門学校", "新潟美容専門学校 ジャパン・ビューティ・アカデミー", "新潟理容美容専門学校", "臼井美容専門学校", "専門学校 富山ビューティーカレッジ", "富山県理容美容専門学校", "石川県理容美容専門学校", "専門学校 金沢美専", "大原スポーツ医療保育福祉専門学校（美容科）", "福井県理容美容専門学校", "山梨県美容専門学校", "長野理容美容専門学校", "松本理容美容専門学校", "岐阜美容専門学校", "ベルフォート美容専校", "池田美容学校", "静岡アルス美容専門学校", "静岡県西部理容美容専門学校", "静岡県東部総合美容専門学校", "静岡県美容専門学校", "静岡新美容専門学校", "タカヤマ アドバンス ビューティー専門学校", "フリーエース美容学校", "ルネサンス デザイン・美容専門学校", "IG BEAUTY ACADEMY", "愛知県東三高等理容美容学校", "愛知中央美容専門学校", "愛知美容専門学校", "アクア理美容学校", "アリアーレビューティ専門学校", "セブンティーン美容専門学校", "セントラルビューティストカレッジ", "専門学校 中部ビューティ・デザイン・デンタルカレッジ", "中日美容専門学校", "中部美容専門学校 岡崎校", "中部美容専門学校 名古屋校", "東海美容学校", "名古屋綜合美容専門学校", "名古屋ビューティーアート専門学校", "名古屋ビューティ専門学校", "名古屋美容専門学校", "名古屋モード学園", "名古屋理容美容専門学校", "ビーキュービック美容学校", "美容専門学校 アーティス・ヘアー・カレッジ", "MOOビューティーアソシエイション", "旭美容専門学校", "伊勢理容美容専門学校", "ミエ・ヘア・アーチストアカデミー", "アミューズ美容専門学校", "京都医健専門学校", "京都美容専門学校", "京都理容美容専修学校", "YIC京都ビューティ専門学校", "アイム・近畿理容美容専門学校", "アーデントビューティーカレッジ", "ECCアーティスト美容専門学校", "ヴェールルージュ美容専門学校", "NRB日本理容美容専門学校", "大阪樟蔭女子大学（学芸学部化粧ファッション学科）", "大阪中央理容美容専門学校", "大阪ビューティーアート専門学校", "大阪美容専門学校", "大阪ベルェベル美容専門学校", "大阪モード学園", "桂make-upデザイン専門学校", "関西美容専門学校", "グラムール美容専門学校", "小出美容専門学校", "小出美容専門学校 大阪校", "高津理容美容専門学校", "堺女子短期大学（美容文化コース）", "スタリアビューティーカレッジ", "西日本ヘアメイクカレッジ 天王寺MiO校", "花園国際美容学院", "理容美容専門学校 西日本ヘアメイクカレッジ", "ル・トーア東亜美容専門学校", "ロゼ＆ビューティ美容専門学院", "尼崎理容美容専門学校", "アルファジャパン美容専門学校", "神戸ベルェベル美容専門学校", "神戸理容美容専門学校", "姫路理容美容専門学校", "BEAUTY ARTS KOBE 日本高等美容専門学校", "奈良理容美容専門学校", "ル・クレエ橿原美容専門学校", "IBW美容専門学校", "和歌山高等美容専門学校", "鳥取県理容美容専門学校", "島根県立東部高等技術校（美容科）", "浜田ビューティーカレッジ", "松江理容美容専門大学校", "岡山県理容美容専門学校", "専門学校 岡山ビューティモード", "専門学校 倉敷ビューティーカレッジ", "専門学校 マインドビューティーカレッジ", "広島県東部美容専門学校", "広島県理容美容専門学校", "広島ビューティ＆ブライダル専門学校", "広島美容専門学校", "下関理容美容専門学校", "東亜大学 芸術学部（トータルビューティ学科）", "山口県理容美容専門学校", "YICビューティモード専門学校", "専修学校 徳島県美容学校", "専門学校 徳島穴吹カレッジ", "徳島県立中央テクノスクール", "専修学校 香川県美容学校", "専門学校 穴吹ビューティカレッジ 高松", "一般社団法人 宇和島美容学校", "愛媛県美容専門学校", "河原ビューティモード専門学校", "東予理容美容専門学校", "高知理容美容専門学校", "龍馬デザイン・ビューティ専門学校", "麻生美容専門学校", "飯塚理容美容専門学校", "大村美容ファッション専門学校", "九州CTB専門学校", "ハリウッドワールド美容専門学校", "福岡ビューティーアート専門学校", "福岡美容専門学校 北九州校", "福岡美容専門学校 福岡校", "福岡ベルエポック美容専門学校", "福岡南美容専門学校", "福岡理容美容専門学校", "アイビービューティカレッジ", "エッジ国際美容専門学校", "佐世保美容専門学校", "長崎県美容専門学校", "九州美容専門学校", "熊本ベルェベル美容専門学校", "専修学校 モア・ヘアメイクカレッジ", "八代実業専門学校（美容師養成科）", "明日香美容文化専門大学校", "アンビシャス国際美容学校", "明星国際ビューティカレッジ", "宮崎サザンビューティ美容専門学校", "宮崎美容専門学校", "赤塚学園美容・デザイン専門学校", "鹿児島県美容専門学校", "鹿児島県理容美容専門学校", "鹿児島レディスカレッジ", "沖縄ホテル観光専門学校", "沖縄ビューティーアート専門学校", "専修学校 ビューティーモードカレッジ", "大育理容美容専門学校", "中部美容専門学校", "琉美インターナショナルビューティーカレッジ"];
  const schoolType = ["美容", "理容"]
  const cityList = ["北海道", "青森"]


  /**
   *  Render the component
   */
  return (
    <Grid className="school-search" container={true} justify="center">
      <Grid className="school-search-label" item={true} xs={12} textAlign="center">
        <Typography variant="h4">
          美容学校一覧
        </Typography>
      </Grid>

      {
        showCriteria ?
          <></>
          :
          <Grid item={true} xs={12} textAlign="center">
            <Button variant="text" onClick={() => { setShowCriteria(true) }}>絞り込み検索</Button>
          </Grid>
      }

      {
        showCriteria ?
          <>

            <Grid className="filter" item={true} xs={12}>
              <Autocomplete
                disablePortal
                size="small"
                options={schoolList}
                renderInput={(params) => <TextField {...params} label="学校名" />}
              />
            </Grid>
            <Grid className="filter" item={true} xs={6}>
              <Autocomplete
                disablePortal
                size="small"
                options={schoolType}
                renderInput={(params) => <TextField {...params} label="ジャンル" />}
              />
            </Grid>
            <Grid className="filter" item={true} xs={6}>
              <Autocomplete
                disablePortal
                size="small"
                options={cityList}
                renderInput={(params) => <TextField {...params} label="都道府県" />}
              />
            </Grid>

            <Grid className="search-button" item={true} xs={12} textAlign="center">
              <Button size="large" variant="outlined">絞り込む</Button>
            </Grid>
          </>
          :
          <></>
      }

      <Grid item={true} xs={12}>&nbsp;</Grid>

      <Grid item={true} xs={12} textAlign="left" sx={{ padding: "10px" }}>
        <Card variant="outlined">
          <CardContent>
            <Stack direction="row" spacing={1} alignItems="center">
              <img src="/logos/asahikawa.jpg" style={{ width: "70px", height: "70px" }} />
              <Stack direction="column" justifyContent="flex-start" alignItems="flex-start">
                <Typography component="div" variant="h6" textAlign="left">
                  旭川理容美容専門学校
                </Typography>
                <Button variant="text" component={Link} to="/school/info">詳しく見る</Button>
              </Stack>
            </Stack>

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

          </CardContent>
          <Divider />
          <CardActions>
            <Stack direction="row" spacing={2} sx={{ marginLeft: "7px" }}>
              <FavoriteIcon color="primary" />
              <SendIcon color="primary" onClick={() => navigate("/chat")} />
            </Stack>
          </CardActions>
        </Card>
      </Grid>

      <Grid item={true} xs={12} textAlign="left" sx={{ padding: "10px" }}>
        <Card variant="outlined">
          <CardContent>
            <Stack direction="row" spacing={1} alignItems="center">
              <img src="/logos/kitami.jpeg" style={{ width: "70px", height: "70px" }} />
              <Stack direction="column" justifyContent="flex-start" alignItems="flex-start">
                <Typography component="div" variant="h6" textAlign="left">
                  北見美容専門学校
                </Typography>
                <Button variant="text" component={Link} to="/school/info">詳しく見る</Button>
              </Stack>
            </Stack>

            <Button variant="text" color="inherit" startIcon={<SchoolIcon />}>
              オープンキャンパス日程
            </Button>
            <Stack direction="row" spacing={2} alignItems="center">
              <Chip label="3/2" color="primary" variant="outlined"></Chip>
            </Stack>

            <Grid item={true} xs={12}>&nbsp;</Grid>

            <Button variant="text" color="inherit" startIcon={<ShareIcon />}>
              公式アカウント
            </Button>
            <Stack direction="row" spacing={2} alignItems="center">
              <SvgIcon component={Xicon} inheritViewBox />
              <LanguageIcon color="inherit" />
            </Stack>

          </CardContent>
          <Divider />
          <CardActions>
            <Stack direction="row" spacing={2} sx={{ marginLeft: "7px" }}>
              <FavoriteIcon color="inherit" />
              <SendIcon color="inherit" />
            </Stack>
          </CardActions>
        </Card>
      </Grid>

      <Grid item={true} xs={12}>&nbsp;</Grid>
      <Grid item={true} xs={12}>&nbsp;</Grid>
      <Grid item={true} xs={12}>&nbsp;</Grid>


    </Grid>
  );
}
