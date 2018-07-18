import axios from 'axios';
import { router } from '@app/router/index';
import { Config } from '@app/core/constants';
import { store } from '@app/store/index';

const Authorization = {
 
        // this.setHeader()
  

     async login(payload) {
        try {
            const res = await axios.post(Config.authenticate, payload);
            this.setToken(res.data.token);
            this.setHeader();
            await this.getUser();
            router.push('/');
        }
        catch (e) {
        }
    },

     logout() {
        this.removeUser();
        this.removeToken();
        this.removeHeader();
        router.push('/login');
    },

    //Tokens
     getToken(){
        return localStorage.getItem('token');
    },

     setToken(token) {
        localStorage.setItem('token', token);
    },

     removeToken() {
        localStorage.removeItem('token');
    },

    //Axios headers
     setHeader() {
        axios.defaults.headers.common['Authorization'] = `Bearer ${this.getToken()}`;
    },

     removeHeader() {
        delete axios.defaults.headers.common['Authorization']
    },

    //Users
     async getUser() {

        const res = await axios.get(Config.user);
        this.setUser(res.data.data.attributes)

    },

     setUser(user) {
        localStorage.setItem('user', JSON.stringify(user));
        store.commit('SET_USER')
    },

     removeUser() {
        localStorage.removeItem('user');
    },
}


export default Authorization;