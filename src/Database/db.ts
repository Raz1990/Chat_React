import {User} from './../Classess/User';
import {Group} from './../Classess/Group';
import * as moment from 'moment';
import ICanChat from "../Interfaces/ChatEntity";
// import ICanChat from "../Interfaces/ChatEntity";
export {db};

class db {

    constructor(){

    }

    static getAllEntities() {

        const users = db.getAllUsers();

        const groups = db.getAllGroups();

        let entityArray : any[] = [];

        //entityArray = entityArray.concat(users).concat(groups);

        entityArray = entityArray.concat(groups).concat(users);

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

        let group1 = new Group('Best Friends', [db.getAllUsers()[2]]);

        return [
            new Group('Friends', [group1, db.getAllUsers()[1]]),
        ];
    }

    static getMessageHistory(sender: ICanChat, reciever: ICanChat) {

        let User1 = db.getAllUsers()[0];
        let User2 = db.getAllUsers()[1];

        if (sender.getName() == User1.getName()){
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

        if (sender.getName() == User2.getName()) {
            return [
                {content: 'שלום', sender: User2, receiver: User1, timeSent: moment().format("HH:mm")},
                {content: 'Hi', sender: User1, receiver: User2, timeSent: moment().format("HH:mm")},
                {content: 'מה נשמע?', sender: User2, receiver: User1, timeSent: moment().format("HH:mm")},
                {
                    content: 'don\'t talk to me and my boi ever again',
                    sender: User1,
                    receiver: User2,
                    timeSent: moment().format("HH:mm")
                },
                {
                    content: 'google.com',
                    sender: User1,
                    receiver: User2,
                    timeSent: moment().format("HH:mm")
                },
                {
                    content: 'dubJi.jfif',
                    sender: User1,
                    receiver: User2,
                    timeSent: moment().format("HH:mm")
                },
            ];
        }

        return [];
    }
}
