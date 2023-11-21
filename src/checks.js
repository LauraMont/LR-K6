import { check } from 'k6';
import http from 'k6/http';

export default function () {
  const res = http.get('http://test.k6.io/');
  check(res, {
    'verify homepage text': (r) =>
      r.body.includes('Collection of simple web-pages suitable for load testing'),
  });
  check(res, {
    'verify homepage invalid text': (r) =>
      r.body.includes('Collect---ion of simple web-pages suitable for load testing'),
  });
}
