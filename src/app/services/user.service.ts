import { Subject } from "rxjs";
import { User } from "../models/User.model";

export class UserService {

    private users: User[] = [
        {
            firstName: 'James',
            lastName: 'Smith',
            email: 'James.smith@gmail.com',
            drinkPreference: 'coca',
            hobbies: [
                'coder',
                'manger',
                'boire'
            ]
        }
    ];

    userSubject = new Subject<User[]>();

    emitUsers() {
        this.userSubject.next(this.users.slice());
    }

    addUser(user: User) {
        this.users.push(user);
        this.emitUsers();
    }
}