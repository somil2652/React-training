// Use the useEffect hook to manage the current slide and transition.
// Add few images atleast 10 in public folder to populate the slideshow.
// Allow users to pause, play the slideshow.
// Include a time interval option to control the automatic slideshow progression.

import { useEffect, useState } from "react";

const Transition = () => {
  const images = [
    "img0.jpeg",
    "img1.jpg",
    "img2.jpeg",
    "img3.jpg",
    "img4.jpeg",
    "img5.jpeg",
  ];
  let [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handlePause = () => {
    setIsPaused(true);
  };

  const handlePlay = () => {
    setIsPaused(false);
  };

  index %= images.length;

  useEffect(() => {
    let id;
    if (isPaused) {
      clearTimeout(id);
    } else {
      id = setTimeout(() => {
        setIndex((index) => index + 1);
      }, 1000);
    }
    return () => clearTimeout(id);
  }, [index, isPaused]);

  return (
    <>
      <img
        style={{ height: "30rem", width: "30rem" }}
        src={`/${images[index]}`}
      />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </>
  );
};
export default Transition;
