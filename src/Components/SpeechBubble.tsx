//A component for a speech bubble containing a className, content

import * as React from 'react';


interface ISpeechBubblePROPS {
    contentSTR: string,
    className?: string
}

class SpeechBubble extends React.Component<ISpeechBubblePROPS,{}> {
    constructor(props: ISpeechBubblePROPS){
        super(props)
    }

    public render() {
        return (
            <div className={this.props.className}>{this.props.contentSTR}</div>
        );
    }
}

export default SpeechBubble;