// @mui
import Box from '@mui/material/Box';
// types
//
import Card from "@mui/material/Card";
import {getCookie} from "../../utils/cookie";
import CardHeader from "@mui/material/CardHeader";
import ElectricityMetersTimer from "./electricity-meters-timer";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import ListItemText from "@mui/material/ListItemText";
import ElectricityMetersCurrentWh from "./electricity-meters-current-wh";
import DeviceList from "../smart-device/device-list";

// ----------------------------------------------------------------------

type Props = {
    id: string
};

export default function ElectricityMetersPromotion({id}: Props) {
    const date = function () {
        if (id === '1' && getCookie('highTime')) {
            return getCookie('highTime')
        } else if (id === '3' && getCookie('lowTime')) {
            return getCookie('lowTime')
        }
        return false
    }

    if (date()) {
        return (
            <>
                <Card sx={{p: 3, textAlign: 'center', mb: 2}}>
                    <Typography variant="h3">Action</Typography>
                    <ElectricityMetersTimer time={date() as 'string'}/>
                </Card>
                <Stack direction={{xs: 'column', sm: 'row'}} sx={{mb: 2}} spacing={2}>
                    <Card sx={{p: 2, textAlign: 'center',  flex: 1}}>
                        <Typography>Consume in 60 minutes - 1.5kWh</Typography>
                    </Card>
                    <ElectricityMetersCurrentWh/>
                </Stack>
                <Card sx={{p: 3, textAlign: 'center', mb: 2}}>
                    <Typography variant="body1">To reduce consumption to 1.5 kWh/hour, the following appliances must be
                        turned off:<br/>
                        1. Air conditioner: 0.694 kWh/hour<br/>
                        2. electric boiler: 0.243 kWh/hour<br/>
                        3. induction stove: 0.208 kWh/hr.<br/>
                        4. refrigerator: 0.167 kWh/hour<br/>
                        5. Lighting: 0.111 kWh/hr.<br/>
                        These appliances in total will reduce consumption by 1.5 kWh/hr, which will achieve 1.5 kWh/hr
                        and receive load reduction bonuses.</Typography>
                </Card>
                <Stack direction={{xs: 'column', sm: 'row'}} spacing={2} sx={{mb: 3}}>
                    <Card sx={{p: 2, textAlign: 'center', flex: 1, alignContent: 'center'}}>
                        <Typography>20 points you will receive</Typography>
                    </Card>
                    <Card sx={{p: 2, textAlign: 'center', flex: 1}}>
                        <ListItemText
                            primary={`120.00`}
                            secondary="points"
                            primaryTypographyProps={{typography: 'subtitle1'}}
                            secondaryTypographyProps={{typography: 'caption', color: 'text.disabled'}}
                        />
                    </Card>
                </Stack>
                <DeviceList/>
            </>
        );
    }

    return null
}
