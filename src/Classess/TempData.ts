import * as moment from 'moment';
import ICanChat from "../Interfaces/ChatEntity";
import {User} from "./User";
import {Group} from "./Group";

export class TempData {

    static allUsers: ICanChat[] = [
        new User('Raz', 'rrr', 27),
        new User('Moshe', 'holy_moses', 28),
        new User('Itay', 'CrackingCracks9001', 36),
        new User('Evgeni', 'var', 31),
        new User('Ori', 'magniv', 40),
        new User('Yuval', 'hamebulbal', 31),
    ];

    static generateGroups(){
        let friends, best_friends;

        friends = new Group('Friends',[]);

        best_friends = new Group('Best Friends',[]);

        friends.addNewMember(best_friends);
        friends.addNewMember(TempData.allUsers[0]);
        friends.addNewMember(TempData.allUsers[1]);
        friends.addNewMember(TempData.allUsers[2]);

        best_friends.addNewMember(TempData.allUsers[2]);
        best_friends.setParentGroup(friends);

        return [friends,best_friends];
    }

    static allGroups: ICanChat[] = TempData.generateGroups();

    static User1 = TempData.allUsers[0];
    static User2 = TempData.allUsers[1];
    static User3 = TempData.allUsers[2];
    static User4 = TempData.allUsers[3];
    static User5 = TempData.allUsers[4];
    static User6 = TempData.allUsers[5];

    static group1 = TempData.allGroups[0];

    static conversations = {};

    static generateMockUpConversations(){

        let time = 0;

        //raz with moshe
        TempData.addConversation(TempData.User1, TempData.User2, 'שלום', moment().add(time++, 's').format("HH:mm:ss"));
        TempData.addConversation(TempData.User2, TempData.User1, 'Hi', moment().add(time++, 's').format("HH:mm:ss"));
        TempData.addConversation(TempData.User1, TempData.User2, 'מה נשמע?', moment().add(time++, 's').format("HH:mm:ss"));
        TempData.addConversation(TempData.User2, TempData.User1, 'don\'t talk to me and my boi ever again', moment().add(time++, 's').format("HH:mm:ss"));
        TempData.addConversation(TempData.User2, TempData.User1, 'google.com', moment().add(time++, 's').format("HH:mm:ss"));
        TempData.addConversation(TempData.User2, TempData.User1, 'dubJi.jfif', moment().add(time++, 's').format("HH:mm:ss"));

        time = 0;

        //raz with itay
        TempData.addConversation(TempData.User1, TempData.User3, 'שלום', moment().add(time++, 's').format("HH:mm:ss"));
        TempData.addConversation(TempData.User3, TempData.User1, 'מה אתה רוצה?', moment().add(time++, 's').format("HH:mm:ss"));
        TempData.addConversation(TempData.User1, TempData.User3, 'הבאת את החומר?', moment().add(time++, 's').format("HH:mm:ss"));
        TempData.addConversation(TempData.User3, TempData.User1, 'בוודאי. 500 ש"ח ל50 גרם.', moment().add(time++, 's').format("HH:mm:ss"));
        TempData.addConversation(TempData.User3, TempData.User1, 'crack.jpg', moment().add(time++, 's').format("HH:mm:ss"));
        TempData.addConversation(TempData.User3, TempData.User1, 'מזומן בלבד', moment().add(time++, 's').format("HH:mm:ss"));

        time = 0;

        //raz with group friends
        TempData.addConversation(TempData.User1, TempData.group1, TempData.User1.getName() + ': אהלן כולם, זה אני, עוגי!', moment().add(time++, 's').format("HH:mm:ss"));
        TempData.addConversation(TempData.User2, TempData.group1, TempData.User2.getName() + ': עוגי זה לא בריא, זה חרטא ברטא', moment().add(time++, 's').format("HH:mm:ss"));
        TempData.addConversation(TempData.User1, TempData.group1, TempData.User1.getName() + ': עוגי זה טעים, קח את זה בחזרה', moment().add(time++, 's').format("HH:mm:ss"));
        TempData.addConversation(TempData.User2, TempData.group1, TempData.User2.getName() + ': לא רוצה', moment().add(time++, 's').format("HH:mm:ss"));
        TempData.addConversation(TempData.User3, TempData.group1, TempData.User3.getName() + ': עזבו אתכם עוגי, יש לי קראק. מי רוצה?', moment().add(time++, 's').format("HH:mm:ss"));
        TempData.addConversation(TempData.User3, TempData.group1, TempData.User3.getName() + ': מישהו?', moment().add(time++, 's').format("HH:mm:ss"));

    }

    static _t = TempData.generateMockUpConversations();

    static addConversation(sender: ICanChat, receiver: ICanChat, content: string, time: string, real?: boolean){

        if (!TempData.conversations[sender.getName()]) {
            TempData.conversations[sender.getName()] = {};
        }

        if (!TempData.conversations[sender.getName()][receiver.getName()]) {
            TempData.conversations[sender.getName()][receiver.getName()] = {val:[]};
        }

        TempData.conversations[sender.getName()][receiver.getName()].val.push(TempData.newBubble(sender, receiver, content, time));

        if (real) {
            TempData.addConversation(receiver, sender, TempData.AIReply(receiver.getName()), time);
        }
    }

    static AIReply(receiver:string){
        switch (receiver) {
            case 'Ori':
                return 'מגניב!';
            case 'Moshe':
                return 'הכל חרטא ברטא תאמין לי';
            case 'Itay':
                return 'קראק ואני זה סיפור אהבה';
        }

        return '';
    }

    static getConversation(sender: ICanChat, receiver: ICanChat){
        if (TempData.conversations[sender.getName()][receiver.getName()]){

            let convo: any[] = [];
            convo = convo.concat(TempData.conversations[sender.getName()][receiver.getName()].val);

            // if (receiver.getType() === 'group') {
            //     for (let user of TempData.conversations[sender.getName()]){
            //         console.log(user);
            //     }
            // }

            if (TempData.conversations[receiver.getName()]) {
                convo = convo.concat(TempData.conversations[receiver.getName()][sender.getName()].val);
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

    static convoRazWithRaz: any[] = [] = TempData.getConversation(TempData.User1,TempData.User1);
    static convoRazWithMoshe: any[] = TempData.getConversation(TempData.User1,TempData.User2);
    static convoRazWithItay: any[] = TempData.getConversation(TempData.User1,TempData.User3);
    static convoRazWithEvgeni: any[] = [] = TempData.getConversation(TempData.User1,TempData.User4);
    static convoRazWithOri: any[] = [] = TempData.getConversation(TempData.User1,TempData.User5);
    static convoRazWithYuval: any[] = [] = TempData.getConversation(TempData.User1,TempData.User6);
    static convoRazWithFriends: any[] = TempData.getConversation(TempData.User1,TempData.group1);

    static newBubble(sender: ICanChat, reciever: ICanChat, content: string, time: string){
        return {
            content: content,
            sender: sender,
            receiver: reciever,
            timeSent: time
        };
    }

}