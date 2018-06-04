import {db} from "../Database/db";

interface IStateSore {
    state: {};
    set(key:string, val: string): any
    get(key:string): void;
}

class StateStore implements IStateSore{

    constructor(){
        this.listeners = [];
    }

    listeners: Function[];

    users = db.getAllUsers();

    groups = db.getAllGroups();

    entities = db.getAllEntities();

    state: {} = {
        allUsers: this.users,
        allGroups: this.groups,
        allEntities: this.entities,
        currentUser: null,
        inChatWith: null
    };

    subscribe(listener: any){
        return this.listeners.push(listener);
    }

    unsubscribe(index: number){
        this.listeners.splice(index,1);
    }

    set(key:string, val:any){
        this.state[key] = val;
        this.onStoreChanged();
    }

    get(key:string){
        return this.state[key] || null;
    }

    onStoreChanged(){
        for(const listener of this.listeners){
            listener();
        }
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