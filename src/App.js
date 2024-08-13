import logo from './logo.svg';
import './App.css';
import Users from './Users';
import QuestionsList from './QuestionsList';

function App() {
  return (
    <div className="App">
            <header className="App-header">
                <h1>My React App</h1>
                <QuestionsList />
            </header>
        </div>
  );
}

export default App;
