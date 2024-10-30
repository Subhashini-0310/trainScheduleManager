// src/theme.js
import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    "50": "#E0F2F0",
                    "100": "#B2E0D8",
                    "200": "#81CCBF",
                    "300": "#4EB8A6",
                    "400": "#27A893",
                    "500": "#019881", // Main primary color
                    "600": "#008B75",
                    "700": "#007B65",
                    "800": "#006B57",
                    "900": "#004F3C",
                    "bg": "#E3FBE3",
                    contrastText: "#ffffff", // Default text color on primary
                    background: "#E3FBE3"
                },
                secondary: {
                    main: '#f50057', // Main secondary color
                    contrastText: '#ffffff',
                },
                warning: {
                    main: "#9A5B13",
                    background: "#FDF0E1"
                },
                danger: {
                    main: "#C41C1C",
                    background: "#FCE4E4"
                },
                neutral: {
                    main: '#64748B',
                    contrastText: '#ffffff',
                },
                background: {
                    default: '#f5f5f5',
                    paper: '#ffffff',
                },

                text: {
                    "icon-inverse": "#fff",
                    primary: "var(--joy-palette-neutral-800)",
                    secondary: "var(--joy-palette-neutral-600)",
                    tertiary: "var(--joy-palette-neutral-400)",
                },
            },
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        h1: {
            fontSize: '2rem',
            fontWeight: 700,
            lineHeight: 1.5,
        },
        h2: {
            fontSize: '1.75rem',
            fontWeight: 700,
            lineHeight: 1.5,
        },
        h3: {
            fontSize: '1.5rem',
            fontWeight: 700,
            lineHeight: 1.5,
        },
        body1: {
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: 1.5,
        },
        body2: {
            fontSize: '0.875rem',
            fontWeight: 400,
            lineHeight: 1.5,
        },
        // Custom typography
        "label-sm": {
            fontFamily: "var(--fontFamily-body, Roboto, sans-serif)",
            fontWeight: 400,
            fontSize: "0.625rem",
            lineHeight: 0.875,
            color: "#555E68",
        },
        "label-md": {
            fontFamily: "var(--fontFamily-body, Roboto, sans-serif)",
            fontWeight: 600,
            fontSize: "0.625rem",
            lineHeight: 0.875,
            color: "#555E68",
        },
        "body-xxs": {
            fontFamily: "var(--fontFamily-body, Roboto, sans-serif)",
            fontWeight: 500,
            fontSize: "0.75rem",
            lineHeight: 1.33334,
            color: "#555E68",
        },
        "body1": {
            fontSize: '1.25rem',  // Try a noticeable change to ensure the theme is applied
            fontWeight: 700,
            color: "#ff0000",
        },
    },
});

export default theme;
