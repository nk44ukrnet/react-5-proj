import axios from "axios";


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID C39ztgnmz1Tda5VVHYdLnPqziNKD0eplDa18YgwS04Y'
    }
});