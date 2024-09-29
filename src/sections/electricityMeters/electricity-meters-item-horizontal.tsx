// @mui
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
// routes
import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hook';
import { RouterLink } from 'src/routes/components';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// utils
import { fDate } from 'src/utils/format-time';
import { fShortenNumber } from 'src/utils/format-number';
// types
import { IPostItem } from 'src/types/blog';
// components
import Label from 'src/components/label';
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import TextMaxLine from 'src/components/text-max-line';
import CustomPopover, { usePopover } from 'src/components/custom-popover';
import {TElectricityMeters} from "./types";

// ----------------------------------------------------------------------

type Props = {
  electricityMeters: TElectricityMeters;
};

export default function ElectricityMetersItemHorizontal({ electricityMeters }: Props) {

  const router = useRouter();

  const mdUp = useResponsive('up', 'md');

  const {
    number,
    intakeStatus,
    id,
    intake,
  } = electricityMeters;

  const getStatusColor = (statusValue: string) => {
    switch (statusValue) {
      case 'normal':
        return 'success';
      case 'low':
        return 'warning';
      default:
        return 'error';
    }
  };

  const getStatusText = (statusValue: string) => {
    switch (statusValue) {
      case 'normal':
        return 'Normal';
      case 'low':
        return 'Low';
      default:
        return 'High';
    }
  };

  const getStatusDescription = (statusValue: string) => {
    switch (statusValue) {
      case 'normal':
        return 'Great, keep it up!';
      case 'low':
        return 'We recommend increasing electricity consumption!';
      default:
        return 'We recommend reducing electricity consumption!';
    }
  };

  return (
    <>
      <Stack component={Card} direction="row" justifyContent="space-between">
        <Stack
          sx={{
            p: (theme) => theme.spacing(3, 3, 2, 3),
          }}
        >
          <Stack spacing={1} flexGrow={1}>
            <Link color="inherit" component={RouterLink} href={paths.dashboard.general.edit(id)}>
              <TextMaxLine variant="subtitle2" line={2}>
                Electricity meter number - {number}
              </TextMaxLine>
            </Link>

            <Stack spacing={1} flexGrow={1} direction="row">

            <TextMaxLine variant="body2" sx={{ color: 'text.secondary' }}>
              Intake - {intake} kWh
            </TextMaxLine>
              <Label variant="soft" color={getStatusColor(intakeStatus)}>
                {getStatusText(intakeStatus)}
              </Label>
            </Stack>
            <TextMaxLine variant="subtitle2" line={2}>
              {getStatusDescription(intakeStatus)}
            </TextMaxLine>
          </Stack>
        </Stack>

        {mdUp && (
          <Box sx={{ width: 180, height: 240, position: 'relative', flexShrink: 0, p: 1 }}>
            <Image src="https://cdn.cbs.nl/images/41517351514d66536b465059692b346b54742f3341673d3d/720x480.jpg" sx={{ height: 1, borderRadius: 1.5 }} />
          </Box>
        )}
      </Stack>

    </>
  );
}
