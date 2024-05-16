
import axios from 'axios';

export default class PostService {

    static async getIntensives(){
        const response = await axios.get('https://m.x09.ru/api/intensives/')
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