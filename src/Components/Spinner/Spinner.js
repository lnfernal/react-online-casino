import { iconClasses } from "@mui/material";
import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.pauseRef = React.createRef();
  }
  state = {
    oldSlide: 0,
    activeSlide: 0,
    activeSlide2: 0
  };
  play() {
    this.slider.slickPlay();
  }
  pause(currentSlide) {
    this.slider.slickPause();
    var res = currentSlide.pop()
    // console.log(res)
    if(res==2){ this.props.parentCallback({
      value: 0,
      res: res,
      spinner: this.props.spinner
    }) }
    else if(res==3){ this.props.parentCallback({
      value: 1,
      res: res,
      spinner: this.props.spinner
    }) }
    else{
      this.props.parentCallback({
        value: res+2,
        res: res,
        spinner: this.props.spinner
      })
    }
    
    // this.props.parentCallback({
    //   value: res,
    //   spinner: this.props.spinner
    // })

  }
  handleSpin(){
    this.play();
    // setTimeout(() => this.pauseRef.current.click(), Math.floor((Math.random()*3000) + 1500)); 
    setTimeout(() => this.pauseRef.current.click(), 2000); 

  }

  runTestCase(){
    this.slider.slickGoTo(1)
  }
  
  render() {
    const currentSlide = []

    const settings = {

      autoplay: false,
      autoplaySpeed: 100,
      speed: 100,
      arrows: false,
      
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      initialSlide: Math.floor( Math.random() * 4 ),
      afterChange: current => currentSlide.push(current)

    };

    const icons = this.props.icons


    return (
      <div className='spinner-container'>
        <Slider ref={slider => (this.slider = slider)} {...settings}>

          {
            icons.map(item => {
              return(
                <div key={item.id}>
                  <h2>{item.id}</h2>
                </div>
              )
            })
          }

        </Slider>
        <div style={{ textAlign: "center" }}>
          <button className="button" style={{opacity: 0}} ref={this.pauseRef} onClick={() => this.pause(currentSlide)}>
            Pause
          </button>
        </div>
      </div>
    );
  }
}