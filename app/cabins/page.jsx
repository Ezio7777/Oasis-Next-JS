import Counter from "../../src/components/counter.jsx";

const Cabin = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();

  return (
    <div>
      <h1>Its cabins</h1>

      {data.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}

      <Counter data={data.length} />
    </div>
  );
};

export default Cabin;
