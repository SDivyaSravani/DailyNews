import fallbackImage from "../assets/newsImage.webp";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={src || fallbackImage}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = fallbackImage;
        }}
        style={{ height: "200px", objectFit: "cover" }}
        className="card-img-top"
        alt="news"
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title ? title.slice(0, 50) : "Untitled"}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "No description available for this article."}
        </p>
        <a href={url} target="_blank" className="btn btn-primary mt-auto">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
