import styles from './UserGreetings.module.css'
import PropTypes from 'prop-types'

function UserGreetings(props){


    const welcomeMessage = <h2 className={styles.welcome}>
                            Welcome {props.username}
                            </h2>

    const loginPrompt = <h2 className={styles.login}>
                        Please login to continue!
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