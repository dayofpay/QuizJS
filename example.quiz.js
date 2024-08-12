const initQuiz = () => {
    const QUIZ_DATA = {
        quiz_name: 'Example quiz',
        quiz_content: [{
            questions: ['PSKK22', 'AA988'],
            correct_options: [{
                PSKK22: 'KKSJ2',
                AA988: 'KSJ3S',
            }],
            question_content: {
                PSKK22: 'Test question 1',
                AA988: 'Test question 2',
            },
            outputs: {
                PSKK22: {
                    KKSJ2: 'Answer one',
                    KKSJ3: 'Answer two',
                    KKSJ4: 'Answer three',
                },
                AA988: {
                    KSJ2S: 'Answer one',
                    KSJ3S: 'Test',
                }
            }
        }]
    }

    const questions = QUIZ_DATA.quiz_content[0].questions;

    for (let question of questions) {
        console.log(`Possible answers of question ${QUIZ_DATA.quiz_content[0].question_content[question]} : ${Object.values(QUIZ_DATA.quiz_content[0].outputs[question])}`);
        
        // Access the correct option for the current question
        const correctAnswerKey = QUIZ_DATA.quiz_content[0].correct_options[0][question];
        
        console.log(`Correct answer for question ${QUIZ_DATA.quiz_content[0].question_content[question]}: ${QUIZ_DATA.quiz_content[0].outputs[question][correctAnswerKey]}`);
    }
}

initQuiz();
