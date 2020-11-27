import React, { Component } from 'react'  
import Carousel from 'react-bootstrap/Carousel'  
  

export class BootstrapCarousel extends Component {  

        render() {  

                return (  

                        <div>  

                         <div className='container-fluid' >  

                          <div className="row title" style={{ marginBottom: "20px" }} >  

                          <div className="col-sm-12 btn btn-primary">  

                          Welcome to E-Shop

                         </div>  

                         </div>  

                         </div>  

                         <div className='container-fluid' >  

                         <Carousel interval={600} keyboard={false} >  

                         <Carousel.Item style={{'height':"300px"}}  >  

                         <img style={{'height':"300px"}}  
                         className="d-block w-100"  

                         src={'assets/img/img1.jpg'}    />   

                           <Carousel.Caption>  

                             <h3>First Demo </h3>  
                                 </Carousel.Caption>  

                                 </Carousel.Item  >  

                                 <Carousel.Item style={{'height':"300px"}}>  

                                 <img style={{'height':"300px"}}  

                                   className="d-block w-100"  

                                    src={'assets/img/img1.jpg'}    />  

                                       <Carousel.Caption>  

                                   <h3>Second Demo</h3>  

                                      </Carousel.Caption>  

                                         </Carousel.Item>  

                                       <Carousel.Item style={{'height':"300px"}}>  

                                       <img style={{'height':"300px"}}  

                                        className="d-block w-100"  

                                         src={'assets/img/img3.jpg'}   />  

                                        <Carousel.Caption>  

                                          <h3>Third Demo</h3>  

                                          </Carousel.Caption>  

                                         </Carousel.Item>  

                                        </Carousel>  

                                </div>  

                        </div>  

                )  

        }  

}  

  

export default BootstrapCarousel  