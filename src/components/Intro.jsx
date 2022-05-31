import React, { Component } from 'react';

export default class Intro extends Component {
	render() {
		return (
      <section id="intro">   
        <div className="intro-overlay" />	
        <div className="intro-content">
          <div className="row">
            <div className="col-twelve">
              <h5>Hello, World.</h5>
              <h1 style={{fontSize: '84px'}}>I'm Juan Dela Cruz.{this.props.nome}</h1>
              <p className="intro-position">
                <span>Front-end Developer</span>
                <span>UI/UX Designer</span> 
              </p>
              <a className="button stroke smoothscroll" href="#about" title>More About Me</a>
            </div>  
          </div>   		 		
        </div> {/* /intro-content */} 
        <ul className="intro-social">        
          <li><a href="#"><i className="fa fa-facebook" /></a></li>
          <li><a href="#"><i className="fa fa-behance" /></a></li>
          <li><a href="#"><i className="fa fa-twitter" /></a></li>
          <li><a href="#"><i className="fa fa-dribbble" /></a></li>
          <li><a href="#"><i className="fa fa-instagram" /></a></li>
        </ul> {/* /intro-social */}      	
      </section>
    )
	}
}


