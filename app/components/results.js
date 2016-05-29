import React, {Component} from 'react';
import _ from 'lodash';

class Results extends Component {
    render() {
        var percent = (this.props.score / this.props.questions.length) * 100;

        var messages = [
            {txt: "Awesome Job!", score: 80},
            {txt: "Good Job!", score: 70},
            {txt: "Pretty bad", score: 60},
            {txt: "Time to get a different job!", score: 0}
        ];

        var message = _.find(messages, msg => {
            return percent >= msg.score;
        }).txt;

        return(
            <div className="well">
                <h4>You got {this.props.score} out of {this.props.questions.length} correct.</h4>
                <h1>{percent}% - {message}</h1>
                <hr/>
                <a href="/">Take Again</a>
            </div>
        )
    }
}

export default Results;