import { useRef } from 'react';
// @mui
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import CardHeader from '@mui/material/CardHeader';
// _mock
// utils
// types
import { IUserProfile, IUserProfilePost } from 'src/types/user';
// components
//
import BankingBalanceStatistics from "../overview/banking/banking-balance-statistics";
import AppFeatured from "../overview/app/app-featured";
import {_analyticTraffic, _appFeatured, _mock} from "../../_mock";
import Image from "../../components/image";
import {alpha, useTheme} from "@mui/material/styles";
import AnalyticsTrafficBySite from "../overview/analytics/analytics-traffic-by-site";
import BankingInviteFriends from "../overview/banking/banking-invite-friends";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

// ----------------------------------------------------------------------

type Props = {
  info: IUserProfile;
  posts: IUserProfilePost[];
};

export default function ProfileHome({ info, posts }: Props) {
  const fileRef = useRef<HTMLInputElement>(null);

    const theme = useTheme();


    const Kw = 1000000000 * 24;

  const handleAttach = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  const images = [
      {
          alt: "Image 1",
          src: "https://images.squarespace-cdn.com/content/v1/618e7f223fb749481d23c9c1/8ad0b113-c63a-4db9-809a-4c3eb51122ba/foto+logo.jpg"
      },
      {
          alt: "Image 2",
          src: "https://images.squarespace-cdn.com/content/v1/618e7f223fb749481d23c9c1/8ad0b113-c63a-4db9-809a-4c3eb51122ba/foto+logo.jpg"
      },
      {
          alt: "Image 3",
          src: "https://images.squarespace-cdn.com/content/v1/618e7f223fb749481d23c9c1/8ad0b113-c63a-4db9-809a-4c3eb51122ba/foto+logo.jpg"
      }
  ];
    // <FileStorageOverview
    //     total={Kw}
    //     chart={{
    //         series: 76,
    //     }}
    //     data={[
    //         {
    //             name: 'Затраченно сегодня',
    //             usedStorage: 8,
    //         },
    //     ]}
    // />

    const sliderImages = [
        {
            id: '1',
            title: 'efgrfgrggrfgrgrtgv ',
            coverUrl: '/assets/images/hackathon/telegram3.jpg',
            description: 'Get a discount in the form of a voucher',
        },
        {
            id: '2',
            title: 'string',
            coverUrl: '/assets/images/hackathon/telegram2.jpg',
            description: 'Get a discount in the form of a voucher',
        },
        {
            id: '3',
            title: 'string',
            coverUrl: '/assets/images/hackathon/telegram4.jpg',
            description: 'Get a discount in the form of a voucher',
        },
    ]

  const renderAbout = (
        <Grid>
            <AppFeatured list={sliderImages} />
        </Grid>
  );

  const renderSocials = (
    <Card>
          <BankingBalanceStatistics
              title="Balance Statistics"
              subheader="(+43% Income | +12% Expense) than last year"
              chart={{
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                  series: [
                      {
                          type: 'Week',
                          data: [
                              { name: 'Income', data: [10, 41, 35, 151, 49, 62, 69, 91, 48] },
                              { name: 'Expenses', data: [10, 34, 13, 56, 77, 88, 99, 77, 45] },
                          ],
                      },
                      {
                          type: 'Month',
                          data: [
                              { name: 'Income', data: [148, 91, 69, 62, 49, 51, 35, 41, 10] },
                              { name: 'Expenses', data: [45, 77, 99, 88, 77, 56, 13, 34, 10] },
                          ],
                      },
                      {
                          type: 'Year',
                          data: [
                              { name: 'Income', data: [76, 42, 29, 41, 27, 138, 117, 86, 63] },
                              { name: 'Expenses', data: [80, 55, 34, 114, 80, 130, 15, 28, 55] },
                          ],
                      },
                  ],
              }}
          />
    </Card>
  );

    const analyticTraffic = [
        {
            value: 'facebook',
            label: 'UNDP',
            total: '',
        },
        {
            value: 'google',
            label: 'MoldElectrica',
            total: '',
        },
        {
            value: 'linkedin',
            label: 'Linkedin',
            total: '',
        },
        {
            value: 'twitter',
            label: 'Twitter',
            total: '',
        },
    ];

    const vouchers = [
        {
            price: '50',
            priceSpan: 'e-coin',
            title: 'Voucher UNDP',
            description: 'Buy a UNDP voucher and get a 15% discount',
            img: '/assets/images/hackathon/telegram3.jpg'
        },
        {
            price: '80',
            priceSpan: 'e-coin',
            title: 'MoldElectrica',
            description: 'Buy a MoldElectrica voucher and get a 22% discount',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYoaJwpqynRhXwvkXzyzGeIAeH3KAbZpbA8A&s'
        },
    ]
  return (
    <Grid container spacing={2}>
      <Grid>
        <Stack spacing={3}>
            {renderAbout}

                {vouchers.map((item) => (
                    <Card key={item.img} sx={{mb: 2, paddingTop: 0}}>
                        <Image sx={{width: '100%', height: '230px', filter: 'brightness(60%)'}} src={item.img}/>

                        <Stack sx={{p: 3}}>
                            <Typography variant='h4'>
                                {item.title}
                            </Typography>

                            <Typography sx={{marginTop: 1.5}} variant='body2'>
                                {item.description}
                            </Typography>

                        </Stack>
                        <div style={{width: '100%', height: '1px', background: 'silver'}}/>

                        <Container sx={{p: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                            <Typography sx={{display: 'flex', gap: '7px', alignItems: 'center', justifyContent: 'space-between'}} variant='h4'>
                                {item.price} <Typography variant='body2'>{item.priceSpan}</Typography>
                            </Typography>

                            <Button sx={{fontWeight: '700', color: 'white', padding: '10px', backgroundColor: 'rgba(155, 18, 18, 1)'}}>
                                Buy voucher
                            </Button>
                        </Container>
                    </Card>
                ))}
        </Stack>
      </Grid>

        {/*<Grid xs={12} md={8}>*/}
      {/*  <Stack spacing={3}>*/}
      {/*      {renderSocials}*/}
      {/*  </Stack>*/}
      {/*</Grid>*/}
    </Grid>
  );
}
