import {
    Box,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
    Container,
    Divider,
    IconButton,
    Link,
} from "@mui/material";
import map from "./styles/map";

const FooterMap = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));

    let style;

    if (!matches) {
        style = map.mobile;
    } else {
        style = map.desktop;
    }

    return (
        <>
            <Box sx={style.background}>
                <Container maxWidth="lg">
                    <Stack
                        justifyContent="space-between"
                        direction={matches ? "row" : "column"}
                    >
                        <Stack sx={style.box} spacing="30px">
                            <Typography sx={style.contacts.heading}>КОНТАКТЫ</Typography>

                            <Box>
                                <Typography sx={style.contacts.title}>Эл. почта</Typography>

                                <Typography
                                    component="a"
                                    href="mailto:email.vdnh@yandex.ru"
                                    sx={style.contacts.email}
                                >
                                    email.vdnh@yandex.ru
                                </Typography>
                            </Box>

                            <Box>
                                <Typography sx={style.contacts.title}>
                                    Место проведения
                                </Typography>

                                <Typography sx={style.contacts.body}>ВДНХ, ПАВИЛЬОН № 27</Typography>

                                <Typography sx={style.contacts.body}>
                                    г. Москва, пр-т Мира, д. 119, стр. 27
                                </Typography>
                            </Box>
                        </Stack>

                        <Stack>
                            {matches ? (
                                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad19552a1f6b9e15e78aefd70233011661afe395b6497995b9a5bf1236ab3c0b1&amp;source=constructor" width="564" height="449" frameBorder="0"></iframe>
                            ) : null}
                        </Stack>
                    </Stack>
                </Container>

                {!matches ? (
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad19552a1f6b9e15e78aefd70233011661afe395b6497995b9a5bf1236ab3c0b1&amp;source=constructor" width="100%" height="388" frameBorder="0"></iframe>
                ) : null}
            </Box>
            <Box
                component="footer"
                sx={{
                    display: "flex",
                    bgcolor: "white",
                    mt: "auto",
                    flexDirection: "column",
                }}
            >
                <Divider sx={{ height: "2px" }} />

                <Container maxWidth="xl">
                    <Stack py={1} direction={matches ? "row" : "column"}>
                        <Stack alignItems="center" direction="row" spacing={1}>
                            <Box
                                sx={{ mt: 1 }}
                                component="a"
                                target="_blank"
                                href="https://www.mos.ru/moskomsport/"
                            >
                                <Box
                                    sx={
                                        matches
                                            ? { height: 50, margin: 1 }
                                            : { height: 35, margin: 1 }
                                    }
                                    component="img"
                                    src="/images/dsgm.svg"
                                />
                            </Box>

                            <Box component="a" target="_blank" href=" https://moscow.sport/">
                                <Box
                                    sx={
                                        matches
                                            ? { height: 50, margin: 1 }
                                            : { height: 35, margin: 1 }
                                    }
                                    component="img"
                                    src="/images/mossport.svg"
                                />
                            </Box>

                            <Box
                                sx={{ mt: 1 }}
                                component="a"
                                target="_blank"
                                href="https://vdnh.ru/"
                            >
                                <Box
                                    sx={
                                        matches
                                            ? { height: 50, margin: 1 }
                                            : { height: 35, margin: 1 }
                                    }
                                    component="img"
                                    src="/images/vdnh.svg"
                                />
                            </Box>
                        </Stack>

                        <Stack
                            sx={{ width: "100%" }}
                            direction="row"
                            alignItems="center"
                            justifyContent={matches ? "flex-end" : "flex-start"}
                        >
                            <Box>
                                <IconButton
                                    href="https://vk.com/moscowsportofficial"
                                    component={Link}
                                >
                                    <Box component="img" src="/images/vk_logo.svg" />
                                </IconButton>
                            </Box>
                            <Box>
                                <IconButton
                                    href="https://rutube.ru/channel/24673075/"
                                    component={Link}
                                >
                                    <Box component="img" src="/images/rutube_logo.svg" />
                                </IconButton>
                            </Box>
                            <Box>
                                <IconButton
                                    href="https://t.me/MoscowSportOfficial"
                                    component={Link}
                                >
                                    <Box component="img" src="/images/tg_logo.svg" />
                                </IconButton>
                            </Box>
                        </Stack>
                    </Stack>
                </Container>
            </Box>
        </>
    )
}

export default FooterMap