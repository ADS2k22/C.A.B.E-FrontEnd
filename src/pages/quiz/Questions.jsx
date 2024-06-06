import React, { useState } from "react";
import { QuizData } from "../quizData/QuizData";
import { Button } from "primereact/button";

export default function Questions() {
    const [showResult, setShowResult] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);

    const changeQuestion = () => {
        if (currentQuestion < QuizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setClickedOption(0); // Resetar a opção selecionada para a próxima pergunta
        } else {
            setShowResult(true);
        }
    };

    const checkAnswer = (optionIndex) => {
        setClickedOption(optionIndex); // Atualiza a opção selecionada
        updateScore(); // Chama a função updateScore
    };

    const updateScore = () => {
        if (clickedOption === QuizData[currentQuestion].answer) {
            setScore(score + 1);
        }
    };

    const resetAll = () => {
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    };

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
                {showResult ? (
                    <QuestionResult score={score} totalScore={QuizData.length} tryAgain={resetAll} />
                ) : (
                    <>
                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }} className="question">
                            <span id="question-number">{currentQuestion + 1}</span>
                            <span id="question-text">{QuizData[currentQuestion].question}</span>
                        </div>

                        <div>
                            {QuizData[currentQuestion].options.map((option, i) => (
                                <Button
                                style={{ margin: '10px' }}
                                    key={i}
                                    className={`option-btn ${clickedOption === i + 1 ? "checked" : null}`}
                                    onClick={() => checkAnswer(i + 1)}
                                >
                                    {option}
                                </Button>
                            ))}
                        </div>
                        <Button label="Próxima" value="Next" id="next-button" onClick={changeQuestion} />
                    </>
                )
                }
            </div>
        </>
    );
}

// Definição básica do componente QuestionResult (adicione o conteúdo que você precisa)
const QuestionResult = ({ score, totalScore, tryAgain }) => {
    return (
        <div>
            <h2>Resultados</h2>
            <p>Sua pontuação: {score} de {totalScore}</p>
            <Button label="Tentar Novamente" onClick={tryAgain} />
        </div>
    );
};