import React from "react"

const MonsterSelect = ({monsters, onMonsterSelected}) => {

    const handleSelect = (event) => {
        onMonsterSelected(event.target.value)
    }

    const monsterItems = monsters.map((monster, index) => {
        return (
            <option value={index}>
                {monster.name}
            </option>
        )
    })

    return (
        <>
            <select onChange={handleSelect} defaultValue="Choose a monster">
                {monsterItems}
            </select>
        </>
    )
}

export default MonsterSelect