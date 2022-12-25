import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDosState } from "./atoms";

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

const Card = styled.div`
	border-radius: 5px;
	margin-bottom: 5px;
	padding: 10px 10px;
	background-color: ${(props) => props.theme.cardColor};
`;

function App() {
	const [toDos, setTodos] = useRecoilState(toDosState);
	const onDragEnd = ({ source, destination, draggableId }: any) => {
		console.log(`시작정보`, source);
		console.log(`도착정보`, destination);
		console.log(`요소정보`, draggableId);

		setTodos((oldToDos) => {
			const copyToDos = [...oldToDos];
			// 1. 선택된(드래그) 아이템을 삭제한다.
			copyToDos.splice(source.index, 1);
			// 2.삭제한 아이템을 도착지점에 넣는다.
			copyToDos.splice(destination.index, 0, draggableId);
			return copyToDos;
		});

		console.log(`최종수정`, toDos);
	};

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Wrapper>
				<Boards>
					<Droppable droppableId="one">
						{(magic) => (
							<Board ref={magic.innerRef} {...magic.droppableProps}>
								{toDos.map((toDo, index) => (
									<Draggable draggableId={toDo} index={index} key={toDo}>
										{(magic) => (
											<Card
												ref={magic.innerRef}
												{...magic.dragHandleProps}
												{...magic.draggableProps}
											>
												{toDo}
											</Card>
										)}
									</Draggable>
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
