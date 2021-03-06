import React, { Component } from 'react';
import './PhotoGallery.css';
import { LazyBackgroundImage, LazyImage, LazyFrame } from "lazy-react";

export class PhotoGallery extends Component {
  constructor() {
    super();
    this.state = {
      called: false
    };
  }

  photos = () => this.props.photoArray.map( (url, i) => {
    return <img className="photo" key={i} src={url} />;
  });

  isInView() {
    var rect = document.querySelector('.more-photos').getBoundingClientRect();
    var html = document.documentElement;
    const inView = (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || html.clientHeight) &&
      rect.right <= (window.innerWidth || html.clientWidth)
    );
    console.log(inView);
    if (inView === true) {
      if  (!this.state.called)
        this.props.lazyLoad();
      this.setState({called: true});
      setTimeout(() => {
        console.log('...waiting');
        this.setState({called: false});
      }, 3000); 
    }
    return inView;
  }
  
  render() {
    return (
      <div>
        <div onScroll={() => this.isInView()} className='gallery'>
          { this.photos() }
          <button className="more-photos" onClick={this.props.lazyLoad}>Load more</button>
        </div>
      </div>
    );
  }
}

export default PhotoGallery;