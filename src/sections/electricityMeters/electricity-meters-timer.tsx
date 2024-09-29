import Box from "@mui/material/Box";
import ListItemText from "@mui/material/ListItemText";
import {useEffect, useState} from "react";

export default function ElectricityMetersTimer({time}: { time: string }) {
    const [timeLeft, setTimeLeft] = useState({
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            // @ts-ignore
            const temp = new Date(time)

            const diffInMs = temp.getTime() - new Date().getTime();

            if (diffInMs <= 0) {
                clearInterval(intervalId);
                setTimeLeft({minutes: 0, seconds: 0});
            } else {
                const diffInSec = Math.floor(diffInMs / 1000);
                const minutes = Math.floor((diffInSec % (60 * 60)) / 60);
                const seconds = diffInSec % 60;
                setTimeLeft({minutes, seconds});
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [time]);

    return (
        <Box sx={{my: 1}}>
            <ListItemText
                primary={`${timeLeft.minutes}m ${timeLeft.seconds}s`}
                secondary="remaining"
                primaryTypographyProps={{typography: 'subtitle1'}}
                secondaryTypographyProps={{typography: 'caption', color: 'text.disabled'}}
            />
        </Box>
    );
};

