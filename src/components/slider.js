import React, {useState, useEffect} from 'react';

import { ReactComponent as NextBtn} from '../assets/right-arrow.svg';
import { ReactComponent as PrevBtn} from '../assets/left-arrow.svg';
import { FlexDiv } from '../styles/globalStylesComponent';

export default class Slider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            sliderWrapperWidth:null,
            sliderWidth:null
        }

        this.animateRequestId = null;
        this.setTimeOutId = null;

        // basic parameters of slider.
        this.parentWrapper = this.props.parentWrapper;
        this.targetSliderElem = null; // ==================> may be i need to put it into the componentDidMount.
        this.direction = -1;
        this.noOfSlides = this.props.data.gallery.length;
        this.sliderInitialLeftInset = 0;
        this.sliderMoveFromInitialPos = 0;

        // slider helper functions bindings.
        this.handleResize = this.handleResize.bind(this);
        this.timing= this.timing.bind(this);
        this.draw = this.draw.bind(this);
        this.animateSlider = this.animateSlider.bind(this);
    }

    // resize the slider elements just after the components mounts
    componentDidMount(){
        this.targetSliderElem =  document.querySelector(`${this.parentWrapper} .slider`);
        this.handleResize();
    }

    // add resize event handler and initiate the slider animation, after the component gets updated.
    componentDidUpdate(){
        window.addEventListener('resize', this.handleResize);
        this.setTimeOutId = setTimeout(()=>{
            this.animateRequestId = this.animateSlider(-1, 2000, 4000);
        },1000);
    }
    

    // handle the resizing of the slider items when changing the viewport or any kind of rotation detection.
    handleResize(){
        window.removeEventListener('resize', this.handleResize);    
        if(this.animateRequestId)
            cancelAnimationFrame(this.animateRequestId);
        
        if(this.setTimeOutId)
            clearTimeout(this.setTimeOutId);    

        // the sliderWrapperWidth should be equal to the width of the slider items as it is going to fit and display only one item at a time.
        let sliderWrapperWidth = document.querySelector(`${this.parentWrapper} .sliderWrapper`).offsetWidth;
        this.setState({
            sliderWrapperWidth,
            sliderWidth: sliderWrapperWidth * this.noOfSlides
        }, ()=>{
            this.sliderInitialLeftInset = 0;
            this.sliderMoveFromInitialPos = 0;
        });
    }

    // timing function for the animation function.
    timing(timeFraction){
        return Math.pow(timeFraction, 2); // this is a quad function
    }

    // drawing function that drives the slider items, simply by changing its left inset value.
    draw(progress){
        let newLeftShift = 0;
        newLeftShift = this.sliderInitialLeftInset + (this.direction * this.state.sliderWrapperWidth * progress);
        this.targetSliderElem.style.left = newLeftShift + 'px';
    }

    // main animation function.
    animateSlider(direction = -1,duration = 2000, delay = 3000){
        cancelAnimationFrame(this.animateRequestId);
        let start = performance.now();
        this.direction = direction;

        const animate = (time)=>{
            let timeFraction = (time - start) / duration;
            if(timeFraction > 1){
                timeFraction = 1;
            }
        
            // check if the slider items are at end or at the start so as to reverse the direction of sliding upon clicking next or prev.
            // basically it handles the occasional user control of the direction at the start and end of the slide.
            
            if(this.sliderMoveFromInitialPos >=(this.noOfSlides - 1) && this.direction === -1){
                cancelAnimationFrame(this.animateRequestId);
                this.direction = 1;
                this.animateRequestId = requestAnimationFrame(animate);
            }else if(this.sliderMoveFromInitialPos < 1 && this.direction === 1){
                cancelAnimationFrame(this.animateRequestId);
                this.direction = -1;
                this.animateRequestId = requestAnimationFrame(animate);
            }
        
            // get the time fraction since the start of the animation function and draw the slider item with respect to time fraction.
            let progress = this.timing(timeFraction);
            this.draw(progress);
        
            // check if the animation is still on, if not then change the direction and reset and track the "sliderMoveFromInitialPos" variable and continue animating.
            if(timeFraction < 1){
                cancelAnimationFrame(this.animateRequestId); // reset the previous animation frame request and call for new one.
                this.animateRequestId = requestAnimationFrame(animate);
            }else if(timeFraction === 1){
                cancelAnimationFrame(this.animateRequestId);
                if(this.direction === -1){
                    this.sliderMoveFromInitialPos ++;
                }else if(this.direction === 1){
                    this.sliderMoveFromInitialPos --;
                }
        
                // check if the slider items are finished or reached at the start so as to reverse the direction of sliding.
                // this happens automatically as it progress towards the end or start of the slide.
                if(this.sliderMoveFromInitialPos >= (this.noOfSlides - 1) || this.sliderMoveFromInitialPos < 1){
                    this.direction *= -1
                }
        
                // reserves the left inset position of the target slider element for next iteration.
                this.sliderInitialLeftInset = parseFloat(getComputedStyle(this.targetSliderElem).left);
                this.setTimeOutId = setTimeout(()=>{
                    start = performance.now();
                    this.animateRequestId = requestAnimationFrame(animate);
                    clearTimeout(this.setTimeOutId);
                }, delay);
            }
        }

        this.animateRequestId = requestAnimationFrame(animate);
        
    }

    render(){
        const images = this.props.data.gallery.map((item)=>{
            return(
                <div className="slider__item" key={item.altTxt} style={{width:`${this.state.sliderWrapperWidth}px`}}>
                    <img src={`data:image/jpeg;base64,${item.image}`}/>
                </div>
            )
        }); 
        return(
            <div className="slider-wrapper sliderWrapper" id="sliderWrapper">
                <FlexDiv position="absolute" alignItem="center" inset="0 0 0 0" Width="100%" Height="100%" style={{'zIndex':1}}>
                    <FlexDiv position="relative" justifyContent="flex-start" alignItem="center" Width="50%" Height="100%" >
                        <PrevBtn className="prevBtn" style={{width:"50px", height:"50px"}} onClick= {()=>this.animateSlider(1, 2000)}/>
                    </FlexDiv>
                    <FlexDiv position="relative" justifyContent="flex-end" alignItem="center" Width="50%" Height="100%"  >
                            <NextBtn className="nextBtn" style={{width:"50px", height:"50px"}} onClick= {()=>this.animateSlider(-1, 2000)}/>
                    </FlexDiv>
                </FlexDiv>
                <div className="slider" id="slider" style={{width:`${this.state.sliderWidth}px`}}>
                    {images}
                </div>
            </div>
        )
    }
}


