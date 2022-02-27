import { createTheme } from '@mui/material/styles';
import typography from './typography';

export default {
    dark: createTheme({
        palette: {
            mode: 'dark',
            background: {
                default: 'rgb(27, 38, 53)',
                paper: 'rgb(35, 48, 68)',
            },
            text: {
                primary: 'rgba(255, 255, 255, 0.95)',
                secondary: 'rgba(255, 255, 255, 0.5)',
            },
            primary: {
                main: 'rgb(0, 123, 248)',
                contrastText: 'rgb(235, 234, 239)',
            },
            divider: 'rgb(85, 89, 110)',
        },
        typography: typography,
    }),
    light: createTheme({
        palette: {
            mode: 'light',
            background: {
                paper: 'rgb(255, 255, 255)',
                default: 'rgb(255, 255, 255)',
            },
            text: {
                primary: 'rgb(30, 32, 34)',
                secondary: 'rgb(103, 119, 136)',
            },
            primary: {
                main: 'rgb(0, 123, 248)',
                contrastText: 'rgb(235, 234, 239)',
            },
            divider: 'rgba(0, 0, 0, 0.12)',
        },
        typography: typography,
    })
};