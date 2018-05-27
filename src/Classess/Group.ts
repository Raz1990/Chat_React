import IChatEntity from './../Interfaces/ChatEntity';
import {User} from './../Classess/User';
export {Group};

class Group implements IChatEntity{

    constructor(private group_name: string, private members: IChatEntity[] = []) {

    }

    getItems() {
        return this.members;
    }

    getType(): string {
        return "group";
    }

    getName() {
        return this.group_name;
    }

    setName(newName: string) {
        if (newName.length > 1) {
            this.group_name = newName;
        }
    }

    getInfoString() {
        return 'name: ' + this.group_name + ' members: ' + this.members.map(userName => userName + ' , ');
    }

    getGroupMembers(){
        return this.members;
    }

    addUserToGroup(newUser: User){
        console.log(newUser.getName() + 'to be added');
        this.members.push(newUser);
    }

    removeUserFromGroup(newUser: User){
        console.log(newUser.getName() + 'to be removed');
    }

    addGroup() {
        console.log(this.group_name + 'to be added');
    }

    removeGroup() {
        console.log(this.group_name + 'to be removed');
    }

}
