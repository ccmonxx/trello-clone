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
	// DropResult 로 정의된 타입을 통해 해당 요소의 정보를 획득할 수 있다.
	const onDragEnd = (info: DropResult) => {
		console.log(info);
		const { draggableId, source, destination } = info;
		// 시작지점 === 도착지점
		if (destination?.droppableId === source.droppableId) {
			// ✅ sam board movement
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
