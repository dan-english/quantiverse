import requests

# API endpoint
url = "https://api.example.com/data"

# Your API key
api_key = "your-api-key"

# Headers with the API key
headers = {
    "Authorization": f"Bearer {api_key}"
}

# Sending GET request with API key in headers
response = requests.get(url, headers=headers)

# Check if the request was successful
if response.status_code == 200:
    print("Request successful!")
    print(response.json())  # Print the response data
else:
    print(f"Request failed with status code: {response.status_code}")