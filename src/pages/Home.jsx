import React, { useState } from "react";

const Teachers = () => {
  
  return (
    <>
      <div className="">
        
        <div
          className="header-app flex justify-between"
          style={{ marginBottom: 30 }}
        >
          <div
            style={{ width: "100%", maxWidth: 600 }}
            className="content flex flex-col items-start gap-10"
          >
            <h1
              className="font-medium"
              style={{ fontSize: 55, fontWeight: 700 }}
            >
              We are changing the way people shop
            </h1>
            <p className="text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              repellat explicabo enim soluta temporibus asperiores aut obcaecati
              perferendis porro nobis.
            </p>
            <button className="btn btn-primary text-lg">OurProducts</button>
          </div>
                                               
      
    </div>
                    <div className="footer-app" style={{ marginTop: "100px" }}>
          <div>
            <h3
              style={{
                fontSize: 25,
                paddingBottom: 20,
                borderBottom: "1px solid gray",
              }}
            >
              Featured Products
            </h3>
            <div style={{marginTop:50}}>
              <ul className="flex gap-20 flex-wrap justify-center items-center">
                <li>
                  <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                      <img
                        src="https://cdn0.divan.by/img/v1/NhgRFIVQ9jopQYHoLXFnR60sxJeFTQipu1DGBO5w1Ks/pd:0:0:0:0/rs:fill:1268:840:1:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:85/czM6Ly9kaXZhbi9wcm9kdWN0LzQxODkwMjQuanBn.jpg"
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">Shoes!</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                      <img
                        src="https://cdn0.divan.by/img/v1/59eKPNkZE9oVKG2Dlc1JjjW72V0HDA5lceheHqbYrnk/t:0::0:0/pd:60:60:60:60/rs:fit:1148:720:0:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:85/czM6Ly9kaXZhbi9wcm9kdWN0LzQ4MzEzNjQucG5n.jpg"
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">Shoes!</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                      <img
                        src="https://cdn0.divan.by/img/v1/fSRGGeFZqUuvwpZ-S2-noJHGJLqFUkrglkFEbrCfdn0/t:0::0:0/pd:60:60:60:60/rs:fit:1148:720:0:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:85/czM6Ly9kaXZhbi9wcm9kdWN0LzQ2NDUxNzAucG5n.jpg"
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">Shoes!</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teachers;
