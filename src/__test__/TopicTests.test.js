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

import NewQuizForm from "../components/NewQuizForm";
import NewTopicForm from "../components/NewTopicForm";
import Topics from "../features/topics/Topics";
import Topic from "../features/topics/Topic";
import Quiz from "../features/quizzes/Quiz";
import Quizzes from "../features/quizzes/Quizzes";



import reducer, { addTopic,selectTopic } from '../features/topics/topicsSlice.js'

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual({
    topics:{}
})
})

test('should handle a topic being added', () => {
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


it('should pick up entered topic',()=>{
  const previousState = {topics:{}}
  const testName = "test 1";
  const testIcon = "https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/book.svg"
  //render (wrapper(<Topic />));
  //screen.debug();
  renderWithProviders(<NewTopicForm />);
  screen.debug();
  
/*   const topicName = screen.getByRole('textbox')
  const topicIcon = screen.getByRole('listbox', {name :'topic-icon'})
  userEvent.type(topicName,namen)
  userEvent.selectOptions(topicIcon,iconen)
   */
}

)