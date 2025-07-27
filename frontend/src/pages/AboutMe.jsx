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
      <>
        <h1>About Me Page</h1>

        <h3>{info.name}</h3>

        <p>{info.bio}</p>
      </>  
    );
}