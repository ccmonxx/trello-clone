import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDosState } from "./atoms";
import DraggableCard from "./DraggableCard";

const Wrapper = styled.div`
	display: flex;
	max-width: 480px;
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
`;

const Board = styled.div`
	padding: 20px 10px;
	padding-top: 30px;
	border-radius: 5px;
	min-height: 200px;
	background-color: ${(props) => props.theme.boardColor};
`;

function App() {
	const [toDos, setTodos] = useRecoilState(toDosState);
	const onDragEnd = ({ source, destination, draggableId }: any) => {
		if (!destination) return;
		setTodos((oldToDos) => {
			const copyToDos = [...oldToDos];
			copyToDos.splice(source.index, 1);
			copyToDos.splice(destination.index, 0, draggableId);
			return copyToDos;
		});
	};

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Wrapper>
				<Boards>
					<Droppable droppableId="one">
						{(magic) => (
							<Board ref={magic.innerRef} {...magic.droppableProps}>
								{toDos.map((toDo, index) => (
									<DraggableCard key={toDo} toDo={toDo} index={index} />
								))}
								{magic.placeholder}
							</Board>
						)}
					</Droppable>
				</Boards>
			</Wrapper>
		</DragDropContext>
	);
}

export default App;
