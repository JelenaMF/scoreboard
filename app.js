const desc = 'I just learned how to create a React node and render it into the DOM.'
const myTitleId = 'main-title'
const Name = "Jelena"

const header = (
    <header>
        <h1 id={myTitleId}> {Name}'s First React Element </h1>
        <p> {desc} </p>
    </header>
    
)

ReactDOM.render(
    header, 
    document.getElementById('root')
);