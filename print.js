const escpos = require('escpos');
escpos.USB = require('escpos-usb');

const device = new escpos.USB(0x0416, 0x5011);

const options = { encoding : "GB18030" };

const printer = new escpos.Printer(device, options);

device.open(function(err){
  if(err){ console.error(err); }
  printer
    .font('a')
    .align('ct')
    .style('bu')
    .size(1, 1)
    .text("TEST")
    .cut()
     .close();
});
