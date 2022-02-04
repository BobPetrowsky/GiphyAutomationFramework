import http from 'k6/http';
import { URL } from 'https://jslib.k6.io/url/1.0.0/index.js';
import { describe } from 'https://jslib.k6.io/expect/0.0.5/index.js';
import { sleep , check } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
  thresholds: {
    checks: [{ threshold: 'rate == 1.00', abortOnFail: false }],
  },
  vus: 3,
  iterations: 5,
};

const apiToken = __ENV.API_KEY;
export default function testSuite() {
  describe('Search for a limited list of GIFs', (t) => {
    const searchURL= new URL('http://api.giphy.com/v1/gifs/search');

    searchURL.searchParams.append('api_key', apiToken);
    searchURL.searchParams.append('q', 'test');
    searchURL.searchParams.append('limit', 5);

    const searchResponse = http.get(searchURL.toString());
    sleep(1)
    t.expect(searchResponse.status)
          .as('response status')
          .toEqual(200)
          .and(searchResponse)
          .toHaveValidJson()
          .and(searchResponse.json().pagination.count)
          .toEqual(5)
  });
  describe('Search Trending limited list of GIFs', (t) => {
    const trendingURL = new URL('http://api.giphy.com/v1/gifs/trending');

    trendingURL.searchParams.append('api_key', apiToken);
    trendingURL.searchParams.append('limit', 5);
    trendingURL.searchParams.append('rating', 'g');
    const trendingResponse = http.get(trendingURL.toString());
    sleep(1)
    t.expect(trendingResponse.status)
      .as('response status')
      .toEqual(200)
      .and(trendingResponse)
      .toHaveValidJson()
      .and(trendingResponse.json().pagination.count)
      .toEqual(5)
  });
  describe('Translate text to GIFs', (t) => {
    const translateURL = new URL('http://api.giphy.com/v1/gifs/translate');

    translateURL.searchParams.append('api_key', apiToken);
    translateURL.searchParams.append('s', 'Hello');

    const translateResponse = http.get(translateURL.toString());
    sleep(1)
    t.expect(translateResponse.status)
      .as('response status')
      .toEqual(200)
      .and(translateResponse)
      .toHaveValidJson()

  });

}
// export function handleSummary(data) {
//   return {
//     "../Reports/summary.html": htmlReport(data),
//   };
}
