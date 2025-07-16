import ReactDOM from "react-dom/client"
import React from "react"
import Loading from './react-loading';

export function Main() {
    return (
        <>
            <p>teste</p>
            <Loading color="#000" height="20%" width="20%"/>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />)