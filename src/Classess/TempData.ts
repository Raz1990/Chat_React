import * as moment from 'moment';
import ICanChat from "../Interfaces/ChatEntity";
import {User} from "./User";
import {Group} from "./Group";

export class TempData {

    static allUsers: User[] = [
        new User('Raz', 'rrr', 27),
        new User('Moshe', 'holy_moses', 28),
        new User('Itay', 'CrackingCracks9001', 36),
        new User('Evgeni', 'var', 31),
        new User('Ori', 'magniv', 40),
        new User('Yuval', 'hamebulbal', 31),
    ];

    static Raz = TempData.allUsers[0];
    static Moshe = TempData.allUsers[1];
    static Itay = TempData.allUsers[2];
    static Evgeni = TempData.allUsers[3];
    static Ori = TempData.allUsers[4];
    static Yuval = TempData.allUsers[5];

    static allGroups: Group[] = TempData.generateGroups();
    static group1 = TempData.allGroups[0];

    static generateGroups(){
        let friends, best_friends;

        friends = new Group('Friends',[]);

        best_friends = new Group('Best Friends',[]);

        friends.addNewMember(best_friends);
        friends.addNewMember(TempData.Raz);
        friends.addNewMember(TempData.Moshe);
        friends.addNewMember(TempData.Itay);

        best_friends.addNewMember(TempData.Raz);
        best_friends.addNewMember(TempData.Itay);
        best_friends.setParentGroup(friends);

        return [friends,best_friends];
    }

    static conversations = {};

    static generateMockUpConversations(){

        let time = 0;

        //raz with moshe
        TempData.addConversation(TempData.Raz, TempData.Moshe, 'שלום', moment().add(time++, 's').format("HH:mm:ss"));
        TempData.addConversation(TempData.Moshe, TempData.Raz, 'מה נשמע צדיק?', moment().add(time++, 's').format("HH:mm:ss"));
        TempData.addConversation(TempData.Raz, TempData.Moshe, 'הכל אחלה ומגניב', moment().add(time++, 's').format("HH:mm:ss"));
        TempData.addConversation(TempData.Moshe, TempData.Raz, 'יופי, הכי טוב. קלוט את הלינק לאתר הבא:', moment().add(time++, 's').format("HH:mm:ss"));
        TempData.addConversation(TempData.Moshe, TempData.Raz, 'google.com', moment().add(time++, 's').format("HH:mm:ss"));
        TempData.addConversation(TempData.Moshe, TempData.Raz, 'dubJi.jfif', moment().add(time++, 's').format("HH:mm:ss"));

        time = 0;

        //raz with itay
        TempData.addConversation(TempData.Raz, TempData.Itay, 'שלום', moment().add(time++, 's').format("HH:mm:ss"));
        TempData.addConversation(TempData.Itay, TempData.Raz, 'מה אתה רוצה?', moment().add(time++, 's').format("HH:mm:ss"));
        TempData.addConversation(TempData.Raz, TempData.Itay, 'יש לך חומר?', moment().add(time++, 's').format("HH:mm:ss"));
        TempData.addConversation(TempData.Itay, TempData.Raz, 'בוודאי. 500 ש"ח ל50 גרם.', moment().add(time++, 's').format("HH:mm:ss"));
        TempData.addConversation(TempData.Itay, TempData.Raz, 'crack.jpg', moment().add(time++, 's').format("HH:mm:ss"));
        TempData.addConversation(TempData.Itay, TempData.Raz, 'מזומן בלבד', moment().add(time++, 's').format("HH:mm:ss"));

        time = 0;

        //raz with Yuval
        TempData.addConversation(TempData.Yuval, TempData.Raz, 'עוגי', moment().add(time++, 's').format("HH:mm:ss"));
        TempData.addConversation(TempData.Yuval, TempData.Raz, 'בוא להאפי האוור', moment().add(time++, 's').format("HH:mm:ss"));
        TempData.addConversation(TempData.Raz, TempData.Yuval, 'אם יש פיצות, אני שם', moment().add(time++, 's').format("HH:mm:ss"));
        TempData.addConversation(TempData.Yuval, TempData.Raz, 'יש פיצות ובחורות ובירות', moment().add(time++, 's').format("HH:mm:ss"));
        TempData.addConversation(TempData.Raz, TempData.Yuval, 'איכסה בירות, רק פיצות ובחורות', moment().add(time++, 's').format("HH:mm:ss"));
        TempData.addConversation(TempData.Yuval, TempData.Raz, 'סבבה אחי אני אשתה את כל הבירה בשבילך', moment().add(time++, 's').format("HH:mm:ss"));

        time = 0;

        //raz with group friends
        TempData.addConversation(TempData.Raz, TempData.group1, TempData.Raz.getName() + ': אהלן כולם, זה אני, עוגי!', moment().add(time++, 's').format("HH:mm:ss"));
        TempData.addConversation(TempData.Moshe, TempData.group1, TempData.Moshe.getName() + ': עוגי זה לא בריא, זה חרטא ברטא', moment().add(time++, 's').format("HH:mm:ss"));
        TempData.addConversation(TempData.Raz, TempData.group1, TempData.Raz.getName() + ': עוגי זה טעים, קח את זה בחזרה', moment().add(time++, 's').format("HH:mm:ss"));
        TempData.addConversation(TempData.Moshe, TempData.group1, TempData.Moshe.getName() + ': לא רוצה', moment().add(time++, 's').format("HH:mm:ss"));
        TempData.addConversation(TempData.Itay, TempData.group1, TempData.Itay.getName() + ': עזבו אתכם עוגי, יש לי קראק. מי רוצה?', moment().add(time++, 's').format("HH:mm:ss"));
        TempData.addConversation(TempData.Itay, TempData.group1, TempData.Itay.getName() + ': מישהו?', moment().add(time++, 's').format("HH:mm:ss"));

    }

    static _t = TempData.generateMockUpConversations();

    static addConversation(sender: ICanChat, receiver: ICanChat, content: string, time: string, real?: boolean){

        //if its the first time the sender ever sent a message
        if (!TempData.conversations[sender.getName()]) {
            TempData.conversations[sender.getName()] = {};
        }

        //if its the first time the sender sent a message to a specific entity
        if (!TempData.conversations[sender.getName()][receiver.getName()]) {
            TempData.conversations[sender.getName()][receiver.getName()] = {val:[]};
        }

        //add the "bubble" to the correct conversation
        TempData.conversations[sender.getName()][receiver.getName()].val.push(TempData.newBubble(sender, receiver, content, time));

        //an echo back when talking "live"
        if (real) {
            if (receiver.getType() === 'user') {
                //temporary check if its the same fag talking to himself
                if (sender === receiver) {
                    TempData.conversations[sender.getName()][receiver.getName()].val.push(TempData.newBubble(sender, receiver, TempData.AIReply(receiver.getName()), time));
                }
                else {
                    TempData.addConversation(receiver, sender, TempData.AIReply(receiver.getName()), time);
                }
            }
            else {
                TempData.addConversation(TempData.Itay, receiver, TempData.AIReply(receiver.getName()), time);
            }
        }
    }

    static AIReply(receiver:string){
        switch (receiver) {
            case 'Raz':
                return 'מה הקטע לדבר עם עצמך?';
            case 'Moshe':
                return 'הכל חרטא ברטא תאמין לי';
            case 'Itay':
                return 'עכשיו תוסיף עוד 100 ש"ח';
            case 'Evgeni':
                return 'יאללה, לאכול';
            case 'Ori':
                return 'מגניב!';
            case 'Yuval':
                return 'עוגי שיגעוגי משגע ת\'עולם';
            case 'Friends':
                return TempData.Itay.getName() + ': עזבו, יותר קראק בשבילי';
        }

        return '';
    }

    static getConversation(sender: ICanChat, receiver: ICanChat){
        if (TempData.conversations[sender.getName()][receiver.getName()]){

            let convo: any[] = [];

            //the entity is a group and has many senders
            if (receiver.getType() === 'group') {
                let group = receiver as Group;
                for (let groupMember of group.getGroupMembers()){
                    if (groupMember.getType() != 'group' && TempData.conversations[groupMember.getName()][receiver.getName()]) {
                        convo = convo.concat(TempData.conversations[groupMember.getName()][receiver.getName()].val);
                    }
                }
            }
            //the entity is a single user and has only one sender and receiver
            else {
                convo = convo.concat(TempData.conversations[sender.getName()][receiver.getName()].val);
                //temporary check if its the same fag talking to himself
                if (sender === receiver) {}
                else {
                    //if the receiver has a conversation of any sort
                    if (TempData.conversations[receiver.getName()]) {
                        convo = convo.concat(TempData.conversations[receiver.getName()][sender.getName()].val);
                    }
                }
            }

            convo.sort(TempData.compare);

            return convo;
        }
        return [];
    }

    static compare(a: any, b: any) {
        if (a.timeSent < b.timeSent) {
            return -1;
        }
        if (a.timeSent > b.timeSent) {
            return 1;
        }
        // a must be equal to b
        return 0;
    }

    static newBubble(sender: ICanChat, reciever: ICanChat, content: string, time: string){
        return {
            content: content,
            sender: sender,
            receiver: reciever,
            timeSent: time
        };
    }

}