import React from "react";
import "./Quiz.css";

export default class Quiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [
        {
          id: 1,
          questionText: "What is the capital of France?",
          answerOptions: [
            { answerText: "New York", isCorrect: false },
            { answerText: "London", isCorrect: false },
            { answerText: "Paris", isCorrect: true },
            { answerText: "Dublin", isCorrect: false },
          ],
        },
        {
          id: 2,
          questionText: "Who is CEO of Tesla?",
          answerOptions: [
            { answerText: "Jeff Bezos", isCorrect: false },
            { answerText: "Elon Musk", isCorrect: true },
            { answerText: "Bill Gates", isCorrect: false },
            { answerText: "Tony Stark", isCorrect: false },
          ],
        },
        {
          id: 3,
          questionText: "The iPhone was created by which company?",
          answerOptions: [
            { answerText: "Apple", isCorrect: true },
            { answerText: "Intel", isCorrect: false },
            { answerText: "Amazon", isCorrect: false },
            { answerText: "Microsoft", isCorrect: false },
          ],
        },
        {
          id: 4,
          questionText: "How many Harry Potter books are there?",
          answerOptions: [
            { answerText: "1", isCorrect: false },
            { answerText: "4", isCorrect: false },
            { answerText: "6", isCorrect: false },
            { answerText: "7", isCorrect: true },
          ],
        },
      ],
      currentQuestion: 0,
      showScore: false,
      score: 0,
    };
  }

  clickHandler(isCorrect) {
    if (isCorrect) {
      this.setState((prevState) => {
        return {
          score: prevState.score + 1,
        };
      });
    }

    if (this.state.questions.length === this.state.currentQuestion + 1) {
      this.setState({ showScore: true });
    } else {
      this.setState((prevState) => {
        return {
          currentQuestion: prevState.currentQuestion + 1,
        };
      });
    }
  }

  render() {
    return (
      <div className="app">
        {this.state.showScore ? (
          <div className="score-section">
            You scored {this.state.score} out of 4
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {this.state.currentQuestion + 1}</span>/
                {this.state.questions.length}
              </div>
              <div className="question-text">
                {this.state.questions[this.state.currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {this.state.questions[
                this.state.currentQuestion
              ].answerOptions.map((answer) => (
                <button
                  onClick={this.clickHandler.bind(this, answer.isCorrect)}
                >
                  {answer.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    );
  }
}