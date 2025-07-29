import { useEffect, useState } from "react";

export default function AboutMe() {
  const [info, setInfo] = useState();
  
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/api/get-about-me.php`)
    .then(res => res.json())
    .then(data => setInfo(data))
    .catch(err => console.error(err));
  }, []);

  if (!info) return <p>Loading...</p>;

  return (
      <div className="about-me-container">
        <div className="about-me-top">
          <img className="profile_photo" src={`/${info.image_location}`} alt="Profile" />

          <h2 className="about-me-name">{info.name}</h2>
        </div>
          <p className="about-me-bio">{info.bio}</p>
      </ div>  
    );
}