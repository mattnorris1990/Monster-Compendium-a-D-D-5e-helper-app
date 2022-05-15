import React from "react"
import MonsterSelect from "../components/MonsterSelect"
import MonsterDetail from "../components/MonsterDetail"
import MonsterSelectByCr from "../components/MonsterSelectByCr"

const MonsterContainer = ({selectedMonster, filteredMonsters, onMonsterSelected, updateCr}) => {

    return (
        <>
            <div className="dropdowns">
                
                <MonsterSelectByCr updateCr = {updateCr}/>
                
                <MonsterSelect onMonsterSelected = 
                {onMonsterSelected} filteredMonsters = {filteredMonsters}/>
                
                
            </div>
            {selectedMonster ? <MonsterDetail mon = {selectedMonster} /> : null }
   
        </>
    )
}

export default MonsterContainer