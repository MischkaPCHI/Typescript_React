import "./App.css";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from 'components/Layout/Layout';
import About from 'pages/About/About';
import Home from 'pages/Home/Home';
import Users from 'pages/Users/Users';
//Lessons
// import Lessons06 from "./lessons/Lessons06/Lessons06";
// import Lesson08 from "lessons/Lesson08/Lesson08";
// import Lesson10 from "lessons/Lesson10/Lesson10";

//Homewok
// import Homework07 from "homeworks/Homework07/Homework07";
// import Homework08 from "homeworks/Homework08/Homework08";
// import Homework09 from "homeworks/Homework09/Homework09";
import Homework11 from "homeworks/Homework11/Homework11";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/users' element={<Users />} />
          <Route path='*' element='Page Not Found'/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
