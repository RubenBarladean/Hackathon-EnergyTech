// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import { useTheme, alpha } from '@mui/material/styles';
// types
import { IUserProfileCover } from 'src/types/user';
// theme
import { bgGradient } from 'src/theme/css';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// ----------------------------------------------------------------------

export default function ProfileCover({ name, avatarUrl, role, coverUrl }: IUserProfileCover) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.primary.darker, 0.8),
          imgUrl: coverUrl,
        }),
        height: 1,
        color: 'common.white',
          position: 'relative',
      }}
    >

      <Stack
        direction={{ xs: 'column', md: 'row' }}
        sx={{
          left: { md: 24 },
          bottom: { md: 34 },
          zIndex: { md: 10 },
          pt: { xs: 2, md: 0 },
          position: { md: 'absolute' },
        }}
      >
        <Avatar
          src={avatarUrl}
          alt={name}
          sx={{
            mx: 'auto',
            width: { xs: 54, md: 108 },
            height: { xs: 54, md: 108 },
            border: `solid 2px ${theme.palette.common.white}`,
          }}
        />

        <ListItemText
          sx={{
            mt: 3,
            ml: { md: 3 },
            textAlign: { xs: 'center', md: 'unset' },
          }}
          primary="Alex Gradinari"
          secondary='Welcome back!'
          primaryTypographyProps={{
            typography: 'h5',
          }}
          secondaryTypographyProps={{
            mt: 0.5,
            color: 'inherit',
            component: 'span',
            typography: 'body2',
            sx: { opacity: 0.48 },
          }}
        />
      </Stack>
    </Box>
  );
}
