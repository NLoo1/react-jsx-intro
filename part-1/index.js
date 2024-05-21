const FirstComponent = () => {
    return <p>My very first component</p>
}

const NamedComponent = (props) => {
    return <p>My name is {props.name}</p>
}

const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Nick" />
        </div>
    )
    
}

ReactDOM.render(<App/>,
  document.getElementById("root"));