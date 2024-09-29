import Container from '@mui/material/Container';
// routes
import { paths } from 'src/routes/paths';
// hooks
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
// types
//
import {electricityMetersData} from "../data";
import ElectricityMetersListHorizontal from "../electricity-meters-list-horizontal";

// ----------------------------------------------------------------------


// ----------------------------------------------------------------------

export default function ElectricityMetersListView() {
  const settings = useSettingsContext();


  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Households"
        links={[
          {
            name: 'Dashboard',
            href: paths.dashboard.root,
          },
          {
            name: 'Households',
          },
          {
            name: 'List',
          },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <ElectricityMetersListHorizontal electricityMeters={electricityMetersData} />
    </Container>
  );
}

// ----------------------------------------------------------------------

