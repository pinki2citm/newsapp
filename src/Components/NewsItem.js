import React from "react";

const NewsItem =(props)=>{

    let { title, descrp, imageUrl, newsUrl, date, author ,source} = props;
    return (
      <div className="conatainer">
        <div className="card">
        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger " style={{left:'80%' , zIndex: '1'}}>
             { source}
              </span>
          <img
            src={
              !imageUrl
                ? "https://cdn.osxdaily.com/wp-content/uploads/2023/06/new-carplay-wallpapers-ios-17.jpg"
                : imageUrl
            }
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}...{" "}
            </h5>
            <p className="card-text">{descrp}...</p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read more
            </a>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author ? author : "unknown"} at {date}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;