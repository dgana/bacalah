import React from 'react'

const ContainerMain = () => (
  <div className="container main-view">
    { /*<div className="row">
      <div className="col-md-9 main-content">
        <div className="widget">
          <div className="widget-thumbnail corousel-wrapper">
            <header className="widget-header">
              <h4 className="title">
                features news
              </h4>
            </header>
            <ul className="slider">
              <li><a href="#"><img src="img/slider.jpg" alt="" /></a>
                <div className="widget-content caption-block">
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
              </li>
              <li><a href="#"><img src="img/12.jpg" alt="" /></a>
                <div className="widget-content caption-block">
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
              </li>
              <li><a href="#"><img src="img/13.jpg" alt="" /></a>
                <div className="widget-content caption-block">
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
              </li>
              <li><a href="#"><img src="img/14.jpg" alt="" /></a>
                <div className="widget-content caption-block">
                  <h3 className="title widget-title">
                    Study: Concussions Could Lead to Alzheimer's
                  </h3>
                  <div className="meta-wrapper">
                    <span className="meta"><i className="fa fa-calendar"></i> Sep 23, 2013</span>
                    <span className="meta"><i className="fa fa-comment-o"></i> 10</span>
                    <span className="meta"><i className="fa fa-share-square-o"></i> 3</span>
                  </div>
                  <p className="slider-caption">Researchers found an association between Alzheimer's-related plaque buildup and head trauma.</p>
                  <a href="#" className="readmore"></a>
                </div>
              </li>
              <li><a href="#"><img src="img/15.jpg" alt="" /></a>
                <div className="widget-content caption-block">
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
              </li>
              <li><a href="#"><img src="img/16.jpg" alt="" /></a>
                <div className="widget-content caption-block">
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
              </li>
            </ul>
          </div>
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
                    <li><a href="#">U.S. Grouped With Powerhouse Germany in World Cup 2014 Draw</a></li>
                    <li><a href="#">Seahawks clinch top seed with 27-9 win over Rams</a></li>
                    <li><a href="#">Blount leads Pats to bye with 34-20 win over Bills</a></li>
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
                    <li><a href="#">U.S. Grouped With Powerhouse Germany in World Cup 2014 Draw</a></li>
                    <li><a href="#">Seahawks clinch top seed with 27-9 win over Rams</a></li>
                    <li><a href="#">Blount leads Pats to bye with 34-20 win over Bills</a></li>
                  </ul>
                </div>
              </div>
          </div>
        </div>
      </div>



      <div className="col-md-3 sidebar">

        <div className="widget banner">
          <header className="widget-header">
            <h4 className="title">
              Advertisement
            </h4>
          </header>
          <img src="img/banner_250.jpg" alt="" />
        </div>

        <div className="widget">
          <header className="widget-header">
            <h4 className="title">
              MOST POPULAR
            </h4>
          </header>
          <div className="margin-top-20">
            <ul className="media-list list">
              <li className="media">
                <div className="title margin-bottom-10">
                  <a href="#">Scenes from the field</a>
                </div>
                <a href="#" className="pull-left">
                  <img src="img/aside_post_1.jpg" alt="" className="media-object" />
                </a>
                <div className="media-body">
                  <p className="small">Browse through images you don't always see in news reports, taken by CNN teams all around the world.</p>
                </div>
              </li>
              <li className="media">
                <div className="title margin-bottom-10">
                  <a href="#">Heroes or villains? Cricket's rebels</a>
                </div>
                <a href="#" className="pull-left">
                  <img src="img/aside_post_2.jpg" alt="" className="media-object" />
                </a>
                <div className="media-body">
                  <p className="small">Gareth Evans was just a small boy when a team of West Indies cricketers arrived in apartheid South Africa. Their lives would never be the same.</p>
                </div>
              </li>
              <li className="media">
                <div className="title margin-bottom-10">
                  <a href="#">Heroes or villains? Cricket's rebels</a>
                </div>
                <a href="#" className="pull-left">
                  <img src="img/aside_post_3.jpg" alt="" className="media-object" />
                </a>
                <div className="media-body">
                  <p className="small">Gareth Evans was just a small boy when a team of West Indies cricketers arrived in apartheid South Africa. Their lives would never be the same.</p>
                </div>
              </li>
              <li className="media">
                <div className="title margin-bottom-10">
                  <a href="#">New year, chance to reclaim humanity?</a>
                </div>
                <a href="#" className="pull-left">
                  <img src="img/aside_post_4.jpg" alt="" className="media-object" />
                </a>
                <div className="media-body">
                  <p className="small">Gareth Evans was just a small boy when a team of West Indies cricketers arrived in apartheid South Africa. Their lives would never be the same.</p>
                </div>
              </li>
              <li className="media">
                <div className="title margin-bottom-10">
                  <a href="#">Tribesmen join forces vs. al Qaeda</a>
                </div>
                <a href="#" className="pull-left">
                  <img src="img/aside_post_5.jpg" alt="" className="media-object" />
                </a>
                <div className="media-body">
                  <p className="small">Gareth Evans was just a small boy when a team of West Indies cricketers arrived in apartheid South Africa. Their lives would never be the same.</p>
                </div>
              </li>
              <li className="media">
                <div className="title margin-bottom-10">
                  <a href="#">Six odd and crazy technologies</a>
                </div>
                <a href="#" className="pull-left">
                  <img src="img/aside_post_6.jpg" alt="" className="media-object" />
                </a>
                <div className="media-body">
                  <p className="small">Gareth Evans was just a small boy when a team of West Indies cricketers arrived in apartheid South Africa. Their lives would never be the same.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <hr className="col-md-12 clearfix">

      <div className="col-md-12 headline">
        <div className="corousel-wrapper widget">
          <header className="widget-header">
            <h4 className="title">
              GO DEEPER
            </h4>
          </header>
          <ul className="panel-list carousel">
            <li className="panel-item">
              <div className="col-inner">
                <div className="panel-thumbnail pull-left">
                  <img src="img/150_60.gif" alt="" />
                </div>
                <div className="panel-content clearfix">
                  <span className="panel-title">
                    How the Iron Curtain collapsed
                  </span>
                </div>
              </div>
            </li>
            <li className=" panel-item">
              <div className="col-inner">
                <div className="panel-thumbnail pull-left">
                  <img src="img/150_60.gif" alt="" />
                </div>
                <div className="panel-content clearfix">
                  <span className="panel-title">
                    How the Iron Curtain collapsed
                  </span>
                </div>
              </div>
            </li>
            <li className=" panel-item">
              <div className="col-inner">
                <div className="panel-thumbnail pull-left">
                  <img src="img/150_60.gif" alt="" />
                </div>
                <div className="panel-content clearfix">
                  <span className="panel-title">
                    How the Iron Curtain collapsed
                  </span>
                </div>
              </div>
            </li>
            <li className=" panel-item">
              <div className="col-inner">
                <div className="panel-thumbnail pull-left">
                  <img src="img/150_60.gif" alt="" />
                </div>
                <div className="panel-content clearfix">
                  <span className="panel-title">
                    How the Iron Curtain collapsed
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div> */}
  </div>
)

export default ContainerMain
