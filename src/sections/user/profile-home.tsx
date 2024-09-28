import { useRef } from 'react';
// @mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import CardHeader from '@mui/material/CardHeader';
// _mock
// utils
import { fNumber } from 'src/utils/format-number';
// types
import { IUserProfile, IUserProfilePost } from 'src/types/user';
// components
//
import BankingBalanceStatistics from "../overview/banking/banking-balance-statistics";
import FileStorageOverview from "../file-manager/file-storage-overview";

// ----------------------------------------------------------------------

type Props = {
  info: IUserProfile;
  posts: IUserProfilePost[];
};

export default function ProfileHome({ info, posts }: Props) {
  const fileRef = useRef<HTMLInputElement>(null);


    const Kw = 1000000000 * 24;

  const handleAttach = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  const renderFollows = (
    <Card sx={{ py: 2, textAlign: 'center', typography: 'p' }}>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}
      >
        <Stack width={1}>
          {fNumber(info.totalFollowers)}
          <Box component="span" sx={{ color: 'text.secondary', typography: 'body2' }}>
            Текущее потребление
          </Box>
        </Stack>

        <Stack width={1}>
          {fNumber(info.totalFollowing)}
          <Box component="span" sx={{ color: 'text.secondary', typography: 'body2' }}>
            Необходимое потребление
          </Box>
        </Stack>
      </Stack>
    </Card>
  );

  const renderAbout = (
    <Card>

        <FileStorageOverview
            total={Kw}
            chart={{
                series: 76,
            }}
            data={[
                {
                    name: 'Затраченно сегодня',
                    usedStorage: Kw / 2,
                    filesCount: 223,
                },
            ]}
        />
    </Card>
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

  return (
    <Grid container spacing={3}>
      <Grid xs={12} md={4}>
        <Stack spacing={3}>
            {renderAbout}

            {renderFollows}
        </Stack>
      </Grid>

      <Grid xs={12} md={8}>
        <Stack spacing={3}>
            {renderSocials}
        </Stack>
      </Grid>
    </Grid>
  );
}
