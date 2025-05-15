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