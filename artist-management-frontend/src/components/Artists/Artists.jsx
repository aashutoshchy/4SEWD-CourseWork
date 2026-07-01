import React from "react";
import ArtistCard from "./ArtistCard";

function Artists() {
  return (
    <div className="artists-page">
      <p className="heading">Artists</p>
      <div className="artist-list">
        <ArtistCard
          src="https://i.scdn.co/image/ab6761610000e5eb789f38042e5ef8911fc3826b"
          name="IU"
        />
        <ArtistCard
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRNlZy4mVmqF6y3ce6poz26SsWKZbgRUAt82KGQHbMFJztH2O2qwuOO604&s=10"
          name="Sajjan Raj Vaidya"
        />
        <ArtistCard
          src="https://dam.mediacorp.sg/image/upload/s--p704OKC2--/c_crop,h_1536,w_2048,x_0,y_0/c_fill,g_auto,h_622,w_830/f_auto,q_auto/v1/mediacorp/cna/image/2024/11/26/1732008240cropped3577x2682.jpg?itok=7Rwove1q"
          name="ROSÉ"
        />
        <ArtistCard
          src="https://preview.redd.it/describe-zoro-in-a-way-only-one-piece-fans-can-understand-v0-5k3h3zqxzrlf1.jpeg?width=640&crop=smart&auto=webp&s=ad451f20d390268b0617c12d839ceb36ad0a0ac5"
          name="Zoro"
        />

        <ArtistCard
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy4453tkaEHieVN0ou1SeOFjg-k5cx5Ouaz7fdPPqKW1AA04H4kRmEPRs&s=10"
          name="Darshan Raval"
        />
        <ArtistCard
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBwglL7gRb8vaJbaK3Oei8Q-CgM-uv71wkhx9LqZDcrT6_oEXdezKaJshW&s=10"
          name="Kim Sejeong"
        />
      </div>
    </div>
  );
}

export default Artists;
