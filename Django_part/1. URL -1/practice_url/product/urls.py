from django.urls import path
from product import views

urlpatterns = [
    path('', views.productlist), # 여기서 ''로 시작하는 url은 아무것도 입력하지 않았을 때 == products/로 시작
    path('first', views.productfirst), # '/products/first'
]