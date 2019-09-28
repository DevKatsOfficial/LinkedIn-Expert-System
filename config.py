import sys
import logging
from logging.handlers import RotatingFileHandler

from pymongo import MongoClient

HOST = '18.224.215.7'
# HOST = 'localhost'
PORT = '27017'
MONGO_URI = "mongodb://{}:{}/".format(HOST, PORT)
DATABASE_NAME = 'linkedin'

logging.basicConfig(format='%(asctime)s - %(levelname)s - %(message)s')
config_logger = logging.getLogger('my_logger')
config_logger.setLevel(logging.DEBUG)
# limit file size to 10 MB max
handler = RotatingFileHandler('../parsing_info.log', maxBytes=1000000, backupCount=3)
formatter = logging.Formatter('%(asctime)-12s [%(levelname)s] %(message)s')
handler.setFormatter(formatter)
config_logger.addHandler(handler)

config_logger.debug('Config Loaded')

client = MongoClient(MONGO_URI)
db = client[DATABASE_NAME]
for config in db.linkedin_config.find():
    setattr(sys.modules[__name__], config['name'], config['value'])
