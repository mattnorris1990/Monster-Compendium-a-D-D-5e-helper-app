import React, {useState, useEffect} from "react"
import MonsterSelect from "../components/MonsterSelect"
import MonsterDetail from "../components/MonsterDetail"
import MonsterSelectByCr from "../components/MonsterSelectByCr"

const MonsterContainer = () => {

    const [monstersLinksArray, setMonstersLinksArray] = useState([])
    const [selectedMonster, setSelectedMonster] = useState(null)
    const [monsters, setMonsters] = useState([])
    const [filteredMonsters, setFilteredMonsters] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [cr, setCr] = useState(null)


    useEffect(() => {
        getMonsters()
    }, [])

    useEffect (() => {
        setFilteredMonsters(monsters)
    }, [monsters])

    useEffect(() => {

        if (cr !== "all") {
            const results = monsters.filter((monster) => {
                return monster.challenge_rating == cr
            })
            setFilteredMonsters(results)
        } else {
            setFilteredMonsters(monsters)
        }
            
    }, [cr])

    useEffect(() => {
        getMonstersDetails()
    }, [loaded])


    const updateCr = (cr) => {
        setCr(cr)
    }

    const getMonsters = () => {
        fetch("https://www.dnd5eapi.co/api/monsters")
        .then(res => res.json())
        .then(monsters => setMonstersLinksArray(monsters.results))
        .then(() => setLoaded(true))
        // .then(() => {
        //     const promisesArray = monstersLinksArray.map((monster) => {
        //         return fetch(getMonsterUrl(monster))
        //         .then(res => (res.json()))
        //     })
        
            
        //     Promise.all(promisesArray).then(res => setMonsters(res))
        //     .catch(error => console.error(error))
        // })
        
    }

    const getMonstersDetails = () => {
        
            const promisesArray = monstersLinksArray.map((monster) => {
                return fetch(getMonsterUrl(monster))
                .then(res => (res.json()))
            })
        
            
            Promise.all(promisesArray).then(res => setMonsters(res))
            .catch(error => console.error(error))
        
    }


    const getMonsterUrl = (selectedMonster) => {
        return 'https://www.dnd5eapi.co' + selectedMonster.url
    }

    const onMonsterSelected = (index) => {
        setSelectedMonster(filteredMonsters[index])
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