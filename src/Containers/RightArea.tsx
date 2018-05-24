//holds both the ConversationHistoryArea on the top and big part and MessageInputArea on the bottom and small part
//also has a toolbar, for maybe future use

import * as React from 'react';

//components imports
import ConversationHistoryArea from './ConversationHistoryArea';
import MessageInputArea from './MessageInputArea';
import {User} from './../Classess/User';
import StateStore from "../State/StateStore";

interface IRightProps {
}

class RightArea extends React.Component<IRightProps,{}> {

    currentUser : User;

    constructor(props: IRightProps){
        super(props);

        this.currentUser = StateStore.getInstance().get('currentUser');
    }

    public render() {
        return (
            <div className="right">
                <ConversationHistoryArea/>

                <MessageInputArea/>
            </div>
        );
    }
}

export default RightArea;
