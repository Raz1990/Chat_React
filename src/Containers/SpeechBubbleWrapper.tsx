//A component for wrapping a speech bubble

import * as React from 'react';
import SpeechBubble from './../Components/SpeechBubble';
import {User} from './../Classess/User';
import IChatEntity from "../Interfaces/ChatEntity";
import StateStore from "../State/StateStore";


interface ISpeechWrapperPROPS {
    content: string,
    sender: User,
    receiver: IChatEntity,
    timeSent: string,
}

class SpeechBubbleWrapper extends React.Component<ISpeechWrapperPROPS,{}> {

    currentUser : User;

    constructor(props: ISpeechWrapperPROPS) {
        super(props);

        this.currentUser = StateStore.getInstance().get('currentUser');
    }

    public determineClass() {
        let chosenClass = 'speechWrapper ';
        //if the sender of the message is the same as the user who is logged in
        if (this.currentUser.getName() != this.props.sender.getName()) {
            chosenClass += 'wrapperNotMySpeech';
        }
        return chosenClass;
    }

    public render() {
        return (
            <div className={this.determineClass()}>
            <SpeechBubble
                content={this.props.content}
                sender={this.props.sender}
                receiver={this.props.receiver}
                timeSent={this.props.timeSent}
            />
            </div>
        );
    }
}

export default SpeechBubbleWrapper;