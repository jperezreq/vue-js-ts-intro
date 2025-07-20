import axios from "axios";
import type { GIFResponse } from "../interfaces/gif.response";


const apiKey = 'VZspQVIfV6F2vIUkjHG1szXmU7mIThzb';

const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey,
    }
});


// export default giphyApi;


giphyApi.get<GIFResponse>('/random')
    .then( resp => console.log(resp.data.data.images.downsized_medium.url))
    .catch( err => console.log(err))