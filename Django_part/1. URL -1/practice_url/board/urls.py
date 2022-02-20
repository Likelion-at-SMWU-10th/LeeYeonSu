from django.urls import path
from board import views

urlpatterns = [
    path('', views.board), # 여기서 ''로 시작하는 url은 아무것도 입력하지 않았을 때 == boards/로 시작
    path('first/', views.boardfirst),
]