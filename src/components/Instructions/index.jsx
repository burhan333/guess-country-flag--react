import React from "react"

const Instructions = ({ setStep }) => {

    const close = () => {
        console.log('loading...');
        window.open('https://www.google.com', '_blank')
    }

    window.onunload = close;

    return (
        <React.Fragment>
            <h1>INSTRUCTIONS</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, magnam provident voluptas aliquid fuga quibusdam saepe rem voluptatum odit error.</p>
            <button onClick={() => setStep(1)}>OKAY</button>
            <button onClick={close}>CLOSE</button>
        </React.Fragment>
    )
}

export default Instructions