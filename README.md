# Recoil

React를 위한 상태관리 라이브러리 기본 사용법

## Library

-   recoil

### `RecoilRoot`

recoil 상태를 사용하는 컴포넌트의 부모 트리에 RecoilRoot를 추가한다.

### `atom`

상태(state)를 초기화 하는 기능으로 key, default 속성을 지닌 객체를 생성하고 반환한다.
상태(state)의 일부로서 어떤 컴포넌트에서나 읽고 쓸 수 있고 atom의 값을 읽는 컴포넌트들은 암묵적으로 atom을 구독한다.
atom에 어떤 변화가 있으면 그 atom을 구독하는 모든 컴포넌트들이 재 렌더링 되는 결과가 발생하게 된다.

### `usaRecoilState`

컴포넌트가 atom(저장된 상태)를 읽고 쓰게 하기 위한 기능
React의 state 구현하는 방법처럼 prevValue, nextValue 상태를 배열로 받아 사용한다.

### `selector`

파생된 상태(derived state)의 일부로서 key, get, set 속성을 통해 상태에 접근, 수정, 반환하는 기능

-   key : unique ID (with respect to other atoms/selectors)
-   get : 옵션으로 콜백객체(get)를 인자로 받아 상태에 접근하고 값(내부값에 의해 만들어진)을 반환할 수 있다.
-   set : 옵션으로 콜백객체(set)와 newValue(입력한 값)을 인자로 받아 상태를 수정한다. set(where, what)
