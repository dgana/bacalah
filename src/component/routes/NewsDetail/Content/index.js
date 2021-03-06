import React from 'react'

// Plugin Dependencies
import Slider from 'react-slick'

// Images
import post1 from '../../../../dist/img/post_1.jpg'
import post2 from '../../../../dist/img/post_2.jpg'

const Content = (props) => (
  <div>
    <div className="post clearfix">
    <header className="page-header">
      <div className="page-title">
        <h2 className="title">Up On The Wall: How Working Walls Unlock Creative Insight</h2>
        <div classNameName="meta-wrapper">
          <span className="meta"><i className="fa fa-pencil-square-o"></i> Alanna K. Stuckey</span>
          <span className="meta"><i className="fa fa-calendar"></i> Sep 23, 2013</span>
          <span className="meta"><i className="fa fa-comment-o"></i> 10</span>
        </div>
      </div>
    </header>

    <img src={post1} alt="" className="post-thumbnail" />
    <p>
      <em>
        <strong>Editor's note:</strong> To mark the 25th anniversary of the fall of the Berlin Wall, CNN is again airing its epic 24-part documentary series on the <a href="http://edition.cnn.com/SPECIALS/coldwar">Cold War</a>.
      </em>
    </p>

    <p>The struggle between communism and capitalism defined the second half of the 20th Century. The Cold War pitted east against west, pushing the world to the brink of nuclear war.</p>
    <p>Now, as we approach the 25th anniversary of the fall of the Berlin Wall, which brought the era to a close, CNN International is again airing its 24-part series, The Cold War, which first aired in 1998. Giving unparalleled insight from those who lived and fought through the events that defined an era, The Cold War lets viewers see how the events of yesterday have shaped the world of today.</p>
    <p>The series was commissioned by CNN founder Ted Turner. Award-winning television director Jeremy Isaacs was the executive producer. The series was narrated by Academy Award nominated actor Sir Kenneth Branagh.
    The programs will air on CNN International every two weeks starting on January 4. Here is a summary of the first 12 episodes.</p>
    <p><strong>Consumers: More fees, tighter seats, "connected" flight attendants</strong></p>
    <p>The Russian Revolution of 1917, followed by the Russian Civil War caused a rift between the Soviet Union and the United States. But when President Franklin Roosevelt took office in 1933, diplomatic and trade relations between the two countries resumed. The relationship was strained yet again after the USSR annexed the Baltic States and signed a non-aggression pact with Nazi Germany.</p>
    <p>Despite their differences the Soviet Union and the United States found themselves allied after the German invasion of Russia in June 1941. As the war in Europe began to wind down and victory was in sight, the two countries had very different views as to what the post-war world would look like. At the Potsdam Conference, just before the atom bomb was dropped on Japan, it became clear that Stalin wanted to put Eastern Europe under the Soviet sphere of influence, setting the conditions for the Cold War to commence. Episode 1 includes interviews from George F. Kennan, Zoya Zarubina, Hugh Lunghi and George Elsey.</p>
    <p><a href="">MORE: How to battle the shrinking airline seat</a></p>

    <p>As wartime turned to peacetime, a resurgent United States enjoys economic prosperity while Europe is left to recover from the ravages of war. In the Soviet Union, Stalin has resumed his feared purges and the country is gripped by famine. Germany is forced to cede some of its eastern territory to Poland, and the Germans living in that area are expelled from their homes. Stalin begins to increase his hold on Eastern Europe, installing communist regimes, but decides to stay out of the Greek Civil War.</p>
    <p>The United Kingdom, exhausted from the war, sees its once-powerful empire go into decline. As food shortages begin to threaten the stability of Europe, a more assertive United States begins to challenge the USSR's influence in both Turkey and Iran. Episode 2 includes interviews from Lord Annan, Sir Frank Roberts and Paul Nitze.</p>
    <p><strong>Airbus: End of the line for A350-800?</strong></p>
    <p>Traditionally operating in the shadows cast by Boeing and Airbus, the Canadian aircraft company will have to sweat a bit if it wants to steal some of the spotlight it bid for in 2013.</p>

    <p>This makes it one of the more interesting players to watch in the year ahead</p>
    <p>Bombardier's CSeries aircraft made its first flight September 16. Since then, company officials have stuck with an aggressive entry-into-service (EIS) plan to follow within 12 months</p>
    <p>Slower than expected progress on flight-testing and a test schedule largely discounted as too optimistic, however, have led most aerospace analysts to conclude that the aircraft won't likely see service until the first quarter of 2015.</p>
    <p>China's central bank issued new rules in December that prohibited financial institutions from dealing in the digital currency. While it did not outlaw individuals from owning Bitcoin, it specifies that it is not to be considered a currency.</p>
    <p>Despite the setback, Robocoin's chief executive said he still firmly believes China will come to accept Bitcoin.</p>
    <p>"Citizens around the world love Bitcoin. The Chinese are very pragmatic in their approach, they just want to make sure they have a very good understanding of the market and the usage," he said.Kelley revealed that Robocoin has begun talks with several operators in China that are reaching out to the government and local regulators to "educate" them about the value and potential of the Bitcoin market.</p>
  </div>

  <footer className="post-footer clearfix">

    <div className="comment-count pull-left">
      <a href="comment-view"><b>16 Comments</b></a>
    </div>

    <ul className="pagination pull-right">
      <li>Pages:</li>
      <li className="active"><a href="">1</a></li>
      <li><a href="">2</a></li>
      <li><a href="">3</a></li>
      <li><a href="">4</a></li>
    </ul>

  </footer>

  <div className="related-post margin-top-20 clearfix">
     <header className="widget-header">
        <h4 className="title">
          We recommend
        </h4>
      </header>

    <div className="post col-md-3 col-sm-3 col-xs-12">
      <img src="img/post_1.jpg" alt="" className="post-thumbnail" />
      <div className="title">
        <a>Gay waitress loses job after investigation into whether customers denied tip.
        </a>
      </div>
    </div>

    <div className="post col-md-3 col-sm-3 col-xs-12">
      <img src="img/post_2.jpg" alt="" className="post-thumbnail" />
      <div className="title">
        <a>Can wind towers take the heat off UAE's air-con addiction?
        </a>
      </div>
    </div>

    <div className="post col-md-3 col-sm-3 col-xs-12">
      <img src="img/post_3.jpg" alt="" className="post-thumbnail" />
      <div className="title">
        <a>Shia LaBeouf offers cloudy plagiarism apology
        </a>
      </div>
    </div>

    <div className="post col-md-3 col-sm-3 col-xs-12">
      <img src="img/post_4.jpg" alt="" className="post-thumbnail" />
      <div className="title">
        <a>Advances in Metastatic Melanoma
        </a>
      </div>
    </div>

    </div>

    <div id="comment-view" className="comment clearfix">
      <header className="widget-header">
        <h4 className="title">
          16 COMMENTS
        </h4>
      </header>
      <ul className="list">
        <li className="media">
          <a href="" className="pull-left">
            <img src="img/avatar32.jpg" alt="" className="avatar" />
          </a>
          <div className="media-body">
            <a href="" className="media-heading">FuqueIslamb <span data-role="relative-time" className="meta time-ago">26 minutes ago</span></a>
            <p>One of today's leading <a href="">theoreticians</a> of the Islamist movement, Yussuf al-Ayyeri, published a book (available on the Internet) in which he warned that the real threat to Islam didn't come from American tanks and helicopter gunships in Iraq, but from the idea that democracy is the rule of the people.</p>
            <footer className="comment-item-footer">
              <ul className="list-inline">
                <li><a href="">Reply</a></li>
                <li><a href="">share</a></li>
                <li><a href="">edit</a></li>
              </ul>
            </footer>
          </div>
          <ul className="children">
            <li className="media">
              <a href="" className="pull-left">
                <img src="img/avatar32.jpg" alt="" className="avatar" />
              </a>
              <div className="media-body">
                <a href="" className="media-heading">FuqueIslamb <span data-role="relative-time" className="meta time-ago">15 hours ago</span></a>
                <p>One of today's leading theoreticians of the Islamist movement, Yussuf al-Ayyeri, published a book (available on the Internet) in which he warned that the real threat to Islam didn't come from American tanks and helicopter gunships in Iraq, but from the idea that democracy is the rule of the people.</p>
                <footer className="comment-item-footer">
                  <ul className="list-inline">
                    <li><a href="">Reply</a></li>
                    <li><a href="">share</a></li>
                    <li><a href="">edit</a></li>
                  </ul>
                </footer>
              </div>
            </li>
          </ul>
        </li>
      </ul>

      <div className="load-more cleafix" data-role="more">
        <a href="#" data-action="more-posts" className="btn col-md-12">Load more comments</a>
      </div>

    </div>

    <div id="reply-view" className="reply clearfix margin-top-20">
      <header className="widget-header">
        <h4 className="title">
          LEAVE A REPLY
        </h4>
      </header>

      <form action="" role="form" className="margin-top-20">
        <div className="col-md-4">
          <div className="form-group">
            <label for="name" className="sr-only">Name(required):</label>
            <input type="name" className="form-control" id="name" placeholder="Name *" />
          </div>
          <div className="form-group">
            <label for="email" className="sr-only">Email address(required):</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email *" />
          </div>
        </div>
        <div className="col-md-8">
          <div className="form-group">
            <label for="comment_message" className="required sr-only">Your comment <span>(required):</span></label>
            <textarea name="message" id="comment-message" cols="88" rows="7" className="form-control" placeholder="Your comment *" required></textarea>
          </div>
        </div>
        <div className="col-md-12">
          <input type="submit" value="Post Comment" id="submit-comment" className="btn pull-right" />
        </div>

      </form>
    </div>
  </div>
)

export default Content
