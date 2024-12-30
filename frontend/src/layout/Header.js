import { useContext } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { alpha, useTheme } from '@mui/material/styles';

// Material Icons
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DevicesIcon from '@mui/icons-material/DevicesOutlined';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LightModeIcon from '@mui/icons-material/LightMode';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ListIcon from '@mui/icons-material/FormatListBulleted';
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';

// Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faGraduationCap);

import ColorModeContext from '../components/ColorModeContext';
import CustomButton from '../components/CustomButton';

const Header = ({ onSidebarOpen }) => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 38,
  });

  return (
    <>
      <AppBar
        position='sticky'
        elevation={theme.palette.mode === 'dark' ? 0 : trigger ? 1 : 0}
        sx={{
          top: 0,
          border: 0,
          backgroundColor: trigger
            ? theme.palette.background.default
            : 'transparent',
        }}
      >
        <Toolbar sx={{ minHeight: 70 }}>
          <Box
            alignItems='center'
            sx={{ display: { md: 'block', lg: 'none' } }}
          >
            <Button
              onClick={() => onSidebarOpen()}
              aria-label='Menu'
              variant='outlined'
              sx={{
                borderRadius: 2,
                minWidth: 'auto',
                padding: 1,
                color: theme.palette.primary.main,
                borderColor: alpha(theme.palette.primary.main, 0.2),
              }}
            >
              <MenuIcon fontSize='medium' />
            </Button>
          </Box>
          <Link href='/' style={{ textDecoration: 'none' }}>
            <IconButton size='large' disabled>
              <Avatar
                variant='rounded'
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  height: 52,
                  width: 52,
                  marginRight: '15px',
                }}
              >
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  style={{
                    color: theme.palette.common.white,
                    height: 30,
                    width: 30,
                  }}
                />
              </Avatar>
              <Typography
                variant='h3'
                component='div'
                sx={{
                  flexGrow: 1,
                  color: theme.palette.text.primary,
                  fontFamily: '"Love Ya Like A Sister", cursive',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  display: { md: 'inline', xs: 'none' },
                }}
              >
                Bob&apos;s Programming Academy
              </Typography>
            </IconButton>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              alignItems: 'center',
              display: { lg: 'flex', md: 'none', xs: 'none' },
            }}
          >
            <CustomButton href='#home' icon={<HomeIcon />} text='Home' />
            <CustomButton href='#about' icon={<InfoIcon />} text='About' />
            <CustomButton
              href='#projects'
              icon={<ListIcon />}
              text='Projects'
            />
            <CustomButton
              href='#technologies'
              icon={<DevicesIcon />}
              text='Technologies'
            />
            <CustomButton href='#contact' icon={<EmailIcon />} text='Contact' />
          </Box>
          <Divider
            orientation='vertical'
            sx={{
              height: 32,
              marginX: 2,
              display: { lg: 'flex', md: 'none', xs: 'none' },
            }}
          />
          <Box sx={{ display: 'flex' }}>
            <IconButton
              onClick={colorMode.toggleColorMode}
              aria-label='Theme Mode'
              color={theme.palette.mode === 'dark' ? 'warning' : 'inherit'}
            >
              {theme.palette.mode === 'dark' ? (
                <LightModeIcon fontSize='medium' />
              ) : (
                <DarkModeIcon
                  fontSize='medium'
                  sx={{ color: theme.palette.text.primary }}
                />
              )}
            </IconButton>
          </Box>
          <Divider
            orientation='vertical'
            sx={{
              height: 32,
              marginX: 2,
              display: { lg: 'flex', md: 'none', xs: 'none' },
            }}
          />
          <Box sx={{ display: { lg: 'flex', md: 'none', xs: 'none' } }}>
            <IconButton
              aria-label='YouTube'
              color='primary'
              href='#'
              target='_blank'
            >
              <YouTubeIcon fontSize='large' />
            </IconButton>
            <IconButton
              aria-label='LinkedIn'
              color='primary'
              href='#'
              target='_blank'
            >
              <LinkedInIcon fontSize='large' />
            </IconButton>
            <IconButton
              aria-label='Instagram'
              color='primary'
              href='#'
              target='_blank'
            >
              <InstagramIcon fontSize='large' />
            </IconButton>
          </Box>
          {theme.palette.mode === 'dark' && <Divider />}
        </Toolbar>
      </AppBar>
    </>
  );
};

Header.propTypes = {
  onSidebarOpen: PropTypes.func,
};

export default Header;
