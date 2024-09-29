// @mui
import Container from "@mui/material/Container";

// routes
import {paths} from "src/routes/paths";

//components
import {useSettingsContext} from "src/components/settings";
import CustomBreadcrumbs from "src/components/custom-breadcrumbs";

import DeviceList from "../device-list";
import DeviceInfo from "../device-info";
import DeviceAdd from "../device-add";

export default function SmartDeviceList() {
    const settings = useSettingsContext();

    return (
        <Container maxWidth={settings.themeStretch ? false : 'lg'}>
            <CustomBreadcrumbs
                heading="Smart Device"
                links={[
                    {
                        name: 'Dashboard',
                        href: paths.dashboard.root,
                    },
                    {
                        name: 'Smart Device',
                    },
                    {
                        name: 'List',
                    },
                ]}
                action={
                   <DeviceAdd/>
                }
                sx={{
                    mb: {xs: 3, md: 5},
                }}
            />
            <DeviceInfo/>
            <DeviceList/>
        </Container>
    );
};

