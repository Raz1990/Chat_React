import ICanChat from "../Interfaces/ChatEntity";
import {TempData} from "../Classess/TempData";

export {db};

class db {

    //get some mock up data, as if from a real db
    static users = TempData.allUsers;
    static groups = TempData.allGroups;

    constructor(){}

    static getAllEntities() {
        let entityArray : any[] = [];

        entityArray = entityArray.concat(db.groups).concat(db.users);

        return entityArray;
    }

    static getAllUsers(){
        return db.users;
    }

    static getAllGroups(){
        return db.groups;
    }

    static getSingleUser(userName: string, password?: string) {
        let foundUser;
        if (password) {
            foundUser = db.users.find(o => o.getName() === userName && o.getPassword() === password);
        }
        else {
            foundUser = db.users.find(o => o.getName() === userName);
        }
        return foundUser;
    }

    static getSingleGroup(groupName: string) {
        return db.groups.find(o => o.getName() === groupName);
    }

    static getChatEntity(name: string) {
        let entity;
        entity = db.users.find(o => o.getName() === name);
        if (!entity){
            entity = db.groups.find(o => o.getName() === name);
        }

        return entity;
    }

    static addMessageToAConversation(sender: ICanChat, receiver: ICanChat, content: string, time: string){
        TempData.addConversation(sender, receiver, content, time,true);
    }

    static getMessageHistory(sender: ICanChat, receiver: ICanChat) {
        let convo = TempData.getConversation(sender,receiver);

        //erase the seconds from the time displayed
        // for (let message of convo) {
        //     message.timeSent = message.timeSent.substring(0,5);
        // }

        return convo;
    }
}
