import React, {useState, useEffect} from "react"
import MonsterSelect from "../components/MonsterSelect"
import MonsterDetail from "../components/MonsterDetail"
import MonsterSelectByCr from "../components/MonsterSelectByCr"

const MonsterContainer = () => {

    const [monstersLinksArray, setMonstersLinksArray] = useState([])
    const [selectedMonster, setSelectedMonster] = useState(null)
    const [selectedMonsterDetails, setSelectedMonsterDetails] =useState(null)
    const [monsters, setMonsters] = useState([])
    const [filteredMonsters, setFilteredMonsters] = useState([])
    const [cr, setCr] = useState(null)


    useEffect(() => {
        getMonsters();
    }, [])

    useEffect(() => {
        const results = monsters.filter((monster) => {
                return monster.challenge_rating === parseInt(cr)
            })
            setFilteredMonsters(results)
    }, [cr])

    useEffect (() => {
        setFilteredMonsters(monsters)
    }, [monsters])

    const updateCr = (cr) => {
        setCr(cr)
    }



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

                <MonsterSelect onMonsterSelected = 
                {onMonsterSelected} filteredMonsters = {filteredMonsters}/>
                <MonsterSelectByCr updateCr = {updateCr}/>
                {selectedMonster ? <MonsterDetail mon = {selectedMonster} /> : null }
        </>
    )
}

export default MonsterContainer