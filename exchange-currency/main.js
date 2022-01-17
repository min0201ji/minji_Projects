// 1. 환율비교를 위한 박스 만들기!
// 2. 드랍다운 리스트 만들기
// 3. 환전을 위한 환율정보 들고오기
// 4. 드랍다운 리스트에서 아이템 선택시 아이템 변경 가능하게 만들기
// 5. 금액 입력시 환전 금액 보여주기
// 6. 드랍다운 리스트에서 새아이템 선택시 다시 기준 선정되게 만들기
// 7.숫자를 한국어로 읽게 만들기
// 8. 어디에서나 입력해도 환율이 적용되게 하기

let currencyRatio = {
  USD: {
    KRW: 1192.6,
    USD: 1,
    JPY: 114.44,
    unit: "달러",
  },
  KRW: {
    KRW: 1,
    USD: 0.00084,
    JPY: 0.096,
    unit: "원",
  },
  JPY: {
    KRW: 10.42,
    USD: 0.0087,
    JPY: 1,
    unit: "엔",
  },
};
let fromCurrency = "USD";
let toCurrency = 'USD';

// 객체에서 값 불러오기
// 첫번째 방법(1)
// console.log(currencyRatio.USD.unit);
// console.log(값) : 어떤 값을 프린트 해주는 명령어

// 두번째 방법(2)
// console.log(currencyRatio['USD']['unit']);
// 밑에 것과 동일한 방법
console.log(currencyRatio["USD"].unit);

// document(.querySelectorAll) : html 요소들을 Java 로 들어오게 도와주는 역할
document.querySelectorAll("#from-currency-list a").forEach((menu) =>
  menu.addEventListener("click", function () {
    //   function 에서 할 일
    // 1. 버튼 가져오기
    // document.getElementById('from-button')
    // 2. 버튼 값 변경
    document.getElementById("from-button").textContent = this.textContent;
    // 3. 선택된 환율값을 변수에 저장
    fromCurrency = this.textContent;
    // list값 변경시 값 초기화
    convert()
  })
);

document.querySelectorAll("#to-currency-list a").forEach((menu) =>
  menu.addEventListener("click", function () {
    document.getElementById("to-button").textContent = this.textContent;
    toCurrency = this.textContent;
    // list값 변경시 값 초기화
    convert()
  })
);

// 키 입력 => 환전 => 결과값 보여주기
function convert(){
  let amount = document.getElementById('from-input').value
  // value : input태그 안에 입력한 값을 들고 오고 싶을때 사용
  let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency]
  // 동적인 값을 위해서 []변수 사용
  document.getElementById('to-input').value = convertedAmount
}
