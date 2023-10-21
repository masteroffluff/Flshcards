// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import reducer, { addTopic } from './features/topics/topicsSlice.js'

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual({
    topics:{}
})
})

test('should handle a topic being added', () => {
  const previousState = []
    const payloadObject = {id: '123', name: 'example topic', icon: 'icon url'}
    const resultObject =  {topics:{
        '123': {
          id: '123',
          name: 'example topic',
          icon: 'icon url',
          quizIds: []
        }
      }}



  expect(reducer(previousState, addTopic(payloadObject))).toEqual(resultObject)
})

