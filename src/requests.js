export class Requests{
    constructor(url){
        this.url = url
    }
    async get(){
        const response = await fetch(this.url);
        const data = await response.json();

        return data;
    }
    async post(postData){
        const response = await fetch(this.url,{
            method : "POST",
            body: JSON.stringify(postData),
            headers : {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const data = await response.json();

        return data;
    }
    async put(id, putData){
        const response = await fetch(this.url + "/" + id,{
            method : "PUT",
            body: JSON.stringify(putData),
            headers : {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const data = await response.json();

        return data;
    }

    async delete(id){
        const response = await fetch(this.url + "/" + id,{
            method : "DELETE"
        });
        return "Veri silindi";
    }
}