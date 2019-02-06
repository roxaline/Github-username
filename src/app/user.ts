export class User {
    constructor(public username:string, public repo: number, public followers: string, public following: string, public created_at:Date){
        this.username=username;
    }

}
