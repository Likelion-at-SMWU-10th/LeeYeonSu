import smtplib
from email.message import EmailMessage
import imghdr
import re

SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 465

def sendEmail(addr):
    reg = "^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$"
    if bool(re.match(reg,addr)):
        smtp.send_message(message)
        print("정상적으로 메일이 발송되었습니다.")
    else:
        print("유효한 이메일 주소가 아닙니다.")

message = EmailMessage()
message.set_content("코드라이언 수업 중입니다.")

message["Subject"] = "이것은 제목입니다."
message["From"] = "####@likelion.org"
message["To"] = "###@gmail.com"

with open("gmail_icon.png", "rb") as image:
    image_file = image.read()

image_type = imghdr.what('gmail_icon', image_file)
message.add_attachment(image_file, maintype="image", subtype=image_type)

smtp = smtplib.SMTP_SSL(SMTP_SERVER, SMTP_PORT)
smtp.login("####@likelion.org", "비밀번호")

sendEmail("###@gmail.com")
smtp.quit()
