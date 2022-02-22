from django.db import models

class Blog(models.Model):
    title = models.CharField(max_length=100)
    body = models.TextField(max_length=1000)
    photo = models.ImageField(blank=True, null=True, upload_to='blog_photo')
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self): # 목록에서 내가 작성한 글의 title이 보이게 하기
        return self.title