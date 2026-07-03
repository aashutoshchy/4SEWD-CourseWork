import { useParams } from "react-router-dom";

function Artist() {
  const { id } = useParams();

  return (
    <div className="artist-container">
      <div className="artist-visual">
        <img src="http://edam-ent.com/eng/images/subVisual.jpg" alt="" />
        <h1>IU</h1>
      </div>
      <div className="artist-details">
        <div className="col">
          <div className="row">
            <span>Name </span>
            <span>IU</span>
          </div>
          <div className="row">
            <span>Birth </span>
            <span>May 16th, 1993</span>
          </div>
          <div className="row">
            <span>Social Handle: </span>
            <span>gdfg</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Artist;
