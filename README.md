# LinkedIn Scrapper Project


Install Python3.7 using
```
sudo apt-get update
sudo apt-get install build-essential libpq-dev libssl-dev openssl libffi-dev zlib1g-dev
sudo apt-get install python3-pip python3.7-dev
sudo apt-get install python3.7
```

Install Python3 virtual environment using
```sudo apt-get install python3.7-venv```


Create Virtual environment. i kept venv outside of project repo.
```python3.7 -m venv ~/linkedin_scrapper_venv```

Activate virtual environment
```source ~/linkedin_scrapper_venv/bin/activate```

Install Requirements
```pip install -r requirements.txt```


Setup Selenium and upgrade chrome to stable version
```
wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
sudo sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
sudo apt-get update 
sudo apt-get install google-chrome-stable
```

Checkout to project repo

Run `nohup selenium_script/cron_script.py &`

To view progress, check logger file
```shell script
tail -f ../parsing_info.log
```


After that check parsed data in mongo db experts collection. Use following commands in mongo shell.
```
use linkedin;
db.getCollection("experts").find({});
```


