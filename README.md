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
객체내부의 콜백함수 인자 provided 로 HTMLElement에 ref, 사용할 기능을 객체 형태로 제공한다.

### `Draggable`

컴포넌트의 속성으로 draggableId, index가 필요하고,
컴포넌트의 내부에는 콜백함수를 통해 값을 반환하는 객체를 넣어준다.
객체내부의 콜백함수 인자 provided 로 HTMLElement에 ref, 사용할 기능을 객체 형태로 제공한다.

### `Placeholder`

Draggable 컴포넌트를 움직일 때 Droppable 컴포넌트의 크기변화(작아짐)를 방지
provided의 placeholder를 객체형태로 컴포넌트 내부 가장 아래 위치에 넣어준다.

### `OnDragEnd`

Drag가 끝났을 때 실행되는 함수로 arguments 를 통해 해당 요소의 정보를 객체 형태로 얻을 수 있다.

-   source: 요소의 시작지점에 대한 정보
-   destination: 도착지점에 대한 정보

---

**Splice** : Array를 수정하기 위한 기능

-   형태1: array.splice(시작지점, 삭제갯수)
-   형태2: array.splice(시작지점, 삭제갯수, 삽입할요소)

**setToDos()** : 인자로 현재 값을 지정하고, 함수로 새(수정된)값을 반환한다.

-   argument: 현재 상태
-   return : 새로운(수정된)값 반환

**spread** : 배열 혹은 객체를 복사하는 ES6문법

-   문법형태 → [...name]

**draggable** : draggable 컴포넌트의 key와 index 는 동일해야 한다.
