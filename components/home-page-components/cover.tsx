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
            label: "Шахматы",
            link: "/",
        },
        {
            label: "Кинопоказ",
            link: "/",
        },
        {
            label: "Футбол",
            link: "/",
        },
        {
            label: "Волейбол",
            link: "/",
        },

        {
            label: "Баскетбол 3x3",
            link: "/",
        },

        {
            label: "Спортивные выходные",
            link: "/",
        },
        {
            label: "Забег",
            link: "/",
        },
        // {
        //     label: "Кинопоказы",
        //     link: "/lectures/movie",
        // },
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