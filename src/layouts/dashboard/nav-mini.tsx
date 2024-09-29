// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
// theme
import { hideScroll } from 'src/theme/css';
// hooks
import { useMockedUser } from 'src/hooks/use-mocked-user';
// components
import Logo from 'src/components/logo';
import { NavSectionMini } from 'src/components/nav-section';
//
import { NAV } from '../config-layout';
import { useNavData } from './config-navigation';
import { NavToggleButton } from '../_common';

// ----------------------------------------------------------------------

export default function NavMini() {
  const { user } = useMockedUser();

  const navData = useNavData();

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.W_MINI },
      }}
    >
      <NavToggleButton
        sx={{
          top: 22,
          left: NAV.W_MINI - 12,
        }}
      />

      <Stack
        sx={{
          pb: 2,
          height: 1,
          position: 'fixed',
          width: NAV.W_MINI,
          borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
          ...hideScroll.x,
        }}
      >

          <Box
              component="div"
              sx={{
                  width: 50,
                  height: 50,
                  display: 'inline-flex',
                  mx: 'auto',
                  my: 2
              }}
          >
              <svg width="65" height="59" viewBox="0 0 65 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M33.5322 13.4697L24.0002 32.7885H32.5415L25.4578 47.6097L46.523 28.6528H34.215L41.9515 13.4697H33.5322Z"
                      fill="url(#paint0_linear_50_883)"/>
                  <path
                      d="M34.5749 0L34.3299 6.64686C47.0368 6.64686 57.3735 16.9835 57.3735 29.6884C57.3735 42.3933 47.0368 52.731 34.3299 52.731C21.625 52.731 11.2884 42.3943 11.2884 29.6884C11.2884 27.6891 11.5583 25.7527 12.0411 23.9013L18.9679 26.4815L14.8772 10.6736L0 19.4137L6.12403 21.696C5.44425 24.1822 5.07536 26.7974 5.07536 29.4995C5.07536 45.7923 18.2821 59 34.5749 59C50.8676 59 64.0774 45.7933 64.0774 29.5005C64.0774 13.2077 50.8686 0 34.5749 0Z"
                      fill="url(#paint1_linear_50_883)"/>
                  <defs>
                      <linearGradient id="paint0_linear_50_883" x1="25.892" y1="20.0038" x2="46.1126" y2="39.5432"
                                      gradientUnits="userSpaceOnUse">
                          <stop stop-color="#FFB700"/>
                          <stop offset="1" stop-color="#FFEA00"/>
                      </linearGradient>
                      <linearGradient id="paint1_linear_50_883" x1="5.3822" y1="11.292" x2="36.8908" y2="61.4157"
                                      gradientUnits="userSpaceOnUse">
                          <stop stop-color="#FFE600"/>
                          <stop offset="1" stop-color="#FF9500"/>
                      </linearGradient>
                  </defs>
              </svg>
          </Box>

          <NavSectionMini
              data={navData}
              config={{
                  currentRole: user?.role || 'admin',
              }}
          />
      </Stack>
    </Box>
  );
}
