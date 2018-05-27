import * as React from 'react';

//components imports
import {User} from "../Classess/User";
import IChatEntity from './../Interfaces/ChatEntity';
import StateStore from "../State/StateStore";

interface IHeaderPROPS {
}

class Header extends React.Component<IHeaderPROPS,{}> {

    currentUser : User;
    inChatWith: IChatEntity;

    constructor(props: IHeaderPROPS){
        super(props);

        this.currentUser = StateStore.getInstance().get('currentUser');
        this.inChatWith = StateStore.getInstance().get('inChatWith');

    }
    public render() {

        let text = this.currentUser.getName();
        if (this.inChatWith) {
            if ( this.inChatWith.getType() == 'user' ) {
                text += ' chatting with ';
            }
            else {
                text += ' chatting in group ';
            }
            text += this.inChatWith.getName();
        }

        return (
            <div className="header">

                <h3> {text} </h3>

            </div>
        );
    }
}

export default Header;
