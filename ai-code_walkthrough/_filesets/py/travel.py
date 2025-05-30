import requests

def time_travel(api_key, base_url, timeline_id):
    response = requests.post(f"{base_url}/travel", json={
        "destination": timeline_id
    }, headers={
        'Authorization': f'Bearer {api_key}'
    })

    return response.json()

def register_item(api_key, base_url, timeline_id):
    response = requests.post(f"{base_url}/items", json={
        "timeline_id": timeline_id,
        "item_description": "Tesla's Blueprint",
        "location": "Tesla's Lab"
    }, headers={
        'Authorization': f'Bearer {api_key}'
    })

    return response.json()

def check_paradox(api_key, base_url, item_id):
    response = requests.post(f"{base_url}/paradox", json={
        "item_id": item_id
    }, headers={
        'Authorization': f'Bearer {api_key}'
    })

    return response.json()
