import React, {useEffect} from "react";
import "./news.sass";
import { Link } from "react-router-dom";
import news_list from "./data.js";
import 'react-slideshow-image/dist/styles.css'

const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div 
        className="block_title"
        style={{
          backgroundImage: `url("${require("../../images/header/news_event.png")}"`
        }}
      >News & Events</div>
      <div className="news" style={{backgroundImage: `url("${require("../../images/body/pattern.png")}"`}}>
        <div className="news_list">
        {
          news_list.map((item, index) => (
            <div className="news_list_item">
              <div className="news_list_item_image">
                <img src={item.url} alt={'News ' + index} />
              </div>
              <div className="news_list_item_content">
                <div className="news_list_item_title">{item.title}</div>
                <div className="news_list_item_des">{item.description}</div>
                <div className="news_list_item_detail">{item.time}
                  <Link to={"/news-detail/"+index} className="view_detail">View Detail</Link>
                  <div className="arrow">&#8594;</div>
                </div>
                <div className="news_list_item_time">{item.time}</div>
              </div>
            </div>
          ))
        }
        </div>
        <div className="news_navigation">
          <div className="news_navigation_left news_navigation_transparent news_navigation_item">
            <img
              src={require("../../images/body/news/right_end.png")}
              alt="left_end"
            />
          </div>
          <div className="news_navigation_left news_navigation_transparent news_navigation_item">
            <img src={require("../../images/body/news/right.png")} alt="left" />
          </div>
          <div className="news_navigation_item">1</div>
          <div className="news_navigation_item">2</div>
          <div className="news_navigation_item">3</div>
          <div className="news_navigation_item">4</div>
          <div className="news_navigation_item">5</div>
          <div className="news_navigation_right news_navigation_transparent news_navigation_item">
            <img src={require("../../images/body/news/right.png")} alt="right" />
          </div>
          <div className="news_navigation_right news_navigation_transparent news_navigation_item">
            <img
              src={require("../../images/body/news/right_end.png")}
              alt="right_end"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
