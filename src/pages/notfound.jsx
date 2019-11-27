import React from 'react'

class Notfound extends React.Component {
    state = {  }
    render() { 
        return (
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>Oops!</h1>
                        <h2>404 - The Page can't be found</h2>
                    </div>
                    <a href="http://localhost:3000/">Go TO Homepage</a>
                </div>
            </div>
        );
    }
}
 
export default Notfound;