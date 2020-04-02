import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 4RSuescfUAY-vIvjLZqizHGBKhcfbsrj8v9aN_Qy1gs' 
    }
});
