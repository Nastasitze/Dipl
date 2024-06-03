
import axios from 'axios';

export default class PostService {

    static async postAuthorization(login,pass){
        // console.log(JSON.stringify({email: login, password: pass}));
        const response = await axios.post('https://m.x09.ru/api/token/',{
            email: login,
            password: pass
        })
        console.log(response);
        localStorage.authorization=response.data.access;
    }
    static async getIntensives(){
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE3MzM3NTgyLCJpYXQiOjE3MTczMzcyODIsImp0aSI6ImIyMDM4OTllZDhkMTQ1MWZhYzQwMDg3MTI1YzMwZDM1IiwidXNlcl9pZCI6MX0.fFf2py33ECUrFGpFvTByvofaxB5Q52D5Hy9NnMFrpSk';
        const response = await axios.get('https://m.x09.ru/api/intensives/',{
            headers:`Authorization : ${token}`,
        })
        return response;
    }
    static async getCriteris(){
        const response = await axios.get('https://m.x09.ru/api/criteria/')
    }
    static async getEvents(){
        const response = await axios.get('https://m.x09.ru/api/events/')
    }
    static async getGroups(){
        const response = await axios.get('https://m.x09.ru/api/groups/')
    }
}