/*const user = {
    name: 'Emeka',
    username: 'emeka12345',
    Email: 'emeka@gmail.com',
    age: 3,
    blog: ['my first blog', 'hello guys', 'how are you doing'],
    greet(){
        console.log('hello Emeka')
    },
    logIn(){
        console.log('you are logged in')
    }
}
user.greet();*/
/*class user{
    constructor(username, age, email){
        this.username = username;
        this.age = age;
        this.email = email;

    }
}
const userOne = new user('Ejiro', 56,'flexy@gmail.com');
const userTwo = new user('Blessing', 56, 'blessing@.com');
console.log(userOne);
console.log(userTwo);

class Admin extends{
    constructor()
}
*/

/*console.log(' I');
setTimeout(()=> {
    console.log('code')
};*/

const uiii = document.getElementById("users");

fetch('https://randomuser.me/api/?results=10')
.then((resp) => resp.json())
.then(function (data) {
    let users = data.results;

    return users.map((user) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const p = document.createElement('p');

        uiii.appendChild(li);
        let paragraph = li.appendChild(p);
        let image = li.appendChild(img);
        let firstName = user.name.first;
        let lastName = user.name.last;
        paragraph.innerHTML = `${firstName} ${lastName}`;
        image.src = user.picture.large;
        
console.log(user.name.first);
console.log(paragraph);
    });
})

.catch(function (error) {
    console.log(error);
});

/*console.log(`Hello $ {this.name}`)*/