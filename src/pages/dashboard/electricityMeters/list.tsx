import { Helmet } from 'react-helmet-async';
// sections
import {ElectricityMetersListView} from "../../../sections/electricityMeters/view";

// ----------------------------------------------------------------------

export default function ElectricityMetersListPage() {
    return (
        <>
            <Helmet>
                <title> Electricity meters List</title>
            </Helmet>

            <ElectricityMetersListView />
        </>
    );
}
