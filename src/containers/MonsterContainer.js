import React, {useState, useEffect} from "react"
import MonsterSelect from "../components/MonsterSelect"

const MonsterContainer = () => {

    const [monsters, setMonsters] = useState([])
    const [selectedMonster, setSelectedMonster] = useState(null)

    useEffect(() => {
        getMonsters();
    }, [])

    const getMonsters = () => {
        fetch("https://www.dnd5eapi.co/api/monsters")
        .then(res => res.json())
        .then(monsters => setMonsters(monsters.results))
        .catch(err => console.error);
    }

    const onMonsterSelected = (index) => {
        setSelectedMonster(monsters[index])
    }

    return (
        <>
            <p>This is the monster Container</p>
            <MonsterSelect monsters= {monsters} onMonsterSelected = {onMonsterSelected}/>
        </>
    )
}

export default MonsterContainer