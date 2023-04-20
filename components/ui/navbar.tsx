import React from 'react'
import {
    AppBar,
    Box,
    Container,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Menu,
    MenuItem,
    Stack,
    Tab,
    Tabs,
    Toolbar,
    Typography,
    Collapse,
    ListItemButton,
    useMediaQuery,
    useTheme
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import pages from "../../constants/pages";
import navbar from "./styles/navbar";
import { useRoles } from "../../contexts/roles-context";


let navbarItems: any[] = [];

//@ts-ignore
function NavListItem(props) {
    let listItem;

    const { redirectHandler, page, close } = props;
    const { title, path, nested } = page;

    const [open, setOpen] = useState(false);
    const router = useRouter();

    const handleClick = () => {
        setOpen(!open);
    };

    const handleRedirectNested = (nestedPath: any) => {
        router.push(path + nestedPath);
        close(false);
    };

    if (nested.length > 0) {
        listItem = (
            <>
                <ListItemButton onClick={handleClick}>
                    <Typography sx={navbar.button.mobile.primary}>{title}</Typography>
                    <Box flex={1} />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List sx={{ ml: 2 }} component="div" disablePadding>
                        {nested.map((page: any) => {
                            const { id, title, path } = page;

                            return (
                                <ListItem
                                    key={id}
                                    button
                                    onClick={() => {
                                        handleRedirectNested(path);
                                    }}
                                >
                                    <ListItemText>
                                        <Typography sx={navbar.button.mobile.secondary}>
                                            {title}
                                        </Typography>
                                    </ListItemText>
                                </ListItem>
                            );
                        })}
                    </List>
                </Collapse>
            </>
        );
    } else {
        listItem = (
            <ListItem
                button
                onClick={() => {
                    redirectHandler(path);
                }}
            >
                <ListItemText>
                    <Typography sx={navbar.button.mobile.primary}>{title}</Typography>
                </ListItemText>
            </ListItem>
        );
    }

    return listItem;
}

function MobileMenu() {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const redirectHandler = (path: any) => {
        router.push(path).then(() => {
            setOpen(false);
        });
    };

    const toggleDrawer = (open: any) => (event: any) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setOpen(open);
    };

    return (
        <>
            <IconButton
                onClick={toggleDrawer(true)}
                size="large"
                edge="start"
                sx={{ mr: 2, color: "black" }}
            >
                <MenuIcon sx={{ width: 50, height: 50 }} />
            </IconButton>
            <Drawer anchor={"right"} open={open} onClose={toggleDrawer(false)}>
                <Box sx={{ width: 280, ml: 3 }} role="presentation">
                    <Stack alignItems="flex-end">
                        <IconButton onClick={toggleDrawer(false)}>
                            <CloseIcon />
                        </IconButton>
                    </Stack>
                    <List>
                        {navbarItems.map((page, i) => {
                            return (
                                <NavListItem
                                    close={setOpen}
                                    key={i}
                                    page={page}
                                    redirectHandler={redirectHandler}
                                />
                            );
                        })}
                    </List>

                    <Stack mt={3} direction="column">
                        <Box
                            sx={{ mt: 1 }}
                            component="a"
                            target="_blank"
                            href="https://www.mos.ru/moskomsport/"
                        >
                            <Box
                                sx={{ height: 50, margin: 1 }}
                                component="img"
                                src="/images/dsgm.svg"
                            />
                        </Box>

                        <Box component="a" target="_blank" href="https://moscow.sport/">
                            <Box
                                sx={{ height: 50, margin: 1 }}
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
                                sx={{ height: 50, margin: 1 }}
                                component="img"
                                src="/images/vdnh.svg"
                            />
                        </Box>
                    </Stack>
                </Box>
            </Drawer>
        </>
    );
}

function NavTabs(props: any) {
    const { id, title, path, nested } = props.page;
    const router = useRouter();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleRedirect = () => {
        router.push(path);
    };

    const handleRedirectNested = (nestedPath: any) => {
        router.push(path + nestedPath);
        handleClose();
    };

    return (
        <>
            <Tab
                sx={navbar.button.tab}
                value={id}
                label={title}
                onClick={nested.length > 0 ? handleClick : handleRedirect}
            />

            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                {nested.map((page: any) => {
                    const { id, title, path } = page;

                    return (
                        <MenuItem
                            key={id}
                            sx={navbar.button.menu}
                            onClick={() => {
                                handleRedirectNested(path);
                            }}
                        >
                            {title}
                        </MenuItem>
                    );
                })}
            </Menu>
        </>
    );
}


const Navbar = () => {

    const [value, setValue] = useState<any>(undefined);
    const router = useRouter();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("xl"));
    const { role } = useRoles();

    switch (role) {
        case "loading":
            navbarItems = pages.user;

            break;

        case "user":
            navbarItems = pages.user;

            break;

        case "staff":
            navbarItems = pages.user.concat(pages.admin);

            break;

        case "admin":
            navbarItems = pages.user.concat(pages.admin);

            break;

        default:
            break;
    }


    const divider = { bgcolor: "secondary.main", height: "2px" };

    useEffect(() => {
        if (matches) {
            let path = router.asPath;
            if (path.lastIndexOf("/") !== 0) {
                path = path.substring(path.indexOf("/"), path.lastIndexOf("/"));
            }

            const current = navbarItems.find((page) => path == page.path);
            if (current) {
                setValue(current.id);
            } else {
                setValue(0);
            }
        }
    }, [router, matches]);

    const handleChange = (event: any, newValue: any) => {
        event.preventDefault();
        setValue(newValue);
    };

    return (
        <>
            {matches ? (
                <>
                    <AppBar sx={{ bgcolor: "background.navbar" }} position="fixed">
                        <Toolbar sx={{ height: 115 }}>
                            <Container maxWidth="xl">
                                <Stack alignItems="center" direction="row">
                                    <Stack direction="row" alignItems="center" spacing={1}>
                                        <Box
                                            sx={{ mt: 1 }}
                                            component="a"
                                            target="_blank"
                                            href="https://www.mos.ru/moskomsport/"
                                        >
                                            <Box
                                                sx={{ height: 50, margin: 1 }}
                                                component="img"
                                                src="/images/dsgm.svg"
                                            />
                                        </Box>

                                        <Box
                                            component="a"
                                            target="_blank"
                                            href=" https://moscow.sport/"
                                        >
                                            <Box
                                                sx={{ height: 50, margin: 1 }}
                                                component="img"
                                                src="/images/mossport.svg"
                                            />
                                        </Box>

                                        <Box
                                            sx={{ mt: 1 }}
                                            component="a"
                                            target="_blank"
                                            href="https://100.moscow.sport"
                                        >
                                            <Box
                                                sx={{ height: 50, margin: 1 }}
                                                component="img"
                                                src="/images/100years.svg"
                                            />
                                        </Box>

                                        <Box
                                            sx={{ mt: 1 }}
                                            component="a"
                                            target="_blank"
                                            href="https://vdnh.ru/"
                                        >
                                            <Box
                                                sx={{ height: 50, margin: 1 }}
                                                component="img"
                                                src="/images/vdnh.svg"
                                            />
                                        </Box>
                                    </Stack>

                                    <Box flex={1}></Box>

                                    {/* <Box>
                      <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                      >
                        {navbarItems.map((page) => {
                          return <NavTabs key={page.id} page={page} />;
                        })}
                      </Tabs>
                    </Box> */}
                                </Stack>
                            </Container>
                        </Toolbar>
                        <Divider sx={divider} />
                    </AppBar>
                    <Box sx={{ height: 115 }}></Box>
                </>
            ) : (
                <Stack
                    sx={{ position: "fixed", width: "100%" }}
                    justifyContent="flex-end"
                    direction="row"
                >
                    {/* <MobileMenu sx={{ position: "fixed" }} /> */}
                </Stack>
            )}
        </>

    )
}




export default Navbar