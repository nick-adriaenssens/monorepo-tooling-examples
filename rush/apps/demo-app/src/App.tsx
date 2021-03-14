import React from 'react';
import './App.css';
import { Panel } from "@my-org/panel";

function App() {
    return (
        <div className="App">
            <Panel title="Header">
                <div>Content</div>
            </Panel>

{/*            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>*/}
        </div>
    );
}

export default App;
