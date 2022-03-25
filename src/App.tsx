import React from 'react';
import 'src/App.css';
// import SvgBoard from 'src/components/svg-board';
import Board from 'src/components/board';
function App() {
    return (
        <div className="app">
            <div className='container'>
                <Board />
            </div>
            <div className='container'>
                {/* <SvgBoard /> */}
            </div>
        </div>
    );
}

export default App;
