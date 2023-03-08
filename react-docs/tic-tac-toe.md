# Tic-Tac-Toe

## 작명 팁

> 프롭에는 on[Event] 이름을 사용하고,  
> 이벤트를 처리하는 함수 정의에는 handle[Event]를 사용하는 것이 일반적이다.

## 불변성이 중요한 이유

일반적으로 데이터를 변경하는 방법 두 가지.

1. 원본 데이터를 직접 변경하는 방법
2. 원본을 유지하되, 변경 사항을 새 복사본에, 변경 사항을 반영해, 원본을 대체하는 방법

두가지 방법의 결과는 동일하지만, 원본을 유지함으로써 두 가지 이점을 얻을 수 있다.

1. 재사용(또는 초기화)할 수 있다.
2. 불필요한 재렌더링을 방지할 수 있다.  
   하지만, 재 렌더링은 큰 비용을 소모하지 않아, 적극적으로 피하지 않아도 된다.

[React가 컴포넌트를 다시 렌더링할 시점을 선택하는 방법](https://beta.reactjs.org/reference/react/memo)

### key?

`key`는 React에서 예약된 프로퍼티로, 각 컴포넌트의 신원을 알려줌.  
컴포넌트의 `key`가 변경되면 해당 컴포넌트는 소멸되고 새로운 상태로 다시 생성.

### `key`를 사용하는 리액트의 동작

React는 자동으로 키를 사용해 업데이트할 컴포넌트를 결정한다.  
`key`가 없을시 컴포넌트는 부모가 지정한 키를 물어볼 수 있는 방법이 없다.

### `key`의 기본 값과 비열의 인덱스

키를 지정하지 않으면 React는 오류를 보고하고 기본적으로 배열 인덱스를 키로 사용하며,  
배열 인덱스를 키로 사용하는 경우 목록의 항목 순서를 바꾸거나 목록 항목을 삽입/제거할 때 문제가 발생한다.  
명시적으로 `key={i}`를 전달하면 오류는 사라지지만, 위의 경우와 동일한 문제가 발생해 대부분의 경우 권장되지 않는다.