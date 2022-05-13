import React from "react"

const MonsterSelectByCr = ({getMonstersByCr}) => {

    const handleSelect = (event) => {
        getMonstersByCr(event.target.value)
    }

    return (
        <>
            <select onChange={handleSelect} defaultValue="Challenge Rating">
                <option value= "0">0</option>
                <option value= "1/8">1/8</option>
                <option value= "1/4">1/4</option>
                <option value= "1/2">1/2</option>
                <option value= "1">1</option>
                <option value= "2">2</option>
                <option value= "3">3</option>
                <option value= "4">4</option>
                <option value= "5">5</option>
            </select>
        </>
    )
}

export default MonsterSelectByCr