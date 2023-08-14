
import React, { useRef } from 'react'; 
import { useMountEffect } from 'primereact/hooks';
import { Messages } from 'primereact/messages';

const CrasMessage = ({severity, text}) =>  {

    const msgs = useRef(null);

    useMountEffect(() => {
        msgs.current.show(
            { sticky: true, severity: severity, summary: 'Error', detail: text, closable: false }
        );
    }); 
    return (
        <div className="card ">
            <Messages ref={msgs} />
        </div>
    )
}

export default CrasMessage;