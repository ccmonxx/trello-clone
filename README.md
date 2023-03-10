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

**Splice** : Array를 수정하기 위한 기능

-   형태1: array.splice(시작지점, 삭제갯수)
-   형태2: array.splice(시작지점, 삭제갯수, 삽입할요소)

**setToDos()** : 인자로 현재 값을 지정하고, 함수로 새(수정된)값을 반환한다.

-   argument: 현재 상태
-   return : 새로운(수정된)값 반환

**spread** : 배열 혹은 객체를 복사하는 ES6문법

-   문법형태 → [...name]

**draggable** : draggable 컴포넌트의 key와 index 는 동일해야 한다.

### `React.memo`

해당 컴포넌트 내부 Props의 변화가 발생한 경우에만 렌더링하도록 하는 기능
(Props의 변화가 없는 경우에도 진행되는 불필요한 리렌더링을 방지)

### `Object`

객체 내부의 값을 순환(Loop)시키는 기능을 사용하는 방법

-   Object.keys() : 객체의 index를 반환
-   Object.values() : 객체의 value를 반환

### `My Notes`

**interface** : 이 프로젝트에서 객체 형태의 내부값을 타입하기

```
interface I {
  [key: string]: string[];
  // 문자열로 key 를 담은 배열 : 문자열 값으로 이루어진 배열
}
```

**객체 → 배열로 복사**

```
// 객체 형태의 내부 값들을 key 별로 구분
[...allBoard[source.droppableId]
[...allBoard["toDo" | "doing" | "done"]] ← keys

// 객체 형태로 반환
...allBoards,
[source.droppableId]: boardCopy(수정된배열)
```

**source, destination**

-   sourceBoard : 요소의 시작(출발) 정보를 담은 변수
-   destinationBoard : 요소의 도착 정보를 담은 변수
-   1. 시작정보를 담은 배열의 요소를 제거
-   2. 도착정보를 담은 배열에 요소를 추가
-   3. 상태(allBoards) 복사하고 수정된 시작&도착 상태를 **[key]:value** 형태로 추가

### `DroppableStateSnapshot`

droppable 영역을 확장하고, snapshot의 정보를 인자로 받아 구현할 수 있는 기능들

-   **isDraggingOver: boolean**
    현재 선택한 Draggable이 특정 Droppable위에 드래깅 되고 있는지 여부 확인

-   **draggingOverWith: ?DraggableId**
    Droppable 위로 드래그하는 Draggable ID

-   **draggingFromThisWith: ?DraggableId**
    현재 Droppable에서 벗어난 드래깅되고 있는 Draggable ID

-   **isUsingPlaceholder: boolean**
    placeholder가 사용되고 있는지 여부

### `UseRef`

React 코드를 이용해서 HTML요소를 초기화 하거나, 가져올 수 있는 방법

useRef 함수는 current 속성을 가지고 있는 객체를 반환하며, 인자로 받은 초기값을 current 속성에 할당받으며 이 값은 다시 렌더링 되어도 유지된다

---

### `React-hook-form`

React 내에서 Form을 쉽게 제어하고 유효성 검사를 처리하도록 도와주는 라이브러리
기존 Form에서 입력 필드처리 키워드 value, onChange 를 추가 할 필요가 없다.
state도 직접관리 X

-   useForm() : React-Hook-Form에서 Form작업을 위해 제공하는 hook
-   register : ref로 사용되는 함수로 입력 필드를 React Hook Form에 등록, 변경값을 추척
-   handleSubmit : form을 서버로 제출하는 함수

```
const { register, handleSubmit } = useForm();
const onValid = (data) => { console.log(data) }
<form onSubmit={handleSubmit(onValid)}>
    <input ref={register} name="name" />
</form>
```
