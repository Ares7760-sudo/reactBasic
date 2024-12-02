import React from 'react';

class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }

    handleShowButton = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    render() {
        let {arrJobs} = this.props;
        let {showJobs} = this.state;
        return(
            <>
                { showJobs === false ?
                <div>
                    <button
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
                                {item.title} - {item.salary}$
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