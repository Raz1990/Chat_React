import IChatEntity from './../Interfaces/ChatEntity';
import {User} from './../Classess/User';
export {Group};

class Group implements IChatEntity{

    constructor(private group_name: string, private members: IChatEntity[] = [], private parent?: Group) {

    }

    setParentGroup(parent : Group){
        this.parent = parent;
    }

    getParentGroup(){
        return this.parent;
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

    addNewMember(newMember: IChatEntity){
        const type = newMember.getType();
        if (type=== 'group') {
            this.addGroupToGroup(newMember as Group);
        }
        else {
            this.addUserToGroup(newMember as User);
        }
    }

    addGroupToGroup(newGroup: Group){
        this.members.push(newGroup);
    }

    addUserToGroup(newUser: User){
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
