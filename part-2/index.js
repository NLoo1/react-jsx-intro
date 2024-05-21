const Tweet = ({username, name, date, message}) => {
    return (
        <div>
            <b><p>{username} ({name}) at {date}:</p></b>
            <p>{message}</p> 
        </div>
)
}

const App = () => {
    return (
        <div>
            <div class="tweet">
                <Tweet username="test1" name="Test1" date="5/20/2024" message="Test Message 1" />
            </div>
            <div class="tweet">
                <Tweet username="test2" name="Test2" date="5/20/2024" message="Test Message 2" />
            </div>
            <div class="tweet">
                <Tweet username="test3" name="Test3" date="5/20/2024" message="Test Message 3" />
            </div>
        </div>
    )
    
}

ReactDOM.render(<App/>,
  document.getElementById("root"));