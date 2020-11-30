import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import  '../App.css'


const Footer = () =>{


    return( 
   
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 center">
              <h4>Footer</h4>
              <ul className="list-unlisted">
                <li>This is a text</li>
                <li>This is a text</li>
                <li>This is a text</li>
                <li>This is a text</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 center">
              <h4>Footer1</h4>
              <ul className="list-unlisted">
                <li>This is a text</li>
                <li>This is a text</li>
                <li>This is a text</li>
                <li>This is a text</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 center">
              <h4>Footer2</h4>
              <ul className="list-unlisted">
                <li>This is a text</li>
                <li>This is a text</li>
                <li>This is a text</li>
                <li>This is a text</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
                Copyright illusion3
            </div>           
          </div>
        </div>
    </div>
        
    
    
    
    )

}

export default Footer;