import { message } from "antd";
import React, { useEffect, useState } from "react";

const Orders = () => {
  useEffect(() => {
    getUsers();
  }, []);
  const [data, setData] = useState([]);
  const getUsers = async () => {
    try {
      const res = await fetch(
        "https://strapi-store-server.onrender.com/api/orders",
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjM4MywiaWF0IjoxNzA2NzE3MTQ5LCJleHAiOjE3MDkzMDkxNDl9.J48MUeQQrdA75q4p1eGHrsNLL-dh5dXucnOfxJQ-gfI",
          },
          redirect: "follow",
        }
      );
      const result = await res.json();
      message.success("Console message");
      console.log(result);
    } catch (error) {
      message.error(error);
    }
  };
  return (
    <>
      <div>
        <h2 style={{fontSize:25}}> You have no orders yet :(</h2>
      </div>
    </>
  );
};

export default Orders;
