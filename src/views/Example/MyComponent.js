import React from 'react';

class MyComponent extends React.Component {
    state = {
        firstName: '',
        lastName: ''
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
            </>
        )
    }
}

export default MyComponent;