import React from 'react'

// Plugin Dependencies
import Slider from 'react-slick'

const settings = {
  // dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

const Content = (props) => (
  <div>
    <div className="widget-thumbnail corousel-wrapper">
      <header className="widget-header">
        <h4 className="title">
          features news
        </h4>
      </header>
      <Slider {...settings}>
        <div className='col-md-12'>
          <a href=""><img src="img/slider.jpg" alt="" /></a>
          <div className="caption-block" style={{paddingBottom: 26}}>
            <h3 className="title widget-title">
              Buying Into Obamacare
            </h3>
            <div className="meta-wrapper">
              <span className="meta"><i className="fa fa-calendar"></i> Sep 23, 2013</span>
              <span className="meta"><i className="fa fa-comment-o"></i> 10</span>
              <span className="meta"><i className="fa fa-share-square-o"></i> 3</span>
            </div>
            <p className="slider-caption">A health writer tries to buy insurance on an Obamacare exchange and confronts the good, the bad and the ugly of the new health insurance marketplace.</p>
          </div>
        </div>
        <div>
          <a href=""><img src="img/12.jpg" alt="" /></a>
          <div className="caption-block" style={{paddingBottom: 26}}>
            <h3 className="title widget-title">
              10 Saving Strategies That Can Backfire
            </h3>
            <div className="meta-wrapper">
              <span className="meta"><i className="fa fa-calendar"></i> Sep 23, 2013</span>
              <span className="meta"><i className="fa fa-comment-o"></i> 10</span>
              <span className="meta"><i className="fa fa-share-square-o"></i> 3</span>
            </div>
            <p className="slider-caption">Most people are taught from an early age that it’s good to save money. If you have a coupon, use it. If you aren’t going to be in a room, turn off the lights</p>
          </div>
        </div>
        <div>
          <a href=""><img src="img/13.jpg" alt="" /></a>
          <div className="caption-block" style={{paddingBottom: 26}}>
            <h3 className="title widget-title">
              10 Saving Strategies That Can Backfire
            </h3>
            <div className="meta-wrapper">
              <span className="meta"><i className="fa fa-calendar"></i> Sep 23, 2013</span>
              <span className="meta"><i className="fa fa-comment-o"></i> 10</span>
              <span className="meta"><i className="fa fa-share-square-o"></i> 3</span>
            </div>
            <p className="slider-caption">Most people are taught from an early age that it’s good to save money. If you have a coupon, use it. If you aren’t going to be in a room, turn off the lights</p>
          </div>
        </div>
        <div>
          <a href=""><img src="img/14.jpg" alt="" /></a>
          <div className="caption-block" style={{paddingBottom: 26}}>
            <h3 className="title widget-title">
              Study: Concussions Could Lead to Alzheimer's
            </h3>
            <div className="meta-wrapper">
              <span className="meta"><i className="fa fa-calendar"></i> Sep 23, 2013</span>
              <span className="meta"><i className="fa fa-comment-o"></i> 10</span>
              <span className="meta"><i className="fa fa-share-square-o"></i> 3</span>
            </div>
            <p className="slider-caption">Researchers found an association between Alzheimer's-related plaque buildup and head trauma.</p>
            <a href="" className="readmore">Read More</a>
          </div>
        </div>
        <div>
          <a href=""><img src="img/15.jpg" alt="" /></a>
          <div className="caption-block" style={{paddingBottom: 26}}>
            <h3 className="title widget-title">
              5 Best Congressional Temper Tantrums of 2013
            </h3>
            <div className="meta-wrapper">
              <span className="meta"><i className="fa fa-calendar"></i> Sep 23, 2013</span>
              <span className="meta"><i className="fa fa-comment-o"></i> 10</span>
              <span className="meta"><i className="fa fa-share-square-o"></i> 3</span>
            </div>
            <p className="slider-caption">Sometimes Congress acts more like a petulant toddler than a deliberative body.</p>
          </div>
        </div>
        <div>
          <a href=""><img src="img/16.jpg" alt="" /></a>
          <div className="caption-block" style={{paddingBottom: 26}}>
            <h3 className="title widget-title">
              Why a New Year's Theme Works Better Than a Resolution
            </h3>
            <div className="meta-wrapper">
              <span className="meta"><i className="fa fa-calendar"></i> Sep 23, 2013</span>
              <span className="meta"><i className="fa fa-comment-o"></i> 10</span>
              <span className="meta"><i className="fa fa-share-square-o"></i> 3</span>
            </div>
            <p className="slider-caption">Apply a theme like “mindfulness” to your New Year, and you’ll reap health benefits.</p>
          </div>
        </div>
      </Slider>
    </div>

    <div className="col-md-6 main-content">
      <div className="widget">
        <header className="widget-header">
          <h4 className="title">
            SPORT
          </h4>
        </header>
          <div className="widget-thumbnail">
            <img src="img/9.jpg" alt="" />
          </div>
          <div className="widget-content">
            <h3 className="title widget-title">
              Buying Into Obamacare
            </h3>
            <p>A health writer tries to buy insurance on an Obamacare exchange and confronts the good, the bad and the ugly of the new health insurance marketplace.</p>
          </div>
          <div className="related-content box">
            <div className="inner">
              <ul className="list list-view">
                <li><a href="">U.S. Grouped With Powerhouse Germany in World Cup 2014 Draw</a></li>
                <li><a href="">Seahawks clinch top seed with 27-9 win over Rams</a></li>
                <li><a href="">Blount leads Pats to bye with 34-20 win over Bills</a></li>
              </ul>
            </div>
          </div>
      </div>
    </div>
    <div className="col-md-6 main-content">
      <div className="widget">
        <header className="widget-header">
          <h4 className="title">
            Technology
          </h4>
        </header>
        <div className="widget-thumbnail">
          <img src="img/7.jpg" alt="" />
        </div>
        <div className="widget-content">
          <h3 className="title widget-title">
            Buying Into Obamacare
          </h3>
          <p>A health writer tries to buy insurance on an Obamacare exchange and confronts the good, the bad and the ugly of the new health insurance marketplace.</p>
        </div>
        <div className="related-content box">
          <div className="inner">
            <ul className="list list-view">
              <li><a href="">U.S. Grouped With Powerhouse Germany in World Cup 2014 Draw</a></li>
              <li><a href="">Seahawks clinch top seed with 27-9 win over Rams</a></li>
              <li><a href="">Blount leads Pats to bye with 34-20 win over Bills</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Content
