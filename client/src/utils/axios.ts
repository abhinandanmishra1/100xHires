import defaultAxios from "axios";

export const axios = defaultAxios.create({
    baseURL: `${import.meta.env.VITE_SERVER_URL}/leetcode`,
    headers: {
        "Content-Type": "application/json",
    },
});
