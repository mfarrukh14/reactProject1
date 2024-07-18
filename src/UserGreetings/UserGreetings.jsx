import styles from './UserGreetings.module.css'
import PropTypes from 'prop-types';


function UserGreetings(props){

const welcomeMessage = <h2 className={styles.welcome}>
                        Welcome Back {props.username}, Date: {new Date().getFullYear()}
                        </h2>

const loginPrompt = <h2 className={styles.login}>
                    Please Login to continue!
                    </h2>

return(props.isLoggedIn ? welcomeMessage : loginPrompt);

}


UserGreetings.propTypes = {
    username: PropTypes.string,
    isLoggedIn: PropTypes.bool,
}

UserGreetings.defaultProps = {
    username: "Guest",
    isLoggedIn: false,
}

export default UserGreetings