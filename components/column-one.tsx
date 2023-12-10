import ListItem from "./list-item";
import RegisterForm from "./register-form";

const ColumnOne = () => {
  return (
    <div className="md:p-0 p-6 flex flex-col justify-center text-black">
      <h1 className="my-4 text-4xl font-bold text-black">Stay updated!</h1>
      <p className="mb-4 text-sm">
        Join 60,000+ product managers receiving monthly updates on:
      </p>
      <ul className="mb-4 text-sm">
        <ListItem text="Product discovery and building what matters" />
        <ListItem text="Measuring to ensure updates are a success" />
        <ListItem text="And much more!" />
      </ul>
      <RegisterForm />
    </div>
  );
};

export default ColumnOne;
