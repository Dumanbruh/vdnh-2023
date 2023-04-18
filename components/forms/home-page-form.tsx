import {
    Box,
    Button,
    Container,
    FormControl,
    Stack,
    TextField,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import React from "react";
import registrationForm from "./styles/registration-form";
import { Formik, Form, Field, FieldInputProps, FormikProps } from "formik";

const RegistrationForm = () => {
    let style;
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));

    if (!matches) {
        style = registrationForm.mobile;
    } else {
        style = registrationForm.desktop;
    }

    return (
        <Box sx={style.background}>
            <Container maxWidth="lg" sx={{ my: "65px" }}>
                <Stack
                    justifyContent="space-between"
                    direction={matches ? "row" : "column"}
                >
                    <Stack spacing="15px" sx={{ width: "100%" }}>
                        <Typography sx={style.form.heading}>ЛЕТО 2023</Typography>
                        <Typography sx={style.form.title}>
                            {matches
                                ? `Хотите узнать о старте сезона в числе первых. 
                  Оставьте свою почту и мы отправим вам 
                  приглашение, как только регистрация откроется!`
                                : `Хотите узнать о старте сезона в числе первых. 
                  Оставьте свою почту и мы отправим вам приглашение, как только регистрация откроется!`}
                        </Typography>
                        <Box component={"form"}>
                            <Stack
                                sx={{ alignItems: "center", width: "100%" }}
                                spacing={"66px"}
                            >
                                <Stack
                                    spacing={"24px"}
                                    sx={{ width: "100%" }}
                                    direction={matches ? "row" : "column"}
                                >
                                    <FormControl sx={style.form.control}>
                                        <Typography sx={style.form.label}>E-mail</Typography>
                                        <TextField variant="outlined" sx={{ minHeight: "64px" }} />
                                    </FormControl>

                                    <FormControl sx={style.form.control}>
                                        <Typography sx={style.form.label}>Ваше имя</Typography>
                                        <TextField variant="outlined" sx={{ minHeight: "64px" }} />
                                    </FormControl>
                                </Stack>
                                {matches ? (
                                    <Button variant="contained" sx={style.button} type="submit">
                                        <Typography sx={style.button.text}>отправить</Typography>
                                    </Button>
                                ) : (
                                    <Button variant="contained" sx={style.button} type="submit">
                                        <Typography sx={style.button.text}>отправить</Typography>
                                    </Button>
                                )}
                            </Stack>
                        </Box>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};

export default RegistrationForm;
