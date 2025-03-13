import requests

def create_timeline(api_key, base_url):
    response = requests.post(f"{base_url}/timelines", json={
        "name": "Tesla blueprint retrieval",
        "destination_time": "1889-03-10T23:50:00Z",
        "window": "12 minutes"
    }, headers={
        'Authorization': f'Bearer {api_key}'
    })

    return response.json()
