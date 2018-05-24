import {db} from "../Database/db";

interface IStateSore {
    state: {};
    set(key:string, val: string): any
    get(key:string): void;
}

class StateStore implements IStateSore{

    users = db.getAllUsers();

    groups = db.getAllGroups();

    entities = db.getAllEntities();

    state: {} = {
        allUsers: this.users,
        allGroups: this.groups,
        allEntities: this.entities,
        currentUser: this.users[0],
        speechBubbles: db.createMockUpBubbles(),
        inChatWith: null
    };

    set(key:string, val:any){
        this.state[key] = val;
    }

    get(key:string){
        return this.state[key] || null;
    }

    static instance: StateStore;

    static getInstance(){
        if (!StateStore.instance){
            StateStore.instance = new StateStore();
        }

        return StateStore.instance;
    }
}

export default StateStore;