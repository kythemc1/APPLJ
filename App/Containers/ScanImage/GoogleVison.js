const API_KEY = 'AIzaSyAa4766hdkHV9zgrQKyOgPYNioJUOlYvuU';
const API_URL = `https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}`;

// Also try DOCUMENT_TEXT_DETECTION instead of TEXT_DETECTION as per https://cloud.google.com/vision/docs/ocr
function generateBody(image) {
  const body = {
    requests: [
      {
        image: {
          source: {
            imageUri:
              'https://haycafe.vn/wp-content/uploads/2021/12/Hinh-anh-tam-su-buon-nguoi-go.jpg',
          },
        },
        features: [
          {
            type: 'TEXT_DETECTION',
            maxResults: 1,
          },
        ],
      },
    ],
  };
  return body;
}

async function callGoogleVisionAsync(image) {
  return new Promise(async (resolve, reject) => {
    console.log('goi api ');
    const body = generateBody(image); //pass in our image for the payload
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    console.log('ket qua', console);
    response
      .json()
      .then(res => {
        resolve(res);
        console.log('o day', res);
      })
      .catch(error => {
        reject(error);
        console.log('loi error', error);
      });
  });
}

export default callGoogleVisionAsync;
