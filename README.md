# React-Beautiful-dnd

Drop and Drag 라이브러리를 사용하여 기능을 적용할 영역을 컴포넌트별로 나누기

## Library

-   react-beautiful-dnd
-   @types/react-beautiful-dnd

### `Component Tree`

> DragDropContext > Droppable > > Draggable

### `DragDropContext`

dnd 기능이 적용되는 범위의 가장 상위 컴포넌트
컴포넌트의 props로 빈 콜백함수를 전달한 뒤 사용한다.

### `Droppable`

컴포넌트의 속성으로 droppableId 가 필요하고,
컴포넌트의 내부에는 콜백함수를 통해 Draggable을 반환하는 객체를 넣어준다.

### `Draggabe`

컴포넌트의 속성으로 draggableId, index가 필요하고,
컴포넌트의 내부에는 콜백함수를 통해 값을 반환하는 객체를 넣어준다.
