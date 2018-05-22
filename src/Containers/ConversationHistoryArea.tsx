import * as React from 'react';

//components imports
import SpeechBubble from './../Components/SpeechBubble';


interface IConvoProps {

}

interface ISpeechBubble {
    content: string,
    className?: string
}

interface IConvoState {
    speechBubbles: ISpeechBubble[];
}

class ConversationHistoryArea extends React.Component <IConvoProps,IConvoState> {
    constructor(props: IConvoProps){
        super(props);

        this.state = {
            speechBubbles: [],
        };
    }

    public render() {
        return (
            <div className="content">
                {this.state.speechBubbles.map(bubble => {<SpeechBubble contentSTR={bubble.content}/>})}
            </div>
        );
    }
}

export default ConversationHistoryArea;
