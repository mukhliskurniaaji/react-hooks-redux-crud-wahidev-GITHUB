import { AddKontak, ListKontak } from "./components";

function App() {
  return (
    <div style={{ pedding: '30px' }}>
      <h2>Aplikasi Kontak</h2>
      <hr />
      <AddKontak />
      <hr />
      <ListKontak />
    </div>
  );
}

export default App;
