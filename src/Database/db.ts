import {User} from './../Classess/User';
import {Group} from './../Classess/Group';
import * as moment from 'moment';
// import ICanChat from "../Interfaces/ChatEntity";
export {db};

class db {

    constructor(){

    }

    static getAllEntities() {

        const users = db.getAllUsers();

        const groups = db.getAllGroups();

        let entityArray : any[] = [];

        entityArray = entityArray.concat(users).concat(groups);

        return entityArray;

    }

    static getAllUsers(){
        return [
            new User('Raz', 'rrr', 27),
            new User('Moshe', 'holy_moses', 28),
            new User('Itay', 'CrackingCracks9001', 36),
        ];
    }

    static getAllGroups(){

        let User1 = new User('Raz', 'rrr', 27);
        let User2 = new User('Moshe', 'holy_moses', 28);

        let group1 = new Group('Friends', [User1], []);

        return [
            group1,
            new Group('Best Friends', [User1, User2], [group1]),
        ];
    }

    static createMockUpBubbles() {

        let User1 = new User('Raz', 'rrr', 27);
        let User2 = new User('Moshe', 'holy_moses', 28);

        return [
            {content: 'שלום', sender: User1, receiver: User2, timeSent: moment().format("HH:mm")},
            {content: 'Hi', sender: User2, receiver: User1, timeSent: moment().format("HH:mm")},
            {content: 'מה נשמע?', sender: User1, receiver: User2, timeSent: moment().format("HH:mm")},
            {
                content: 'don\'t talk to me and my boi ever again',
                sender: User2,
                receiver: User1,
                timeSent: moment().format("HH:mm")
            },
            {
                content: 'google.com',
                sender: User2,
                receiver: User1,
                timeSent: moment().format("HH:mm")
            },
            {
                content: 'dubJi.jfif',
                sender: User2,
                receiver: User1,
                timeSent: moment().format("HH:mm")
            },
        ];
    }
}
