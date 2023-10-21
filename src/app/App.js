import React from "react";
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import NewQuizForm from "../components/NewQuizForm";
import NewTopicForm from "../components/NewTopicForm";
import Topics from "../features/topics/Topics";
import Topic from "../features/topics/Topic";
import Quiz from "../features/quizzes/Quiz";
import Quizzes from "../features/quizzes/Quizzes";
import AppLayout from "./AppLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<AppLayout/>}>
    <Route path="topics" element={<Topics/>}/> {/* * Users can view all topics * Users can click on an individual topic and be redirected to the page for that topic */}
    <Route path="topics/new" element={<NewTopicForm/>}/>{/* Users can create topics */}
    <Route path="topics/:topicId" element={<Topic/>}/> {/* Users can view an individual topic and all quizzes for that topic * Users can click on a quiz associated with a topic and be redirected to that quiz’s page */}
    <Route path="quizzes" element={<Quizzes/>}/> {/* Users can view all quizzes * Users can click on an individual quiz and be redirected to that quiz’s page */}
    <Route path="quizzes/new" element={<NewQuizForm/>}/>{/* Users can create quizzes that are associated with topics and contain lists of flashcards * Users can add and remove card fields in the new quiz form */}
    <Route path="quizzes/:quizId" element={<Quiz/>}/>{/* Users can view an individual quiz and flip cards over */}
  </Route>
      </Routes>
    </BrowserRouter>
  )
}

