"""
Will contain following function
    1. save image on s3 from image URL
    2. save image on s3 after making it from svg

"""

import time
import uuid
from io import BytesIO

import boto3
import requests

import config

s3 = boto3.client("s3", aws_access_key_id=config.AWS_ACCESS_KEY, aws_secret_access_key=config.AWS_SECRET_KEY)


def upload_image_on_s3_from_url(url, bucket_name='user-profile-images'):
    if not url or url.startswith('data'):
        return ''
    try:
        r = requests.get(url, stream=True)
        file_contents = BytesIO(r.content)
        file_type = r.headers.get('Content-Type', 'image/jpeg')
        file_name = '{}{}'.format(int(time.time()), uuid.uuid4())
        s3.upload_fileobj(
            file_contents,
            bucket_name,
            file_name,
            ExtraArgs={'ACL': 'public-read', "ContentType": file_type}
        )
        return 'https://{}.s3.us-east-2.amazonaws.com/{}'.format(bucket_name, file_name)
    except Exception as e:
        return ''
