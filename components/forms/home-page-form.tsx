import {
  Alert,
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
import { useFormik } from "formik";

import Snackbar from "@mui/material/Snackbar";
import axios from "axios";

const RegistrationForm = () => {
  let style;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
    },
    onSubmit: (values) => {
      axios.post("/api/form", values).then((res) => {
        handleClick();
      });
    },
  });

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  if (!matches) {
    style = registrationForm.mobile;
  } else {
    style = registrationForm.desktop;
  }

  return (
    <>
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
                  ? `Хотите узнать о старте сезона в числе первых?
                  Оставьте свою почту и мы отправим вам 
                  приглашение, как только регистрация откроется!`
                  : `Хотите узнать о старте сезона в числе первых. 
                  Оставьте свою почту и мы отправим вам приглашение, как только регистрация откроется!`}
              </Typography>
              <Box onSubmit={formik.handleSubmit} component={"form"}>
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
                      <TextField
                        {...formik.getFieldProps("email")}
                        variant="outlined"
                        sx={{ minHeight: "64px" }}
                      />
                    </FormControl>

                    <FormControl sx={style.form.control}>
                      <Typography sx={style.form.label}>Ваше имя</Typography>
                      <TextField
                        {...formik.getFieldProps("name")}
                        variant="outlined"
                        sx={{ minHeight: "64px" }}
                      />
                    </FormControl>
                  </Stack>
                  {matches ? (
                    <Button
                      disabled={formik.isSubmitting}
                      variant="contained"
                      sx={style.button}
                      type="submit"
                    >
                      <Typography sx={style.button.text}>отправить</Typography>
                    </Button>
                  ) : (
                    <Button
                      disabled={formik.isSubmitting}
                      variant="contained"
                      sx={style.button}
                      type="submit"
                    >
                      <Typography sx={style.button.text}>отправить</Typography>
                    </Button>
                  )}
                </Stack>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Вы успешно зарегистрировались!
        </Alert>
      </Snackbar>
    </>
  );
};

export default RegistrationForm;
