// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react'
//import NewTopicForm from "../components/NewTopicForm";
import App from '../app/App'
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from './test-utils';
import { BrowserRouter} from 'react-router-dom';
import { useSelector } from "react-redux";

import NewQuizForm from "../components/NewQuizForm";
import NewTopicForm from "../components/NewTopicForm";
import Topics from "../features/topics/Topics";
import Topic from "../features/topics/Topic";
import Quiz from "../features/quizzes/Quiz";
import Quizzes from "../features/quizzes/Quizzes";



import reducer, { addTopic,addQuizId } from '../features/topics/topicsSlice.js'

it('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual({
    topics:{}
})
})

it('should handle a topic being added', () => {
  const previousState = {topics:{}}
  const payloadObject = {id: '123', name: 'example topic', icon: 'icon url'}
  const resultObject =  {
    topics:{
      '123': {
        id: '123',
        name: 'example topic',
        icon: 'icon url',
        quizIds: []
      }
    }}
  


  expect(reducer(previousState, addTopic(payloadObject))).toEqual(resultObject)
})

it('should add a quiz id to the list of quiz ids',()=>{
  const previousState =  {
    topics:{
      '123': {
        id: '123',
        name: 'example topic',
        icon: 'icon url',
        quizIds: []
      }
    }}
  const resultObject =  {
    topics:{
      '123': {
        id: '123',
        name: 'example topic',
        icon: 'icon url',
        quizIds: ['456']
      }
    }} 
  const payloadObject = { id: '456', name: 'quiz name', topicId: '123', cardIds: ['1', '2', '3']}
  
  expect(reducer(previousState, addQuizId(payloadObject))).toEqual(resultObject)


})


it('should pick up entered topic',()=>{
  //const previousState = {topics:{}}
  const testName = "test 1";
  const testIcon = "https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/book.svg"
  //render (wrapper(<Topic />));
  //screen.debug();
  const {store} =renderWithProviders(<BrowserRouter><NewTopicForm /></BrowserRouter>);

  
  const topicName = screen.getByRole('textbox')
  const topicIcon = screen.getByRole('combobox')
  const topicButton = screen.getByRole('button')
  userEvent.type(topicName,testName)
  userEvent.selectOptions(topicIcon,testIcon)
  userEvent.click(topicButton)
  const topicState =  (store.getState().topics.topics)
  expect (Object.values(topicState)[0].name).toEqual("test 1")
}

)