// @mui
import Box from '@mui/material/Box';
import Pagination, { paginationClasses } from '@mui/material/Pagination';
// types
//
import {TElectricityMeters} from "./types";
import ElectricityMetersItemHorizontal from "./electricity-meters-item-horizontal";

// ----------------------------------------------------------------------

type Props = {
  electricityMeters: TElectricityMeters[];
  loading?: boolean;
};

export default function ElectricityMetersListHorizontal({ electricityMeters, loading }: Props) {
  const renderList = (
    <>
      {electricityMeters.map((electricityMeter) => (
        <ElectricityMetersItemHorizontal key={electricityMeter.id} electricityMeters={electricityMeter} />
      ))}
    </>
  );

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
        {renderList}
      </Box>
    </>
  );
}
