import PropTypes from 'prop-types';
import Link from 'next/link';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

// Material Icons
import DevicesIcon from '@mui/icons-material/Devices';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ListIcon from '@mui/icons-material/FormatListBulleted';
import YouTubeIcon from '@mui/icons-material/YouTube';

// Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faGraduationCap);

import CustomButton from '../components/CustomButton';

const Sidebar = ({ open, onClose }) => {
  const theme = useTheme();

  return (
    <>
      <Drawer
        anchor='left'
        onClose={() => onClose()}
        open={open}
        variant='temporary'
        sx={{
          '& .MuiPaper-root': {
            width: '100%',
            maxWidth: 280,
          },
        }}
      >
        <Box sx={{ height: '100%', padding: 1 }}>
          <Box width={1} paddingX={2} paddingY={1}>
            <Link href='/' style={{ textDecoration: 'none' }} passHref>
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
                  color={theme.palette.text.primary}
                  fontFamily='"Love Ya Like A Sister", cursive'
                  fontWeight='bold'
                  textDecoration='none'
                  flexGrow={1}
                >
                  Bob&apos;s Programming Academy
                </Typography>
              </IconButton>
            </Link>
          </Box>
          <Box paddingX={2} paddingY={2}>
            <CustomButton href='#home' icon={<HomeIcon />} text='Home' />
            <Box paddingY={1}>
              <CustomButton href='#about' icon={<InfoIcon />} text='About' />
            </Box>
            <Box paddingY={1}>
              <CustomButton
                href='#projects'
                icon={<ListIcon />}
                text='Projects'
              />
            </Box>
            <Box paddingY={1}>
              <CustomButton
                href='#technologies'
                icon={<DevicesIcon />}
                text='Technologies'
              />
            </Box>
            <Box paddingY={1}>
              <CustomButton
                href='#contact'
                icon={<EmailIcon />}
                text='CONTACT'
              />
            </Box>
            <Box>
              <Stack direction='row' spacing={1}>
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
              </Stack>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
};

export default Sidebar;
