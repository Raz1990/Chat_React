import ICanChat from "../Interfaces/ChatEntity";
import {TempData} from "../Classess/TempData";
//import StateStore from "../State/StateStore";

export {db};

class db {

    //get some mock up data, as if from a real db
    static raz = TempData.User1;
    static moshe = TempData.User2;
    static itay = TempData.User3;
    static evgeni = TempData.User4;
    static ori = TempData.User5;
    static yuval = TempData.User6;

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

    // static convoRazWithMoshe = TempData.convoRazWithMoshe;
    // static convoRazWithItay = TempData.convoRazWithItay;
    // static convoRazWithFriends = TempData.convoRazWithFriends;
    // static convoRazWithRaz = TempData.convoRazWithRaz;
    // static convoRazWithYuval = TempData.convoRazWithYuval;
    // static convoRazWithOri = TempData.convoRazWithOri;
    // static convoRazWithEvgeni = TempData.convoRazWithEvgeni;

    static addMessageToAConversation(sender: ICanChat, receiver: ICanChat, content: string, time: string){
        /*switch (sender.getName()) {
            //raz is the sender
            case db.raz.getName():
                switch (receiver.getName()) {
                    //raz is the receiver
                    case db.raz.getName():
                        db.convoRazWithRaz.push(
                            TempData.newBubble(sender, receiver, content, time),
                            TempData.newBubble(receiver, sender, 'מה הקטע לדבר עם עצמך?', time)
                        );
                        break;

                    //moshe is receiver
                    case db.moshe.getName():
                        db.convoRazWithMoshe.push(
                            TempData.newBubble(sender, receiver, content, time),
                            TempData.newBubble(receiver, sender, 'פולו!', time)
                        );
                    break;

                    //itay is receiver
                    case db.itay.getName():
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

                        setTimeout(()=>{
                            db.convoRazWithFriends.push(
                                TempData.newBubble(db.itay, receiver, db.itay.getName() + ': עזבו, יותר קראק בשבילי', time)
                            );
                            StateStore.getInstance().onStoreChanged();
                        },1500);
                    break;

                    //Ori is receiver
                    case db.ori.getName():
                        db.convoRazWithOri.push(
                            TempData.newBubble(sender, receiver, content, time),
                            TempData.newBubble(receiver, sender, 'מגניב!', time)
                        );
                        break;
                }
                break;

            //moshe is the sender
            case db.moshe.getName():
                switch (receiver.getName()) {
                    //raz is receiver
                    case db.raz.getName():
                        db.convoRazWithMoshe.push(
                            TempData.newBubble(receiver, sender, content, time),
                            TempData.newBubble(sender, receiver, 'מרקו!', time)
                        );
                        break;

                    //itay is receiver
                    case db.itay.getName():
                        break;
                }
                break;

            //itay is the sender
            case db.itay.getName():
                switch (receiver.getName()) {
                    //raz is receiver
                    case db.raz.getName():
                        db.convoRazWithItay.push(
                            TempData.newBubble(receiver, sender, content, time),
                            TempData.newBubble(sender, receiver, 'יקר מדי', time)
                        );
                        break;

                    //moshe is receiver
                    case db.moshe.getName():
                        break;
                }
                break;
        }
        */
        TempData.addConversation(sender, receiver, content, time,true);
    }

    static getMessageHistory(sender: ICanChat, receiver: ICanChat) {
        /*
        if (!sender || !receiver) {
            return [];
        }

        if (sender.getName() == db.raz.getName() && receiver.getName() == db.raz.getName()){
            return db.convoRazWithRaz;
        }

        if (sender.getName() == db.raz.getName() && receiver.getName() == db.moshe.getName()
            ||
            sender.getName() == db.moshe.getName() && receiver.getName() == db.raz.getName()){
            return db.convoRazWithMoshe;
        }

        if (sender.getName() == db.raz.getName() && receiver.getName() == db.itay.getName()
            ||
            sender.getName() == db.itay.getName() && receiver.getName() == db.raz.getName()){
            return db.convoRazWithItay;
        }

        if (sender.getName() == db.raz.getName() && receiver.getName() == db.groups[0].getName()
            ||
            sender.getName() == db.moshe.getName() && receiver.getName() == db.groups[0].getName()
            ||
            sender.getName() == db.itay.getName() && receiver.getName() == db.groups[0].getName()){
            return db.convoRazWithFriends;
        }
    */
        return TempData.getConversation(sender,receiver);
    }
}
