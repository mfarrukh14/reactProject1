export default function ProfilePicture()
{
    const imageURL = "./src/assets/profile.jpg";

    const handleClick = (e) => e.target.style.display = "none"

    return(
        <img src={imageURL} alt="profile pic" width={100} onClick={(e) => handleClick(e)}/>
    );
}