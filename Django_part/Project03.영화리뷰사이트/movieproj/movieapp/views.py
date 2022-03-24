from django.shortcuts import render
import requests
import json
from .forms import SearchForm

my_id = '405bef240bec61b6af16009ca9e2e47f'

def home(request):
    if request.method == 'POST':
        form = SearchForm(request.POST)
        searchword = request.POST.get('search')
        if form.is_valid():
            url = 'https://api.themoviedb.org/3/search/movie?api_key='+my_id+'&query='+searchword
            response = requests.get(url)
            resdata = response.text
            obj = json.loads(resdata)
            obj = obj['results']
            return render(request, 'search.html', {'obj': obj})
        # 입력된 내용을 바탕으로
        # https://api.themoviedb.org/3/search/movie?api_key=405bef240bec61b6af16009ca9e2e47f&language=en-US&page=1&include_adult=false
        # 위 형태의 url로 get 요청 보내기
    else:
        form = SearchForm()
        url = 'https://api.themoviedb.org/3/trending/movie/week?api_key=' + my_id
        response = requests.get(url)
        resdata = response.text
        obj = json.loads(resdata) # json 데이터를 python으로 변환
        obj = obj['results']
    return render(request, 'index.html', {'obj':obj, 'form': form})

def detail(request, movie_id):
    url = 'https://api.themoviedb.org/3/movie/' + movie_id + '?api_key=' + my_id
    response = requests.get(url)
    resdata = response.text
    resdata = json.loads(resdata)
    return render(request, 'detail.html', {'resdata': resdata})