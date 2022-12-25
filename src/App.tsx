import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDosState } from "./atoms";
import Board from "./Board";

const Wrapper = styled.div`
	display: flex;
	max-width: 680px;
	width: 100%;
	margin: 0 auto;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

const Boards = styled.div`
	display: grid;
	width: 100%;
	grid-template-columns: repeat(1, 1fr);
	gap: 10px;
	grid-template-columns: repeat(3, 1fr);
`;

function App() {
	const [toDos, setTodos] = useRecoilState(toDosState);
	const onDragEnd = ({ source, destination, draggableId }: any) => {
		if (!destination) return;
		// setTodos((oldToDos) => {
		// 	const copyToDos = [...oldToDos];
		// 	copyToDos.splice(source.index, 1);
		// 	copyToDos.splice(destination.index, 0, draggableId);
		// 	return copyToDos;
		// });
	};

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Wrapper>
				<Boards>
					{/* ✅ */}
					{Object.keys(toDos).map((boardId) => (
						<Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
					))}
				</Boards>
			</Wrapper>
		</DragDropContext>
	);
}

export default App;
