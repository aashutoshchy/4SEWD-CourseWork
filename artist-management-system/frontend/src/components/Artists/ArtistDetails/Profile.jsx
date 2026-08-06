import "./Profile.css";

function Profile() {
  return (
    <div className="profile-container">
      <section className="info-left">
        <p>
          Lee Ji-eun (Korean: 이지은; born May 16, 1993), also known by her
          stage name IU (아이유), is a South Korean singer-songwriter and
          actress. She signed with LOEN Entertainment (now Kakao Entertainment)
          in 2007 as a trainee and debuted as a singer at the age of fifteen
          with the EP Lost and Found (2008). Although her follow-up albums
          brought mainstream success, it was only after the release of "Good
          Day", the lead single from her 2010 EP Real, that she achieved
          national stardom. "Good Day" went on to spend five consecutive weeks
          at the top of South Korea's Gaon Digital Chart, and in 2019, it was
          ranked number one on Billboard's "100 Greatest K-Pop Songs of the
          2010s" list. With the success of her 2011 albums, Real+ and Last
          Fantasy, IU established herself as a formidable force on the music
          charts of her native country and further cemented her girl next door
          image as Korea's "little sister." Her musical style matured and
          evolved with subsequent releases, deviating from mainstream K-pop
          styles, exploring and mixing various music genres, with IU exerting
          more creative control over her music, both as lyricist and producer,
          at the same time consistently retaining her dominance on South Korean
          music charts. Her 2020 single "Eight" (prod. by Suga) became her first
          to reach number one on Billboard's World Digital Song Sales chart.
        </p>
      </section>
      <section className="info-right">
        <img
          src="https://cdn.kpopconcerts.com/wp-content/uploads/2024/08/8-%EC%A0%9C%EA%B3%B5EDAM%EC%97%94%ED%84%B0%ED%85%8C%EC%9D%B8%EB%A8%BC%ED%8A%B8-1024x683.jpg"
          alt=""
        />
        <div className="profile-sec-head">Background</div>
        <div className="bg-info">
          <div className="bg-info-row">
            <p>Real Name</p>
            <p>Lee Ji Eun</p>
          </div>
          <div className="bg-info-row">
            <p>Birth date</p>
            <p>May 16, 1993 (age 33)</p>
          </div>
          <div className="bg-info-row">
            <p>Height</p>
            <p>Lee Ji Eun</p>
          </div>
          <div className="bg-info-row">
            <p>Weight</p>
            <p>Lee Ji Eun</p>
          </div>
        </div>
        <div className="profile-sec-head">Career</div>
        <div className="bg-info">
          <div className="bg-info-row">
            <p>Occupation</p>
            <p>Lee Ji Eun</p>
          </div>
          <div className="bg-info-row">
            <p>Instruments</p>
            <p>May 16, 1993 (age 33)</p>
          </div>
          <div className="bg-info-row">
            <p>Genres</p>
            <p>Lee Ji Eun</p>
          </div>
          <div className="bg-info-row">
            <p>Solo Debut</p>
            <p>Lee Ji Eun</p>
          </div>
          <div className="bg-info-row">
            <p>Years Active</p>
            <p>Lee Ji Eun</p>
          </div>
        </div>
        <div className="sns-sec">
          <p>SNS</p>
          <ul className="sns-handle">
            <li>
              <i class="fa-brands fa-itunes-note"></i>
            </li>
            <li>
              <i class="fa-brands fa-spotify"></i>
            </li>
            <li>
              <i class="fa-brands fa-itunes-note"></i>
            </li>
            <li>
              <i class="fa-brands fa-youtube"></i>
            </li>
            <li>
              <i class="fa-brands fa-instagram"></i>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Profile;
