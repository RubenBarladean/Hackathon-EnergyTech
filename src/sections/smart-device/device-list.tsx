import Box from "@mui/material/Box";
import DeviceItem from "./device-item";
import {useDevicesContext} from "./hooks/use-devices-context";

export default function DeviceList() {
    const {devices} = useDevicesContext()

    return <Box
        gap={3}
        display="grid"
        gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
        }}
    >
        {devices.map((device) =>
            <DeviceItem {...device} key={device.id}/>
        )}
    </Box>
}