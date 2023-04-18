import { Box, Breadcrumbs, Container, Stack, Typography, useTheme, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import cover from "./styles/cover";

const Cover = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));

    let style: any;

    const sports = [
        {
            label: "Фрисби",
            link: "/section/frisbee",
        },
        {
            label: "Футбол",
            link: "/tournament/football",
        },
        {
            label: "Волейбол",
            link: "/tournament/volleyball",
        },
        {
            label: "Ролики",
            link: "/section/skates",
        },

        {
            label: "ГОРОДОШНЫЙ СПОРТ",
            link: "/section/gorodki",
        },

        {
            label: "Шахматы",
            link: "/section/chess",
        },
        {
            label: "Лекции",
            link: "/lectures/lection",
        },
        {
            label: "Кинопоказы",
            link: "/lectures/movie",
        },
    ];

    if (!matches) {
        style = cover.mobile;
    } else {
        style = cover.desktop;
    }

    return (
        <Box sx={style.background}>
            <Container maxWidth="lg">
                <Stack mt={10} justifyContent="space-between">
                    <Typography sx={style.text.heading}>
                        ФИЗКУЛЬТУРА И СПОРТ НА ВДНХ
                    </Typography>

                    <Breadcrumbs
                        sx={style.breadcrumb.box}
                        separator={<Box sx={style.breadcrumb.separator} />}
                    >
                        {sports.map((sport, i) => {
                            return (
                                <Typography sx={style.text.crumb} key={i}>
                                    <Link href={sport.link}>{sport.label}</Link>
                                </Typography>
                            );
                        })}
                    </Breadcrumbs>
                </Stack>
            </Container>
        </Box>
    )
}

export default Cover