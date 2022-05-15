import React from "react"

const MonsterSelectByCr = ({updateCr}) => {

    const handleSelect = (event) => {
        updateCr(event.target.value)
    }

    return (
        <>
            <select onChange={handleSelect}>
                <option value="all">all</option>
                <option value= "0">0</option>
                <option value= "0.125">1/8</option>
                <option value= "0.25">1/4</option>
                <option value= "0.5">1/2</option>
                <option value= "1">1</option>
                <option value= "2">2</option>
                <option value= "3">3</option>
                <option value= "4">4</option>
                <option value= "5">5</option>
                <option value= "6">6</option>
                <option value= "7">7</option>
                <option value= "8">8</option>
                <option value= "9">9</option>
                <option value= "10">10</option>
                <option value= "11">11</option>
                <option value= "12">12</option>
                <option value= "13">13</option>
                <option value= "14">14</option>
                <option value= "15">15</option>
                <option value= "16">16</option>
                <option value= "17">17</option>
                <option value= "18">18</option>
                <option value= "19">19</option>
                <option value= "20">20</option>
                <option value= "21">21</option>
                <option value= "22">22</option>
                <option value= "23">23</option>
            </select>
        </>
    )
}

export default MonsterSelectByCr