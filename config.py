import sys

from pymongo import MongoClient
HOST = '18.224.215.7'
PORT = '27017'
MONGO_URI = "mongodb://{}:{}/".format(HOST, PORT)
DATABASE_NAME = 'linkedin'
SAMPLE_LINKEDIN_PROFILE_TO_PARSE = "https://www.linkedin.com/in/michaelpeters13/"

client = MongoClient(MONGO_URI)
db = client[DATABASE_NAME]
for config in db.linkedin_config.find():
    setattr(sys.modules[__name__], config['name'], config['value'])
