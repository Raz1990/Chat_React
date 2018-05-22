//holds both the ConversationHistoryArea on the top and big part and MessageInputArea on the bottom and small part
//also has a toolbar, for maybe future use

import * as React from 'react';

//components imports
import Toolbar from './Toolbar';
import ConversationHistoryArea from './ConversationHistoryArea';
import MessageInputArea from './MessageInputArea';


class RightArea extends React.Component {
    public render() {
        return (
            <div className="right">
                <Toolbar/>

                <ConversationHistoryArea/>

                <MessageInputArea/>
            </div>
        );
    }
}

export default RightArea;
