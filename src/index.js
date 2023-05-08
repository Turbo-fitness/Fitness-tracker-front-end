import { createRoot } from 'react-dom/client'

const BasicComponentNameHere = () => { return ( <div> <p>Hello World!</p> </div> ) }

const appElement = document.getElementById("app")

const root = createRoot(appElement)


root.render(<BasicComponentNameHere />)