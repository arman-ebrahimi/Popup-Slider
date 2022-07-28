import dataSlider from "./dataSlider";
import EndPage from "./endPage";
import NextBtn from "./nextBtn";
import {useState} from "react";

const Slider = () => {

    const [sliderIndex, setSlideIndex] = useState(1);
    const limit = dataSlider.length + 1;

    const moveNext = () => {
        setSlideIndex(sliderIndex + 1);
    }
    const moveDot = (index) => {
        setSlideIndex(index);
    }
    const goToFirstSlide = () => {
        setSlideIndex(1);
    }

        return(
            <div className={sliderIndex === limit ? 'smallSlide' : 'slider'}>
                {sliderIndex === limit ? <EndPage goToFirstSlide={goToFirstSlide} /> :
                    dataSlider.map((item, index) => {
                        return(
                            <div key={item.id} className={sliderIndex === index+1 ? "slides active" : "slides"}>
                                <div className="left">
                                    <h1>{item.title}</h1>
                                    <h3>{item.body}</h3>
                                </div>
                                <div className="right">
                                    <video src={`./video/video${index+1}.mp4`} muted autoPlay loop>
                                    </video>
                                </div>
                            </div>
                        )
                    })
                }

                {sliderIndex === limit ?
                    <a href="https://www.duolingo.com/"><button className="btnFinish">Start Learning</button></a> :
                    <NextBtn moveNext={moveNext} moveDot={(index) => moveDot(index)} sliderIndex={sliderIndex} />
                }
            </div>
        );
    }

export default Slider;