import * as React from 'react';

//components imports
import MyButton from './../Components/MyButton';

class Toolbar extends React.Component {
    public render() {
        return (
            <div className="toolbar">

                <MyButton contentSTR={'Load'} className={'load'}/>
                <MyButton contentSTR={'Clear'} className={'clear'}/>

            </div>
        );
    }
}

export default Toolbar;
