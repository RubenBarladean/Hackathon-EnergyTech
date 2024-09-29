import { Helmet } from 'react-helmet-async';
// sections
import {ElectricityMetersEditView} from "../../../sections/electricityMeters/view";
import {useParams} from "../../../routes/hook";

// ----------------------------------------------------------------------

export default function ElectricityMetersEditPage() {
    const params = useParams();

    const { id } = params;
    return (
        <>
            <Helmet>
                <title> Electricity meters List</title>
            </Helmet>

            <ElectricityMetersEditView id={`${id}`} />
        </>
    );
}
