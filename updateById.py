import requests

# Set the data to be sent in the request
data = {
    # 'name': 'Zone 3',
    'isOccupied': False
}

# Make a POST request to the API
# uncomment this line if you wanna modify the body as well (also uncomment data object )
response = requests.patch(
    'http://127.0.0.1:6060/api/v1/position/updateLoadZone/63a9a89ad9e8253607e36a5e', json=data)

# response = requests.patch(
#     'http://127.0.0.1:6060/api/v1/position/updateLoadZone/63aaa3126df2b7999c8dc0a8')

# Check the status code of the response
if response.status_code == 201:

    data = response.json()
    print(data)
else:
    # If the status code is not 201, the request was not successful
    print("An error occurred:", response.status_code)
