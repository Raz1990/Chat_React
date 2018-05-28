import * as React from 'react';
import * as moment from 'moment';
import StateStore from './../State/StateStore'

//components imports
import MyButton from './../Components/MyButton';
import {db} from './../Database/db';

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

        let currentState = StateStore.getInstance();
        let currentUser = currentState.get('currentUser');
        let receiver = currentState.get('inChatWith');

        db.addMessageToAConversation(currentUser,receiver,this.state.message ,moment().format("HH:mm"));

        StateStore.getInstance().onStoreChanged();

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
                <input type={'text'} placeholder={'הקלד הודעה כאן...'} className={'input'} onChange={this.updateMessage}/>
                <MyButton callbackFunc={this.addMessageToBoard} contentSTR={'Send'} className={btnClass} clickAble={clickable}/>
            </div>
        );
    }
}

export default MessageInputArea;
