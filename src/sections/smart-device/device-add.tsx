import React from 'react';
import Button from "@mui/material/Button";
import Iconify from "../../components/iconify";
import Lightbox, { useLightBox } from 'src/components/lightbox';
import {Slide} from "yet-another-react-lightbox";

const slides:Slide[]  = [{
    type: 'image',
    src: '/assets/images/devices/qr.png',
    title: 'aaa',
}]

export default function DeviceAdd() {
    const lightbox = useLightBox(slides);

    return (
       <>
           <Button
               variant="contained"
               startIcon={<Iconify icon="mingcute:add-line"/>}
               onClick={() => lightbox.onOpen('/assets/images/devices/qr.png')}
           >
               Add new device
           </Button>
           <Lightbox
               index={lightbox.selected}
               slides={slides}
               open={lightbox.open}
               close={lightbox.onClose}
               disabledThumbnails
               disabledTotal
           />
       </>
    );
};

