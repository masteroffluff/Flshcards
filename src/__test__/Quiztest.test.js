// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
//import NewTopicForm from "../components/NewTopicForm";
import App from '../app/App'
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from './test-utils';
import { BrowserRouter, Router } from 'react-router-dom';

import NewQuizForm from "../components/NewQuizForm";
import NewTopicForm from "../components/NewTopicForm";
import Topics from "../features/topics/Topics";
import Topic from "../features/topics/Topic";
import Quiz from "../features/quizzes/Quiz";
import Quizzes from "../features/quizzes/Quizzes";



import reducer, { addQuiz } from '../features/quizzes/quizzesSlice'

it("should import the default state", () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
        quizzes:{}
    })
});

