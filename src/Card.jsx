import ProfilePic from './assets/profile\.jpg'

function Card()
{
    return(
        <div className='card'>
            <img className='card-image' src={ProfilePic} alt="Profile picture" />
            <h2 className='card-title'>Hello World</h2>
            <p className='card-text'>This is a card I made using react and css as part of my learning.</p>
        </div>
    );
}

export default Card