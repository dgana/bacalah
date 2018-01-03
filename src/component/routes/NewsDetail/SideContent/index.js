import React from 'react'

// images
import post1 from '../../../../dist/img/aside_post_1.jpg'
import post2 from '../../../../dist/img/aside_post_2.jpg'
import post3 from '../../../../dist/img/aside_post_3.jpg'
import post4 from '../../../../dist/img/aside_post_4.jpg'
import post5 from '../../../../dist/img/aside_post_5.jpg'

const SubContent = (props) => (
  <div>
    <div className="widget">
      <header className="widget-header">
        <h4 className="title">
          Tagged with
        </h4>
      </header>
      <div className="widget-content meta-tag">
        <div className="margin-top-20">
          <a className="tag" href="">Cold War</a>
          <a className="tag" href="">Russian Revolution</a>
          <a className="tag" href="">Czechoslovakia</a>
        </div>
      </div>
    </div>

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
              <a href="">Scenes from the field</a>
            </div>
            <a href="" className="pull-left">
              <img src={post1} alt="" />
            </a>
            <div className="media-body">
              <p className="small">Browse through images you don't always see in news reports, taken by CNN teams all around the world.</p>
            </div>
          </li>
          <li className="media">
            <div className="title margin-bottom-10">
              <a href="">Heroes or villains? Cricket's rebels</a>
            </div>
            <a href="" className="pull-left">
              <img src={post2} alt="" />
            </a>
            <div className="media-body">
              <p className="small">Gareth Evans was just a small boy when a team of West Indies cricketers arrived in apartheid South Africa. Their lives would never be the same.</p>
            </div>
          </li>
          <li className="media">
            <div className="title margin-bottom-10">
              <a href="">Heroes or villains? Cricket's rebels</a>
            </div>
            <a href="" className="pull-left">
              <img src={post3} alt="" />
            </a>
            <div className="media-body">
              <p className="small">Gareth Evans was just a small boy when a team of West Indies cricketers arrived in apartheid South Africa. Their lives would never be the same.</p>
            </div>
          </li>
          <li className="media">
            <div className="title margin-bottom-10">
              <a href="">New year, chance to reclaim humanity?</a>
            </div>
            <a href="" className="pull-left">
              <img src={post4} alt="" />
            </a>
            <div className="media-body">
              <p className="small">Gareth Evans was just a small boy when a team of West Indies cricketers arrived in apartheid South Africa. Their lives would never be the same.</p>
            </div>
          </li>
          <li className="media">
            <div className="title margin-bottom-10">
              <a href="">Tribesmen join forces vs. al Qaeda</a>
            </div>
            <a href="" className="pull-left">
              <img src={post5} alt="" />
            </a>
            <div className="media-body">
              <p className="small">Gareth Evans was just a small boy when a team of West Indies cricketers arrived in apartheid South Africa. Their lives would never be the same.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default SubContent
