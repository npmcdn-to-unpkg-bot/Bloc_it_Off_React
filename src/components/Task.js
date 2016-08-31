import React from 'react'
import Remarkable from 'remarkable'

class Task extends React.Component { 
    rawMarkup= function() {
            var md = new Remarkable();
            var rawMarkup = md.render(this.props.toString());
            return { __html: rawMarkup };
    } 
    
    render() {
        console.log(this.props.val)
        return(
            <div className="task">
                <h2 className="timeLeft"> 
                    Finish by {this.props.timeToComplete} 
                </h2> 
                <h3 className="userTask">
                    {this.props.userTask}
                </h3> 
                <span>
                    <button onClick={ ()=>{this.props.onRemove(this.props.val)} } className="btn btn-success"> Done </button>
                </span>
            </div>
        );

    }
}  

export default Task