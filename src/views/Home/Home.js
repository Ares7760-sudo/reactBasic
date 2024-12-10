import React from 'react';
import { connect } from 'react-redux';
import Color from '../HOC/Color';
import logo from '../../assets/images/logo_1.png';

class Home extends React.Component {
    
    handleDeleteUser = (user) => {
        this.props.deleteUserRedux(user)
    }

    handleAddUser = () => {
        this.props.addUserRedux()
    }

    render () {
        console.log('>>>>:', this.props.dataRedux);
        let listUsers = this.props.dataRedux;

        return(
            <>
            <h1>HELLO WORLD ^^ !
            </h1>
            <div>
                {listUsers && listUsers.length > 0 &&
                    listUsers.map((item, index) => {
                        return (
                            <div key={item.id}>
                                {index+1} - {item.name} <span
                                    onClick={()=>this.handleDeleteUser(item)}
                                >[x]</span>
                            </div>
                        )
                    })
                }
                <button
                    onClick={()=>this.handleAddUser()}>
                    Thêm người dùng
                </button>
            </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({type: 'DELETE_USER', payload: userDelete}),
        addUserRedux: () => dispatch({type: 'ADD_USER'})
    }
};

export default Color(connect(mapStateToProps, mapDispatchToProps)(Home));