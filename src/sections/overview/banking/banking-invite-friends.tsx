// @mui
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import Box, { BoxProps } from '@mui/material/Box';
// theme
import { bgGradient } from 'src/theme/css';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  img?: string;
  title?: string;
  price?: string;
  description?: string;
}

export default function BankingInviteFriends({
  img,
  price,
  title,
  description,
  sx,
  ...other
}: Props) {
  const theme = useTheme();

  return (
    <Box {...other}>

      <Box
        sx={{
          mt: -15,
          color: 'common.white',
          borderRadius: 2,
          p: theme.spacing(16, 5, 5, 5),
          ...bgGradient({
            direction: '135deg',
            startColor: theme.palette.primary.main,
            endColor: theme.palette.primary.dark,
          }),
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Stack>
                <Box sx={{ whiteSpace: 'pre-line', typography: 'h6' }}>{title}</Box>
                <Box sx={{ typography: 'h4' }}>{price}</Box>
            </Stack>
            <Box
                component="img"
                alt="invite"
                src={img}
                sx={{
                    width: 100,
                    ...sx,
                }}
            />
        </Stack>

            <Button color="warning" variant="contained" size="small" sx={{ mr: 0.5 }}>
              Buy
            </Button>
      </Box>
    </Box>
  );
}
