import React from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
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
	display: flex;
	align-items: flex-start;
	justify-content: center;
	width: 100%;
	gap: 10px;
`;

function App() {
	const [toDos, setTodos] = useRecoilState(toDosState);
	const onDragEnd = (info: DropResult) => {
		console.log(info);

		const { draggableId, source, destination } = info;
		if (!destination?.droppableId) return;

		// 🔻 Sam board movement
		if (destination?.droppableId === source.droppableId) {
			setTodos((allBoards) => {
				const boardCopy = [...allBoards[source.droppableId]]; // [toDo, doing, done]
				boardCopy.splice(source.index, 1);
				boardCopy.splice(destination.index, 0, draggableId);
				return {
					...allBoards,
					[source.droppableId]: boardCopy,
				};
			});
		}
		// 🔻 Cross Board Movement
		if (destination.droppableId !== source.droppableId) {
			setTodos((allBoards) => {
				const sourceBoard = [...allBoards[source.droppableId]];
				const destinationBoard = [...allBoards[destination.droppableId]];
				sourceBoard.splice(source.index, 1);
				destinationBoard.splice(destination.index, 0, draggableId);
				return {
					...allBoards,
					[source.droppableId]: sourceBoard,
					[destination.droppableId]: destinationBoard,
				};
			});
		}
	};

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Wrapper>
				<Boards>
					{Object.keys(toDos).map((boardId) => (
						<Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
					))}
				</Boards>
			</Wrapper>
		</DragDropContext>
	);
}

export default App;
