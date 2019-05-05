import axios from 'axios';

const KEY = 'AIzaSyAEYVf9s5sX_KbvKvomRTtnv5uunTj28js';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})