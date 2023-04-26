import React, { useContext } from 'react'
import { QuizContext } from '../Helpers/Contexts'

export default function MainMenu() {
    // eslint-disable-next-line
    const { currentComponent, setCurrentComponent } = useContext(QuizContext);

    return (
        <div className='Menu'>
            <button
                onClick={() => {
                    setCurrentComponent('quiz')
                }}
            >
                Start Quiz
            </button>
        </div>
    )
}
