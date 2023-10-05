import requests

symb ='TSLA'
API_KEY='XWT4BU7NOC73D1HZ'
url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol='+symb+'&apikey=XWT4BU7NOC73D1HZ'

r = requests.get(url)
data = r.json()

print(data)