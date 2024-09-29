import orderBy from 'lodash/orderBy';
import { useCallback, useState } from 'react';
// @mui
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
// routes
import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';
// hooks
import Iconify from 'src/components/iconify';
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
// types
//
import {electricityMetersData} from "../data";
import ElectricityMetersLive from "../electricity-meters-live";
import ElectricityMetersHour from "../electricity-meters-hour";
import ElectricityMetersRecommendation from "../electricity-meters-recommendation";
import ElectricityMetersPromotion from "../electricity-meters-promotion";

// ----------------------------------------------------------------------


// ----------------------------------------------------------------------

type Props = {
    id: string;
};

const TABS = [
    {
        value: 'live',
        label: 'Live',
        icon: <Iconify icon="solar:user-id-bold" width={24} />,
    },
    {
        value: 'hour',
        label: 'Consumption per hours',
        icon: <Iconify icon="solar:bill-list-bold" width={24} />,
    },
    {
        value: 'recommendation',
        label: 'Recommendation',
        icon: <Iconify icon="solar:bell-bing-bold" width={24} />,
    },
    {
        value: 'promotion',
        label: 'Promotion',
        icon: <Iconify icon="solar:clock-circle-bold" width={24} />,
    },
];

export default function ElectricityMetersEditView({ id }: Props) {
  const settings = useSettingsContext();

  const currentElectricityMeter = electricityMetersData.find(electricityMeter => electricityMeter.id === id);

    const [currentTab, setCurrentTab] = useState('live');

    const handleChangeTab = useCallback((event: React.SyntheticEvent, newValue: string) => {
        setCurrentTab(newValue);
    }, []);

    return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Household"
        links={[
          {
            name: 'Dashboard',
            href: paths.dashboard.root,
          },
          {
            name: 'Households',
              href: paths.dashboard.general.electricityMeters,
          },
          {
            name: `Household - ${currentElectricityMeter?.id}`,
          },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

        <Tabs
            value={currentTab}
            onChange={handleChangeTab}
            sx={{
                mb: { xs: 3, md: 5 },
            }}
        >
            {TABS.map((tab) => (
                <Tab key={tab.value} label={tab.label} icon={tab.icon} value={tab.value} />
            ))}
        </Tabs>
        {currentTab === 'live' && <ElectricityMetersLive electricityMeters={currentElectricityMeter} />}
        {currentTab === 'hour' && <ElectricityMetersHour electricityMeters={currentElectricityMeter} />}
        {currentTab === 'recommendation' && <ElectricityMetersRecommendation />}
        {currentTab === 'promotion' && <ElectricityMetersPromotion id={id} />}
    </Container>
  );
}

// ----------------------------------------------------------------------

