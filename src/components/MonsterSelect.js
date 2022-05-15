import React from "react"

const MonsterSelect = ({onMonsterSelected, filteredMonsters}) => {

    const handleSelect = (event) => {
        onMonsterSelected(event.target.value)
    }

    const monsterItems = filteredMonsters.map((monster, index) => {
        return (
            <option value={index}>
                {monster.name}
            </option>
        )
    })

    return (
        <>
            <div className="cr-select">
                <h3>select monster:</h3>
                <select onChange={handleSelect} className="monster-select">
                    <option value = "">choose a monster</option>
                    {monsterItems}
                </select>
            </div>
        </>
    )
}

export default MonsterSelect