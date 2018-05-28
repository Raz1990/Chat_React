import ICanChat from "../Interfaces/ChatEntity";
import {TempData} from "../Classess/TempData";

export {db};

class db {

    //get some mock up data, as if from a real db
    static User1 = TempData.User1;
    static User2 = TempData.User2;
    static User3 = TempData.User3;

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

    static convoRazWithMoshe = TempData.convoRazWithMoshe;

    static convoRazWithItay = TempData.convoRazWithItay;

    static convoRazWithFriends = TempData.convoRazWithFriends;

    static addMessageToAConversation(sender: ICanChat, receiver: ICanChat, content: string, time: string){

        switch (sender.getName()) {
            //raz is the sender
            case db.User1.getName():

                switch (receiver.getName()) {

                    //moshe is receiver
                    case db.User2.getName():
                        db.convoRazWithMoshe.push(
                            TempData.newBubble(sender, receiver, content, time),
                            TempData.newBubble(receiver, sender, 'פולו!', time)
                        );
                    break;

                    //itay is receiver
                    case db.User3.getName():
                        db.convoRazWithItay.push(
                            TempData.newBubble(sender, receiver, content, time),
                            TempData.newBubble(receiver, sender, 'עכשיו תוסיף עוד 100 ש"ח', time)
                        );
                    break;

                    //friends is receiver
                    case db.groups[0].getName():
                        content = sender.getName() + ': ' + content;
                        db.convoRazWithFriends.push(
                            TempData.newBubble(sender, receiver, content, time)
                        );
                    break;
                }
                break;

            //moshe is the sender
            case TempData.User2.getName():

                switch (receiver.getName()) {

                    //raz is receiver
                    case TempData.User1.getName():
                        db.convoRazWithMoshe.push(
                            TempData.newBubble(receiver, sender, content, time),
                            TempData.newBubble(sender, receiver, 'מרקו!', time)
                        );
                        break;

                    //itay is receiver
                    case TempData.User3.getName():
                        break;
                }
                break;

            //itay is the sender
            case TempData.User3.getName():

                switch (receiver.getName()) {

                    //raz is receiver
                    case TempData.User1.getName():
                        db.convoRazWithItay.push(
                            TempData.newBubble(receiver, sender, content, time),
                            TempData.newBubble(sender, receiver, 'יקר מדי', time)
                        );
                        break;

                    //moshe is receiver
                    case TempData.User2.getName():
                        break;
                }
                break;
        }
    }

    static getMessageHistory(sender: ICanChat, receiver: ICanChat) {

        if (!sender || !receiver) {
            return [];
        }

        if (sender.getName() == db.User1.getName() && receiver.getName() == db.User2.getName()
            ||
            sender.getName() == db.User2.getName() && receiver.getName() == db.User1.getName()){
            return db.convoRazWithMoshe;
        }

        if (sender.getName() == db.User1.getName() && receiver.getName() == db.User3.getName()
            ||
            sender.getName() == db.User3.getName() && receiver.getName() == db.User1.getName()){
            return db.convoRazWithItay;
        }

        if (sender.getName() == db.User1.getName() && receiver.getName() == db.groups[0].getName()
            ||
            sender.getName() == db.User2.getName() && receiver.getName() == db.groups[0].getName()
            ||
            sender.getName() == db.User3.getName() && receiver.getName() == db.groups[0].getName()){
            return db.convoRazWithFriends;
        }

        return [];
    }
}
