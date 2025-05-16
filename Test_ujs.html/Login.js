
document.getElementById('signupForm').addEventListener('submit', function (e)
{
    e.preventDefault()
    const formData = new FormData(document.getElementById('signupForm'))
    const user_name = formData.get('username')
    const user_password = formData.get('password')
    const user_email = formData.get('email')

    if(user_name === "유지성" && user_password === 'uezisong' && user_email === 'yujiseong588@gmail.com')
       {
       alert(`환영 합니다 ${user_name} 님`)
       window.location.href = 'Main.html';
       }
    else
    alert("아이디 또는 패스워드 오류")
})