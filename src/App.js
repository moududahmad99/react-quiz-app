import './App.css';
import React, { useState } from 'react'
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';
import LastScreen from './components/LastScreen';


function App() {

    // eslint-disable-next-line
    const [currentComponent, setCurrentComponent] = useState('menu')

    return (
        <div className='App'>
            <h1>Quiz App</h1>

            {currentComponent === 'menu' && <MainMenu />}
            {currentComponent === 'quiz' && <Quiz />}
            {currentComponent === 'lastScreen' && <LastScreen />}
        </div>
    );
}

export default App;
