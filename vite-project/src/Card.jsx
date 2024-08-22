import profilePic from './assets/neden.jpg'

function Card(){
    return(
        <div className="card">
           <img src={profilePic} alt="profile picture"></img>
            <h2>NeDen</h2> 
            <p>I make Telegram Chanel </p>
        </div>
    );
}

export default Card