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
    static User3 = TempData.allUsers[2];

    static group1 = TempData.allGroups[0];

    static convoRazWithMoshe = [
        TempData.newBubble(TempData.User1, TempData.User2, 'שלום', moment().format("HH:mm")),
        TempData.newBubble(TempData.User2, TempData.User1, 'Hi', moment().format("HH:mm")),
        TempData.newBubble(TempData.User1, TempData.User2, 'מה נשמע?', moment().format("HH:mm")),
        TempData.newBubble(TempData.User2, TempData.User1, 'don\'t talk to me and my boi ever again', moment().format("HH:mm")),
        TempData.newBubble(TempData.User2, TempData.User1, 'google.com', moment().format("HH:mm")),
        TempData.newBubble(TempData.User2, TempData.User1, 'dubJi.jfif', moment().format("HH:mm")),
    ];

    static convoRazWithItay = [
        TempData.newBubble(TempData.User1, TempData.User3, 'שלום', moment().format("HH:mm")),
        TempData.newBubble(TempData.User3, TempData.User1, 'מה אתה רוצה?', moment().format("HH:mm")),
        TempData.newBubble(TempData.User1, TempData.User3, 'הבאת את החומר?', moment().format("HH:mm")),
        TempData.newBubble(TempData.User3, TempData.User1, 'בוודאי. 500 ש"ח ל50 גרם.', moment().format("HH:mm")),
        TempData.newBubble(TempData.User3, TempData.User1, 'crack.jpg', moment().format("HH:mm")),
        TempData.newBubble(TempData.User3, TempData.User1, 'מזומן בלבד', moment().format("HH:mm")),
    ];

    static convoRazWithFriends = [
        TempData.newBubble(TempData.User1, TempData.group1, TempData.User1.getName() + ': אהלן כולם, זה אני, עוגי!', moment().format("HH:mm")),
        TempData.newBubble(TempData.User2, TempData.group1, TempData.User2.getName() + ': עוגי זה לא בריא, זה חרטא ברטא', moment().format("HH:mm")),
        TempData.newBubble(TempData.User1, TempData.group1, TempData.User1.getName() + ': עוגי זה טעים, קח את זה בחזרה', moment().format("HH:mm")),
        TempData.newBubble(TempData.User2, TempData.group1, TempData.User2.getName() + ': לא רוצה', moment().format("HH:mm")),
        TempData.newBubble(TempData.User3, TempData.group1, TempData.User3.getName() + ': עזבו אתכם עוגי, יש לי קראק. מי רוצה?', moment().format("HH:mm")),
        TempData.newBubble(TempData.User3, TempData.group1, TempData.User3.getName() + ': מישהו?', moment().format("HH:mm")),
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

