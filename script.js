// script.js

// 번호 추첨 함수
function generateNumbers() {
    const numbersContainer = document.getElementById('numbers');
    numbersContainer.innerHTML = ''; // 이전 번호 초기화

    // 1부터 45까지의 숫자 중에서 중복 없이 6개의 번호 추첨
    let numbers = [];
    while (numbers.length < 6) {
        let randomNumber = Math.floor(Math.random() * 45) + 1;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }

    // 추첨된 번호를 화면에 출력
    numbersContainer.textContent = numbers.sort((a, b) => a - b).join(', ');

    // SweetAlert2를 사용하여 번호 추첨 알림 표시
    Swal.fire({
        icon: 'success',
        title: '로또 번호 추첨 완료!',
        text: '추첨된 번호는 위에 표시된 것입니다.',
        confirmButtonText: '확인'
    });
}

// 버튼 클릭 이벤트 리스너 등록
document.getElementById('generateButton').addEventListener('click', generateNumbers);
