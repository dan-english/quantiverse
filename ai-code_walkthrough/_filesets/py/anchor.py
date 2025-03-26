import requests

def set_anchor(api_key, base_url):
    response = requests.post(f"{base_url}/anchors", json={
        "description": "Home Base - Start of Tesla Mission"
    }, headers={
        'Authorization': f'Bearer {api_key}'
    })

    return response.json()
