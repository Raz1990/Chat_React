import * as React from 'react';
import '../App.css';

//components imports
import {db} from './../Database/db';
import ChatEntitiesTree from './ChatEntitiesTree';
import RightArea from './RightArea';
import {User} from './../Classess/User';
import IChatEntity from "../Interfaces/ChatEntity";
import StateStore from "../State/StateStore";


interface IAppProps {

}

interface IAppState {
    currentUser: User
    inChatWith: IChatEntity
}

class App extends React.Component<IAppProps,IAppState> {

    constructor(props: IAppProps){
        super(props);

        const users = db.getAllUsers();

        this.state = {
            currentUser: users[0],
            inChatWith: users[1],
        };

        StateStore.getInstance().set('inChatWith',users[1]);
    }

    public render() {
        return (
            <div id='toor'>

                <ChatEntitiesTree/>

                <RightArea/>

            </div>
        );
    }
}

export default App;
