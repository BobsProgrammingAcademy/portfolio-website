import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import HelpIcon from '@mui/icons-material/HelpOutlineOutlined';
import ManageSearchIcon from '@mui/icons-material/ManageSearchOutlined';

const HeroButtons = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <>
      <Box
        display='flex'
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'stretched', sm: 'flex-start' }}
        justifyContent='center'
        marginTop={4}
      >
        <Button
          component='a'
          variant='contained'
          color='primary'
          size='large'
          href='#about'
          endIcon={<HelpIcon />}
          fullWidth={isMd ? false : true}
          disableElevation={true}
          sx={{
            padding: '15px 30px',
            marginRight: '15px',
            fontSize: '16px',
            textTransform: 'uppercase',
            border: '2px solid ' + theme.palette.primary.main,
            '&:hover': {
              backgroundColor: 'transparent',
              color: theme.palette.primary.main,
              border: '2px solid ' + theme.palette.primary.main,
            },
          }}
        >
          Learn More
        </Button>
        <Box
          marginTop={{ xs: 2, sm: 0 }}
          marginLeft={{ sm: 1 }}
          width={{ xs: '100%', md: 'auto' }}
        >
          <Button
            component='a'
            variant='outlined'
            color='primary'
            size='large'
            href='#'
            endIcon={<ManageSearchIcon />}
            fullWidth={isMd ? false : true}
            disableElevation={true}
            sx={{
              padding: '15px 30px',
              marginRight: '15px',
              fontSize: '16px',
              textTransform: 'uppercase',
              border: '2px solid ' + theme.palette.primary.main,
              '&:hover': {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.common.white,
                border: '2px solid ' + theme.palette.primary.main,
              },
            }}
          >
            View Our Work
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default HeroButtons;
