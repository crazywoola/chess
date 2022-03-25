import React, { useContext } from 'react';
import { ThemeContext } from 'src/context/theme';
import './style.scss';

const ThemeSelect = () => {
    const ctx = useContext(ThemeContext);
    const { selectTheme } = ctx;
    return <div className='theme-select'>
        <h3>Select Theme</h3>
        <div className={'actions'}>
            <button onClick={()=> selectTheme('default')}>Default Theme</button>
            <button className='gap' onClick={()=> selectTheme('wooden')}>Wooden Theme</button>
        </div>
    </div>
};

export default ThemeSelect;