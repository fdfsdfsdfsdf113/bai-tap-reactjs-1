
type GreetingProps = {
  name: string;
    age: number;
};
const Greeting = ({name, age= 1} : GreetingProps) => {
  return (
    <>
    <div>
        Welcome {name} - age:  {age}
    </div>
      <h1>Hello brainrot</h1>
      <p>lmao lmao</p>
      </>
  );
};
 export default Greeting;