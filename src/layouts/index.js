import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, navigate, StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Swipeable from 'react-swipeable';
import Transition from '../components/transition';

import './index.css';
import './white-label.scss';

const Header = ({ name, title, date }) => (
  <header>
    <Link to="/1" className="">
      <div className="title"><span>{name}</span> {title}</div>
    </Link>
    <time>{date}</time>
  </header>
);

const Footer = ({ event, logo, sponsor }) => {
  /*var sponsorImg;
  if (sponsor) {
    sponsorImg = "<img src='"+sponsor+"' />"
  }*/

  return (
    <footer>
      <span className="code-font"><b>{event}</b></span>
      <span className="code-font">noBrand = digital<b>Community</b></span>
      <img src={logo} alt="logo" />
    </footer>
  )
};

const Elements1 = () => (

  <svg viewBox="0 0 44.58 28.54" className="e-svg1">
    <g id="Livello_2" data-name="Livello 2">
      <path d="M9.35,14.59,5.53,13.48l1-3.58a.53.53,0,0,0-.37-.66h0a.53.53,0,0,0-.66.36l-1,3.59L.66,12.08a.52.52,0,0,0-.64.35H0a.52.52,0,0,0,.36.65l3.81,1.1-1,3.58a.55.55,0,0,0,.37.67h0a.53.53,0,0,0,.66-.36l1-3.59,3.82,1.11a.52.52,0,0,0,.64-.36h0A.52.52,0,0,0,9.35,14.59Z" className="croce"/>
      <ellipse class="cls-1" cx="30.31" cy="14.27" rx="13.27" ry="13.26" transform="matrix(0.28, -0.96, 0.96, 0.28, 8.18, 39.43)"/>
    </g>
  </svg>

);

const Elements2 = () => (

  <svg viewBox="0 0 92.44 73.36" className="e-svg2">
    <g id="Livello_2" data-name="Livello 2">
      <g id="Livello_1-2" data-name="Livello 1">
        <circle cx="76.23" cy="3.75" r="3.75" transform="translate(53.69 76.66) rotate(-75.64)"/>
          <path d="M58.12,8.64A3.75,3.75,0,1,0,60.76,4,3.74,3.74,0,0,0,58.12,8.64Z"/>
          <circle cx="47.23" cy="11.57" r="3.75" transform="matrix(0.25, -0.97, 0.97, 0.25, 24.02, 54.31)"/><path d="M29.12,16.46a3.74,3.74,0,1,0,2.64-4.59A3.74,3.74,0,0,0,29.12,16.46Z"/><path d="M14.63,20.38a3.74,3.74,0,1,0,2.64-4.6A3.74,3.74,0,0,0,14.63,20.38Z"/><circle cx="3.74" cy="23.31" r="3.75" transform="translate(-19.78 21.26) rotate(-75.87)"/><circle cx="80.49" cy="19.59" r="3.75" transform="translate(41.92 92.9) rotate(-75.92)"/><path d="M62.38,24.48A3.75,3.75,0,1,0,65,19.88,3.75,3.75,0,0,0,62.38,24.48Z"/><path d="M47.89,28.39a3.74,3.74,0,1,0,2.64-4.59A3.73,3.73,0,0,0,47.89,28.39Z"/><path d="M33.39,32.3A3.74,3.74,0,1,0,36,27.71,3.74,3.74,0,0,0,33.39,32.3Z"/><path d="M18.89,36.22a3.74,3.74,0,1,0,2.64-4.6A3.75,3.75,0,0,0,18.89,36.22Z"/><path d="M4.4,40.13A3.74,3.74,0,1,0,7,35.54,3.73,3.73,0,0,0,4.4,40.13Z"/><path d="M80.82,35.18a3.75,3.75,0,1,0,2.64-4.6A3.74,3.74,0,0,0,80.82,35.18Z"/><circle cx="69.93" cy="38.11" r="3.75" transform="translate(15.81 96.55) rotate(-75.79)"/><circle cx="55.44" cy="42.03" r="3.75" transform="matrix(0.25, -0.97, 0.97, 0.25, 0.69, 84.94)"/><path d="M37.33,46.92A3.74,3.74,0,1,0,40,42.32,3.74,3.74,0,0,0,37.33,46.92Z"/><path d="M22.83,50.83a3.74,3.74,0,1,0,2.64-4.59A3.74,3.74,0,0,0,22.83,50.83Z"/><path d="M8.33,54.74A3.74,3.74,0,1,0,11,50.15,3.76,3.76,0,0,0,8.33,54.74Z"/><path d="M85.08,51a3.75,3.75,0,1,0,2.64-4.6A3.75,3.75,0,0,0,85.08,51Z"/><path d="M70.59,54.93a3.74,3.74,0,1,0,2.64-4.59A3.73,3.73,0,0,0,70.59,54.93Z"/><path d="M56.09,58.84a3.74,3.74,0,1,0,2.64-4.59A3.74,3.74,0,0,0,56.09,58.84Z"/><path d="M41.59,62.76a3.75,3.75,0,1,0,2.64-4.6A3.75,3.75,0,0,0,41.59,62.76Z"/><circle cx="30.71" cy="65.69" r="3.75" transform="translate(-40.54 79.2) rotate(-75.68)"/><circle cx="16.22" cy="69.61" r="3.75" transform="translate(-55.24 67.9) rotate(-75.51)"/></g></g></svg>

);

const Elements3 = () => (

  <svg  className="e-svg3">
    <g id="Livello_2" data-name="Livello 2">
      <g id="Livello_1-2" data-name="Livello 1">
        <rect class="cls-1" x="-1.21" y="12.58" width="101.15" height="9.38" rx="2.83" transform="translate(-2.81 13.69) rotate(-15.35)"/>
        <rect class="cls-1" x="23.07" y="27.49" width="101.15" height="9.38" rx="2.83" transform="translate(-5.89 20.65) rotate(-15.35)"/>
      </g>
    </g>
  </svg>

);

const Elements4 = () => (

  <svg viewBox="0 0 109.49 82.66" className="e-svg4">
    <g id="Livello_2" data-name="Livello 2">
      <g id="Livello_1-2" data-name="Livello 1">
        <rect class="cls-1" x="4.17" y="9.93" width="101.15" height="62.8" transform="translate(-8.99 15.97) rotate(-15.35)"/>
      </g>
    </g>
  </svg>

);

class TemplateWrapper extends Component {
  NEXT = [13, 32, 39];
  PREV = 37;

  swipeLeft = () => {
    this.navigate({ keyCode: this.NEXT[0] });
  };

  swipeRight = () => {
    this.navigate({ keyCode: this.PREV });
  };

  navigate = ({ keyCode }) => {
    const now = this.props.data.slide.index;
    const slidesLength = this.props.slidesLength;

    console.log("We have "+slidesLength+" slides");

    if (now) {
      if (keyCode === this.PREV && now === 1) {
        return false;
      } else if (this.NEXT.indexOf(keyCode) !== -1 && now === slidesLength) {
        return false;
      } else if (this.NEXT.indexOf(keyCode) !== -1) {
        navigate(`/${now + 1}`);
      } else if (keyCode === this.PREV) {
        navigate(`/${now - 1}`);
      }
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.navigate);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.navigate);
  }

  render() {
    const { location, children, site } = this.props;

    return (
      <div>
      <Elements1 />
      <Elements2 />
      <Elements3 />
      <Elements4 />
        <Helmet
          title={`${site.siteMetadata.title} — ${site.siteMetadata.name}`}
        />
        <Header
          // name={site.siteMetadata.name}
          title={site.siteMetadata.title}
          date={site.siteMetadata.date}
        />
        <Swipeable
          onSwipedLeft={this.swipeLeft}
          onSwipedRight={this.swipeRight}
        >
          <Transition location={location}>
            <div id="slide" style={{ 'width': '100%' }}>{children}</div>
          </Transition>
        </Swipeable>
        <Footer
          event={site.siteMetadata.event}
          logo={site.siteMetadata.logo}
          // sponsor={site.siteMetadata.sponsor}
        />
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.node,
  data: PropTypes.object,
};

export default props => (
  <StaticQuery
    query={graphql`
      query IndexQuery {
        site {
          siteMetadata {
            name
            title
            date
            sponsor
            logo
            event
          }
        }
        allSlide {
          edges {
            node {
              id
            }
          }
        }
      }
    `}
    render={data => (
      <TemplateWrapper
        site={data.site}
        slidesLength={data.allSlide.edges.length}
        {...props}
      />
    )}
  />
);
