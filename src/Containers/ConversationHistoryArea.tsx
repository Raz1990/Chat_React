import * as React from 'react';
import * as moment from 'moment';
import StateStore from './../State/StateStore'

//components imports
import SpeechBubbleWrapper from './SpeechBubbleWrapper';
import {User} from './../Classess/User';
import IChatEntity from "../Interfaces/ChatEntity";

interface IConvoProps {
}

interface IConvoState {
}

interface ISpeechBubble {
    content: string,
    sender: User,
    receiver: IChatEntity,
    timeSent: string,
}

class ConversationHistoryArea extends React.Component <IConvoProps,IConvoState> {

    stateStore = StateStore.getInstance();
    speechBubbles: ISpeechBubble[];
    currentUser: User;

    constructor(props: IConvoProps){
        super(props);

        this.speechBubbles = this.stateStore.get('speechBubbles');
        this.currentUser = StateStore.getInstance().get('currentUser');
    }

    public render() {

        let bubbles = this.speechBubbles.map((bubble:any, idx) =>
            (
                <SpeechBubbleWrapper
                          key={idx}
                          content={bubble.content}
                          sender={bubble.sender}
                          receiver={bubble.receiver}
                          timeSent={bubble.timeSent}
                />
            )
            );

        return (
            <div className="content">
                <h4 className={'dayHeadLine'}> {moment().format('MMMM Do YYYY')} </h4>
                {bubbles}
            </div>
        );
    }
}

export default ConversationHistoryArea;
