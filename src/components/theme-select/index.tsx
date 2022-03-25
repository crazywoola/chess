import React, { useContext } from 'react';
import { ThemeContext } from 'src/context/theme';
import './style.scss';

const ThemeSelect = () => {
    const ctx = useContext(ThemeContext);
    const { selectTheme } = ctx;
    return <div className='theme-select'>
        <h4>Select Theme</h4>
        <div className={'actions'}>
            <button className='btn-small' onClick={()=> selectTheme('default')}>Default Theme</button>
            <button className='btn-small gap' onClick={()=> selectTheme('wooden')}>Wooden Theme</button>
        </div>
    </div>
};

export default ThemeSelect;
