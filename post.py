import requests

# Set the data to be sent in the request
data = {
    'name': 'Zone 4',
    'isOccupied': False,
}

# Make a POST request to the API
response = requests.post(
    'http://127.0.0.1:6060/api/v1/position/createLoadZone', json=data)

# Check the status code of the response
if response.status_code == 201:

    data = response.json()
    print(data)
else:
    # If the status code is not 201, the request was not successful
    print("An error occurred:", response.status_code)
