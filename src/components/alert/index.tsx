import React from 'react';
import { AlertContext } from 'src/context/alert/index';

const Alert = () => {
    const { text, clear } = React.useContext(AlertContext);
    return <div className="row flex-spaces">
        <input className="alert-state" id="global-alert" type="checkbox" />
        <div className="alert alert-primary dismissible">
            {text}
            <label
                className="btn-close"
                htmlFor="global-alert"
            >
                <span onClick={clear}>
                    X
                </span>
            </label>
        </div>
    </div>
}

export default Alert;