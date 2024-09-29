import {Helmet} from 'react-helmet-async';

// components
import {SmartDeviceListView} from "src/sections/smart-device/view";
// ----------------------------------------------------------------------

export default function SmartDevicePage() {
    return (
        <>
            <Helmet>
                <title> Smart device</title>
            </Helmet>

            <SmartDeviceListView/>
        </>
    );
}
