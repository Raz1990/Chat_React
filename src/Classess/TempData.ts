import * as moment from 'moment';
import ICanChat from "../Interfaces/ChatEntity";
import {User} from "./User";
import {Group} from "./Group";

export class TempData {

    static allUsers: ICanChat[] = [
        new User('Raz', 'rrr', 27),
        new User('Moshe', 'holy_moses', 28),
        new User('Itay', 'CrackingCracks9001', 36),
    ];

    static allGroups: ICanChat[] = [
        new Group('Friends',[
                new Group('Best Friends', [
                    TempData.allUsers[2]
                ])
            , TempData.allUsers[1]]
        ),
    ];

    static User1 = TempData.allUsers[0];
    static User2 = TempData.allUsers[1];

    static convoRazWithMoshe = [
        {content: 'שלום', sender: TempData.User1, receiver: TempData.User2, timeSent: moment().format("HH:mm")},
        {content: 'Hi', sender: TempData.User2, receiver: TempData.User1, timeSent: moment().format("HH:mm")},
        {content: 'מה נשמע?', sender: TempData.User1, receiver: TempData.User2, timeSent: moment().format("HH:mm")},
        {
            content: 'don\'t talk to me and my boi ever again',
            sender: TempData.User2,
            receiver: TempData.User1,
            timeSent: moment().format("HH:mm")
        },
        {
            content: 'google.com',
            sender: TempData.User2,
            receiver: TempData.User1,
            timeSent: moment().format("HH:mm")
        },
        {
            content: 'dubJi.jfif',
            sender: TempData.User2,
            receiver: TempData.User1,
            timeSent: moment().format("HH:mm")
        },
    ];

    static newBubble(sender: ICanChat, reciever: ICanChat, content: string, time: string){
        return {
            content: content,
            sender: sender,
            receiver: reciever,
            timeSent: time
        };
    }

}

