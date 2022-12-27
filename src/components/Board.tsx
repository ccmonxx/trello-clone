import { useRef } from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DraggableCard from "./DraggableCard";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 300px;
	padding-top: 10px;
	border-radius: 5px;
	min-height: 300px;
	background-color: ${(props) => props.theme.boardColor};
	overflow: hidden;
`;

const Title = styled.h2`
	font-size: 18px;
	font-weight: 600;
	text-align: center;
	margin-bottom: 10px;
`;

const Area = styled.div<IArea>`
	flex-grow: 1;
	background-color: ${(props) =>
		props.isDraggingOver ? "#dfe6e9" : props.isDraggingFromThis ? "#b2bec3" : "transparent"};
	flex-grow: 1;
	transition: background-color 0.3s ease-in-out;
	padding: 20px;
`;

interface IArea {
	isDraggingOver: boolean;
	isDraggingFromThis: boolean;
}

interface IBoard {
	// toDo객체로 이루어진 배열
	toDos: string[];
	boardId: string;
}

function Board({ toDos, boardId }: IBoard) {
	const inputRef = useRef<HTMLInputElement>(null);
	const onClick = () => {
		inputRef.current?.focus();
		setTimeout(() => {
			inputRef.current?.blur();
		}, 5000);
	};

	return (
		<Wrapper>
			<Title>{boardId}</Title>
			<input ref={inputRef} placeholder="Grab Me" />
			<button onClick={onClick}>Click Me</button>
			<Droppable droppableId={boardId}>
				{(magic, snapshot) => (
					<Area
						ref={magic.innerRef}
						{...magic.droppableProps}
						isDraggingOver={snapshot.isDraggingOver}
						isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
					>
						{toDos.map((toDo, index) => (
							<DraggableCard key={toDo} index={index} toDo={toDo} />
						))}
						{magic.placeholder}
					</Area>
				)}
			</Droppable>
		</Wrapper>
	);
}

export default Board;
