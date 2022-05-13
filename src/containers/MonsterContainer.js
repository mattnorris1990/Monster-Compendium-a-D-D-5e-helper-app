import React, {useState, useEffect} from "react"
import MonsterSelect from "../components/MonsterSelect"
import MonsterDetail from "../components/MonsterDetail"

const MonsterContainer = () => {

    const [monstersLinksArray, setMonstersLinksArray] = useState([])
    const [selectedMonster, setSelectedMonster] = useState(null)
    const [selectedMonsterDetails, setSelectedMonsterDetails] =useState(null)
    const [monsters, setMonsters] = useState([])


    useEffect(() => {
        getMonsters();
    }, [])


    const getMonsters = () => {
        fetch("https://www.dnd5eapi.co/api/monsters")
        .then(res => res.json())
        .then(monsters => setMonstersLinksArray(monsters.results))
        .then(() => {
            const promisesArray = monstersLinksArray.map((monster) => {
                return fetch(getMonsterUrl(monster))
                .then(res => (res.json()))
                
            })
            
            Promise.all(promisesArray).then(res => setMonsters(res))
            .catch(error => console.error(error))
        })
    }


    const getMonsterUrl = (selectedMonster) => {
        return 'https://www.dnd5eapi.co' + selectedMonster.url
    }

    const onMonsterSelected = (index) => {
        setSelectedMonster(monsters[index])
    }


    return (
        <>

                <MonsterSelect monsters= {monsters} onMonsterSelected = {onMonsterSelected}/>
                {selectedMonster ? <MonsterDetail mon = {selectedMonster} /> : null }
        </>
    )
}

export default MonsterContainer