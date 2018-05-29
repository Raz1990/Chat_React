//A component for a speech bubble containing a className, content

import * as React from 'react';
import {User} from './../Classess/User';
import ICanEntity from './../Interfaces/ChatEntity';
import SpeechBubbleContent from './../Components/SpeechBubbleContent';
import StateStore from "../State/StateStore";

interface ISpeechBubblePROPS {
    content: string,
    sender: User,
    receiver: ICanEntity,
    timeSent: string,
}

class SpeechBubble extends React.Component<ISpeechBubblePROPS,{}> {

    currentUser : User;

    constructor(props: ISpeechBubblePROPS) {
        super(props);

        this.currentUser = StateStore.getInstance().get('currentUser');
    }

    public determineClass() {
        let chosenClass = 'speechBubble ';

        //determine color and position (left / right)
        if (this.currentUser.getName() == this.props.sender.getName()) {
            chosenClass += 'mine ';
        }
        else{
            chosenClass += 'notMine ';
        }

        //determine language (English or not) by the first letter
        if (/^[a-zA-Z]+$/.test(this.props.content[0])) {
            chosenClass += 'English';
        } else {
            chosenClass += 'otherLanguage';
        }
        return chosenClass;
    }

    public render() {
        return (
            <div className={this.determineClass()}> <SpeechBubbleContent content={this.props.content}/> <div className={'messageTime'}>{this.props.timeSent}</div></div>
        );
    }
}

export default SpeechBubble;