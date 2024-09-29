import Card from "@mui/material/Card";
import {alpha, useTheme} from "@mui/material/styles";
import Box from "@mui/material/Box";
import ListItemText from "@mui/material/ListItemText";

import Image from "src/components/image";


import {DeviceType} from "./types";
import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import {useDevicesContext} from "./hooks/use-devices-context";

export default function DeviceItem({id, name, image, toggle, month, hour}: DeviceType) {
    const theme = useTheme();

    const {onToggleDevice} = useDevicesContext()

    return (
        <Card sx={{textAlign: 'center'}}>
            <Box sx={{position: 'relative'}}>
                <Image
                    src={image}
                    alt={name}
                    ratio="16/9"
                    overlay={alpha(theme.palette.grey[900], 0.3)}
                />
            </Box>

            <ListItemText
                sx={{mt: 3, mb: 0.5}}
                primary={name}
                primaryTypographyProps={{typography: 'subtitle1'}}
                secondaryTypographyProps={{component: 'span', mt: 0.5}}
            />

            <ListItemText
                secondary={`${hour} kWh / hour  -  ${month} kWh / month`}
                secondaryTypographyProps={{component: 'span', mt: 0.5}}
            />

            <Divider sx={{borderStyle: 'dashed', my: 2}}/>

            <Stack
                direction="row"
                alignItems="center"
                sx={{width: 'fit-content', mx: 'auto', my: 2, cursor: 'pointer'}}
                onClick={() => onToggleDevice?.(id)}
                >
                <ListItemText
                    secondary={`on`}
                    secondaryTypographyProps={{component: 'span'}}
                />
                <Switch checked={toggle}/>
                <ListItemText
                    secondary={`off`}
                    secondaryTypographyProps={{component: 'span'}}
                />
            </Stack>
        </Card>
    );
};
