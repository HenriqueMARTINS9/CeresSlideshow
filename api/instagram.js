export default async function handler(req, res) {
    const accessToken = process.env.INSTAGRAM_GRAPH_API_ACCESS_TOKEN;
    const userId = process.env.INSTAGRAM_USER_ID;
    const mediaUrl = `https://graph.instagram.com/v17.0/${userId}/media?fields=id,media_type,media_url,caption&access_token=${accessToken}`;
    
    try {
      const response = await fetch(mediaUrl);
      if (!response.ok) {
        throw new Error(`Error fetching media: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  