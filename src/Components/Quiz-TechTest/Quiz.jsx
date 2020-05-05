/* ## One Question Quiz

* Create a one question quiz that validates itself and checks the user input against the correct answer. 
Eg. pizza validates true when typed in an input */

import styles from "./Quiz.module.scss";
import React, { Component } from "react";


export default class Quiz extends Component {
  state = {
    questions: [
      {
        id: 1,
        question: "Which of these foods is traditionally made round",
        answer_a: "Spaghetti",
        answer_b: "Pizza",
        answer_c: "Lasagna",
        answer_d: "All of the above",
        correct_answer: "Pizza",
      }
    ], 
    value: ''
  }

  handleInputChange = (event) => {
    this.setState({value: event.target.value});
    }

  checkAnswer(){
    if(this.state.value === this.state.questions[0].correct_answer){
      alert("Your answer was " + this.state.value + " - Your answer is correct!")
    } else{ 
      alert("Your answer was " + this.state.value + " - Wrong Answer!")
    }
  }

  handeSubmit = (e) => {
    e.preventDefault();
    this.checkAnswer()
  }
 
  render() {
    return (
      <main>
        <div className={styles.container}>
          <h1>{this.state.questions[0].question}</h1>
          <p>A: {this.state.questions[0].answer_a}</p>
          <p>B: {this.state.questions[0].answer_b}</p>
          <p>C: {this.state.questions[0].answer_c}</p>
          <p>D: {this.state.questions[0].answer_d}</p>
          <form onSubmit={this.handeSubmit} className={styles.form}>
            <input
              className={styles.answer}
              type="text"
              placeholder="Type your answer e.g Spaghetti or Pizza etc."
              onChange={this.handleInputChange}
            />
            <input
              className={styles.btn}
              type="submit"
              value="Submit your answer!"
            />
          </form>
        </div>
      </main>
    );
  }
}