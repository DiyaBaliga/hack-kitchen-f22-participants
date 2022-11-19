import React from 'react';
import catPan from "../Images/catPan.jpeg";
import catMicrowave from "../Images/catMicrowave.jpeg"
import catSoup from "../Images/catSoup.jpeg"
import catSteamer from "../Images/catSteamer.jpeg"

function Recipe() {
    return (
        <div id="recipe">
            <h1>Recipe:</h1>
            <div>
                <h2>Pan Fry:</h2>
                    <ol>
                        <li>Preheat 1 to 2 tablespoons of oil in a large skillet.</li>
                        <li>Add frozen Gyoza seam side up and saute over medium high heat for 4 minutes or until bottoms turn lightly golden.</li>
                        <li>Add 4 tablespoons of water, reduce heat, cover, and steam until water evaporates and Gtoza bottoms turn golden brown and slightly sticky (about 5 minutes).</li>
                        <li>Serve immediately with your favorite soy or dipping sauce!</li>
                    </ol>
                    <div>
                        {" "}
                        <center>
                        <img width="400px" src={catPan} alt="cat on a pan" />{" "}
                        </center>
                    </div>
            </div>

            <div>
                <h2>Steam:</h2>
                    <ol>
                        <li>Place frozen Gyoza seam side up in a steamer basket or double boilder over boiling water.</li>
                        <li>Cover and steam for 7-10 minutes.</li>
                        <li>Serve immediately with your favorite soy or dipping sauce!</li>
                    </ol>
                    <div>
                        {" "}
                        <center>
                        <img width="400px" src={catSteamer} alt="cat holding dumplings" />{" "}
                        </center>
                    </div>
            </div>

            <div>
                <h2>Microwave:</h2>
                    <ol>
                        <li>Place frozen Gyoza seam side up on a microwave safe plate.</li>
                        <li>Cover with a wet paper towel and heat on high for 2-3 minutes until soft and heated through.</li>
                        <li>Serve immediately with your favorite soy or dipping sauce!</li>
                    </ol>
                    <div>
                        {" "}
                        <center>
                        <img width="400px" src={catMicrowave} alt="cat in a microwave" />{" "}
                        </center>
                    </div>
            </div>

            <div>
                <h2>Soup:</h2>
                    <ol>
                        <li>Add frozen Gyoza to your favorite broth.</li>
                        <li>Gently boil for 2-3 minutes or until soft and heated through. Do not overcook!</li>
                        <li>Enjoy dumplings in your favorite soup! :D</li>
                    </ol>
                    <div>
                        {" "}
                        <center>
                        <img width="400px" src={catSoup} alt="cat with soup" />{" "}
                        </center>
                    </div>
            </div>
        </div>

    );
  }

export default Recipe;