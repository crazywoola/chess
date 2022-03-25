import React, { useContext } from 'react';
import { ThemeContext } from 'src/context/theme';

const ThemeSelect = () => {
    const ctx = useContext(ThemeContext);
    const { selectTheme } = ctx;
    return <div>
        <h3>Select Theme</h3>
        <button onClick={()=> selectTheme('default')}>Default Theme</button>
        <button onClick={()=> selectTheme('wooden')}>Wooden Theme</button>
    </div>
};

export default ThemeSelect;