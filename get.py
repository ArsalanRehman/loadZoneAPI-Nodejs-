import requests


# Make a GET request to the API
response = requests.get('http://127.0.0.1:6060/api/v1/position/getLoadZone')

# Check the status code of the response
if response.status_code == 200:
    # If the status code is 200, the request was successful
    # You can access the data returned by the API through the `response` object
    data = response.json()
    print(data)
else:
    # If the status code is not 200, the request was not successful
    print("An error occurred:", response.status_code)
