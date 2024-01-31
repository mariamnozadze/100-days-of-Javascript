// quiz class
class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = 0;
        this.questionIndex = 0;
    }

    getQuestionIndex() {
        return this.questions[this.questionIndex]
    }

    guess(answer) {
        if(this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }

    isEnded() {
        return this.questionIndex === this.questions.length;
    }
}

// a question class
class question{
    constructor(text, choices, answer){
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer(choice) {
        return this.answer = choice;
    }
}