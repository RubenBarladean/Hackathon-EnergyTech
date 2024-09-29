// @mui
import Box from '@mui/material/Box';
// types
//
import {TElectricityMeters} from "./types";
import Grid from "@mui/material/Unstable_Grid2";
import AnalyticsWebsiteVisits from './analytics-website-visits';
import AnalyticsWebsiteVisitsRevert from "./analytics-website-visits-revert";

// ----------------------------------------------------------------------

type Props = {
    electricityMeters: TElectricityMeters | undefined;
};

export default function ElectricityMetersHour({ electricityMeters }: Props) {
    return (
        <>
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
                                data: [2.1, 0.9, 1.6, 1.2, 1.9, 1.8, 3.4, 2.3, 4.2, 5.2, 4.3, 4.2, 4.1, 3.5, 3.5, 4.4, 4.9, 2.2, 3.9, 2.7, 4.5, 4.6, 5, 3.9],
                            },
                        ],
                    }}
                />
                <AnalyticsWebsiteVisitsRevert
                    chart={{
                        categories: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
                        series: [
                            {
                                name: 'My consumption',
                                type: 'area',
                                fill: 'gradient',
                                data: [1.2, 1.2, 1.2, 1.2, 1.2, 2.8, 2.8, 2.8, 2.8, 2.8, 2.4, 2.4, 2.4, 2.4, 2.4, 2.8, 2.8, 2.8, 2.8, 2.8, 2.8, 2.8, 2.8, 2.8],
                            },
                        ],
                    }}
                />
            </Grid>
        </>
    );
}
