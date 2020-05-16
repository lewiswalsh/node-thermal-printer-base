# INSTALL
Install libudev and build-essential
`sudo apt install build-essential libudev-dev`

Add user to the 'lp' group
`sudo addgroup <myusername> lp`

Add a rule to udev for the USB device with the correct productID and vendorID
`sudo nano /etc/udev/rules.d/33-thermal.rules`
`SUBSYSTEM=="usb", ATTR{idVendor}=="0416", ATTR{idProduct}=="5011", MODE="666"`

Run `npm i` to install escpos and escpos-usb

Ensure the numbers in the following, match the productID and vendorID:
`const device = new escpos.USB(0x0416, 0x5011);`
