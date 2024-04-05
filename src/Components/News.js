import React, { useEffect,useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {
  const [articles,setArticles]=useState([])
  const[loading,setLoading]=useState(false);
  const[page,setPage]=useState(1);
  const[pageResults,setPageResults]=useState(0);

  
/*    document.title =
      category.charAt(0).toUpperCase() +
      category.slice(1);
  }
  */

 const updateUrl = async (props) => {
 props.setProgress(10)
   
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    //let url ="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ffd03455859146f581d1a1fbbcb694d1"
    setLoading(true);
  
    let data = await fetch(url);
    let parsedData = await data.json();
   
    setArticles(parsedData.articles);
    setPage(page);
    setLoading(false);
  props.setProgress(100);
  };
  
  useEffect( ()=> {
        updateUrl(props);
       setPage(page+1);
  },[])
  

  const fetchMoreData = async(props) =>
  {
    props.setProgress(10);
   // let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ffd03455859146f581d1a1fbbcb694d1"
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}
    &apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
   
    setLoading(true);
    let data = await fetch(url);
    setPage(page);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setPageResults(pageResults + (parsedData.articles.length));
    setLoading(false);
    props.setProgress(100);
  }

 
    return (
     <>
    <br/><br/>
        <h2 className="text-center my-3">
          NewsApp - Top {" "}
          {props.category.charAt(0).toUpperCase() +
            props.category.slice(1)} {" "}
          Headlines
          </h2>  
      {  loading && <Spinner/> }
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !==pageResults}
          loader={<Spinner/>}
        >
          <div className="container">
  
          <div className="row my-2">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    descrp={
                      element.description
                    }
                    imageUrl={element.urlToImage}
                    source={element.source.name}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
        {/* <div className='container d-flex justify-content-between'>
          <button disabled={page<=1} className='btn btn-dark my-3' onClick={handlePrevCLick}>&larr;Previous</button>
          <button disabled={page +1 > Math.ceil(pageResults / pageSize)} className='btn btn-dark my-3'onClick={handleNextCLick}>&rarr;Next</button>
        </div>  */}
     </>
    );
  }
News.defaultProps={
  country:'in',
  pageSize: 8,
  category: 'general'

}
News.propTypes ={
  country: PropTypes.string,
  pageSize : PropTypes.number,
  category: PropTypes.string
}
  export default News;
