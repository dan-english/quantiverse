import axios from 'axios';

export async function timeTravel(apiKey: string, baseUrl: string, timelineId: string) {
  const response = await axios.post(`${baseUrl}/travel`, {
    destination: timelineId
  }, {
    headers: {
      'Authorization': `Bearer ${apiKey}`
    }
  });

  return response.data;
}

export async function registerItem(apiKey: string, baseUrl: string, timelineId: string) {
  const response = await axios.post(`${baseUrl}/items`, {
    timeline_id: timelineId,
    item_description: "Tesla's Blueprint",
    location: "Tesla's Lab"
  }, {
    headers: {
      'Authorization': `Bearer ${apiKey}`
    }
  });

  return response.data;
}

export async function checkParadox(apiKey: string, baseUrl: string, itemId: string) {
  const response = await axios.post(`${baseUrl}/paradox`, {
    item_id: itemId
  }, {
    headers: {
      'Authorization': `Bearer ${apiKey}`
    }
  });

  return response.data;
}
