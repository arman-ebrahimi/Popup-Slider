const EndPage = ({goToFirstSlide}) => {
    return(
        <div className="endPage">
            <h1>Enjoy Learning English</h1>
            <p>We recommend you click on below link and start learning English in Doulingo.com.<br/>Good Luck!</p>
            <button
                className="backToFirst"
                onClick={goToFirstSlide}
            >Back To First</button>
        </div>
    )
}

export default EndPage;