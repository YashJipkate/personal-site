import React from "react";

import Head from "next/head";

import { initGA, logPageView } from "../../components/GoogleAnalytics";

export default class OfPlatoAndPython extends React.Component {
  componentDidMount() {
    this.animateTimeline();
    this.animateGallery();
    this.animateCarousel();
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }

  animateCarousel() {
    $(".hero-slider").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      items: 1,
      dots: true,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      navText: ["", ""],
      autoplayTimeout: 15000,
      mouseDrag: false,
      autoplay: true
    });
  }

  animateGallery() {
    $(".portfolio-filter ul li").on("click", function() {
      $(".portfolio-filter ul li").removeClass("active");
      $(this).addClass("active");

      var data = $(this).attr("data-filter");
      $workGrid.isotope({
        filter: data
      });
    });

    if (document.getElementById("portfolio")) {
      var $workGrid = $(".portfolio-grid").isotope({
        itemSelector: ".all",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-sizer"
        }
      });
    }
  }

  animateTimeline() {
    var timeline = $("#timeline-1");
    var selectors = {
      id: $(timeline),
      item: $(timeline).find(".timeline-item"),
      activeClass: "timeline-item--active",
      img: ".timeline__img"
    };
    selectors.item.eq(0).addClass(selectors.activeClass);
    selectors.id.css(
      "background-image",
      "url(" +
        selectors.item
          .first()
          .find(selectors.img)
          .attr("src") +
        ")"
    );
    var itemLength = selectors.item.length;
    $(window).scroll(function() {
      var max, min;
      var pos = $(this).scrollTop();
      selectors.item.each(function(i) {
        min = $(this).offset().top;
        max = $(this).height() + $(this).offset().top;
        var that = $(this);
        if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
          selectors.item.removeClass(selectors.activeClass);
          selectors.id.css(
            "background-image",
            "url(" +
              selectors.item
                .last()
                .find(selectors.img)
                .attr("src") +
              ")"
          );
          selectors.item.last().addClass(selectors.activeClass);
        } else if (pos <= max - 40 && pos >= min) {
          selectors.id.css(
            "background-image",
            "url(" +
              $(this)
                .find(selectors.img)
                .attr("src") +
              ")"
          );
          selectors.item.removeClass(selectors.activeClass);
          $(this).addClass(selectors.activeClass);
        }
      });
    });
  }

  render() {
    return (
      <div>
        <Head>
          <title key="title">1 Year Anniversary &lt;3</title>
          <link rel="shortcut icon" href="/favicon.png" key="icon" />
          <link rel="stylesheet" href="/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/css/owl.carousel.min.css" />
        </Head>
        <section className="hero-section">
          <div className="hero-slider owl-carousel">
            <div
              className="hs-item set-bg"
              style={{
                backgroundImage: "url('/images/personal/slider/1.jpg')"
              }}
            >
              <div className="container">
                <h2>Our love is forever</h2>
                <span className="site-btn">December 2019</span>
              </div>
              <div
                className="next-hs set-bg"
                style={{
                  backgroundImage: "url('/images/personal/slider/2.jpg')"
                }}
              >
                <span className="nest-hs-btn">Next</span>
              </div>
            </div>
            <div
              className="hs-item set-bg"
              style={{
                backgroundImage: "url('/images/personal/slider/2.jpg')"
              }}
            >
              <div className="container">
                <h2>Seems just like Yesterday</h2>
                <span className="site-btn">Apr 2019</span>
              </div>
              <div
                className="next-hs set-bg"
                style={{
                  backgroundImage: "url('/images/personal/slider/3.jpg')"
                }}
              >
                <span className="nest-hs-btn">Next</span>
              </div>
            </div>
            <div
              className="hs-item set-bg"
              style={{
                backgroundImage: "url('/images/personal/slider/3.jpg')"
              }}
            >
              <div className="container">
                <h2>To all the Moments Enjoyed</h2>
                <span className="site-btn">Jan 2020</span>
              </div>
              <div
                className="next-hs set-bg"
                style={{
                  backgroundImage: "url('/images/personal/slider/4.jpg')"
                }}
              >
                <span className="nest-hs-btn">Next</span>
              </div>
            </div>
            <div
              className="hs-item set-bg"
              style={{
                backgroundImage: "url('/images/personal/slider/4.jpg')"
              }}
            >
              <div className="container">
                <h2>And Even the Awkward ones</h2>
                <span className="site-btn">Jan 2020</span>
              </div>
              <div
                className="next-hs set-bg"
                style={{
                  backgroundImage: "url('/images/personal/slider/1.jpg')"
                }}
              >
                <span className="nest-hs-btn">Next</span>
              </div>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}

        <section className="portfolio_area area-padding" id="portfolio">
          <div className="container">
            <div className="area-heading">
              <h3>
                Here <span>We</span> Are!
              </h3>
              <p>Our story is the best movie ever made by destiny</p>
            </div>

            <div className="filters portfolio-filter">
              <ul>
                <li className="active" data-filter=".une">
                  Une
                </li>
                <li data-filter=".deux">Deux </li>
                <li data-filter=".trois"> Trois</li>
                <li data-filter=".quatro">Quatro</li>
                <li data-filter=".cinq">Cinq</li>
              </ul>
            </div>

            <div className="filters-content">
              <div className="row portfolio-grid">
                <div className="grid-sizer col-md-3 col-lg-4"></div>
                <div className="col-lg-4 col-md-6 all une">
                  <div className="single_portfolio">
                    <img
                      className="img-fluid w-100"
                      src="/images/personal/1.jpg"
                      alt=""
                    />
                    <div className="short_info">
                      <p>Doodles</p>
                      <h4>
                        <span>
                          Those cute doodles like you doodled yourself in my
                          heart
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 all une">
                  <div className="single_portfolio">
                    <img
                      className="img-fluid w-100"
                      src="/images/personal/2.jpg"
                      alt=""
                    />
                    <div className="short_info">
                      <p>Fests</p>
                      <h4>
                        <span>
                          Remember the North East Fest? That was our first fest
                          together!
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 all une">
                  <div className="single_portfolio">
                    <img
                      className="img-fluid w-100"
                      src="/images/personal/4.jpg"
                      alt=""
                    />
                    <div className="short_info">
                      <p>The big leap</p>
                      <h4>
                        <span>
                          This is our third stay where we became one. Alhough
                          there were weird moments, this was a big milestone for
                          us - wasn't it! You took my T-Shirt but honestly it
                          made you a lot cuter.
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 all une">
                  <div className="single_portfolio">
                    <img
                      className="img-fluid w-100"
                      src="/images/personal/5.jpg"
                      alt=""
                    />
                    <div className="short_info">
                      <p>Chocolate Heaven</p>
                      <h4>
                        <span>
                          This is one of the God knows how many times we visited
                          that place. Thank you for bearing with me &lt;3
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 all deux">
                  <div className="single_portfolio">
                    <img
                      className="img-fluid w-100"
                      src="/images/personal/6.jpg"
                      alt=""
                    />
                    <div className="short_info">
                      <p>North East</p>
                      <h4>
                        <span>
                          This was the first time you came to my college, with
                          me, as a couple, as my girlfriend.
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 all deux">
                  <div className="single_portfolio">
                    <img
                      className="img-fluid w-100"
                      src="/images/personal/8.jpg"
                      alt=""
                    />
                    <div className="short_info">
                      <p>Diwali</p>
                      <h4>
                        <span>
                          This was from the time you made my Diwali the best of
                          my life. I always felt bad staying away from home
                          during Diwali but you made this all the more special!
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 all deux">
                  <div className="single_portfolio">
                    <img
                      className="img-fluid w-100"
                      src="/images/personal/9.jpg"
                      alt=""
                    />
                    <div className="short_info">
                      <p>North East</p>
                      <h4>
                        <span>
                          I remember we had a little misunderstanding and we
                          were mad at each other, but the moment I saw you
                          coming from the gate, I forgot everything and came an
                          instant smile up on my face :D
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 offset-lg-4 col-md-6 all deux">
                  <div className="single_portfolio">
                    <img
                      className="img-fluid w-100"
                      src="/images/personal/7.jpg"
                      alt=""
                    />
                    <div className="short_info">
                      <p>Love me like you do</p>
                      <h4>
                        <span>
                          The way you look at me, the way you feel about me, the
                          way you care about me, the way you love me, please
                          don't ever let that spark die ^__^
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 all trois">
                  <div className="single_portfolio">
                    <img
                      className="img-fluid w-100"
                      src="/images/personal/10.jpg"
                      alt=""
                    />
                    <div className="short_info">
                      <p>Rooftop Romance</p>
                      <h4>
                        <span>
                          Tripling Bistro, Assi Ghat. The whole rooftop was
                          empty, like a playfield for two little lovebirds!
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 all trois">
                  <div className="single_portfolio">
                    <img
                      className="img-fluid w-100"
                      src="/images/personal/11.jpg"
                      alt=""
                    />
                    <div className="short_info">
                      <p>VNS Studio</p>
                      <h4>
                        <span>
                          You opened up the door of luxurious restos for me.
                          Never had I imagined that I would ever dine in such
                          high rises. But you held my hand, and took me to
                          places that I only dreamt of and adding colors to my
                          boring life till now.
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 offset-lg-4 col-md-6 all trois">
                  <div className="single_portfolio">
                    <img
                      className="img-fluid w-100"
                      src="/images/personal/12.jpg"
                      alt=""
                    />
                    <div className="short_info">
                      <p>North East</p>
                      <h4>
                        <span>
                          You were leaving a trail of fire with your splendind
                          beauty. I could see friends &amp; people staring at me
                          in shock as I accompanied the hottest girl their eyes
                          ever beheld!
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 all quatro">
                  <div className="single_portfolio">
                    <img
                      className="img-fluid w-100"
                      src="/images/personal/13.jpg"
                      alt=""
                    />
                    <div className="short_info">
                      <p>The sleeping beauty</p>
                      <h4>
                        <span>
                          The girl who barely sleeps the minimum requirement of
                          6 hours, sleeps like a baby when she's with me. She
                          holds me tightly and then closes her eyes and here she
                          is - a cutie clung to me sleeping as the most innocent
                          baby in the world.
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 all quatro">
                  <div className="single_portfolio">
                    <img
                      className="img-fluid w-100"
                      src="/images/personal/14.jpg"
                      alt=""
                    />
                    <div className="short_info">
                      <p>My birthday</p>
                      <h4>
                        <span>
                          I guess this was for my birthday - the best birthday
                          anyone can ever have. I welcomed my 21st year with you
                          by my side and many surprises and beautiful memories
                          ahead. Little did I know that the 21st year of my life
                          had so much packed in it for me. This was the most
                          experience-rich year of my life thanks to you being my
                          partner this whole year!
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 all quatro">
                  <div className="single_portfolio">
                    <img
                      className="img-fluid w-100"
                      src="/images/personal/15.jpg"
                      alt=""
                    />
                    <div className="short_info">
                      <p>The mad cutie</p>
                      <h4>
                        <span>
                          This is from the December end stay. There were many
                          hurdles to this, but we finally did it. And we came
                          close like never before. I got to see all your madness
                          and the level of your cute. We both are mad equally
                          and that's why we are so perfect for each other!
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 all quatro">
                  <div className="single_portfolio">
                    <img
                      className="img-fluid w-100"
                      src="/images/personal/16.jpg"
                      alt=""
                    />
                    <div className="short_info">
                      <p>Video calls and my prime enemy</p>
                      <h4>
                        <span>
                          At times we couldn't be close physically, we kissed
                          each other virtually. You were often accompanied by
                          the devil, the one who got all your love and cuddles
                          when I couldn't be with you. This cute enemy of mine
                          was your second most favourite possession - after of
                          course me.
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 all trois">
                  <div className="single_portfolio">
                    <img
                      className="img-fluid w-100"
                      src="/images/personal/3.jpg"
                      alt=""
                    />
                    <div className="short_info">
                      <p>VNS Studio</p>
                      <h4>
                        <span>
                          We (actually just me XD) initially got uncomfortable
                          in the hookah fumes. I couldn't help it, it was
                          literally my first time entering a bar. But in the
                          end, all turned out to be pretty good! After all, we
                          were dressed Black - your fav color!
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 all cinq">
                  <div className="single_portfolio">
                    <img
                      className="img-fluid w-100"
                      src="/images/personal/17.jpg"
                      alt=""
                    />
                    <div className="short_info">
                      <p>Cheerful</p>
                      <h4>
                        <span>
                          As much as you are cute, you are so cheerful that you
                          clear the darkest clouds of despair in my heart. A
                          single sight of your smile makes me forget all my
                          tensions and I'm down to thinking, "How did this
                          sunflower come to a gardener like me?"
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 all cinq">
                  <div className="single_portfolio">
                    <img
                      className="img-fluid w-100"
                      src="/images/personal/18.jpg"
                      alt=""
                    />
                    <div className="short_info">
                      <p>Filtered</p>
                      <h4>
                        <span>
                          As if we don't find enough satisfaction in the normal
                          world, we turn to the filters to bring out the inner
                          child in both of us.
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 all cinq">
                  <div className="single_portfolio">
                    <img
                      className="img-fluid w-100"
                      src="/images/personal/19.jpg"
                      alt=""
                    />
                    <div className="short_info">
                      <p>WE ARE MAD!!</p>
                      <h4>
                        <span>
                          We have surpassed the period of external beauty
                          attractions. We now just enjoy each other's company
                          and do whatever we get our crazy hands on!
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 all cinq">
                  <div className="single_portfolio">
                    <img
                      className="img-fluid w-100"
                      src="/images/personal/20.jpg"
                      alt=""
                    />
                    <div className="short_info">
                      <p>Diwali</p>
                      <h4>
                        <span>
                          Before this 3-day stay, we thought that we might ruin
                          what's so special to us in those 3 days. But we came
                          out stronger, more attached and more deep in love than
                          ever before.
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="timeline-container" id="timeline-1">
          <div className="timeline-header">
            <h2 className="timeline-header__title">Our Time River</h2>
            <h3 className="timeline-header__subtitle">
              Where we started and where we are
            </h3>
          </div>
          <div className="timeline">
            <div className="timeline-item" data-text="I SAW YOU, YOU SAW ME">
              <div className="timeline__content">
                <img className="timeline__img" src="/images/personal/21.jpg" />
                <h2 className="timeline__content-title">
                  18<sup>th</sup> Jan'19
                </h2>
                <p className="timeline__content-desc">
                  On that heavenly night, when the air was festive with
                  Kashiyatra, the music adding colors to the starry night, a
                  paradise waiting ahead. Two seagulls wandering over an
                  unending sea of youth meet over an island of love. The desert
                  in my heart finds an oasis in your beauty.
                </p>
              </div>
            </div>
            <div className="timeline-item" data-text="THE AROMA OF THE BLOSSOM">
              <div className="timeline__content">
                <img className="timeline__img" src="/images/personal/22.jpg" />
                <h2 className="timeline__content-title">
                  14<sup>th</sup> Apr'19
                </h2>
                <p className="timeline__content-desc">
                  You messaged me on 11<sup>th</sup> - "Waise kuch kehna tha".
                  Those words sent a chill down my spine as I tried to recall
                  all the times I might have been a total dumbass and also tried
                  to remember those times when I made you laugh thinking that it
                  might balance my idiocy. Are you going to tell me that you got
                  a boyfriend already and that we must never see each other
                  again? Or will it be some mundane thing that did not need the
                  kind of nervousness I felt? Or did I succeed in winning you?
                  Maybe not. I'm not that fortunate. We met on 13<sup>th</sup> -
                  Lemon Grass - we ordered what was my most expensive meal ever
                  (but it was surprisingly normal for you :O). We couldn't eat
                  even a bite properly, both of us feeling equally nervous. We
                  went back. The night you called. I was determined to spill it
                  out from you. And voila! At exact 1:17 AM, you said those
                  words. And my heart sped off limits and I didn't know how to
                  react. But we came along &lt;3
                </p>
              </div>
            </div>
            <div className="timeline-item" data-text="SHE LOVES ME!">
              <div className="timeline__content">
                <img className="timeline__img" src="/images/personal/23.jpg" />
                <h2 className="timeline__content-title">
                  6<sup>th</sup> May'19
                </h2>
                <p className="timeline__content-desc">
                  As we were bonding more and more with each other and knowing
                  about each others' lives and secrets, you teaching me how to
                  talk to a girl and me lying in a garden full of beautiful
                  flowers of your affection listening to the pleasant music of
                  your voice, wondering how did a guy like me manage to get such
                  a fine girl, you told me the one thing I never anticipated for
                  even a bit. This day we celebrated my birthday but little did
                  I know that you had something else in your mind. The next day
                  I left and while in the train, you told me the magical three
                  words. I was startled at first. Never imagined I could ever be
                  worthy of it. As usual I didn't know how to react and asked
                  for some time. But in my heart I always knew, that I will end
                  up in love with you.
                </p>
              </div>
            </div>
            <div className="timeline-item" data-text="AND I LOVE HER TOO!">
              <div className="timeline__content">
                <img className="timeline__img" src="/images/personal/24.jpg" />
                <h2 className="timeline__content-title">
                  31<sup>st</sup> May'19
                </h2>
                <p className="timeline__content-desc">
                  I was back from my home. Though I managed to make time for our
                  talking but still the sight of you in front of me never became
                  less wonderful. After a weird date at the Durgakund, I called
                  you up this day, because I had something to tell that I
                  decided not to tell you over call or text. I had given it a
                  lot of thought, I imagined myself in a relationship of that
                  level, for the coming months and beyond. I finally said it,
                  said her with all my heart, made it clear that I was not
                  considering us just a fling or something that we'll forget, I
                  told her, although nervous as always, that I love her!
                </p>
              </div>
            </div>
            <div className="timeline-item" data-text="THE FESTIVAL OF LIGHTS">
              <div className="timeline__content">
                <img className="timeline__img" src="/images/personal/25.jpg" />
                <h2 className="timeline__content-title">
                  27<sup>th</sup> Oct'19
                </h2>
                <p className="timeline__content-desc">
                  After some pleasant months and many firsts, the festival of
                  lights came around. Due to lack of holidays, I was unable to
                  go home and knew that this would turn out to be a dull Diwali.
                  But how can you allow my Diwali to go in despair. You made my
                  Diwali more than just special by staying by my side and
                  celebrating the festival with me. We visited the temple
                  together for the first time and toured the glitters of the
                  city in a festive mood.
                </p>
              </div>
            </div>
            <div className="timeline-item" data-text="THE COLD WINTERS">
              <div className="timeline__content">
                <img className="timeline__img" src="/images/personal/26.jpg" />
                <h2 className="timeline__content-title">
                  24<sup>th</sup> Dec'19
                </h2>
                <p className="timeline__content-desc">
                  In the cold and cruel winter chills, you provided me warmth in
                  your cuddles. Your touch gave me the sensation that drove all
                  my cold away. We came so close to each other that we became
                  one soul and we got used to seeing each other every morning
                  and kiss good night every night. We enjoyed the meals together
                  and for me, the food never tasted the same as with you. And I
                  can't thank you enough to make my dream of New Year kiss come
                  true. I am really missing you sweetie :(
                </p>
              </div>
            </div>
            <div
              className="timeline-item"
              data-text="THIS TIMELINE WILL NEVER END"
            >
              <div className="timeline__content">
                <img className="timeline__img" src="/images/personal/27.jpg" />
                <h2 className="timeline__content-title">Today - Forever</h2>
                <p className="timeline__content-desc">
                  This year has been very challenging for us and is testing our
                  relationship to its extreme. We met for just some days in the
                  past few months and maybe for the coming months too. These
                  days have been very difficult for both of us and we haven't
                  been separated for this long ever. But we will come out of it
                  stronger than ever with our relationship having endured these
                  worst conditions. We previously planned to end it since we
                  thought long-distance would never work given my placements and
                  your prep. But if we can survive this, then long distance will
                  never be a problem anymore. We came this far in our journey
                  and I wish to continue this journey with you till my last
                  breath. I love you <i>Mon Cheri!</i>
                </p>
              </div>
            </div>
          </div>
        </div>
        <script src="/js/jquery.min.js"></script>
        <script src="/js/bootstrap.min.js"></script>
        <script src="/js/owl.carousel.min.js"></script>
        <script src="/js/imagesloaded.pkgd.min.js"></script>
        <script src="/js/isotope.pkgd.min.js"></script>
      </div>
    );
  }
}
