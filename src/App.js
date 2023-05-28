// import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './context/Themes';
import GlobalStyle from './globalStyles';

import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import MainPage from './pages/MainPage';
import MySkillsPage from './pages/MySkillsPage';
import WorkPage from './pages/WorkPage';
import SoundBar from './components/UI/SoundBar';

function App() {
  const location = useLocation()

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <SoundBar />
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route index element={<MainPage />} />
            <Route path='about' element={<AboutPage />} />
            <Route path='blog' element={<BlogPage />} />
            <Route path='work' element={<WorkPage />} />
            <Route path='skills' element={<MySkillsPage />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
