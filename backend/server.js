const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors'); // CORS paketini içe aktar
 
app.use(cors()); // Tüm domain'ler için CORS'u etkinleştir
 
const PORT = 5001;
 
// Kediyi çeken uç nokta
app.get('/cat', async (req, res) => {
  const config = {
    method: 'get',
    url: 'https://cataas.com/cat?position=center&width=600&height=600',
  };
 
  try {
    const response = await axios.request(config);
    res.send(response.data); // Cevabı frontend'e iletin
  } catch (error) {
    console.error(error);
    res.status(500).send('Bir hata oluştu.');
  }
});
 
// Sunucuyu başlat
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

