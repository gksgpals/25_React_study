import React, { useState } from "react";

function ProfileCard({ name, age, hobby }) {
  const [food, setFood] = useState("알리오올리오");

  const onChangeFood = () => {
    setFood(food === "알리오올리오" ? "불닭볶음면" : "알리오올리오");
  };

  return (
    <div style={{ border: "1px solid #ddd", padding: "16px", width: "300px" }}>
      <h2>자기소개 카드</h2>
      <p><b>이름:</b> {name}</p>
      <p><b>나이:</b> {age}</p>
      <p><b>취미:</b> {hobby}</p>
      <p><b>좋아하는 음식:</b> {food}</p>
      <button onClick={onChangeFood}>음식 바꾸기</button>
    </div>
  );
}

export default ProfileCard;
