// import React libraries
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import third-party libraries
import { ThemeProvider } from '@mui/material/styles';
import { axios, AxiosContext } from '../context/axios';

// import themes
import theme from '../theme/theme.js'

// import custom components
import PageLoder from './common/PageLoder';
import Navbar from './common/Navbar';
import Footer from './common/Footer';

import TopPage from './Top';
import StudentSigninPage from './student/SignIn';
import StudentRegisterPage from './student/Register';
import SchoolSigninPage from './school/SignIn';
import SchoolRegisterPage from './school/Register';
import SchoolSearchPage from './search/Search';
import SchoolInfoPage from './school/School';

import ChatListPage from './chat/List';
import ChatPage from './chat/Chat';

// import custom css
import '../css/common.css'

export default function App() {
  /**
   *  React States
   */
  const [isLoading, setIsLoading] = React.useState(true);

  /**
   *  Render the component
   */
  return (
    <AxiosContext.Provider value={axios}>
      <ThemeProvider theme={theme}>
        <PageLoder isLoading={isLoading} />
        <Navbar />
        <Router>
          <Routes>
            <Route path="/student/signin" element={<StudentSigninPage setIsLoading={setIsLoading} />} />
            <Route path="/student/register" element={<StudentRegisterPage setIsLoading={setIsLoading} />} />

            <Route path="/school/signin" element={<SchoolSigninPage setIsLoading={setIsLoading} />} />
            <Route path="/school/register" element={<SchoolRegisterPage setIsLoading={setIsLoading} />} />
            <Route path="/school/search" element={<SchoolSearchPage setIsLoading={setIsLoading} />} />
            <Route path="/school/info" element={<SchoolInfoPage setIsLoading={setIsLoading} />} />

            <Route path="/chat" element={<ChatListPage setIsLoading={setIsLoading} />} />
            <Route path="/chat/:id" element={<ChatPage setIsLoading={setIsLoading} />} />

            <Route path="/*" element={<TopPage setIsLoading={setIsLoading} />} />
          </Routes>
        </Router>
        <Footer />
      </ThemeProvider>
    </AxiosContext.Provider>
  )
}