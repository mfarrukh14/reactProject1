
export default function Button()
{
    let count = 0;
    const handleClick = (name) => {
        if (count < 3)
        {
            count++;
            console.log(`You clicked me ${count} time\s`);
        }

        else{
            console.log(`${name}, stop clicking me`);
        }
    }

    return(
        <button onClick={() => handleClick("Farrukh")}>Click Me</button>
    );

}
