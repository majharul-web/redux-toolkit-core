import logo from './logo.svg';
import './App.css';
import CounterView from "./features/counter/CounterView";
import PostView from "./features/post/postView";

function App() {
    return (
        <div className="App">
            <h3>Counter App </h3>
            <CounterView/>
            <PostView/>
        </div>
    );
}

export default App;
