import {FaArrowAltCircleDown} from "react-icons/fa"
const Posts = () => {

    const data = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
    }

  return (
    <button onClick={data}>
        <FaArrowAltCircleDown/>
      <p>Traer datos</p>
    </button>
  );
};
export default Posts;
