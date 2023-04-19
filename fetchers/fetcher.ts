import axios from "axios";

//@ts-ignore
const fetcher = async (...args) => {
    //@ts-ignore
    const res = await axios.get(...args);

    return res.data;
};

export { fetcher };