import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const Technologies = () => {
  const theme = useTheme();

  const [technologies, setTechnologies] = useState([]);

  const fetchTechnologies = () => {
    axios
      .get('/technologies', {
        headers: {
          Accept: 'application/json',
          'Access-Control-Allow-Origin': process.env.BACKEND_URL,
        },
      })
      .then((response) => {
        setTechnologies(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchTechnologies();
  }, []);

  return (
    <div id='technologies'>
      <Box
        maxWidth={{ sm: 720, md: 1236 }}
        width={1}
        margin='0 auto'
        paddingX={2}
        paddingY={{ xs: 4, sm: 6, md: 8 }}
      >
        <Box>
          <Box marginBottom={4}>
            <Typography
              variant='h3'
              align='center'
              fontWeight={700}
              marginTop={theme.spacing(1)}
              gutterBottom
              data-aos='fade-up'
            >
              Technologies
            </Typography>
            <Typography
              variant='h6'
              align='center'
              color={theme.palette.text.secondary}
              marginTop={4}
              marginBottom={6}
              data-aos='fade-up'
            >
              Technologies we use to build our products
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {technologies.map((item, i) => (
              <Grid item xs={12} md={3} key={i}>
                <Box
                  width={1}
                  height={1}
                  component={Card}
                  display='flex'
                  flexDirection='column'
                  alignItems='center'
                  boxShadow={0}
                  variant='outlined'
                  borderRadius={2}
                  data-aos='fade-up'
                  data-aos-delay={100}
                  data-aos-offset={100}
                  data-aos-duration={600}
                >
                  <CardContent
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      transition: 'all .2s ease-in-out',
                      '&:hover': {
                        transform: `translateY(-${theme.spacing(1)})`,
                      },
                    }}
                  >
                    <Box marginBottom={1}>
                      <Box
                        component={Avatar}
                        width={60}
                        height={60}
                        marginBottom={2}
                        backgroundColor='transparent'
                        variant='rounded'
                        borderRadius={2}
                      >
                        <Image
                          src={item.icon}
                          height={50}
                          width={50}
                          alt={item.name}
                        />
                      </Box>
                    </Box>
                    <Typography
                      align='center'
                      color={theme.palette.text.primary}
                      fontWeight='bold'
                    >
                      {item.name}
                    </Typography>
                  </CardContent>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Divider />
    </div>
  );
};

export default Technologies;
