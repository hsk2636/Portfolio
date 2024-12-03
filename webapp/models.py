from django.db import models

class Users(models.Model):
    user_userid = models.CharField(max_length=50, unique=True)  # 사용자 계정 아이디
    user_password = models.CharField(max_length=255)  # 비밀번호
    user_email = models.EmailField(max_length=100, unique=True)  # 이메일
    user_name = models.CharField(max_length=255)  # 이름
    user_address = models.CharField(max_length=255, blank=True)  # 주소
    user_phoneNum = models.CharField(max_length=11, blank=True)  # 휴대폰
    user_created_at = models.DateTimeField(auto_now_add=True)  # 계정 생성 날짜

    def __str__(self):
        return self.user_userid

class Item(models.Model):
    name = models.CharField(max_length=255)  # 상품명
    image = models.ImageField(upload_to='imageprod/')  # 이미지 업로드 경로 설정
    price = models.DecimalField(max_digits=10, decimal_places=2)  # 가격
    description = models.TextField()  # 상품 설명
    user = models.ForeignKey(Users, on_delete=models.CASCADE)  # 사용자와의 외래 키 설정

    def __str__(self):
        return self.name
