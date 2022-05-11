import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    const questions = [
        {
            countryFlag: 'Pakistan',
            correctAnswer: 'Pakistan',
            Options: ['Pakistan', 'India', 'Afghanistan', 'Sri Lanka']
        },
        {
            countryFlag: 'Zambia',
            correctAnswer: 'Zambia',
            Options: ['PNG', 'Zambia', 'SA', 'Bermuda']
        },
        {
            countryFlag: 'America',
            correctAnswer: 'America',
            Options: ['Canada', 'America', 'Brazil', 'Japan']
        },
        {
            countryFlag: 'Japan',
            correctAnswer: 'Japan',
            Options: ['Japan', 'China', 'Chile', 'Taiwan']
        },
        {
            countryFlag: 'Russia',
            correctAnswer: 'Russia',
            Options: ['Russia', 'Ukrain', 'Sweden', 'Poland']
        },
        {
            countryFlag: 'Pakistan',
            correctAnswer: 'Pakistan',
            Options: ['Pakistan', 'India', 'Afghanistan', 'Sri Lanka']
        },
        {
            countryFlag: 'Zambia',
            correctAnswer: 'Zambia',
            Options: ['PNG', 'Zambia', 'SA', 'Bermuda']
        },
        {
            countryFlag: 'America',
            correctAnswer: 'America',
            Options: ['Canada', 'America', 'Brazil', 'Japan']
        },
        {
            countryFlag: 'Japan',
            correctAnswer: 'Japan',
            Options: ['Japan', 'China', 'Chile', 'Taiwan']
        },
        {
            countryFlag: 'Russia',
            correctAnswer: 'Russia',
            Options: ['Russia', 'Ukrain', 'Sweden', 'Poland']
        },
        {
            countryFlag: 'Pakistan',
            correctAnswer: 'Pakistan',
            Options: ['Pakistan', 'India', 'Afghanistan', 'Sri Lanka']
        },
        {
            countryFlag: 'Zambia',
            correctAnswer: 'Zambia',
            Options: ['PNG', 'Zambia', 'SA', 'Bermuda']
        },
        {
            countryFlag: 'America',
            correctAnswer: 'America',
            Options: ['Canada', 'America', 'Brazil', 'Japan']
        },
        {
            countryFlag: 'Japan',
            correctAnswer: 'Japan',
            Options: ['Japan', 'China', 'Chile', 'Taiwan']
        },
        {
            countryFlag: 'Russia',
            correctAnswer: 'Russia',
            Options: ['Russia', 'Ukrain', 'Sweden', 'Poland']
        },
        {
            countryFlag: 'Pakistan',
            correctAnswer: 'Pakistan',
            Options: ['Pakistan', 'India', 'Afghanistan', 'Sri Lanka']
        },
        {
            countryFlag: 'Zambia',
            correctAnswer: 'Zambia',
            Options: ['PNG', 'Zambia', 'SA', 'Bermuda']
        },
        {
            countryFlag: 'America',
            correctAnswer: 'America',
            Options: ['Canada', 'America', 'Brazil', 'Japan']
        },
        {
            countryFlag: 'Japan',
            correctAnswer: 'Japan',
            Options: ['Japan', 'China', 'Chile', 'Taiwan']
        },
        {
            countryFlag: 'Russia',
            correctAnswer: 'Russia',
            Options: ['Russia', 'Ukrain', 'Sweden', 'Poland']
        },
        {
            countryFlag: 'Pakistan',
            correctAnswer: 'Pakistan',
            Options: ['Pakistan', 'India', 'Afghanistan', 'Sri Lanka']
        },
        {
            countryFlag: 'Zambia',
            correctAnswer: 'Zambia',
            Options: ['PNG', 'Zambia', 'SA', 'Bermuda']
        },
        {
            countryFlag: 'America',
            correctAnswer: 'America',
            Options: ['Canada', 'America', 'Brazil', 'Japan']
        },
        {
            countryFlag: 'Japan',
            correctAnswer: 'Japan',
            Options: ['Japan', 'China', 'Chile', 'Taiwan']
        },
        {
            countryFlag: 'Russia',
            correctAnswer: 'Russia',
            Options: ['Russia', 'Ukrain', 'Sweden', 'Poland']
        },
    ]

    useEffect(() => {
        const shuffle = questions.sort(() => Math.random() - 0.5)
        shuffle.forEach((item) => {
            item.Options.sort(() => Math.random() - 0.5)
        })
        console.log('shuffle before slice', shuffle);
        console.log('shuffle afer', shuffle.slice(0, 26));
    }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
