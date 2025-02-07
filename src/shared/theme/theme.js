
import { createTheme, responsiveFontSizes } from "@mui/material";
import { Dancing_Script, Lato, Libre_Bodoni } from "next/font/google";

const lato = Lato({
    subsets: ["latin"],
    weight: ["400", "700", "900"],
});
const libreBodoni = Libre_Bodoni({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});
const dancingScript = Dancing_Script({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});


let theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                ".body": {
                    color: "rgba(34, 7, 7, 0.85) !important",
                    letterSpacing: "0.5px",
                    lineHeight: 1.6,
                },
            },
        },
    },
    typography: {
        fontFamily: `${lato.style.fontFamily}, ${libreBodoni.style.fontFamily}, ${dancingScript.style.fontFamily}`,
        Regular: 400,
        Medium: 500,
        SemiBold: 600,
        Bold: 700,
        ExtraBold: 900,
        fontSize: 14, // Default font size
        sizes: {
            100: "13px",
            sm: "14px",
            md: "16px",
            lg: "17px",
            lg: "18px",
            xl: "20px",
        },
    },
    palette: {
        mode: mode,
        ...themeMode[mode],
    },
    components: {
        MuiTableCell: {
            styleOverrides: {
                root: {
                    textAlign: "center",
                },
            },
        },
    },
});

theme = responsiveFontSizes(theme);

export default theme;

let themeMode = {
    light: {
        divider: "rgba(174, 174, 174, 1)",
        background: {
            default: "rgba(0, 0, 0, 1)",
            lightDefault: "rgba(0, 0, 0, 0.5)",
            primary: "rgba(244, 198, 51, 1)",
            secondary: "rgba(24, 24, 27, 1)",
            white: "rgba(255, 255, 255, 1)",
        },
        border: {
            primary: "rgba(242, 242, 242, 1)",
        },
        text: {
            primary: "rgba(255, 255, 255, 1)",
            body: "rgba(255, 255, 255, 0.9)",
            secondary: "rgba(244, 198, 51, 1)",
            darkGrey: "rgba(255, 255, 255, 0.55)",
            lightGrey: "#rgba(255, 255, 255, 0.85)",
            darkBlue: "rgba(24, 24, 27, 1)",
            grey: "#rgba(138, 138, 138, 1)",
        },
    },
};
