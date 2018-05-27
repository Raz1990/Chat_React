import * as React from 'react';
//import * as moment from 'moment';
//import StateStore from './../State/StateStore'

//components imports
import MyButton from './../Components/MyButton';

interface IMessageInputAreaState {
    message: string
}

class MessageInputArea extends React.Component<{},IMessageInputAreaState> {

    constructor(props: {}){
        super(props);

        this.state = {
            message: ''
        };
    }

    updateMessage = (e: any) => {

        let message : string;
        message = e.target.value;

        this.setState((prevState: any, prop)=>{
            return {message: prevState.message = message};
        });
    };

    addMessageToBoard = () => {

        if (!this.state.message){
            return;
        }

        //let currentState = StateStore.getInstance();
        //let currentUser = currentState.get('currentUser');
        //let receiver = currentState.get('inChatWith');

        //get the bubbles from ANOTHER MODULE, NOT IN THE TREE

        /*
        let bubbles = currentState.get('speechBubbles');
        bubbles.push({content: this.state.message, sender: currentUser, receiver: receiver, timeSent: moment().format("HH:mm")});

        currentState.set('speechBubbles',bubbles);

        this.forceUpdate();
        */

    };

    public render() {

        let btnClass = 'input ';
        let clickable = true;

        if (!this.state.message) {
            btnClass += 'emptyInput ';
            clickable = false;
        }
        else {
            btnClass += 'fullInput ';
            clickable = true;
        }

        return (
            <div className="InputArea">
                <input id={'message'} type={'text'} placeholder={'הקלד הודעה כאן...'} className={'input'} onChange={this.updateMessage}/>
                <MyButton callbackFunc={this.addMessageToBoard} contentSTR={'Send'} className={btnClass} clickAble={clickable}/>
            </div>
        );
    }
}

export default MessageInputArea;
