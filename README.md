# GlobalStyle & Theme

컴포넌트 전역으로 스타일을 적용시킬 수 있는 글로벌스타일과 테마 만들기

## Library

-   styled-reset
-   styled-components
-   @types/styled-components

### `createGlobalStyle`

styled-components로 부터 createGlobalStyle 기능(함수)를 가져와 GlobalStyle 파일을 만든다.

### `declear module`

declare module 블록으로 styled-components를 지정하고, interface로 스타일에 사용할 변수에 타입을 선언한다.

### `interface DefaultTheme`

스타일을 작성한 파일(theme.ts)에 interface로 type한다.

### `(property)theme`

GlobalStyle 컴포넌트의 theme 속성에 적용할 값(테마파일)을 props한다.
