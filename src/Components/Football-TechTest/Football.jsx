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

import React, { Component } from "react";
import { FootballTeamData } from "./FootballTeamData";
import styles from "./Football.module.scss";
import PlayerCard from "./PlayerCard/PlayerCard";

export default class Football extends Component {
  state = {
    availablePlayers: FootballTeamData,
    selectedTeam: [],
    selectedGoalkeeper: 0,
    selectedDefender: 0,
    selectedMidfielder: 0,
    selectedAttacker: 0,
  };

  handleClick = (player) => {
    const playerIndex = this.state.availablePlayers.includes(player)
      ? this.state.availablePlayers.indexOf(player)
      : this.state.selectedTeam.indexOf(player);

    if (
      this.state.availablePlayers.includes(player) &&
      this.checkPlayerType(player)
    ) {
      const removingPlayer = this.state.availablePlayers;
      const addingPlayer = this.state.selectedTeam;
      addingPlayer.push(player);
      removingPlayer.splice(playerIndex, 1);
      this.setState({
        availablePlayers: removingPlayer,
        selectedTeam: addingPlayer,
      });
    } else if (this.state.selectedTeam.includes(player)) {
      this.adjustSelectedTeam(player);
      const removingPlayer = this.state.selectedTeam;
      const addingPlayer = this.state.availablePlayers;
      addingPlayer.push(player);
      removingPlayer.splice(playerIndex, 1);
      this.setState({
        availablePlayers: addingPlayer,
        selectedTeam: removingPlayer,
      });
    }
  };

  checkPlayerType = (player) => {
    switch (player.position) {
      case "Goalkeeper":
        if (this.state.selectedGoalkeeper < 1) {
          this.setState({
            selectedGoalkeeper: this.state.selectedGoalkeeper + 1,
          });
          return true;
        } else {
          return false;
        }
      case "Defender":
        if (this.state.selectedDefender < 3) {
          this.setState({
            selectedDefender: this.state.selectedDefender + 1,
          });
          return true;
        } else {
          return false;
        }
      case "Midfielder":
        if (this.state.selectedMidfielder < 4) {
          this.setState({
            selectedMidfielder: this.state.selectedMidfielder + 1,
          });
          return true;
        } else {
          return false;
        }
      case "Attacker":
        if (this.state.selectedAttacker < 3) {
          this.setState({
            selectedAttacker: this.state.selectedAttacker + 1,
          });
          return true;
        } else {
          return false;
        }
    }
    return false;
  };

  adjustSelectedTeam = () => {
    this.setState({
      selectedGoalkeeper: this.state.selectedGoalkeeper - 1,
    });

    this.setState({
      selectedDefender: this.state.selectedDefender - 1,
    });

    this.setState({
      selectedMidfielder: this.state.selectedMidfielder - 1,
    });

    this.setState({
      selectedAttacker: this.state.selectedAttacker - 1,
    });
  };

  render() {
    return (
      <>
        <div className={styles.container}>
          <section className={styles.availablePlayers}>
            <div>
              {this.state.availablePlayers.map((eachElement, index) => {
                if (eachElement.position === "Goalkeeper") {
                  return (
                    <PlayerCard
                      key={index}
                      player={eachElement}
                      handleClick={this.handleClick}
                    />
                  );
                }
                return null;
              })}
            </div>
            <div>
              {this.state.availablePlayers.map((eachElement, index) => {
                if (eachElement.position === "Defender") {
                  return (
                    <PlayerCard
                      key={index}
                      player={eachElement}
                      handleClick={this.handleClick}
                    />
                  );
                }
                return null;
              })}
            </div>
            <div>
              {this.state.availablePlayers.map((eachElement, index) => {
                if (eachElement.position === "Midfielder") {
                  return (
                    <PlayerCard
                      key={index}
                      player={eachElement}
                      handleClick={this.handleClick}
                    />
                  );
                }
                return null;
              })}
            </div>
            <div>
              {this.state.availablePlayers.map((eachElement, index) => {
                if (eachElement.position === "Attacker") {
                  return (
                    <PlayerCard
                      key={index}
                      player={eachElement}
                      handleClick={this.handleClick}
                    />
                  );
                }
                return null;
              })}
            </div>
          </section>
          <section className={styles.selectedTeam}>
            <div className={styles.selectedGoalkeeper}>
              {this.state.selectedTeam.map((eachElement, index) => {
                if (eachElement.position === "Goalkeeper") {
                  return (
                    <>
                      <PlayerCard
                        key={index}
                        player={eachElement}
                        handleClick={this.handleClick}
                      />
                    </>
                  );
                }
                return null;
              })}
            </div>
            <div className={styles.selectedDefender}>
              {this.state.selectedTeam.map((eachElement, index) => {
                if (eachElement.position === "Defender") {
                  return (
                    <PlayerCard
                      key={index}
                      player={eachElement}
                      handleClick={this.handleClick}
                    />
                  );
                }
                return null;
              })}
            </div>
            <div className={styles.selectedMidfielder}>
              {this.state.selectedTeam.map((eachElement, index) => {
                if (eachElement.position === "Midfielder") {
                  return (
                    <PlayerCard
                      key={index}
                      player={eachElement}
                      handleClick={this.handleClick}
                    />
                  );
                }
                return null;
              })}
            </div>
            <div className={styles.selectedAttacker}>
              {this.state.selectedTeam.map((eachElement, index) => {
                if (eachElement.position === "Attacker") {
                  return (
                    <PlayerCard
                      key={index}
                      player={eachElement}
                      handleClick={this.handleClick}
                    />
                  );
                }
                return null;
              })}
            </div>
          </section>
        </div>
      </>
    );
  }
}
