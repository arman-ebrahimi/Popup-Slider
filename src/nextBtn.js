const NextBtn = ({moveNext, moveDot, sliderIndex}) => {
    return(
        <div>
            <button className="btn" onClick={moveNext}>Next</button>
            <div className="dotContainer">
                {Array.from({length: 5}).map((item, index) => (
                        <div
                            className={sliderIndex === index + 1 ? "dot activeDot" : "dot"}
                            onClick={() => moveDot(index+1)}
                        >
                        </div>
                )
                )}
            </div>
        </div>
    )
}

export default NextBtn;