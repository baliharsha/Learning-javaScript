function User(email, password){
    this._ = email;
    this._password = password

    Object.defineProperty(this, 'email', {get: function(){
        return this._email.toUpperCase()
    },
    set: function(value){
    this._email  = value
}
})
}

const chai = new User("chai@agmail.com", "chai")
console.log(email);
