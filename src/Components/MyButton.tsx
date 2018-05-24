import * as React from 'react';

interface IToolBarButtonPROPS {
    contentSTR: string,
    className?: string,
    callbackFunc?: any
    clickAble?: boolean
}

class Toolbar extends React.Component<IToolBarButtonPROPS,{}> {
    constructor(props: IToolBarButtonPROPS){
        super(props)
    }

    public render() {
        return (
            <button onClick={this.props.callbackFunc} className={this.props.className} disabled={!this.props.clickAble}>{this.props.contentSTR}</button>
        );
    }
}

export default Toolbar;