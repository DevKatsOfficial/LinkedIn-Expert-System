import sys

from pymongo import MongoClient
HOST = '18.224.215.7'
PORT = '27017'
MONGO_URI = "mongodb://{}:{}/".format(HOST, PORT)
DATABASE_NAME = 'linkedin'
SAMPLE_LINKEDIN_PROFILES_TO_PARSE = [
    "https://www.linkedin.com/in/davidwolpa/",
    "https://www.linkedin.com/in/bharatpindoria/",
    "https://www.linkedin.com/in/waynesharpe/",
    "https://www.linkedin.com/in/chrisblackct/",
    "https://www.linkedin.com/in/shashank-saxena-659b497/",
    "https://www.linkedin.com/in/kenneth-soonhyuck-jung-97a58845/",
    "https://www.linkedin.com/in/thomasschmitz1972/",
    "https://www.linkedin.com/in/markusgleim/",
    "https://www.linkedin.com/in/patrickfirebrace/",
    "https://www.linkedin.com/in/bilal-azizoglu-b0119a34/",
    "https://www.linkedin.com/in/randyflanagan/",
    "https://www.linkedin.com/in/norbert-bakermans-3ab03936/",
    "https://www.linkedin.com/in/alper-can-8226005/",
    "https://www.linkedin.com/in/jeff-schuck-1931a11/",
    "https://www.linkedin.com/in/ram-prayaga-400aa51/",
    "https://www.linkedin.com/in/sahibyar/",
    "https://www.linkedin.com/in/ehsaan-israr-812991aa/",
    "https://www.linkedin.com/in/katjamayer/",
]

client = MongoClient(MONGO_URI)
db = client[DATABASE_NAME]
for config in db.linkedin_config.find():
    setattr(sys.modules[__name__], config['name'], config['value'])
