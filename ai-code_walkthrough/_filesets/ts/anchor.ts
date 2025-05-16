import axios from 'axios';

export async function setAnchor(apiKey: string, baseUrl: string) {
  const response = await axios.post(`${baseUrl}/anchors`, {
    description: "Home Base - Start of Tesla Mission"
  }, {
    headers: {
      'Authorization': `Bearer ${apiKey}`
    }
  });

  return response.data;
}
