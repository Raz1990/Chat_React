//is positioned on the left part of the screen, showing every group and user entities

import * as React from 'react';
import {User} from './../Classess/User';

import Header from './Header';
import StateStore from "../State/StateStore";
import ICanChat from "../Interfaces/ChatEntity";

interface ITreeState {
    entities: ICanChat[];
}

interface ITreeProps {
}

class ChatEntitiesTree extends React.Component<ITreeProps,ITreeState> {

    currentUser : User;

    constructor(props: ITreeProps){
        super(props);

        this.currentUser = StateStore.getInstance().get('currentUser');

        this.state = {
            entities : StateStore.getInstance().get('allEntities')
        };

    }

    singleLiCreate(item : ICanChat, idValue? : number, childElement? : any, parentLiClassName? : string, repeatSpaces? : number){

        childElement = childElement || false;

        idValue = idValue || 1;

        parentLiClassName = parentLiClassName || "";

        repeatSpaces = repeatSpaces || 0;

        const itemNameForClass = item.getName().replace(' ', '_');
        let li = document.createElement("li");
        li.innerHTML = '&nbsp'.repeat(repeatSpaces) + item.getName();
        li.className += item.getType() + ' ' + itemNameForClass + ' ';
        li.id = idValue.toString();

        li.addEventListener('click', () => {
            //makeActive(li);
        });

        li.addEventListener('dblclick', () => {
            //decideVisibility(li);
        });

        if (childElement) {
            li.className += 'childElement childOf_' + parentLiClassName + ' isHidden ';
        }

        return li;

    }


    //fix
    createListItems(items : ICanChat[], liList? : any[], repeatSpaces? : number, idValue? : number){

        liList = liList || [];

        repeatSpaces = repeatSpaces || 0;

        idValue = idValue || 1;

        for (let item of items) {

            //if it's a group with items in it
            if (item.getItems().length > 0) {
                this.createListItems(item.getItems(), liList,repeatSpaces + 3, items.length + idValue);
            }

            liList.push(this.singleLiCreate(item,idValue));

            idValue++;
        }

        return liList;
    }

    public render() {

        return (
            <div className={'left'}>

                <Header/>

                <ul className="tree">

                    {this.createListItems(this.state.entities)}

                </ul>

            </div>
        );
    }
}

export default ChatEntitiesTree;
