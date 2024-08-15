import { LazyLoadImage } from 'react-lazy-load-image-component';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import HeroButtons from './HeroButtons';

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div id='home'>
      <Box sx={{ width: 1, height: 1 }}>
        <Container padding={0} maxWidth='100%'>
          <Box
            display='flex'
            flexDirection={{ xs: 'column', md: 'row' }}
            position='relative'
            minHeight={{ md: 600 }}
          >
            <Box
              width={1}
              order={{ xs: 2, md: 1 }}
              display='flex'
              alignItems='center'
            >
              <Container>
                <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
                  <Box marginBottom={2}>
                    <Typography
                      color={theme.palette.text.primary}
                      variant='h2'
                      fontWeight={700}
                      align='center'
                    >
                      Welcome to{' '}
                    </Typography>
                    <Typography
                      color={theme.palette.primary.main}
                      variant='h2'
                      fontWeight={700}
                      align='center'
                      marginBottom={3}
                    >
                      Bob&apos;s Programming Academy
                    </Typography>
                  </Box>
                  <Box marginBottom={3}>
                    <Typography
                      variant='h6'
                      component='p'
                      color={theme.palette.text.secondary}
                      align='justify'
                    >
                      In Bob&apos;s Programming Academy, we help both aspiring
                      and established software developers gain more experience,
                      take their skills to the next level and create excellent
                      applications.
                    </Typography>
                  </Box>
                  <HeroButtons />
                </Box>
              </Container>
            </Box>
            <Box
              sx={{
                flex: { xs: '0 0 100%', md: '0 0 50%' },
                position: 'relative',
                maxWidth: { xs: '100%', md: '50%' },
                order: { xs: 1, md: 2 },
              }}
            >
              <Box
                sx={{
                  width: { xs: 1, md: '50vw' },
                  height: '100%',
                  position: 'relative',
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    sx={{
                      overflow: 'hidden',
                      left: '0%',
                      width: 1,
                      height: 1,
                      position: { xs: 'relative', md: 'absolute' },
                      clipPath: {
                        xs: 'none',
                        md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
                      },
                      shapeOutside: {
                        xs: 'none',
                        md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        height: { xs: 'auto', md: 1 },
                        '& img': {
                          objectFit: 'cover',
                        },
                        '& .lazy-load-image-loaded': {
                          height: 1,
                          width: 1,
                        },
                      }}
                    >
                      <Box
                        component={LazyLoadImage}
                        src='/images/bg.jpg'
                        alt='Background Image'
                        effect='blur'
                        height={{ xs: 'auto', md: 1 }}
                        maxHeight={{ xs: 300, md: 1 }}
                        width={1}
                        maxWidth={1}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
        <Divider sx={{ marginTop: 3 }} />
      </Box>
    </div>
  );
};

export default Hero;
