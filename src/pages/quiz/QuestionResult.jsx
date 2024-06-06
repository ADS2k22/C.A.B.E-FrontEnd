import React from "react";
import { Button } from "primereact/button";

export default function QuestionResult(props) {
    return(
        <>
        <div>
            Your Score:{props.score}<br/>
            Total Score:{props.totalScore}
        </div>
        <Button label="Nova Tentativa" onClick={props.tryAgain} />
        </>
    )
}