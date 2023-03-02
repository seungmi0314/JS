// 추가버튼 클릭 시 동작
document.getElementById("add").addEventListener("click", function() {
    // div 요소 생성
    const div = document.createElement("div");

    // div에 row class 추가
    div.classList.add("row");

    // input 요소 생성
    const input = document.createElement("input");

    // input에 in class 추가
    input.classList.add("in");

    // * 요소에 속성을 추가하거나 변경할 때 사용하는 함수
    // 요소.setAttribute("속성명","속성값");
    // <-> 요소.removeAttribute("속성명") : 속성 제거

    // input에 type="number" 추가
    input.setAttribute("type", "number");

    //---------------------------------------------

    // span요소 생성
    const span = document.createElement("span");

    // span에 remove class 소개
    span.classList.add("remove");

    // span에 &times; 추가
    span.innerHTML = '&times';

    // span에 click 이벤트 동작 추가 (동작 요소에 이벤트 추가)
    span.addEventListener(click, function() {
        // 클릭된 X버튼의 부모 요소(div.row)를 삭제
        // 요소.remove() : 해당 요소를 제거

        this.parentElement.remove();

    })

    // =============================================================================

    // div > input, span 조립

    div.append(input, span);

    // .container에 div를 마지막 자식추가
    document.querySelector(".container").append(div);

    input.focus(); // 화면에 추가된 input에 포커스
})

// 계산 버튼 클릭되었을 때
// input 요소에 작성된 값을 모두 얻어와 합한 후에 출력

document.getElementById("calc").addEventListener("click", function() {

    const inputList = document.getElementsByClassName("in");

    let sum = 0;

    for(let input of inputList) {
        sum += Number(input)
    }
})