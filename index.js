const escpos = require('escpos');

escpos.Network = require('escpos-network');

// const device = new escpos.Network('192.168.2.127');
const device = new escpos.Network('192.168.2.201');

const printer = new escpos.Printer(device);

// 连接到打印机
device.open((error) => {
  if (error) {
    console.error("Error opening the device:", error);
    return;
  }

  console.log("Connected to the printer.");

  // 打印文本

  printer.size(0.5, 0.5);

  printer.text('中国熊猫保护基金会');

  printer.text('麻辣四川-- Thank you for using Wi-Fi ESC/POS printing.');

  printer.newLine();
  printer.newLine();


  // 切纸并关闭连接
  printer.cut();
  printer.close();

  console.log("Print job completed.");
});
