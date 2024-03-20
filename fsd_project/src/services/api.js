import axios from 'axios';

const API_URL='http://localhost:9090';

export const saveInvoice = async (payload) => {
    try {
        return await axios.post(`${API_URL}/invoice`, payload);
    } catch (error) {
        console.log('Error: ', error.message);
        return error.response.data;
    }
}

