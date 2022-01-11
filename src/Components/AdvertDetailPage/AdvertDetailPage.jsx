import React, { useEffect,useRef } from 'react'
import '../../Stylesheet/AdvertDetailPage.css'
import { PageHeader } from 'antd';


function AdvertDetailPage() {


    let slideIndex = 1;


    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
   

    function showSlides(n) {
        let i;
        
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        captionText.innerHTML = dots[slideIndex - 1].alt;
    }


    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("demo");
    const captionText = document.getElementById("caption");
    console.log(slides)
    showSlides(slideIndex);
    
    return (
        <div className='advert-detail-page-component'>
            <div className='images-and-price-card'>
                <div className='images-slideshow'>
                    <div className="container">
                        <div className='mySlides'>
                            <div className="numbertext">1 / 6</div>
                            <img src="img_woods_wide.jpg" style="width:100%" />
                        </div>
                        
                        <a className="prev" onclick={plusSlides(-1)}></a>
                        <a className="next" onclick={plusSlides(1)}></a>
                        <div className="caption-container">
                            <p id="caption"></p>
                        </div>
                        <div className="row">
                            <div className="column">
                                <img className="demo cursor" src="img_woods.jpg" style="width:100%" onclick={currentSlide(1)} alt="The Woods" />
                            </div>
                            <div className="column">
                                <img className="demo cursor" src="img_5terre.jpg" style="width:100%" onclick={currentSlide(2)} alt="Cinque Terre" />
                            </div>
                            <div className="column">
                                <img className="demo cursor" src="img_mountains.jpg" style="width:100%" onclick={currentSlide(3)} alt="Mountains and fjords" />
                            </div>
                            <div className="column">
                                <img className="demo cursor" src="img_lights.jpg" style="width:100%" onclick={currentSlide(4)} alt="Northern Lights" />
                            </div>
                            <div className="column">
                                <img className="demo cursor" src="img_nature.jpg" style="width:100%" onclick={currentSlide(5)} alt="Nature and sunrise" />
                            </div>
                            <div className="column">
                                <img className="demo cursor" src="img_snow.jpg" style="width:100%" onclick={currentSlide(6)} alt="Snowy Mountains" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='properties-area'>

            </div>
        </div>
    )
}

export default AdvertDetailPage
