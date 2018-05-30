//is positioned on the left part of the screen, showing every group and user entities

import * as React from 'react';
import {User} from './../Classess/User';

import Header from './Header';
import StateStore from "../State/StateStore";
import ICanChat from "../Interfaces/ChatEntity";
import {MyFunctions} from './../Classess/UsefullFunctions';
import {Group} from "../Classess/Group";

interface ITreeState {
    entities: ICanChat[];
}

interface ITreeProps {
}

class ChatEntitiesTree extends React.Component<ITreeProps,ITreeState> {

    currentUser : User;
    myFuncs = new MyFunctions();
    ulTree: any;

    constructor(props: ITreeProps){
        super(props);

        this.currentUser = StateStore.getInstance().get('currentUser');
        this.ulTree = React.createRef();

        this.state = {
            entities : StateStore.getInstance().get('allEntities')
        };

        StateStore.getInstance().subscribe(()=>{
            this.forceUpdate();
        });

    }

    singleLiCreate(item : ICanChat, idValue? : number, childElement? : any, parentLiClassName? : string, repeatSpaces? : number){

        childElement = childElement || false;

        idValue = idValue || 1;

        parentLiClassName = parentLiClassName || "";

        repeatSpaces = repeatSpaces || 0;

        const itemNameForClass = item.getName().replace(' ', '_');
        let li = {
            innerHTML: '',
            className : '',
            id : '',
            style: {}
        };
        li.innerHTML = item.getName();
        li.className += item.getType() + ' ' + itemNameForClass + ' ';
        li.id = idValue.toString();
        li.style = { 'textIndent' : repeatSpaces +'px'};

        if (childElement) {
            li.className += 'childElement childOf_' + parentLiClassName + ' isHidden ';
        }

        return li;

    }

    createListItems(items : ICanChat[], liList? : any[], repeatSpaces? : number, idValue? : number, child? : boolean, parentLiClassName? : string){

        liList = liList || [];

        child = child || false;

        repeatSpaces = repeatSpaces || 0;

        idValue = idValue || 1;

        for (let item of items) {

            if (item.getType() === 'group'){
                const group_item = item as Group;
                const parent_group = group_item.getParentGroup();
                if (parent_group && (idValue > 1 && idValue < items.length)){
                    continue;
                }
            }

            liList.push(this.singleLiCreate(item, idValue, child, parentLiClassName, repeatSpaces));

            //if it's a group with items in it
            if (item.getItems().length > 0) {
                this.createListItems(item.getItems(), liList,repeatSpaces + 15, items.length + idValue, true, item.getName().replace(' ', '_'));
            }

            idValue++;
        }


        liList = liList.map((item, idx) => {
            return <li style={item.style} onClick={this.myFuncs.makeActive} onDoubleClick={this.myFuncs.decideVisibility} className={item.className} id={item.id} key={idx}> {item.innerHTML} </li>;
        });

        return liList;
    }

    componentDidMount() {
        let myFuncs = new MyFunctions();
        myFuncs.setUpKeysEvents(this.ulTree.current);
    }

    public render() {

        return (
            <div className={'left'}>

                <Header/>

                <ul className="tree" tabIndex={0} ref={this.ulTree}>

                    {this.createListItems(this.state.entities)}

                </ul>

            </div>
        );
    }
}

export default ChatEntitiesTree;
