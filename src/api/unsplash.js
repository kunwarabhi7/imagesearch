import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID rS4cX93FdSI7dIyH0zyUk34Ee1tmMYJnVy06Uruzv4E'
    }
})