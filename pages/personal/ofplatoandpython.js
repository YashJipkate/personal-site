import React from "react";

import Head from "next/head";

export default class OfPlatoAndPython extends React.Component {
  componentDidMount() {
    this.animateTimeline();
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
          <title key="title">Soft and Sweet &lt;3</title>
          <link rel="shortcut icon" href="/favicon.png" key="icon" />
        </Head>
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
      </div>
    );
  }
}
