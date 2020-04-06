import React from "react";

import Head from "next/head";

export default class OfPlatoAndPython extends React.Component {
  componentDidMount() {
    this.animateTimeline();
    this.animateGallery();
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
        </Head>
        <section className="portfolio_area area-padding" id="portfolio">
          <div className="container">
            <div className="area-heading">
              <h3>
                Check <span>Recent</span> Work
              </h3>
              <p>She'd earth that midst void creeping him above seas.</p>
            </div>

            <div className="filters portfolio-filter">
              <ul>
                <li className="active" data-filter="*">
                  all
                </li>
                <li data-filter=".weeding">weeding </li>
                <li data-filter=".motion"> motion</li>
                <li data-filter=".portrait">portrait</li>
                <li data-filter=".fashion">fashion</li>
              </ul>
            </div>

            <div className="filters-content">
              <div className="row portfolio-grid">
                <div className="grid-sizer col-md-3 col-lg-4"></div>
                <div className="col-lg-4 col-md-6 all fashion motion">
                  <div className="single_portfolio">
                    <img
                      className="img-fluid w-100"
                      src="/images/personal/1.jpg"
                      alt=""
                    />
                    <div className="short_info">
                      <p>Fashion</p>
                      <h4>
                        <a href="portfolio-details.html">Fahion photography</a>
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="col-lg-8 col-md-6 all weeding motion portrait">
                  <div className="single_portfolio">
                    <img
                      className="img-fluid w-100"
                      src="/images/personal/2.jpg"
                      alt=""
                    />
                    <div className="short_info">
                      <p>construction</p>
                      <h4>
                        <a href="portfolio-details.html">Desert Work, Dubai</a>
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 all weeding motion fashion">
                  <div className="single_portfolio">
                    <img
                      className="img-fluid w-100"
                      src="/images/personal/4.jpg"
                      alt=""
                    />
                    <div className="short_info">
                      <p>construction</p>
                      <h4>
                        <a href="portfolio-details.html">Desert Work, Dubai</a>
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 all motion portrait fashion">
                  <div className="single_portfolio">
                    <img
                      className="img-fluid w-100"
                      src="/images/personal/5.jpg"
                      alt=""
                    />
                    <div className="short_info">
                      <p>construction</p>
                      <h4>
                        <a href="portfolio-details.html">Desert Work, Dubai</a>
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="col-lg-8 col-md-6 all weeding  fashion">
                  <div className="single_portfolio">
                    <img
                      className="img-fluid w-100"
                      src="/images/personal/6.jpg"
                      alt=""
                    />
                    <div className="short_info">
                      <p>construction</p>
                      <h4>
                        <a href="portfolio-details.html">Desert Work, Dubai</a>
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
            <h2 className="timeline-header__title">Mustafa Kemal Atatürk</h2>
            <h3 className="timeline-header__subtitle">FATHER OF THE TURKS</h3>
          </div>
          <div className="timeline">
            <div className="timeline-item" data-text="FATHER OF THE TURKS">
              <div className="timeline__content">
                <img
                  className="timeline__img"
                  src="http://i.cdn.ensonhaber.com/resimler/diger/ataturk_3473.jpg"
                />
                <h2 className="timeline__content-title">1881</h2>
                <p className="timeline__content-desc">
                  He was born in 1881 (probably in the spring) in Salonica, then
                  an Ottoman city, now inGreece. His father Ali Riza, a customs
                  official turned lumber merchant, died when Mustafawas still a
                  boy. His mother Zubeyde, adevout and strong-willed woman,
                  raised him and his sister.
                </p>
              </div>
            </div>
            <div className="timeline-item" data-text="FATHER OF THE TURKS">
              <div className="timeline__content">
                <img
                  className="timeline__img"
                  src="http://cdn.yemek.com/uploads/2014/11/ataturk-10-kasim.jpg"
                />
                <h2 className="timeline__content-title">1908</h2>
                <p className="timeline__content-desc">
                  In 1908 he helped the group of officers who toppled the
                  Sultan. Mustafa Kemal'scareer flourished as he won his heroism
                  in the far corners of the Ottoman Empire,including Albania and
                  Tripoli. He also briefly served as a staff officer in Salonica
                  andIstanbul and as a military attache in Sofia.
                </p>
              </div>
            </div>
            <div className="timeline-item" data-text="FATHER OF THE TURKS">
              <div className="timeline__content">
                <img
                  className="timeline__img"
                  src="http://blog.istanbul1881.com/wp-content/uploads/2016/08/atat%C3%BCrk-%C3%BCn-inan%C4%B1lmaz-karizmatik-fotograf%C4%B1_861050.jpg"
                />
                <h2 className="timeline__content-title">1916</h2>
                <p className="timeline__content-desc">
                  Promotedto general in 1916, at age 35, he liberated two major
                  provinces in eastern Turkey thatyear. In the next two years,
                  he served as commander of several Ottoman armies inPalestine,
                  Aleppo, and elsewhere, achieving another major victory by
                  stopping the enemyadvance at Aleppo.
                </p>
              </div>
            </div>
          </div>
        </div>
        <script src="/js/jquery.min.js"></script>
        <script src="/js/imagesloaded.pkgd.min.js"></script>
        <script src="/js/isotope.pkgd.min.js"></script>
      </div>
    );
  }
}
