import React, { Component } from "react";
import styles from "./Main.module.scss";

export default class Main extends Component {
  render() {
    return (
      <>
        <div className={styles.container}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <g>
              <path
                fill="#21a521"
                fill-opacity="1"
                d="M0,288L80,277.3C160,267,320,245,480,218.7C640,192,800,160,960,133.3C1120,107,1280,85,1360,74.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
              <text
                x="1000"
                y="225"
                font-family="Quicksand"
                className={styles.rightText}
                font-size="30"
                fill="white"
              >
                {"Use the Navigation bar above"}
              </text>
              <text
                x="1075"
                y="265"
                font-family="Quicksand"
                className={styles.rightText}
                font-size="30"
                fill="white"
              >
                {"to see the solution!"}
              </text>

              <text
                x="25"
                y="40"
                font-family="Quicksand"
                font-size="30"
                fill="black"
              >
                {"Tech Test 1: Football Team Organiser"}
              </text>
              <text
                x="25"
                y="75"
                font-family="Quicksand"
                font-size="16"
                fill="black"
              >
                {
                  "Using a data set provided, I had to build a component to allow users to select players from the list and create their ideal Borussia Mönchengladbach starting eleven."
                }
              </text>

              <text
                x="25"
                y="100"
                font-family="Quicksand"
                font-size="16"
                fill="black"
              >
                {
                  "I had to keep in mind: A user can’t insert a player more than once. A team can have no more than 1 Goalkeeper and"
                }
              </text>
              <text
                x="25"
                y="125"
                font-family="Quicksand"
                font-size="16"
                fill="black"
              >
                {
                  "the starting eleven needs to include 3 Defenders, 4 Midfielders, 3 Attackers. The UI should reflect the user choices."
                }
              </text>
            </g>
          </svg>
        </div>

        <div className={styles.container}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <g>
              <path
                fill="#f3ac13ea"
                fill-opacity="1"
                d="M0,288L80,277.3C160,267,320,245,480,218.7C640,192,800,160,960,133.3C1120,107,1280,85,1360,74.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
              <text
                x="1000"
                y="225"
                font-family="Quicksand"
                className={styles.rightText}
                font-size="30"
                fill="white"
              >
                {"Use the Navigation bar above"}
              </text>
              <text
                x="1075"
                y="265"
                font-family="Quicksand"
                className={styles.rightText}
                font-size="30"
                fill="white"
              >
                {"to see the solution!"}
              </text>

              <text
                x="25"
                y="40"
                font-family="Quicksand"
                font-size="30"
                fill="black"
              >
                {"Tech Test 2: Weather Cards - 3 Cities"}
              </text>
              <text
                x="25"
                y="75"
                font-family="Quicksand"
                font-size="16"
                fill="black"
              >
                {
                  "Using the public OpenWeatherMap API, I had to build three cards displaying the current weather data for: London, Bristol and Rome."
                }
              </text>

              <text
                x="25"
                y="100"
                font-family="Quicksand"
                font-size="16"
                fill="black"
              >
                {
                  "The cards had to display: Temperature, Humidity, Minimum temperature at the moment, Maximum temperature at the moment."
                }
              </text>
              <text
                x="25"
                y="125"
                font-family="Quicksand"
                font-size="16"
                fill="black"
              >
                {
                  "Temperature Default is Kelvin, so had to also convert to Celcius."
                }
              </text>
            </g>
          </svg>
        </div>

        <div className={styles.container}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <g>
              <path
                fill="#273036"
                fill-opacity="1"
                d="M0,288L80,277.3C160,267,320,245,480,218.7C640,192,800,160,960,133.3C1120,107,1280,85,1360,74.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
              <text
                x="1000"
                y="225"
                font-family="Quicksand"
                className={styles.rightText}
                font-size="30"
                fill="white"
              >
                {"Use the Navigation bar above"}
              </text>
              <text
                x="1075"
                y="265"
                font-family="Quicksand"
                className={styles.rightText}
                font-size="30"
                fill="white"
              >
                {"to see the solution!"}
              </text>

              <text
                x="25"
                y="40"
                font-family="Quicksand"
                font-size="30"
                fill="black"
              >
                {"Tech Test 3: One Question Quiz"}
              </text>
              <text
                x="25"
                y="75"
                font-family="Quicksand"
                font-size="16"
                fill="black"
              >
                {
                  "Create a one question quiz that validates itself and checks the user input against the correct answer."
                }
              </text>
            </g>
          </svg>
        </div>
      </>
    );
  }
}
