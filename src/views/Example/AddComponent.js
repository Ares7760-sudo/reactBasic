import React from 'react';

class AddComponent extends React.Component {

    state = {
        title: '',
        salary: ''
    }

    handleChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        //event.preventDefault()
        console.log(">>>>>Check data input", this.props);
        if(!this.state.title || !this.state.salary) {
            alert("Missing required params");
            return;
        }

        //alert("Title Job : " + this.state.titleJob + "; Salary : " + this.state.salary)
        this.props.addNewJob({
            id: Math.floor(Math.random()*1111),
            title: this.state.title,
            salary: this.state.salary
        });

        this.setState({
            title: '',
            salary:''
        })
    } 

    render(){
        return(
            <>
                <form>
                    <label>Title Job : </label><br/>
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={(event)=>this.handleChangeTitleJob(event)}
                    /><br/>
                    <label>Salary : </label><br/>
                    <input
                        type="text"
                        value={this.state.salary}
                        onChange={(event)=>this.handleChangeSalary(event)}
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

export default AddComponent;
