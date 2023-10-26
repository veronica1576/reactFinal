import {Link} from "react-router-dom";
//import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/MainNavBar.css';
import 'bootstrap/dist/css/bootstrap.css';
import $ from "jquery";

const MainNavbar = ()=>{
    
    $(document).ready(function() {
        "use strict";
          $('.gallery-slider').slick({
              slidesToShow: 5,
              slidesToScroll: 3,
              autoplay: false,
              dots: true,
              autoplaySpeed: 2000,
              arrows: false,
              responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                  }
                },
                {
                  breakpoint: 575,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]
          });
          
          $(".navbar-button").click(function(e){
              e.stopPropagation();
              $(".header").toggleClass("open");
              $(".navbar-button").toggleClass("collapsed");
          });
      
          function closeMenu() {
            $(".header").removeClass("open");
            $(".navbar-button").addClass("collapsed"); 
          }
      
          $(".navbar .navbar-nav > .nav-item > a.nav-link").click(function(e){
            e.stopPropagation();
            closeMenu();     
          });
      
          $("html").click(function(e) {
            closeMenu();
          });
      
          $('.single-page-nav').singlePageNav({
              filter: ':not(.external)',
              updateHash: true
          });
      });
    
    return (
       
<header className="header order-last" id="tm-header">
            <Navbar className="navbar">
                <Nav className="collapse navbar-collapse single-page-nav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="#section-1"><span className="icn"><i className="fab fa-drupal"></i></span>
                                Game</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#section-2"><span className="icn"><i
                                        className="fab fa-github-alt"></i></span> Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#section-3"><span className="icn"><i
                                        className="far fa-chart-bar"></i></span> Ranking</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#section-4"><span className="icn"><i
                                        className="far fa-2x fa-comments"></i></span> Contact</Link>
                        </li>
                    </ul>
                </Nav>

            </Navbar>


            <button className="navbar-button collapsed" type="button">
            <span className="menu_icon">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </span>
        </button>
        </header>

    

    );
};



export default MainNavbar;



