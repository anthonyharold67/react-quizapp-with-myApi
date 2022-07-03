
import './App.css';
import AppRouter from './app-router/AppRouter';
import AuthContextProvider from './contexts/AuthContext';
import QuizContextProvider from './contexts/QuizContext';

function App() {
  
  return (
    <div className="App">
      <AuthContextProvider>
      <QuizContextProvider>
        <AppRouter />
      </QuizContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
