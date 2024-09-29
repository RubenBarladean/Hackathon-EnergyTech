import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import {useDevicesContext} from "../smart-device/hooks/use-devices-context";

export default function ElectricityMetersCurrentWh () {
    const {devices} = useDevicesContext()

    const getTotal = (property: 'hour' | 'month') =>
        devices.reduce((previousValue, currentValue) => {
            if (currentValue.toggle) {
                previousValue += currentValue[property];
            }
            return previousValue;
        }, 0);

    const hour = getTotal("hour");

    return (
        <Card sx={{p: 2, textAlign: 'center', flex: 1}}>
            <Typography>Now {Math.trunc(hour * 100) / 100 + 1.5} kWh</Typography>
        </Card>
    );
};
