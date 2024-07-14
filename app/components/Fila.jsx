import React, { useState } from "react";
import InputPersonalizado from "./InputPersonalizado";

const Fila = ({ perro }) => {
  // Almacenamos un estado local ya que no necesitamos pasarlo a nungun
  // otro componente, solo lo usamos para la fila.
	const [perroState, setPerro] = useState(perro);
	const [editando, setEditando] = useState(false);

	// Cuando el usuario presiona Enter, se cierra el
	// modo de edición y se guarda el valor
	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			event.preventDefault();
			setEditando(!editando);
		}
	};

  // Aquí se simula la llamada a la accion de flux para guardar
  // en la base de datos pasandole el perrito modificado
	const guardarEnBD = () => {
		// Se cierra el modo de edición y se guarda el valor
		setEditando(!editando);
		fluxActionSavePerrito(perroState);
	};

	return (
		<div
			style={{ backgroundColor: "gray", padding: "12px", borderRadius: "3px" }}>
			<span style={{ marginRight: "3px" }}>{perroState.icon}</span>
			<span onClick={() => (!editando ? setEditando(!editando) : null)}>
				Nombre:{" "}
				{editando ? (
					<InputPersonalizado
						value={perroState.nombre}
						type="text"
						onChangeHandler={(e) =>
							setPerro({ ...perroState, nombre: e.target.value })
						}
						onSubmitHandler={handleKeyDown}
					/>
				) : (
					<span className="tag">{perroState.nombre}</span>
				)}
			</span>
			<span
				onClick={() => (!editando ? setEditando(!editando) : null)}
				style={{ paddingLeft: "12px" }}>
				| Peso (Kg.):
				{editando ? (
					<InputPersonalizado
						value={perroState.peso}
						onChangeHandler={(e) =>
							setPerro({ ...perroState, peso: e.target.value })
						}
						onSubmitHandler={handleKeyDown}
					/>
				) : (
					<span className="tag">{perroState.peso}</span>
				)}
			</span>
			{editando ? (
				<button
					style={{
						marginLeft: "5px",
						border: "solid 1px black",
						padding: "2px",
						borderRadius: "5px",
					}}
					onClick={guardarEnBD}>
					Guardar
				</button>
			) : null}
		</div>
	);
};

export default Fila;
