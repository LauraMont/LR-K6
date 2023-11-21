import http from 'k6/http';
import { sleep } from 'k6';
//we can declare this pararameters on the test or on the command of execution as "k6 run --vus 10 --duration 30s <scriptRoute>"
export const options = {
    vus: 10,
    duration: '30s',
};
export default function () {
    http.get('http://test.k6.io');
    sleep(1);
}
