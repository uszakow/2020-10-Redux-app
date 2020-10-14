import { connect } from 'react-redux';
import Login from './../components/Login/Login';
import { logout, loginUser } from './../redux/loginActions';

const mapState = (state) => ({
    user: state.activeUser
});

const mapDispatch = (dispatch) => ({
    loginUserDto: (email) => dispatch(loginUser(email)),
    logoutUserDto: () => dispatch(logout())
})

export default connect(mapState, mapDispatch)(Login);