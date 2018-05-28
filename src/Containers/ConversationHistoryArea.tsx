import * as React from 'react';
import * as moment from 'moment';
import StateStore from './../State/StateStore'

//components imports
import SpeechBubbleWrapper from './SpeechBubbleWrapper';
import {User} from './../Classess/User';
import IChatEntity from "../Interfaces/ChatEntity";
import {db} from './../Database/db';

interface IConvoProps {
}

interface IConvoState {
    speechBubbles : ISpeechBubble[]
}

interface ISpeechBubble {
    content: string,
    sender: IChatEntity,
    receiver: IChatEntity,
    timeSent: string,
}

class ConversationHistoryArea extends React.Component <IConvoProps,IConvoState> {

    stateStore = StateStore.getInstance();
    currentUser: User;

    constructor(props: IConvoProps){
        super(props);

        this.currentUser = this.stateStore.get('currentUser');

        this.state = {
            speechBubbles : db.getMessageHistory(this.currentUser,this.stateStore.get('inChatWith')),
        };

        StateStore.getInstance().subscribe(()=>{
            this.setState({
                speechBubbles : db.getMessageHistory(this.currentUser,this.stateStore.get('inChatWith')),
            });
        });
    }

    public render() {

        let bubbles = this.state.speechBubbles.map((bubble:any, idx) =>
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
