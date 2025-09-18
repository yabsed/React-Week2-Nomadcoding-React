import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const getMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
    // eslint-disable-next-line
  }, [id]);

  if (loading) {
    return <h2>Loading...!</h2>;
  }

  if (!movie) {
    return <h2>영화 정보를 찾을 수 없습니다.</h2>;
  }

  return (
    <div>
      <h1>
        {movie.title} ({movie.year})
      </h1>
      <img src={movie.medium_cover_image} alt={movie.title} />
      <h3>평점: {movie.rating} / 10</h3>
      <h4>장르: {movie.genres && movie.genres.join(", ")}</h4>
      <h4>러닝타임: {movie.runtime}분</h4>
      <p>{movie.description_full}</p>
      <a href={movie.url} target="_blank" rel="noopener noreferrer">
        YTS에서 보기
      </a>
    </div>
  );
}

export default Detail;
