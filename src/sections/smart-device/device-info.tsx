import {useDevicesContext} from "./hooks/use-devices-context";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

export default function DeviceInfo() {
    const {devices} = useDevicesContext()

    const getTotal = (property: 'hour' | 'month') =>
        devices.reduce((previousValue, currentValue) => {
            if (currentValue.toggle) {
                previousValue += currentValue[property];
            }
            return previousValue;
        }, 0);

    const hour = getTotal("hour");
    const month = getTotal("month");

    return <Card sx={{ py: 3, mb: 3, textAlign: 'center', typography: 'h4', width: '40%', minWidth: '288px' }}>
        <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}
        >
            <Stack width={1}>
                {Math.trunc(hour * 100) / 100}  kWh
                <Box component="span" sx={{ color: 'text.secondary', typography: 'body2' }}>
                    In Hour
                </Box>
            </Stack>

            <Stack width={1}>
                {Math.trunc(month * 100) / 100} kWh
                <Box component="span" sx={{ color: 'text.secondary', typography: 'body2' }}>
                   In Month
                </Box>
            </Stack>
        </Stack>
    </Card>
}