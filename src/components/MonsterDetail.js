import React from "react"

const MonsterDetail = ({mon}) => {
    

    const proficiencyItems = mon.proficiencies.map((res) => {
        return res.proficiency.name
    }) 

    const condImmunityItems = mon.condition_immunities.map((res) => {
        return res.name + ", "
    }) 

    const specialAbilityItems = mon.special_abilities.map((res) => {
        return <p><b>{res.name}</b>: {res.desc}</p>
    })

    const actionItems = mon.actions.map((res) => {
        return (<p>
                    <b>{res.name}</b>: 
                    {res.desc}
                </p>
        )

    })

    const legActionItems = mon.legendary_actions.map((res) => {
        return (<p>
                    <b>{res.name}</b>: 
                    {res.desc}
                </p>
        )

    })



    return (
        <>
            <div className = "stat-block">
                <h2>{mon.name}</h2>
                <h3>{mon.size} {mon.type}, {mon.alignment}</h3>
                <hr />
                <p><b>Armor Class</b> {mon.armor_class}</p>
                <p><b>Hit Points</b> {mon.hit_points} ({mon.hit_dice})</p>
                <p>
                    <b>Speed</b> {mon.speed.walk}
                    {mon.speed.hasOwnProperty('swim') ? ", " + mon.speed.swim + " (swim)" : null}
                    {mon.speed.hasOwnProperty('fly') ? ", " + mon.speed.fly + " (fly)" : null}
                    {mon.speed.hasOwnProperty('burrow') ? ", " + mon.speed.burrow + " (burrow)" : null}
                    {mon.speed.hasOwnProperty('climb') ? ", " + mon.speed.climb + " (climb)" : null}
                </p>
                <hr />
                <div className ="block-stats">
                    <div className="stat">
                        <p className= "stat-name">STR</p> <p className= "stat-value">{mon.strength}</p>
                    </div>

                    <div className="stat">
                        <p className= "stat-name">DEX</p> <p className= "stat-value">{mon.dexterity}</p>
                    </div>

                    <div className="stat">
                        <p className= "stat-name">CON</p> <p className= "stat-value">{mon.constitution}</p>
                    </div>

                    <div className="stat">
                        <p className= "stat-name">INT</p> <p className= "stat-value">{mon.intelligence}</p>
                    </div>

                    <div className="stat">
                        <p className= "stat-name">WIS</p> <p className= "stat-value">{mon.wisdom}</p>
                    </div>

                    <div className="stat">
                        <p className= "stat-name">CHA</p> <p className= "stat-value">{mon.charisma}</p>
                    </div>
                </div>
                <hr />
                <p>
                {mon.proficiencies.length ? "Proficiencies: " + proficiencyItems : null}
                </p>
                
                <p>
                {mon.damage_vulnerabilities.length ? "Damage Vulnerabilities: " + mon.damage_vulnerabilities[0] : null}
                </p>
                <p>
                {mon.damage_resistances.length ? "Damage Resistances: " + mon.damage_resistances : null}
                </p>
                <p>
                {mon.damage_immunities.length ? "Damage Immunities: " + mon.damage_immunities : null}
                </p>
                <p>
                {mon.condition_immunities.length ? "Condition Immunities: " + condImmunityItems : null}
                </p>
                <p>
                {/* THIS ONE IS NOT WORKING */}
                {mon.senses.length ? "senses: " + mon.senses : null}
                </p>
                {mon.languages ? "Languages: " + mon.languages : "languages: -"}
                <p>
                    Challenge: {mon.challenge_rating} - {mon.xp} xp
                </p>

                <hr />

                {mon.special_abilities.length ? <h3>Special Abilities</h3> : null}
                {mon.special_abilities.length ? specialAbilityItems : null}
                {mon.special_abilities.length ? <hr/> : null}

                {mon.actions.length ? <h3>Actions</h3> : null}
                {mon.actions.length ? <p>{actionItems}</p> : null}
                {mon.actions.length ? <hr/> :null }                

                {mon.legendary_actions.length ? <h3>Legendary Actions</h3> : null}
                {mon.legendary_actions.length ? <p>{legActionItems}</p> : null}
                {mon.legendary_actions.length ? <hr/> : null}

                


                
            </div>
        </>
    )
}

export default MonsterDetail