import React, { useState } from "react"

const Difficulty = ({setStep, setDifficulty, difficulty}) => {

    const [isSelected, setIsSelected] = useState(false)

    const handleDifficulty = (index) => {
        setDifficulty(index)
        setIsSelected(true)
    }

    return(
        <div className="difficulty">
            <div>
                <button onClick={() => handleDifficulty(1)} className={difficulty === 1 ? 'difficulty_active' : ''}>EASY</button>
                <button onClick={() => handleDifficulty(2)} className={difficulty === 2 ? 'difficulty_active' : ''}>MEDIUM</button>
                <button onClick={() => handleDifficulty(3)} className={difficulty === 3 ? 'difficulty_active' : ''}>HARD</button>
            </div>
            <div>
                <button disabled={!isSelected} onClick={() => setStep(2)}>START</button>
            </div>
        </div>
    )
}

export default Difficulty