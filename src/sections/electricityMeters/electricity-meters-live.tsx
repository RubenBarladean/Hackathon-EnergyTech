// @mui
import Box from '@mui/material/Box';
// types
//
import {TElectricityMeters} from "./types";
import AppWidgetSummary from "./app-widget-summary";

// ----------------------------------------------------------------------

type Props = {
    electricityMeters: TElectricityMeters | undefined;
};

export default function ElectricityMetersLive({ electricityMeters }: Props) {
    return (
        <>
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
        </>
    );
}
