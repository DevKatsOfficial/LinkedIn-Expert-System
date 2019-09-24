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
```sudo apt-get upgrade google-chrome-stable```

Change `SAMPLE_LINKEDIN_PROFILE_TO_PARSE` value with URL of linkedIn profile to parse in `config.py` and then run `selenium_script/initilize_chrome_deriver.py`

After that check parsed data in mongo db experts collection. Use following commands in mongo shell.
```
use linkedin;
db.getCollection("experts").find({});
```
