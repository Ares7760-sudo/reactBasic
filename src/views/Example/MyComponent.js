import React from 'react';
import ChildComponent from './ChildComponent';

class MyComponent extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        arrJobs: [{id:'job1', title:'Developer', salary:'1000$'},
            {id:'job2', title:'Tester', salary:'2000$'},
            {id:'job3', title:'PM', salary:'3000$'}
        ]
    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = () => {
        alert("First name : " + this.state.firstName + "; Last name : " + this.state.lastName)
    } 

    render() {
        return (
            <>
                <form>
                    <label>First name : </label><br/>
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={(event)=>this.handleChangeFirstName(event)}
                    /><br/>
                    <label>Last name : </label><br/>
                    <input
                        type="text"
                        value={this.state.lastName}
                        onChange={(event)=>this.handleChangeLastName(event)}
                    /><br/>
                    <input 
                        type="button"
                        value="Submit"
                        onClick={()=>this.handleSubmit()}
                    />
                </form>
                <ChildComponent 
                    name={this.state.firstName}
                    age={1}
                    arrJobs={this.state.arrJobs}
                />
            </>
        )
    }
}

export default MyComponent;