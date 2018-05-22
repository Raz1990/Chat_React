import * as React from 'react';
import '../App.css';

//components imports
import ChatEntitiesTree from './ChatEntitiesTree';
import RightArea from './RightArea';

interface IAppProps {

}

interface IAppState {


}

class App extends React.Component<IAppProps,IAppState> {

    constructor(props: IAppProps){
        super(props)
        this.state = {

        };
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
