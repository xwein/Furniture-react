import { Subheading } from "../../components";
import images from "../../constants/images";
import "./AboutTeam.css";

const teamPhoto = [
  images.aboutTeam,
  images.aboutTeam1,
  images.aboutTeam2,
  images.aboutTeam3,
];

const teamNames = [
  "James Williams",
  "JohanSmith",
  "Danial Taylor",
  "Jason Harris",
];

const teamPost = [
  "(Shop Owner)",
  "(Shop Manager)",
  "(Shop Worker)",
  "(Shop Director)",
];

function AboutTeam() {
  return (
    <div className="app__aboutTeam">
      <Subheading title="Meet Our Team" />
     <div className="app__aboutTeam_container">
      {teamPhoto.map((image, index) => (
        <div
          className="app__aboutTeam_container-card"
          key={`team_photo-${index + 1}`}
        >
          <div className="app__aboutTeam_container-card_photo">
            <img src={image} alt={`team_photo_${index + 1}`} />
          </div>
          <p>{teamNames[index]}</p>
          <p>{teamPost[index]}</p>
        </div>
      ))}
      </div> 
    </div>
  );
}

export default AboutTeam;
