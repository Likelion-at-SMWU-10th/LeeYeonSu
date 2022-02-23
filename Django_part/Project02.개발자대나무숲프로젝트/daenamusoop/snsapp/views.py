from django.shortcuts import redirect, render
from .forms import PostForm

def home(request):
    return render(request, 'index.html')

def postcreate(request):
    # reqeust method가 POST일 경우
    if request.method == 'POST' or request.method == 'FILES':
        form = PostForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('home')
        # 입력값 저장
    
    # request method가 GET일 경우
        # form 입력 html 띄우기
    else:
        form = PostForm()
    return render(request, 'post_form.html', {'form':form})    
    