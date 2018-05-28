import ICanChat from "../Interfaces/ChatEntity";
import {TempData} from "../Classess/TempData";

export {db};

class db {

    //get some mock up data, as if from a real db
    static User1 = TempData.User1;
    static User2 = TempData.User2;

    static users = TempData.allUsers;
    static groups = TempData.allGroups;

    constructor(){

    }

    static getAllEntities() {

        let entityArray : any[] = [];

        //entityArray = entityArray.concat(users).concat(groups);

        entityArray = entityArray.concat(db.groups).concat(db.users);

        return entityArray;

    }

    static getAllUsers(){
        return db.users;
    }

    static getAllGroups(){
        return db.groups;
    }

    static getSingleUser(userName: string) {
        return db.users.find(o => o.getName() === userName);
    }

    static getChatEntity(name: string) {
        let entity;
        entity = db.users.find(o => o.getName() === name);
        if (!entity){
            entity = db.users.find(o => o.getName() === name);
        }

        return entity;
    }

    static convoRazWithMoshe = TempData.convoRazWithMoshe;

    //static convoMosheWithRaz = TempData.convoMosheWithRaz;

    static addMessageToAConversation(sender: ICanChat, reciever: ICanChat, content: string, time: string){

        if (sender.getName() == TempData.User1.getName() && reciever.getName() == TempData.User2.getName()){
            db.convoRazWithMoshe.push(
                TempData.newBubble(sender, reciever, content, time),
                TempData.newBubble(reciever, sender, 'פולו!', time)
            );
        }

        if (sender.getName() == TempData.User2.getName() && reciever.getName() == TempData.User1.getName()) {
            db.convoRazWithMoshe.push(
                TempData.newBubble(reciever, sender, content, time),
                TempData.newBubble(sender, reciever, 'מרקו!', time)
            );
        }
    }

    static getMessageHistory(sender: ICanChat, reciever: ICanChat) {

        if (!sender || !reciever) {
            return [];
        }

        if (sender.getName() == db.User1.getName() && reciever.getName() == db.User2.getName()
            ||
            sender.getName() == db.User2.getName() && reciever.getName() == db.User1.getName()){
            return db.convoRazWithMoshe;
        }

        if (sender.getName() == db.User2.getName() && reciever.getName() == db.User1.getName()) {
            //return db.convoMosheWithRaz;
        }

        return [];
    }
}
