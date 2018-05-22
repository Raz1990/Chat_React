import * as React from 'react';

interface IToolBarButtonPROPS {
    contentSTR: string,
    className?: string
}

class Toolbar extends React.Component<IToolBarButtonPROPS,{}> {
    constructor(props: IToolBarButtonPROPS){
        super(props)
    }

    public render() {
        return (
            <button className={this.props.className}>{this.props.contentSTR}</button>
        );
    }
}

export default Toolbar;