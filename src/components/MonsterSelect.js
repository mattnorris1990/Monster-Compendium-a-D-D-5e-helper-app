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
            <select onChange={handleSelect} value="Choose a monster">
                <option value = "">choose a monster</option>
                {monsterItems}
            </select>
        </>
    )
}

export default MonsterSelect