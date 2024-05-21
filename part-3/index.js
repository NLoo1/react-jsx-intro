const Person = ({name, age, hobbies=[]}) => {
    let base = (<div>
        <p>Learn some information about this person:</p>
        <p><b>Name: </b>{name.length > 8 ? name.slice(0,6) : name }</p>
        <p><b>Age: </b>{age}</p>
        <h3>{age > 18 ? "Please go vote!" : "You must be 18"}</h3>

        <ul>
            {hobbies.map(hobby => <li>{hobby}</li>)}
        </ul>
    </div>)


    return base
}

const App = () => {
    return (
        <div>
            <div id="person">
                <Person name="Nick" age={23} hobbies={["gaming", "sleeping", "eating"]} />
            </div>
            <div id="person">
                <Person name="Small Nick" age={5} hobbies={["learning", "reading", "throwing tantrums"]} />
            </div>
            <div id="person">
                <Person name="Old Nick" age={900} hobbies={["yapping", "napping", "constipation"]} />
            </div>
        </div>
    )
}


ReactDOM.render(<App/>,
  document.getElementById("root"));