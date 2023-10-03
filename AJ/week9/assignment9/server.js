const fs = require('fs');
const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // อ่านไฟล์ cloth1.json
    readMsg()
        .then((data) => {
            // แก้ไขข้อมูล
            const updatedData = editJson(data);

            // เขียนข้อมูลลงในไฟล์ new_cloth.json
            return writeMsg(updatedData);
        })
        .then(() => {
            res.end('แก้ไข JSON เรียบร้อยแล้ว');
        })
        .catch((err) => {
            res.end('เกิดข้อผิดพลาด: ' + err.message);
        });
});

// อ่านไฟล์ cloth1.json
let readMsg = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('cloth1.json', 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                try {
                    const jsonData = JSON.parse(data);
                    resolve(jsonData);
                } catch (parseErr) {
                    reject(parseErr);
                }
            }
        });
    });
}

// แก้ไขข้อมูล JSON
let editJson = (data) => {
    const stock = {
        item1: 12,
        item2: 13,
        item3: 50,
        item4: 22,
        item5: 55,
        item6: 87,
        item7: 12,
        item8: 29,
        item9: 10
    }

    // ทำการแก้ไขข้อมูล JSON ตาม stock
    for (const item in stock) {
        if (data.hasOwnProperty(item)) {
            data[item] += stock[item];
        }
    }

    return data;
}

// เขียนข้อมูลลงในไฟล์ new_cloth.json
let writeMsg = (data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('new_cloth.json', JSON.stringify(data), 'utf8', (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
