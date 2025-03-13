import axios from 'axios';

export async function createTimeline(apiKey: string, baseUrl: string) {
  const response = await axios.post(`${baseUrl}/timelines`, {
    name: "Tesla blueprint retrieval",
    destination_time: "1889-03-10T23:50:00Z",
    window: "12 minutes"
  }, {
    headers: {
      'Authorization': `Bearer ${apiKey}`
    }
  });

  return response.data;
}
