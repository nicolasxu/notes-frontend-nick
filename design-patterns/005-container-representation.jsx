import React from "react";
export function useDogImages() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breed/labrador/images/random/6")
      .then((res) => res.json())
      .then(({ message }) => setDogs(message));
  }, []);

  return dogs;
}


export default function DogImages() {
  const dogs = useDogImages();

  // lots of function, data layer, logic
  // can be here.
  return dogs.map((dog, i) => <img src={dog} key={i} alt="Dog" />);
}