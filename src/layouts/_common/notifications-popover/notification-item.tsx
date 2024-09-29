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
// components

// ----------------------------------------------------------------------

type NotificationItemProps = {
    notification: {
        id: string;
        title: string;
        category: string;
        createdAt: Date;
        isUnRead: boolean;
        type: string;
        avatarUrl: string | null;
    };
};

export default function NotificationItem({notification}: NotificationItemProps) {
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

    const friendAction = (
        <Stack spacing={1} direction="row" sx={{mt: 1.5}}>
            <Button size="small" variant="contained">
                Accept
            </Button>
            <Button size="small" variant="outlined">
                Decline
            </Button>
        </Stack>
    );

    const warningAction = (
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
                    `<p>С 15:00 до 17:00 повысь свое энергопотребление на 2 кВт/ч. Это поможет тебе использовать свое электричество на 10% выгоднее, чем обычно. Экономия 10 лей. </p>`
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
                {notification.type === 'warning' && warningAction}
                {notification.type === 'warning' && friendAction}
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
