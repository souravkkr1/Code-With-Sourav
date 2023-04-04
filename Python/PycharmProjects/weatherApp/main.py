import requests
import json
import os

city= input("Enter the name of the city:\n")

url= f"https://api.weatherapi.com/v1/current.json?key=3533a5ab6dbb474ab80171523230304&q={city}"

r = requests.get(url)
print(r.text)
myDisc=json.loads(r.text)
w=myDisc["current"]["temp_c"]

os.system(f"say 'The current weather in {city} is {w} degrees'")