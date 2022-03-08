const Sunday = () => {


    return (
        <>
            <div id="carousel" className="carousel slide ml-5 mr-5 mt-5" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carousel" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel" data-slide-to="1"></li>
                    <li data-target="#carousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://confessionsofabookgeek.files.wordpress.com/2014/11/fast-reading-gif.gif" alt="review-image" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://i.pinimg.com/originals/eb/b2/53/ebb2533fc574395a36c18c2795516d6b.gif" alt="rest-image" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://cdn.dribbble.com/users/99632/screenshots/12136783/media/1356c268d22e9c010c2c73c5567dea53.gif" alt="valo-image" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

            <div className="card mt-5  ml-5 mr-5">
                <div className="card-header">
                </div>
                <div className="card-body">
                    <h5 className="reviewText2">Review</h5>
                    <p className="card-text">After finishing my daily routine which is taking a bath, eating breakfast and brushing my teeth, I also viewed some notes to help me refresh my memory and also tried to modified the last excersice I made. Which also turns out good.</p>
                </div>
            </div>
            <div className="card mt-5  ml-5 mr-5">
                <div className="card-header">
                </div>
                <div className="card-body">
                    <h5 className="restText2">Rest</h5>
                    <p className="card-text">As soon as Im done modifying my previous excersice from Sir Jhun, I immediately took some rest, take a bath and just chill for a moment thinking about life choices.
                    </p>
                </div>
            </div>
            <div className="card mt-5 ml-5 mr-5">
                <div className="card-header">
                </div>
                <div className="card-body">
                    <h5 className="valorantText2">Valorant</h5>
                    <p className="card-text">Lastly, I played some valorant with my friends to chill and release some tension. Again, valorant is my happy pill and when I'm stress, having problems and overthinking, I play valorant to forget all the things that go through my mind.</p>
                </div>
            </div>
        </>
    );
}

export default Sunday;
