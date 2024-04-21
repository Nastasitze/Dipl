import axios from 'axios';

export default class PostService {

    static async getIntensives(){
        try{
        const response = await axios.get('http://m.x09.ru/api/intensives/', {headers: {"Access-Control-Allow-Origin": "m.x09.ru"}})
        console.log('УСПЕХ',response)
        return response;
        }
        catch(err){
            console.log('ОШИБКА', err)
        }
    }
}