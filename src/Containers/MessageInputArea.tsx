import * as React from 'react';

//components imports
import MyButton from './../Components/MyButton';

class MessageInputArea extends React.Component {
    public render() {
        return (
            <div className="InputArea">
                <input type={'text'}/>
                <MyButton contentSTR={'Send'} className={''}/>
            </div>
        );
    }
}

export default MessageInputArea;
