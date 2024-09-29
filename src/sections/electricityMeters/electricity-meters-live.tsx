// @mui
import Box from '@mui/material/Box';
// types
//
import {TElectricityMeters} from "./types";
import AppWidgetSummary from "./app-widget-summary";
import Grid from "@mui/material/Unstable_Grid2";
import EcommerceWidgetSummary from "../overview/e-commerce/ecommerce-widget-summary";
import {useTheme} from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

// ----------------------------------------------------------------------

type Props = {
    electricityMeters: TElectricityMeters | undefined;
};

export default function ElectricityMetersLive({ electricityMeters }: Props) {

    const theme = useTheme();

    return (
            <Grid>
                <Box
                    gap={3}
                    display="grid"
                    gridTemplateColumns={{
                        xs: 'repeat(1, 1fr)',
                        md: 'repeat(2, 1fr)',
                    }}
                >
                    <AppWidgetSummary
                        title="Intake"
                        percent={electricityMeters?.percent || 0}
                        total={electricityMeters?.intake || 0}
                    />
                </Box>

                <Card sx={{p: 3, display: 'flex', marginTop: '20px', flexDirection: 'column', gap: '10px' }}>
                    <CardHeader title='Solar power generation' />
                    <Grid xs={12} md={4}>
                        <EcommerceWidgetSummary
                            title="Output now"
                            percentLabel='More than last day'
                            percent={2.6}
                            total={1.7}
                            chart={{
                                series: [22, 8, 35, 50, 82, 84, 77, 12, 87, 43],
                            }}
                        />
                    </Grid>

                    <Grid xs={12} md={4}>
                        <EcommerceWidgetSummary
                            title="Output per day"
                            percentLabel='Less than last week'
                            percent={-1.4}
                            total={12}
                            chart={{
                                colors: [theme.palette.info.light, theme.palette.info.main],
                                series: [56, 47, 40, 62, 73, 30, 23, 54, 67, 68],
                            }}
                        />
                    </Grid>
                </Card>
            </Grid>
    );
}
