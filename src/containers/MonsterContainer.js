import React from "react"
import MonsterSelect from "../components/MonsterSelect"
import MonsterDetail from "../components/MonsterDetail"
import MonsterSelectByCr from "../components/MonsterSelectByCr"

const MonsterContainer = ({selectedMonster, filteredMonsters, onMonsterSelected, updateCr}) => {

    return (
        <>
            <div className="dropdowns">
                <MonsterSelect onMonsterSelected = 
                {onMonsterSelected} filteredMonsters = {filteredMonsters}/>
                <MonsterSelectByCr updateCr = {updateCr}/>
                
            </div>
            {selectedMonster ? <MonsterDetail mon = {selectedMonster} /> : null }
   
        </>
    )
}

export default MonsterContainer