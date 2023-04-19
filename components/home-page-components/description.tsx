import {
    Container,
    Box,
    useMediaQuery,
    useTheme,
    Stack,
    Typography,
    Button,
} from "@mui/material";
import description from "./styles/description";

import { useRouter } from "next/router";
import { useSession } from "next-auth/react"

const Description = () => {
    const theme = useTheme();
    const { status } = useSession();
    const matches = useMediaQuery(theme.breakpoints.up("md"));
    const router = useRouter();
    let style;

    if (!matches) {
        style = description.mobile;
    } else {
        style = description.desktop;
    }


    return (
        <Box sx={style.background}>
            <Container maxWidth="lg">
                <Stack alignItems="flex-end">
                    <Stack spacing={matches ? "61px" : "20px"}>
                        <Typography textAlign="center" sx={style.text.heading}>
                            <Box component="span" sx={style.text.underline}>
                                СПОРТ
                            </Box>{" "}
                            — ДЛЯ ВСЕХ
                        </Typography>
                        <Stack spacing={2}>
                            <Typography sx={style.text.body}>
                                Проект Департамента спорта города Москвы делает спорт
                                ближе и доступнее!
                            </Typography>
                            <Typography sx={style.text.body}>
                                Этим летом любой желающий сможет найти себе занятие по душе на
                                ВДНХ:
                            </Typography>
                            <Typography component="ul" sx={style.text.body}>
                                <li>посмотреть фильмы или послушать лекции</li>
                                <li>начать заниматься в секции роликов, шахмат или тенниса</li>
                                <li>
                                    поучаствовать в любительских турнирах по футболу, волейболу и
                                    баскетболу
                                </li>
                            </Typography>
                            <Typography sx={style.text.body}>
                                Выбирай, записывайся и проведи лето с удовольствием!
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>

                {/* {status === "unauthenticated" ? (
            <Stack alignItems="flex-end">
              <Button
                color="secondary"
                onClick={() => {
                  router.push("/login");
                }}
                variant="contained"
                sx={style.button}
              >
                <Typography sx={style.button.text}>
                  УЧАСТВОВАТЬ БЕСПЛАТНО
                </Typography>
              </Button>
            </Stack>
          ) : null} */}
            </Container>
        </Box>
    );
}

export default Description