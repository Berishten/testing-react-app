import React from "react";

const InputPersonalizado = ({
	value,
	type = "number", // Por defecto es un input de tipo number
	onChangeHandler,
	onSubmitHandler,
}) => {
	return (
		<>
			<input
				style={{ marginLeft: "7px" }}
				type={type}
				value={value}
				onChange={onChangeHandler}
				onKeyDown={onSubmitHandler}
			/>
		</>
	);
};

export default InputPersonalizado;
