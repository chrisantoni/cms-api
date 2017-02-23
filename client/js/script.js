  $.ajax({
     url  : "http://localhost:3000/user",
     beforeSend:function(request){
       request.setRequestHeader("token",localStorage.getItem("token"))
     },
     method : "GET",
     success: function(result) {
       var temp = ''
       for (var i = 0; i < result.length; i++) {
           temp += `
              <h1>Welcome, ${result[i].username}</h1>
           `
         }
         $('#list_users').append(temp)
     }
   })

  function register(){
      $.ajax({
        url  : "http://localhost:3000/register",
        type : "POST",
        data: {
          username: $('#username').val(),
          password: $('#password').val()
        },
        success: function(data,err) {
          if(data.username == username){
            alert('username already been taken')
          }else if(data.username == ""){
            alert('username cannot be blank')
          }else{
            alert("Register success! Now Login!")
          }
        }
      })
  }

  function login(){
      $.ajax({
        url  : "http://localhost:3000/login",
        type : "POST",
        data: {
          username: $('#username').val(),
          password: $('#password').val()
        },
        success: function(data) {
            localStorage.setItem("token", data.token)
            localStorage.setItem("username", data.username)
            window.location.href = 'http://127.0.0.1:8080/dashboard.html'
        }
      })
  }

  function logout(){
    localStorage.clear()
    window.location.href = 'http://127.0.0.1:8080/registration.html'
  }
