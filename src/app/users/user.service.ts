import { User } from "src/app/users/user";
import { Address } from "./address";


export class userService {
  

  // users: Array<User> = [
    // new User(1,"pranav1","raya1","pass123"),
  // new User(2, "pranav2","raya2","pass123"),
  // new User(3, "pranav3","raya3","pass123")
  // ];
  // [
  //   {street: '123 Main',  city: 'Anywhere', state: 'CA',  zip: '94801'},
  //   {street: '456 Maple', city: 'Somewhere', state: 'VA', zip: '23226'},
  // ]
  users:Array<User>=[

    new User('pranav','raya','pass123',23,'M',new Address ('ct','tx',1234))

    ]

  
  getUsers(){

    return this.users;
  }





  




 save(user){
this.users.push(user);
console.log(this.users);

}
// getid(){

//   let maxid = 0;
//   for (let user of this.users) {

//     if (maxid < user.uid) {

//       maxid = user.uid;
//     }


// }



// }
}
