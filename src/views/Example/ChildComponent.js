import React from 'react';
import "./demo.css";

class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }

    handleShowButton = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleDeleteJob = (job) => {
        console.log(">>>>>parameter : ", job);
        this.props.deleteAJob(job);
    }

    render() {
        let {arrJobs} = this.props;
        let {showJobs} = this.state;
        return(
            <>
                { showJobs === false ?
                <div>
                    <button
                        className='btnShow'
                        onClick={()=>this.handleShowButton()}
                    >Show</button>
                </div>
                :
                <>
                <div className='job-list'>
                {
                    arrJobs.map((item, index) => {
                        return(
                            <div key={item.id}>
                                {item.title} - {item.salary}$ &nbsp <span
                                onClick={()=>this.handleDeleteJob(item)}
                                >[x]</span>
                            </div>
                        )
                    })
                }
                </div>
                <div>
                    <button
                        onClick={()=>this.handleShowButton()}
                    >Hide</button>
                </div>
                </>
                }
            </>
        )
    }
}

export default ChildComponent;