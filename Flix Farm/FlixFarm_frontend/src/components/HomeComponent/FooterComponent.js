import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";


const FooterPage = () => {
  return (
    <MDBFooter style={{backgroundColor: "black"}} className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-left text-md-left" style={{color: "white"}} >
        <MDBRow>
          <MDBCol md="4">
            <h5 className="title ml-5" >About Us</h5>
            <p align="justify" className='ml-5'> 
            MovieWeb is the world's leading streaming entertainment service with over 167 million paid memberships in over 190 countries enjoying TV series, documentaries and feature films across a wide variety of genres and languages. 
            </p>
          </MDBCol>
          <MDBCol md="2" className='ml-5'>
            <h5 className="title" >Genres</h5>
            <ul class="list-unstyled">
              <li className="list-unstyled">
                <a href="#!">Action</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Comedy</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Science fiction</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Thriller</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Drama</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3" className='ml-2'>
            <h5 className="title">Contact us</h5>
            <div>
              <FontAwesomeIcon icon="map-marked" color="#FFFFFF" /> &nbsp;
              <span>203 Fake St. Mountain View, <br></br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Boston, Massachusetts, <br></br>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  USA - 02215</span><br></br>

              <FontAwesomeIcon icon="phone-alt" color="#FFFFFF" /> &nbsp;
              <span>+1 789 456 1230</span><br></br>

              <FontAwesomeIcon icon="envelope" color="#FFFFFF" /> &nbsp;
              <a href="mailto:abhiwase1995@gamil.com">moviewweb@gmail.com</a>

              
            </div>
          </MDBCol>
          <MDBCol md="2" className='ml-1'>
            <h5 className="title" align="left">Follow us on</h5>
            <a href="https://www.youtube.com/"
              className="youtube social" style={{color: "#eb3223"}}>
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>&nbsp;&nbsp;
            <a href="https://www.facebook.com/"
              className="facebook social" style={{color: "#black"}}>
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>&nbsp;&nbsp;
            <a href="https://www.twitter.com/" 
              className="twitter social" style={{color: "#49a1eb"}}>
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>&nbsp;&nbsp;
            <a href="https://www.instagram.com/"
              className="instagram social" style={{color: "#eb3223"}}>
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid style={{color: "white"}}>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.netflix.com/"> MovieWeb.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;