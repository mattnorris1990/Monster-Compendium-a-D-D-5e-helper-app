import React from "react"

const MonsterSelectByCr = ({updateCr}) => {

    const handleSelect = (event) => {
        updateCr(event.target.value)
    }

    return (
        <>
            <select onChange={handleSelect}>
                <option value= "0">0</option>
                <option value= "0.125">1/8</option>
                <option value= "0.25">1/4</option>
                <option value= "0.5">1/2</option>
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