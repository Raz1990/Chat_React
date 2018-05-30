import * as React from 'react';
import '../App.css';

//components imports
import {db} from './../Database/db';
import ChatEntitiesTree from './ChatEntitiesTree';
import RightArea from './RightArea';
import StateStore from "../State/StateStore";
import Modal from "../Components/Modal";

interface IAppProps {

}

class App extends React.Component<IAppProps,any> {

    constructor(props: IAppProps){
        super(props);

        //const users = db.getAllUsers();

        this.state = {
            currentUser: null,
            username: '',
            password: ''
        };

        StateStore.getInstance().set('currentUser', this.state.currentUser);

        StateStore.getInstance().subscribe(()=>{
            this.forceUpdate();
        });
    }

    inputChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value })
    };

    submit = () => {
        const currentUser = db.getSingleUser(this.state.username,this.state.password);

        //if found a user
        if (currentUser){
            alert('Welcome, ' + currentUser.getName());
            this.setState({currentUser:currentUser});
            StateStore.getInstance().set('currentUser', currentUser);
        }
        else {
            alert('User not found!');
        }
    };

    public render() {
        //if a user is logged in
        if (this.state.currentUser) {
            return (
                <div id='toor'>
                    <ChatEntitiesTree/>

                    <RightArea/>
                </div>
            );
        }

        const canSubmit = !!this.state.username && !!this.state.password;

        return (
            <Modal style={styles.modal}>
                <p style={styles.p}>
                    <label style={styles.label} htmlFor="username">Username</label>
                    <input style={styles.input} type="text" name="username" value={this.state.username} onChange={this.inputChangedHandler} />
                </p>
                <p>
                    <label style={styles.label} htmlFor="password">Password</label>
                    <input style={styles.input} type="password" name="password" value={this.state.password} onChange={this.inputChangedHandler} />
                </p>
                <button style={canSubmit ? styles.button : styles.buttonDisabled} disabled={!canSubmit} onClick={this.submit}>Submit</button>
            </Modal>
        );
    }
}

const styles: { [key: string]: React.CSSProperties } = {
    modal: {
        minWidth: '25em'
    },
    p: {
        margin: "0 0 0.5em 0",
    },
    label: {
        display: "inline-block",
        marginBottom: ".5rem"
    },
    input: {
        display: "block",
        width: "100%",
        outline: 'none'
    },
    button: {
        background: '#86BB71',
        color: 'white'
    },
};
styles.buttonDisabled = {
    ...styles.button,
    cursor: 'auto',
    background: '#DDDDDD',
    color: '#444753'
};

export default App;
