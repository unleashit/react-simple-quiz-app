import React, {Component} from 'react';
import questionData from '../../data/questions';
import QuestionList from './questionList';
import ScoreBox from './scoreBox';
import Results from './results';


require('../css/style.scss');

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: questionData,
            score: 0,
            current: 1
        }
    }

    setCurrent(current) {
        this.setState({current: current})
    }

    setScore(score) {
        this.setState({score: score})
    }

    render() {
        var scorebox = (this.state.current > this.state.questions.length) ? <Results {...this.state} /> : <ScoreBox {...this.state} />;
        return(
            <div>
                {scorebox}
                <QuestionList
                    {...this.state}
                    setCurrent={this.setCurrent.bind(this)}
                    setScore={this.setScore.bind(this)}
                    />
            </div>
        )
    }
}

App.propTypes = {

};

App.defaultProps =  {

};

export default App;