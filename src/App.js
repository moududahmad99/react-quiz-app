import './App.css';
import React, { useState } from 'react'
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';
import LastScreen from './components/LastScreen';
import { QuizContext } from './Helpers/Contexts'

function App() {

    // eslint-disable-next-line
    const [currentComponent, setCurrentComponent] = useState('menu')

    return (
        <div className='App'>
            <h1>Quiz App</h1>
            <QuizContext.Provider value={{ currentComponent, setCurrentComponent }}>
                {currentComponent === 'menu' && <MainMenu />}
                {currentComponent === 'quiz' && <Quiz />}
                {currentComponent === 'lastScreen' && <LastScreen />}
            </QuizContext.Provider>
        </div>
    );
}

export default App;
