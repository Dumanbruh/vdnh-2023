import { Box, useMediaQuery, useTheme } from "@mui/material";


const Line = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));

    let style;

    if (!matches) {
        style = {
            backgroundImage: `url(/images/home/icon_line_mobile.svg)`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            minHeight: "84px",
            opacity: 0.5,
            py: 8,
        };
    } else {
        style = {
            backgroundImage: `url(/images/home/icon_line.svg)`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            minHeight: "84px",
            opacity: 0.5,
            py: 8,
        };
    }

    return <Box sx={style} />;
}

export default Line