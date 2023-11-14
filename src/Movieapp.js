import { useEffect } from "react";
const Movieapp = () => {
    // let fetchmovielist = ()=>{
    //     fetch("./utilities/movieapidata.json")
    //     .then((response) => response.json())
    //     .then((json) => console.log(json));
    //     console.log("data is fetched");
    // }
    let fetchMovieList = () => {
        fetch("www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
          .then((response) => {
            // if (!response.ok) {
            //   throw new Error("Network response was not ok");
            // }
            response.headers.get("Content-Type");
            return response.json();
          })
          // .then((json) => {
          //   console.log(json);
          //   // Perform further actions with the fetched data here
          // })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      
        console.log("Data is being fetched...");
      }
      
    useEffect(fetchMovieList);
    return (
        <div>
            <h1>Netflix</h1>
        </div>
    )
};

export default Movieapp;