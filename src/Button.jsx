
function Button()
{

    const styles = {
            borderRadius: "5px",
            border: "none",
            backgroundColor: "hsl(200,100%,70%)",
            color: "white",
            padding: "10px 20px",
            cursor: "pointer",
    }

    return(
        <button style={styles}>Click Me</button>
    );
}

export default Button