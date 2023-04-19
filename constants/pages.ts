const pages = {
    user: [
        {
            id: 0,
            title: "ГЛАВНАЯ",
            path: "/",
            nested: [],
        },
        {
            id: 1,
            title: "ТУРНИРЫ",
            path: "/tournament",
            nested: [
                {
                    id: 0,
                    title: "ФУТБОЛ",
                    path: "/football",
                },
                {
                    id: 1,
                    title: "ВОЛЕЙБОЛ",
                    path: "/volleyball",
                },
            ],
        },
        {
            id: 2,
            title: "СЕКЦИИ",
            path: "/section",
            nested: [
                {
                    id: 0,
                    title: "РОЛИКИ",
                    path: "/skates",
                },
                {
                    id: 1,
                    title: "ШАХМАТЫ",
                    path: "/chess",
                },
                {
                    id: 2,
                    title: "ГОРОДКИ",
                    path: "/gorodki",
                },

                {
                    id: 3,
                    title: "ФРИСБИ",
                    path: "/frisbee",
                },
            ],
        },
        {
            id: 3,
            title: "ЛЕКТОРИЙ",
            path: "/lectures",
            nested: [
                {
                    id: 0,
                    title: "ЛЕКЦИИ",
                    path: "/lection",
                },
                {
                    id: 1,
                    title: "КИНОПОКАЗЫ",
                    path: "/movie",
                },
            ],
        },
        {
            id: 4,
            title: "ЛИЧНЫЙ КАБИНЕТ",
            path: "/profile",
            nested: [],
        },
    ],
    admin: [
        {
            id: 5,
            title: "ПАНЕЛЬ АДМИНА",
            path: "/admin",
            nested: [],
        },
    ],
};

export default pages;