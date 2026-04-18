mport Navbar from "../components/Navbar";

const data = [
  { id: 1, service: "Paseo", date: "12 Abril", status: "Completado" },
  { id: 2, service: "Veterinario", date: "10 Abril", status: "Completado" }
];

export default function History() {
  return (
    <div className="container">
      <h2>Historial</h2>

      {data.map((item) => (
        <div key={item.id} className="card flex">
          <div>
            <b>{item.service}</b>
            <p className="gray">{item.date}</p>
          </div>
          <span className="green">{item.status}</span>
        </div>
      ))}

      <Navbar />
    </div>
  );
}
