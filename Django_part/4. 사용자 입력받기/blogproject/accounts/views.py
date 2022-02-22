from django.shortcuts import render, redirect
from django.contrib import auth

def login(request):
    # POST 요청이 들어오면 로그인 처리를 해줌
    if request.method == 'POST':
        userid = request.POST['username']
        pwd = request.POST['password']
        # 입력받은 정보가 데이터베이스에 존재하는 회원이 맞는지 확인
        user = auth.authenticate(request, username=userid, password=pwd)
        if user is not None:
            auth.login(request, user)
            return redirect('home')
        else:
            return render(request, 'login.html')

    # GET 요청이 들어오면 login form을 담고 있는 login.html을 띄워주는 역할을 함.
    else:
        return render(request, 'login.html')

def logout(request):
    auth.logout(request)
    return redirect('home')