import React from 'react';

interface AlertProps {
    text: string;
}
const Alert = ({
    text,
}: AlertProps) => {

    return <div className="col">
            <input className="alert-state" id="global-alert" type="checkbox" />
            <div className="alert alert-primary dismissible">
                {text}
                <label className="btn-close" htmlFor="global-alert">X</label>
            </div>
    </div>
}

export default Alert;