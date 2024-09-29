import { useState, useCallback } from 'react';
// @mui
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
// routes
import { paths } from 'src/routes/paths';
// hooks
import { useMockedUser } from 'src/hooks/use-mocked-user';
// _mock
import { _userAbout, _userFeeds } from 'src/_mock';
// components
import Iconify from 'src/components/iconify';
import { useSettingsContext } from 'src/components/settings';
//
import ProfileHome from '../profile-home';
import ProfileCover from '../profile-cover';

// ----------------------------------------------------------------------

// const TABS = [
//   {
//     value: 'profile',
//     label: 'Profile',
//     icon: <Iconify icon="solar:user-id-bold" width={24} />,
//   },
//   {
//     value: 'gallery',
//     label: 'Gallery',
//     icon: <Iconify icon="solar:gallery-wide-bold" width={24} />,
//   },
// ];

// ----------------------------------------------------------------------

export default function UserProfileView() {
  const settings = useSettingsContext();

  const { user } = useMockedUser();

  const [searchFriends, setSearchFriends] = useState('');

  const [currentTab, setCurrentTab] = useState('profile');

  const handleChangeTab = useCallback((event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  }, []);

  const handleSearchFriends = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchFriends(event.target.value);
  }, []);

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>

      {currentTab === 'profile' && <ProfileHome info={_userAbout} posts={_userFeeds} />}

    </Container>
  );
}
