// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
// utils
import {fToNow} from 'src/utils/format-time';
import {useDevicesContext} from "../../../sections/smart-device/hooks/use-devices-context";
import {useCallback} from "react";
import {RouterLink} from "../../../routes/components";
import {paths} from "../../../routes/paths";
import Iconify from "../../../components/iconify";
import {setCookie} from "../../../utils/cookie";
// components

// ----------------------------------------------------------------------

type NotificationItemProps = {
    notification: {
        id: string;
        title: string;
        category: string;
        value: string;
        createdAt: Date;
        isUnRead: boolean;
        type: string;
        avatarUrl: string | null;
    };
};

export default function NotificationItem({notification}: NotificationItemProps) {
    const {onAllOnDevice, onAllOffDevice} = useDevicesContext()

    const onHighActionHandler = useCallback(() => {
        const expires = new Date();
        expires.setHours(expires.getHours() + 1);
        setCookie('highTime', expires.toString())
        onAllOnDevice?.()
    }, [])

    const onLowActionHandler = useCallback(() => {
        const expires = new Date();
        expires.setHours(expires.getHours() + 1);
        setCookie('lowTime', expires.toString())
        onAllOffDevice?.()
    }, [])

    const renderAvatar = (
        <ListItemAvatar>
            {notification.avatarUrl ? (
                <Avatar src={notification.avatarUrl} sx={{bgcolor: 'background.neutral'}}/>
            ) : (
                <Stack
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        bgcolor: 'background.neutral',
                    }}
                >
                    <Box
                        component="img"
                        src={`/assets/icons/notification/${
                            (notification.type === 'warning' && 'ic_chat') ||
                            (notification.type === 'notification' && 'ic_mail')
                        }.svg`}
                        sx={{width: 24, height: 24}}
                    />
                </Stack>
            )}
        </ListItemAvatar>
    );

    const renderText = (
        <ListItemText
            disableTypography
            primary={reader(notification.title)}
            secondary={
                <Stack
                    direction="row"
                    alignItems="center"
                    sx={{typography: 'caption', color: 'text.disabled'}}
                    divider={
                        <Box
                            sx={{width: 2, height: 2, bgcolor: 'currentColor', mx: 0.5, borderRadius: '50%'}}
                        />
                    }
                >
                    {fToNow(notification.createdAt)}
                    {notification.category}
                </Stack>
            }
        />
    );

    const renderUnReadBadge = notification.isUnRead && (
        <Box
            sx={{
                top: 26,
                width: 8,
                height: 8,
                right: 20,
                borderRadius: '50%',
                bgcolor: 'info.main',
                position: 'absolute',
            }}
        />
    );

    const highAction = (
        <Stack spacing={1} direction="row" sx={{mt: 1.5}}>
            <Button component={RouterLink} href={paths.dashboard.general.edit('1')} size="small" variant="contained" onClick={onHighActionHandler}>
                Accept
            </Button>
            <Button size="small" variant="outlined">
                Decline
            </Button>
        </Stack>
    );

    const lowAction = (
        <Stack spacing={1} direction="row" sx={{mt: 1.5}} >
            <Button component={RouterLink} href={paths.dashboard.general.edit('3')} size="small" variant="contained" onClick={onLowActionHandler}>
                Accept
            </Button>
            <Button size="small" variant="outlined">
                Decline
            </Button>
        </Stack>
    );

    const highText = (
        <Stack alignItems="flex-start">
            <Box
                sx={{
                    p: 1.5,
                    my: 1.5,
                    borderRadius: 1.5,
                    color: 'text.secondary',
                    bgcolor: 'background.neutral',
                }}
            >
                {reader(
                    `<p>Использовать 450 кВтч за следующий час и получи эксклюзивные бонусы! У вас сейчас потребление 700 кВтч! </p>`
                )}
            </Box>
        </Stack>
    );

    const lowText = (
        <Stack alignItems="flex-start">
            <Box
                sx={{
                    p: 1.5,
                    my: 1.5,
                    borderRadius: 1.5,
                    color: 'text.secondary',
                    bgcolor: 'background.neutral',
                }}
            >
                {reader(
                    `<p>Используете 700 кВтч за следующий час и получи 10 коинов , в это время можно повысить свое потребление  эффективно . У вас сейчас 450 кВтч! </p>`
                )}
            </Box>
        </Stack>
    );

    const notificationAction = (
        <Stack alignItems="flex-start">
            <Box
                sx={{
                    p: 1.5,
                    my: 1.5,
                    borderRadius: 1.5,
                    color: 'text.secondary',
                    bgcolor: 'background.neutral',
                }}
            >
                {reader(
                    `<p>Увеличь потребление на 2 кВт/ч с 15:00 до 17:00, экономия 10 лей. </p>`
                )}
            </Box>
        </Stack>
    );

    return (
        <ListItemButton
            disableRipple
            sx={{
                p: 2.5,
                alignItems: 'flex-start',
                borderBottom: (theme) => `dashed 1px ${theme.palette.divider}`,
            }}
        >
            {renderUnReadBadge}

            {renderAvatar}

            <Stack sx={{flexGrow: 1}}>
                {renderText}
                {notification.value === 'high' && highText}
                {notification.value === 'low' && lowText}
                {notification.value === 'high' && highAction}
                {notification.value === 'low' && lowAction}
                {notification.type === 'notification' && notificationAction}
            </Stack>
        </ListItemButton>
    );
}

// ----------------------------------------------------------------------

function reader(data: string) {
    return (
        <Box
            dangerouslySetInnerHTML={{__html: data}}
            sx={{
                mb: 0.5,
                '& p': {typography: 'body2', m: 0},
                '& a': {color: 'inherit', textDecoration: 'none'},
                '& strong': {typography: 'subtitle2'},
            }}
        />
    );
}
