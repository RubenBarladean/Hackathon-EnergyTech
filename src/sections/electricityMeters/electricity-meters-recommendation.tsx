// @mui
import Box from '@mui/material/Box';
// types
//
import {TElectricityMeters} from "./types";
import Grid from "@mui/material/Unstable_Grid2";
import AnalyticsWebsiteVisits from './analytics-website-visits';
import AnalyticsWebsiteVisitsRevert from "./analytics-website-visits-revert";
import Card from "@mui/material/Card";
import ListItemText from "@mui/material/ListItemText";

// ----------------------------------------------------------------------

type Props = {
    electricityMeters: TElectricityMeters | undefined;
};

export default function ElectricityMetersRecommendation({ electricityMeters }: Props) {
    return (
        <>
            <Card sx={{ p:2, textAlign: 'left', mb: 2 }}>
                <ListItemText
                    primary="Хочешь сэкономить?"
                    secondary="С 15:00 до 17:00 повысь свое энергопотребление на 2 кВт/ч. Это поможет тебе использовать свое электричество на 10% выгоднее, чем обычно. Экономия 10 лей. "
                    primaryTypographyProps={{typography: 'subtitle1'}}
                    secondaryTypographyProps={{component: 'span', mt: 0.5}}
                />
            </Card>
            <Grid xs={12} md={6} lg={8}>
                <AnalyticsWebsiteVisits
                    title="Electricity consumption"
                    chart={{
                        categories: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
                        series: [
                            {
                                name: 'My consumption',
                                type: 'area',
                                fill: 'gradient',
                                data: [2.1, 1.9, 1.6, 1.2, 1.9, 1.8, 3.4, 2.3, 4.2, 5.2, 4.3, 4.2, 4.1, 3.5, 3.5, 0.3, 0.2, 0.3, 2.4, 2.7, 4.5, 4.6, 5, 3.9],
                            },
                        ],
                    }}
                />
            </Grid>
        </>
    );
}
