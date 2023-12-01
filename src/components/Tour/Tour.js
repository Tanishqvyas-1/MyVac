import React, { Component } from 'react'
import './Tour.scss'
export default class Tour extends Component {
    state={
        showInfo:false
    }
    handleInfo=()=>{
        this.setState({
            showInfo: !this.state.showInfo
        })
    }
  render() {
    const{city, img,name,info}=this.props.tour
    return (
      <>
      <article>
         <div className="img-container">
            <img src={img} width='270px' alt="" />
         </div>
         <div className="tourinfo">
            <h3>{city}</h3>
            <h4>{name}</h4>
            <h5>info<span onClick={this.handleInfo}><img src="squaredown.png" alt="" /></span></h5>
            {this.state.showInfo&&<p>{info}</p>}
            
         </div>
      </article>
      </>
    )
  }
}

