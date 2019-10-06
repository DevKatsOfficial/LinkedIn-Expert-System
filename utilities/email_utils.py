import datetime
import smtplib
import ssl
import time
from email import encoders
from email.mime.base import MIMEBase
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

import config


def send_capcha_email(linkedin_username, linkedin_password, data, _url):
    config.config_logger.debug('Building email to send')
    mail_title = 'LinkedIn Scrapper | CAPTCHA Occured'
    message = """
    CAPCTHA has Occured on LinkedIn Account\n
    Follow below Steps to remove captcha\n
    1) Login into Linkedin https://www.linkedin.com/ using below credentials\n
    \t Username: {}\n
    \t Password: {}\n
    2) Verify CAPTCHA Screen by completing on screen challenge\n
    3) Logout of LinkedIn Account \n\n\n\n
    """.format(linkedin_username, linkedin_password)
    send_email(mail_title, text_body=message, html_attahment=data, receipients=config.CAPCHA_EMAIL_LIST, _url=_url)


def not_able_to_login_email(linkedin_username, linkedin_password, data, _url):
    config.config_logger.debug('Building email to send')
    mail_title = 'LinkedIn Scrapper | Cannot Login'
    message = """
    Cannot login on linkedin account.
    
    Might be html selectors updated. See Attached HTML for details
    """.format(linkedin_username, linkedin_password)
    send_email(mail_title, text_body=message, html_attahment=data, receipients=config.CAPCHA_EMAIL_LIST, _url=_url)


def send_email(subject, text_body='', html_attahment='', receipients=None, _url=''):
    sender_email = config.GMAIL_EMAIL
    password = config.GMAIL_PASSWORD
    if not receipients:
        receipients = config.CAPCHA_EMAIL_LIST

    # Create a multipart message and set headers
    message = MIMEMultipart()
    message["From"] = sender_email
    message["To"] = ', '.join(receipients)
    message["Subject"] = '{} - UTC time: {}'.format(subject, datetime.datetime.utcnow())

    # Add body to email
    message.attach(MIMEText(text_body, "plain"))

    # Add attachment
    if html_attahment:
        # Add file as application/octet-stream
        # Email client can usually download this automatically as attachment
        part = MIMEBase("application", "octet-stream")
        part.set_payload(html_attahment)
        config.config_logger.debug('attaching HTML')

    # Encode file in ASCII characters to send by email
    encoders.encode_base64(part)

    # Add header as key/value pair to attachment part
    part.add_header(
        "Content-Disposition",
        "attachment; filename={}.html".format(_url or 'linkedin'),
    )

    # Add attachment to message and convert message to string
    message.attach(part)
    text = message.as_string()

    # Log in to server using secure context and send email
    context = ssl.create_default_context()
    with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
        server.login(sender_email, password)
        server.sendmail(sender_email, ', '.join(receipients), text)
        config.config_logger.debug('sending email to: {}'.format(', '.join(receipients)))
