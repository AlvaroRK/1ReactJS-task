const User = ({ firstName, year, married, address, alert }) => {
  const marr = married ? "nstá casado" : "no está casado";
  console.log(alert);

  return (
    <div>
      <h1>{firstName}</h1>
      <h2>tiene {year} años</h2>
      <h2>{marr}</h2>
      <ul>
        <li><h3>{address.street}</h3></li>
        <li><h3>{address.num}</h3></li>
      </ul>
    </div>
  );
};
export default User;
