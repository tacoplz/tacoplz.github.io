import React from "react";

import axios from "axios";
import { Jumbotron } from "./migration";

const pictureLinkRegex = new RegExp(
  /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
);
{/* Add var below to get meeting button scheduleEventUrl */}
const AboutMe = ({ heading, message, link, imgSize, resume, calendarUrl, }) => {
  const [profilePicUrl, setProfilePicUrl] = React.useState("");
  const [showPic, setShowPic] = React.useState(Boolean(link));
  // Responsive image size: smaller on mobile, full size on desktop
  const mobileImgSize = Math.min(250, imgSize); // 250px max on mobile
  // https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook
  React.useEffect(() => {
    const handleRequest = async () => {
      const instaLink = "https://www.instagram.com/";
      const instaQuery = "/?__a=1";
      try {
        const response = await axios.get(instaLink + link + instaQuery);
        setProfilePicUrl(response.data.graphql.user.profile_pic_url_hd);
      } catch (error) {
        setShowPic(false);
        console.error(error.message);
      }
    };

    if (link && !pictureLinkRegex.test(link)) {
      handleRequest();
    } else {
      setProfilePicUrl(link);
    }
  }, [link]);



  return (
    <Jumbotron id="aboutme" className="m-0">
      <div className="container row">
        <div className="col-12 col-lg-5 d-flex justify-content-center align-self-center mb-4 mb-lg-0">
          {showPic && (
            <img
              className="border border-secondary rounded-circle profile-pic-responsive"
              src={profilePicUrl}
              alt="profilepicture"
              style={{
                width: `${mobileImgSize}px`,
                height: `${mobileImgSize}px`,
}}
            />
          )}
          <style>{`
            @media (min-width: 992px) {
              .profile-pic-responsive {
              width: ${imgSize}px !important;
              height: ${imgSize}px !important;
            }
          }
        `}</style>
        </div>
        <div className={`col-lg-${showPic ? "7" : "12"}`}>
          <h2 className="display-4 mb-5 text-center">{heading}</h2>
          {Array.isArray(message) ? (
            message.map((paragraph, index) => (
              <p key={index} className="lead text-center mb-4">{paragraph}</p>
            ))
          ) : (
            <p className="lead text-center">{message}</p>
          )}
          {resume && (
            <p className="lead text-center">
              <a
                className="btn btn-outline-dark btn-lg"
                href={resume}
                target="_blank"
                rel="noreferrer noopener"
                role="button"
                aria-label="Resume/CV"
              >
                Resume
              </a>
            </p>
          )}
        </div>
      </div>

      {/* Google Calendar Embed */}
      {calendarUrl && (
        <div className="container mt-5">
          <h3 className="text-center mb-4">My Calendar</h3>
          <div className="calendar-responsive" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
            <iframe 
              src={calendarUrl}
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
              frameBorder="0" 
              scrolling="no"
              title="Google Calendar"
            ></iframe>
          </div>
        </div>
      )}
    </Jumbotron>
  );
};

export default AboutMe;
