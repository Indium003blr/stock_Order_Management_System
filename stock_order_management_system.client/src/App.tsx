
import './App.css';
import Dashboard from './Dashboard';

interface Forecast {
    date: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

function App() {
   
    return (
<>
<Dashboard />
</>
    );
}

export default App;