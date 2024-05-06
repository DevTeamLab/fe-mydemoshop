import axios from 'axios';

const API_URL = 'http://localhost:8080/users';

class UserService {
    getUserById(userId) {
        return axios.get(`${API_URL}/${userId}`);
    }

    createUser(userData) {
        return axios.post(API_URL, userData);
    }

    deleteUser(userId) {
        return axios.delete(`${API_URL}/${userId}`);
    }
}

export default new UserService();