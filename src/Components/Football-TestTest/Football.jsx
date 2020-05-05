/* 
## Football Team Organiser
Using the data set provided, build a component to allow users to select players from the list and create their ideal Borussia Mönchengladbach starting eleven.

#### Keep in mind:

* A user can’t insert a player more than once.
* A team can have no more than 1 Goalkeeper
* The starting eleven needs to include 3 Defenders, 4 Midfielders, 3 Attackers.


The UI should reflect the user choices.

---

*/

// 1. Import the list of data from the JSON file
// 2. Display these players in a list format
// 3.  



import React, { Component } from 'react'
import data from "./football-team.data.json"

export default class Football extends Component{ 
    state = {
        playersList: data
    }
    render() {
        console.log(data);
        console.log(this.state.playersList)
        console.log(this.state.playersList[0])
        return (
            <div>
                <h1>Football Team Picker</h1>
            </div>
        )
    }
}
