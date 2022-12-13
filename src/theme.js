import { createTheme } from '@mui/material/styles';

export const shades = {
   
    primary: {
        100: "#e2faff",
        200: "#c6f5fe",
        300: "#a9effe",
        400: "#8deafd",
        500: "#70e5fd",
        600: "#5ab7ca",
        700: "#438998",
        800: "#2d5c65",
        900: "#162e33"
    },

    secondary: {
          100: "#f7ccd2",
          200: "#ef99a4",
          300: "#e66677",
          400: "#de3349",
          500: "#d6001c",
          600: "#ab0016",
          700: "#800011",
          800: "#56000b",
          900: "#2b0006"
    },

    neutral: {
          100: "#f5f5f5",
          200: "#ebebeb",
          300: "#e1e1e1",
          400: "#d7d7d7",
          500: "#cdcdcd",
          600: "#a4a4a4",
          700: "#7b7b7b",
          800: "#525252",
          900: "#292929"
    },
};

export const theme = createTheme({
    palette: {
        primary: {
            main: shades.primary[500]
        },
        secondary: {
            main: shades.secondary[500]
        },
        neutral: {
            dark: shades.neutral[700],
            main: shades.neutral[500],
            light: shades.neutral[100]
        }
    },
    typography: {
        fontFamily: ["Faustina", "sans-serif"].join(","),
        fontSize: 11,
        h1: {
            fontFamily: ["Cinzel", "sans-serif"].join(","),
            fontSize: 48,
        },
        h2: {
            fontFamily: ["Cinzel", "sans-serif"].join(","),
            fontSize: 36,
        },
        h3: {
            fontFamily: ["Cinzel", "sans-serif"].join(","),
            fontSize: 20,
        },
        h4: {
            fontFamily: ["Cinzel", "sans-serif"].join(","),
            fontSize: 14,
        },
    }
});


