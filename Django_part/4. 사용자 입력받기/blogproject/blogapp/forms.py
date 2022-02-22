from django import forms
from .models import Blog

class BlogForm(forms.Form):
    # 내가 입력받고자 하는 값들
    title = forms.CharField()
    body = forms.CharField(widget=forms.Textarea)

class BlogModelForm(forms.ModelForm):
    class Meta:
        model = Blog
        # fields = '__all__'  Blog 객체 안에 있는 모든 필드들의 입력을 받는다.
        fields = ['title', 'body']