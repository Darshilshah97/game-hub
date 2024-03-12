import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'feb3ab9d5916493bb17a1ef0a0c27b2b'
    }
})