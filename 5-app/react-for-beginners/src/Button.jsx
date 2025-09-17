import PropTypes from "prop-types"
import styles from "./Button.module.css"

function Button({text}) {
    
    console.log(styles); 
    // {btn: '_btn_fakxa_1'}

    return <button className={styles.btn}>
        {text}
    </button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Button; 