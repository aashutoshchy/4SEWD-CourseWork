import "./Profile.css";

function Profile() {
  return (
    <div className="profile-container">
      <section className="basic-info">
        <div className="info-container">
          <div className="info-left">
            <p>
              Real Name: <span>Aashutosh Chaudhary</span>
            </p>
            <p>
              Birthday: <span>2006.10.15</span>
            </p>
            <p>
              Nationality: <span>Nepali</span>
            </p>
            <p>
              Debut: <span>2024.12.12</span>
            </p>
            <p>
              Genre:: <span>Ballad, Pop</span>
            </p>
            <p>
              Agency: <span>something</span>
            </p>
          </div>
          <div className="info-right">
            <img
              src="https://static.wikitide.net/greatcharacterswiki/thumb/8/81/Levi_scar.png/300px-Levi_scar.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <div className="line"></div>
      <section className="about-artist">
        <h1>About Artist</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
          totam ad, quos nostrum impedit culpa, tempore quam, voluptatem et
          laborum reprehenderit? Error, saepe. Provident ratione amet, quasi
          laboriosam quaerat tempore assumenda porro repellat blanditiis tenetur
          sapiente totam. Praesentium adipisci laudantium voluptates?
          Necessitatibus! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Rerum saepe laudantium reprehenderit culpa consectetur odio quod
          repudiandae, esse dicta non minima architecto eius fugit, rem eveniet
          quisquam ex necessitatibus eligendi praesentium tempora? Inventore
          distinctio aliquam nihil dolorum voluptate molestiae ab error minus
          quia. Eos, molestiae.
        </p>
      </section>
      <div className="line"></div>
      <section className="career-highlight">
        <h1>Career Highlights</h1>
        <p>
          Debut release: <span>something</span>
        </p>
        <p>
          Major achievements: <span>something</span>
        </p>
        <p>
          Awards: <span>something</span>
        </p>
        <p>
          Important milestones: <span>something</span>
        </p>
      </section>
      <div className="line"></div>
      <section className="official-Links">
        <a href="https://www.instagram.com/aaashutoshchy_">
          <i class="fa-brands fa-instagram"></i>
        </a>

        <a href="https://open.spotify.com/artist/4cydZloyVyEfBQYKZhcVWC?si=2HDTtByYS3uQoihStXgDdg">
          <i class="fa-brands fa-spotify"></i>
        </a>

        <a href="https://www.tiktok.com/@aaashutoshchy_">
          <i class="fa-brands fa-tiktok"></i>
        </a>

        <a href="https://www.youtube.com/channel/UCpQj9LHRRYkcfuA8GVp8mgQ">
          <i class="fa-brands fa-youtube"></i>
        </a>
      </section>
    </div>
  );
}

export default Profile;
