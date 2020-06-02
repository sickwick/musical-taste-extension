import axios from 'axios';
export class http{
    public sendRequest(url: string, requestMethod: any = "GET", requestData?: string){
        let response;
        axios({method: requestMethod, url: url,data: requestData })
            .then(resp=> {response = resp;})
            .catch(error=>console.error(error));

        return response;
    }
}