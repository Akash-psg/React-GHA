// src/QuestionsList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuestionsList = () => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Replace with your API endpoint
        const fetchQuestions = async () => {
            try {
                const response = await axios.get('https://spring-ftbnfyc5epdqambs.southindia-01.azurewebsites.net/api/questions');
                setQuestions(response.data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchQuestions();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Questions List</h1>
            <ul>
                {questions.map((question) => (
                    <li key={question.id}>
                        <div>
                            <strong>Question:</strong> {question.questionText}
                        </div>
                        <div>
                            <strong>Options:</strong>
                            <ul>
                                {question.options.split(',').map((option, index) => (
                                    <li key={index}>{option}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <strong>Correct Answer:</strong> {question.correctAnswer}
                        </div>
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QuestionsList;
//done