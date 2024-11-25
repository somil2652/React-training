import React from "react";
import Greeting from "./Ques1/Greeting";
import UserCard from "./Ques2/UserCard";
import Weather from "./Ques3/Weather";
import Counter from "./Ques4/Counter";
import TaskList from "./Ques5/TaskList";
import Button from "./Ques6/Button";


function Assignment_1() {
  const task = ["Eat", "Sleep", "Code", "Repeat"];
  const data = [
    {
      name: "John",
      email: "john123@gmail.com",
      avatarURL:
        "https://gravatar.com/avatar/ca3abb6cdeca9b8b59f02d5946c31731?s=400&d=robohash&r=x",
    },
    {
      name: "doraemon",
      email: "dora123@gmail.com",
      avatarURL:
        "https://robohash.org/98b7768c88d1ef0833cc56b2be08cf2c?set=set4&bgset=&size=400x400",
    },
  ];
  const temp = [30, 10, -11];
  return (
    <div>
      <h3>Question-1</h3>
      <Greeting />
      <br />
      <h3>Question-2</h3>
      <UserCard data={data} />
      <br />
      <h3>Question-3</h3>
      <Weather temp={temp} />
      <br />
      <h3>Question-4</h3>
      <Counter />
      <br />
      <h3>Question-5</h3>
      <TaskList task={task} />
      <br />
      <h3>Question-6</h3>
      <Button text="I am a Button!" colour="red" />
    </div>
  );
}

export default Assignment_1;
