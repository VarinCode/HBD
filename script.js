// run terminal: node script.js
class birthday {

    constructor(countdown_start) {
        this.countdown = countdown_start;
        this.one = 1
        this.HBD = ["\nHappy Birthday to You 🎉✨🎁",
            "Today I wish you a fun time, shared with your dear ones, and a lifelong happiness!\n",
            // ..... ข้อความอวยพรให้เพื่อนคุณ
        ];
    };

    start = () => {
        while (true) {
            if (this.countdown >= this.one) {
                this.countdown--
                    console.log("- เริ่มนับถอยหลังใน " + this.countdown); // นับถอยหหลัง
                this.complete(); // callback เมื่อเงื่อนไขเป็นจริง
            };
            break;
        };
    };

    complete = function() {
        if (this.countdown == 1 || this.countdown < 1) {
            setTimeout(() => this.HBD.forEach((msg) => {
                console.log(msg.toString())
            }), 3000); // ข้อความ
            return clearInterval(delay);
        };
    };
};

const happy = new birthday(6); // ตั้งค่านับถอยหลัง
var delay = setInterval(happy.start, 1000); // ตั้งค่าหน่วงเวลาหน่วยเป็น วินาที
