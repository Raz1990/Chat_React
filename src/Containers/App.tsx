import * as React from 'react';
import '../App.css';

//components imports
import {db} from './../Database/db';
import ChatEntitiesTree from './ChatEntitiesTree';
import RightArea from './RightArea';
import StateStore from "../State/StateStore";
import ICanChat from "../Interfaces/ChatEntity";


interface IAppProps {

}

interface IAppState {
    currentUser: ICanChat
}

class App extends React.Component<IAppProps,IAppState> {

    constructor(props: IAppProps){
        super(props);

        const users = db.getAllUsers();

        this.state = {
            currentUser: users[0],
        };

        StateStore.getInstance().set('currentUser', this.state.currentUser);

        StateStore.getInstance().subscribe(()=>{
            this.forceUpdate();
        });


        //StateStore.getInstance().set('inChatWith',users[1]);
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
