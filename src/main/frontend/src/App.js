
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/_Layout';
import DivCalc from "./page/DividendCalculator";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/divcalc" element={<DivCalc />} />
                    <Route path="/" element={<Main />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

