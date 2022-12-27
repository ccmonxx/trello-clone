import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DraggableCard from "./DraggableCard";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { IToDo, toDosState } from "../atoms";

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

const Form = styled.form`
	width: 100%;
	input {
		width: 100%;
	}
`;

interface IArea {
	isDraggingOver: boolean;
	isDraggingFromThis: boolean;
}

interface IBoard {
	// toDo객체로 이루어진 배열
	toDos: IToDo[];
	boardId: string;
}

interface IForm {
	toDo: string;
}

function Board({ toDos, boardId }: IBoard) {
	const setToDos = useSetRecoilState(toDosState);
	const { register, handleSubmit, setValue } = useForm<IForm>();
	const onValid = ({ toDo }: IForm) => {
		const newToDo = {
			id: Date.now(),
			text: toDo,
		};
		setToDos((allBoards) => {
			return {
				...allBoards,
				[boardId]: [newToDo, ...allBoards[boardId]],
			};
		});
		setValue("toDo", "");
	};

	return (
		<Wrapper>
			<Title>{boardId}</Title>

			<Form onSubmit={handleSubmit(onValid)}>
				<input
					{...register("toDo", { required: true })}
					type="text"
					placeholder={`Add task on ${boardId}`}
				/>
			</Form>

			<Droppable droppableId={boardId}>
				{(magic, snapshot) => (
					<Area
						ref={magic.innerRef}
						{...magic.droppableProps}
						isDraggingOver={snapshot.isDraggingOver}
						isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
					>
						{toDos.map((toDo, index) => (
							<DraggableCard
								key={toDo.id}
								index={index}
								toDoId={toDo.id}
								toDoText={toDo.text}
							/>
						))}
						{magic.placeholder}
					</Area>
				)}
			</Droppable>
		</Wrapper>
	);
}

export default Board;
