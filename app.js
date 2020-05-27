// Copyright 2020 gorebill
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const port = process.argv.slice(2)[0] || 80;
const app = express();
app.use(bodyParser.json());

const result = {
    "result": "success",
    "server_time": "2020-05-27T13:08:42Z",
    "channel": {
        "channel_id": "999",
        "name": "C-0001",
        "metadata": "{\"fn_dp\":600,\"fn_th\":60,\"fn_light\":60,\"fn_acc_act\":1,\"thres_acc_min\":5,\"fn_acc_tap1\":1,\"fn_acc_tap2\":1,\"fn_ext_t\":300,\"fn_battery\":3600}",
        "user_id": "A0000000-87B0-482D-B8C5-EC45FC1B53D0",
        "write_key": "aaaaa328a5785ff5bea73fed2fbb0bdb",
    }
};

app.get('/products/:pid/devices/:serial/activate', (req, res) => {
    console.log('Returning mock result');
    res.send(result);
});

console.log(`UbiBot service listening on port ${port}`);
console.log(`Service url example: http://localhost:${port}/products/ubibot-ws1-cn/devices/AAAAAAWS1/activate`);
app.listen(port);