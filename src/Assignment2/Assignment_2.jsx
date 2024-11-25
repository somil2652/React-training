
import Counter from "./Ques1/Counter";
import LanguageSwitcher from "./Ques10/LanguageSwitcher";
import ShoppingCart from "./Ques11/ShoppingCart";
import VotingApplication from "./Ques12/VotingApplication";
import Parent from "./Ques13/Parent";
import TaskList from "./Ques14/TaskList";
import StudentList from "./Ques15/StudentList";
import EmployeeSalary from "./Ques16/EmployeeSalary";
import Component from "./Ques17/Component";
import UserName from "./Ques18/UserName";
import CountDownTimer from "./Ques19/CountDownTimer";
import PersonForm from "./Ques2/PersonForm";
import ToDoList from "./Ques3/ToDoList";
import RandomNumberGenerator from "./Ques4/RandomNumberGenerator";
import CounterWithStep from "./Ques5/CounterWithStep";
import Clock from "./Ques6/Clock";
import Notification from "./Ques7/Notification";
import Transition from "./Ques8/Transition";
import ThemeSwitcher from "./Ques9/ThemeSwitcher";

function Assignment_2() {
  const tasks = ["Eat", "Sleep", "Repeat"];
  return (
    <div>
      <h3>Question-1</h3>
      <Counter />
      <hr />
      <h3>Question-2</h3>
      <PersonForm />
      <hr />
      <h3>Question-3</h3>
      <ToDoList />
      <hr />
      <h3>Question-4</h3>
      <RandomNumberGenerator />
      <hr />
      <h3>Question-5</h3>
      <CounterWithStep />
      <hr />
      <h3>Question-6</h3>
      <Clock />
      <hr />
      <h3>Question-7</h3>
      <Notification />
      <hr />
      <h3>Question-8</h3>
      <Transition />
      <hr />

      <h3>Question-9</h3>
      <ThemeSwitcher />

      <hr />
      <h3>Question-10</h3>

      <LanguageSwitcher />
      <hr />
      <h3>Question-11</h3>
      <ShoppingCart />
      <hr />
      <h3>Question-12</h3>
      <VotingApplication />
      <hr />
      <h3>Question-13</h3>
      <Parent />
      <hr />
      <h3>Question-14</h3>
      <TaskList tasks={tasks} />
      <hr />
      <h3>Question-15</h3>
      <StudentList />
      <hr />
      <h3>Question-16</h3>
      <EmployeeSalary />
      <hr />
      <h3>Question-17</h3>
      <Component />
      <hr />
      <h3>Question-18</h3>
      <UserName />
      <hr />

      <h3>Question-19</h3>
      <CountDownTimer />
    </div>
  );
}

export default Assignment_2;
