document.getElementById('signupForm').addEventListener('submit', function (e)
{//e : 이벤트 , 웹 브라우저에서 제공해주는 기능 도구. 객체
    e.preventDefault(); //기본 제출 동작(서버제출) 막기(페이지 리로드 방지)

    //FormData 클래스 , 클래스는 변수,상수,기능(함수)들의 모음집
    //유저가 입력한 내용이 FormData에 들어있다.
    const formData = new FormData(this); // 폼 데이터 수집

    // let 변수명 = 값 : 값 변경 가능
    let output = "" //결과의 내용을 담을 변수 , 초기에는 빈 문자열 초기화.

    //단일 입력 필드 처리
    //유저명 부터 표기 해보기
    //백틱 ` 문자열을 표기함
    output += `출력 되는 유저명 : ${formData.get('username')} \n`
    //2번째 요소, 패스어드 가져오기.
    output += `출력 되는 패스워드 : ${formData.get('password')} \n`
    //3번재 요소, 취미 가져오기 <다중 체크박스 처리>
    const hobbies = formData.getAll('hobby') // 여러가지 요소를 가져와서 , 배열에 담기
    // hobbies 배열 = ['게임','독서','영화보기']
    output += `출력되는 취미들 : ${hobbies.join(', ')}\n`

    output += `출력 되는 성별 : ${formData.get('gender')} \n`

    output += `출력 되는 생년월일 : ${formData.get('date')} \n`

    output += `출력 되는 이메일 : ${formData.get('email')} \n`

    output += `출력 되는 히든 : ${formData.get('user_id')} \n`
    //${} : EL 표기법 (Epresion Language), 특정의 값을 출력할 때 자주 사용함.
    const file = formData.get('file')
    output += `출력되는 첨부파일명 : ${file && file.name ? file.name : '파일없음'}\n`


    

    //결과를 화면에 표기 하는 부분 연결
    document.getElementById('output').textContent = output;
})


// 추가 작업, 프로필 이미지 변경 시, 미리보기 화면에 파일 사진 나타내기
document.getElementById('signupForm').file.addEventListener('change',
    function(){
        //동작 원리,
        // 1. 파일 선택 2. 선택된 파일 3. 폼 양식의 파일에 변경 감지 이벤트 설정
        // 4. 파일 변경 될 때 마다 미리 보기 화면에 이미지 교체를 해줌.
        // this : 자기 자신 -> document.getElementById('signupForm').file
        // files[0] : 현재, 파일을 하나만 선택한다.
        // const file : 선택된 파일 이미지가 들어가있다.
        const file  = this.files[0]
        // 이미지가 아닌데 화면에 출력 할고 하면 안됨 - 
        // 검사하기 -> 파일 검사 -> 확장자가 이미지 인 경우에만 이미지로 판단.
        // 유효성 체크
        // 컴사1) 파일이 이미지인지 확인
        if(file && file.type.startsWith('image/')){ //파일이 있으면서 파일이 image로 시작하면
            //FileReader클래스 , 여러 기능이 탑재
            const reader = new FileReader();
            reader.onload = function(e){
                //이미지 미리보기 역역에 이미지 표시 
                document.getElementById('profilePreview').src = e.target.result;
            }
            //선택한 파일을 base64로 인코딩하여 로드
            reader.readAsDataURL(file)
        }
    }
)