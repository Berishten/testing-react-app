"use client"
import Fila from "./components/Fila";

export default function Home() {
  const perritosDesdeAPI = [
    { id: 1, icon: "🐕", nombre: "Pug", peso: 10 },
    { id: 2, icon: "🐕‍🦺", nombre: "Bulldog", peso: 20 },
    { id: 3, icon: "🦮", nombre: "Pastor Alemán", peso: 30 },
    { id: 4, icon: "🐩", nombre: "Dogo", peso: 40 }
  ]
  const perros = perritosDesdeAPI.map((perro, idx) => {
    return <Fila key={idx} perro={perro} />
  })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Perritos 🐶</h1>
      <hr />
      {
        perros
      }
    </main>
  );
}