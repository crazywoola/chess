import React from "react";

interface IProps {
    show: boolean;
    id: string;
    title: string;
    size: 'xs' | 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    operations: () => void;
}
const BasicModal = ({
    id,
    show,
    title,
    size,
    children,
    operations,
}: IProps) => {
    return <>
        <input
            className="modal-state"
            id={id}
            type="checkbox" 
            checked={show}
            onChange={operations}
        />
         <div className="modal">
            <div className={`modal-body container container-${size}`}>
                <label className="btn-close" htmlFor={id}>X</label>
                <h3 className='modal-title'>{title}</h3>
                {children}
            </div>
         </div>
    </>
}

export default BasicModal;