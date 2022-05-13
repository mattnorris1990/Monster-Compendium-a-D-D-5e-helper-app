import React from "react"

const MonsterDetail = ({mon}) => {


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
                    {mon.speed.hasOwnProperty('swim') ? "," + mon.speed.swim + " (swim) " : null}
                    {mon.speed.hasOwnProperty('fly') ? "," + mon.speed.fly + " (fly) " : null}
                    {mon.speed.hasOwnProperty('burrow') ? "," + mon.speed.burrow + " (burrow) " : null}
                    {mon.speed.hasOwnProperty('climb') ? "," + mon.speed.climb + " (climb)" : null}
                </p>
                <hr />
                <div className ="block-stats">
                    <div className="stat">
                        <p className= "stat-name">Str</p> <p className= "stat-value">{mon.strength}</p>
                    </div>

                    <div className="stat">
                        <p className= "stat-name">Dex</p> <p className= "stat-value">{mon.dexterity}</p>
                    </div>

                    <div className="stat">
                        <p className= "stat-name">Con</p> <p className= "stat-value">{mon.constitution}</p>
                    </div>

                    <div className="stat">
                        <p className= "stat-name">Int</p> <p className= "stat-value">{mon.intelligence}</p>
                    </div>

                    <div className="stat">
                        <p className= "stat-name">Wis</p> <p className= "stat-value">{mon.wisdom}</p>
                    </div>

                    <div className="stat">
                        <p className= "stat-name">Cha</p> <p className= "stat-value">{mon.charisma}</p>
                    </div>
                </div>
                <hr />
                <p>
                {mon.proficiencies ? "Proficiences: " + "yes" : null}
                </p>
                <p>
                {mon.damage_vulnerabilities ? "Damage Vulnerabilities: " + "yes" : null}
                </p>
                <p>
                {mon.damage_resistances ? "Damage Resistances: " + "yes" : null}
                </p>
                <p>
                {mon.damage_immunities ? "Damage Immunities: " + "yes" : null}
                </p>
                <p>
                {mon.condition_immunities ? "Condition Immunities: " + "yes" : null}
                </p>
                <p>
                {mon.senses ? "senses: " + "yes" : null}
                </p>
                {mon.languages ? "Languages: " + mon.languages : "languages: -"}
                <p>
                    Challenge: {mon.challenge_rating} - {mon.xp} xp
                </p>

                <hr />


                
            </div>
        </>
    )
}

export default MonsterDetail