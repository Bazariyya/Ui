

export class User {
    allProperties(firstName,lastName,email,password){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    twoParameter(email,password) {
        this.email = email;
        this.password = password;
    }

}