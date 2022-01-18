

export class User {
    constructor(...args){
        this.companyId=args[0].companyId;
        this.countryCode = args[0].countryCode;
        this.culture=args[0].culture;
        this.email = args[0].email;
        this.id = args[0].id;
        this.isActive = args[0].isActive;
        this.name = args[0].name;
        this.password = args[0].password;
        this.surname = args[0].surname;
        this.timeZone = args[0].timeZone;
    }
}