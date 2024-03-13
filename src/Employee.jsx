export default function Employee({ employee }) {
  console.log(employee);
  return (
    <div className="employee">
      <h3>Name: {employee.name}</h3>
      <h4>Id: {employee.id}</h4>
      <h4>Age: {employee.age}</h4>
      <h4>Profession: {employee.profession}</h4>
    </div>
  );
}
