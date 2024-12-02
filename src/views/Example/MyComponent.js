import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {
    state = {
        arrJobs: [{id:'job1', title:'Developer', salary:'1000'},
            {id:'job2', title:'Tester', salary:'2000'},
            {id:'job3', title:'PM', salary:'3000'}
        ]
    }

    addNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item=>item.id !== job.id);
        this.setState({
            arrJobs: currentJobs
        })
    }

    render() {
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />
                <ChildComponent 
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />
            </>
        )
    }
}

export default MyComponent;