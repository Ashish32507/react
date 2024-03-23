import React from "react";

const Radomurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const Tagurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

function userhook(tag) {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    const API_KEY = "ly4moHPxSR48xz8JYT3NIDRMxlMooN93";
    const { data } = await axios.get(tag ? Tagurl : Radomurl);
    const gifData = data.data.images.downsized_large.url;
    setGif(gifData);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function clickHandler() {
    fetchData();
  }
}

export default userhook;
