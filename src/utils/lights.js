const lights = [
  {
    id: 1,
    title: "HAVELLS 6 W Tube B22 Inverter Bulb",
    rating: "4.3",
    price: "1,014",
    image:
      "https://rukminim1.flixcart.com/image/612/612/keuagsw0/bulb/r/a/q/lhextep7en1w006-havells-original-imafvfwjh4bmvszn.jpeg?q=70",
    url: "https://www.flipkart.com/havells-6-w-tube-b22-inverter-bulb/p/itm7125a4c43922f?pid=BLBFVFQZZFGYYRAQ&lid=LSTBLBFVFQZZFGYYRAQHMTOCT&marketplace=FLIPKART&store=jhg&srno=b_1_1&otracker=browse&fm=organic&iid=en_kYwv51bZBgu1azxG3oCMxSzYEzqp%2BEvrqwwypURCpHe7E7%2BSaDZ4LlQoXp9CwvAQx7FTo9w1KJxHww5H9ZuqoQ%3D%3D&ppt=None&ppn=None&ssid=x0x8c8o9og0000001625990283536",
  },
  {
    id: 2,
    title: "HAVELLS Ranger 10 Torch",
    rating: "4.1",
    price: "234",
    image:
      "https://rukminim1.flixcart.com/image/612/612/jn3hocw0/torch/u/g/e/ranger-10-havells-original-imaf9vfb6ny9gn6k.jpeg?q=70",
    url: "https://www.flipkart.com/havells-ranger-10-torch/p/itmf9pggyshydqzz?pid=TOHF9ZPHNXEPRUGE&lid=LSTTOHF9ZPHNXEPRUGEATKUMH&marketplace=FLIPKART&store=jhg&srno=b_1_2&otracker=browse&fm=organic&iid=en_kYwv51bZBgu1azxG3oCMxSzYEzqp%2BEvrqwwypURCpHcI8kAJt%2B7jymqn%2FB929LBieg8Pt2U8RaXWpxiWrgw%2F%2FQ%3D%3D&ppt=None&ppn=None&ssid=x0x8c8o9og0000001625990283536",
  },
  {
    id: 3,
    title: "BRIGHT LIGHT ONLITE New 2in1 900M Range Beam 2 Mode Rec...",
    rating: "4.1",
    price: "485",
    image:
      "https://rukminim1.flixcart.com/image/612/612/kfh5ifk0/torch/f/c/b/new-2in1-900m-range-long-beam-2-mode-waterproof-rechargeable-original-imafvwxpzcyggehn.jpeg?q=70",
    url: "https://www.flipkart.com/bright-light-onlite-new-2in1-900m-range-beam-2-mode-rechargeable-battery-penlight-waterproof-led-flashlight-torch-60w-emergency-table-lamp-long-press-blinker/p/itmea7af8c96f218?pid=TOHFVWM7FHBWVFCB&lid=LSTTOHFVWM7FHBWVFCBVJCMP9&marketplace=FLIPKART&store=jhg&srno=b_1_3&otracker=browse&fm=organic&iid=8c5de533-ad6b-40b5-b9f2-7a942c34d4ca.TOHFVWM7FHBWVFCB.SEARCH&ppt=None&ppn=None&ssid=x0x8c8o9og0000001625990283536",
  },
  {
    id: 4,
    title: "EVEREADY DL50 Torch",
    rating: "4.3",
    price: "109",
    image:
      "https://rukminim1.flixcart.com/image/612/612/k0lbdzk0/torch/z/f/f/dl50-eveready-original-imafk9guzndszjhf.jpeg?q=70",
    url: "https://www.flipkart.com/eveready-dl50-torch/p/itmf8hdmh5gejbzu?pid=TOHF8HDMZZ6MFZFF&lid=LSTTOHF8HDMZZ6MFZFFNOCEPN&marketplace=FLIPKART&store=jhg&srno=b_1_4&otracker=browse&fm=organic&iid=8c5de533-ad6b-40b5-b9f2-7a942c34d4ca.TOHF8HDMZZ6MFZFF.SEARCH&ppt=None&ppn=None&ssid=x0x8c8o9og0000001625990283536",
  },
  {
    id: 5,
    title: "Syska 9 W Standard B22 LED Bulb",
    rating: "4.2",
    price: "779",
    image:
      "https://rukminim1.flixcart.com/image/612/612/kdeum4w0/bulb/h/b/w/srl-9w-po10-syska-original-imafubksz7g8h3ry.jpeg?q=70",
    url: "https://www.flipkart.com/syska-9-w-standard-b22-led-bulb/p/itm73bfebde4b97a?pid=BLBFGSYC8QNN5HBW&lid=LSTBLBFGSYC8QNN5HBWWJNB8F&marketplace=FLIPKART&store=jhg&srno=b_1_5&otracker=browse&fm=organic&iid=8c5de533-ad6b-40b5-b9f2-7a942c34d4ca.BLBFGSYC8QNN5HBW.SEARCH&ppt=None&ppn=None&ssid=x0x8c8o9og0000001625990283536",
  },
  {
    id: 6,
    title: "Pigeon Sirius -84 led (smd) Lantern Emergency Light",
    rating: "4.1",
    price: "484",
    image:
      "https://rukminim1.flixcart.com/image/612/612/ka5oia80/emergency-light/f/v/5/sirius-pigeon-original-imafrsphq4hjze7y.jpeg?q=70",
    url: "https://www.flipkart.com/pigeon-sirius-84-led-smd-lantern-emergency-light/p/itm27caa91b2c05d?pid=EMLFN2F7AYW7HFV5&lid=LSTEMLFN2F7AYW7HFV5HOWF5E&marketplace=FLIPKART&store=jhg&srno=b_1_6&otracker=browse&fm=organic&iid=8c5de533-ad6b-40b5-b9f2-7a942c34d4ca.EMLFN2F7AYW7HFV5.SEARCH&ppt=None&ppn=None&ssid=x0x8c8o9og0000001625990283536",
  },
  {
    id: 7,
    title: "Syska Led Lights 9 W Standard B22 LED Bulb",
    rating: "4.2",
    price: "217",
    image:
      "https://rukminim1.flixcart.com/image/612/612/bulb/y/c/g/ssk-srl-9w-pack-of-2-syska-original-imaegmhwefda5g9a.jpeg?q=70",
    url: "https://www.flipkart.com/syska-led-lights-9-w-standard-b22-bulb/p/itm5fa5f19612cb0?pid=BLBEFYBHQFTHZYCG&lid=LSTBLBEFYBHQFTHZYCGNNOLNJ&marketplace=FLIPKART&store=jhg&spotlightTagId=BestsellerId_jhg&srno=b_1_7&otracker=browse&fm=organic&iid=8c5de533-ad6b-40b5-b9f2-7a942c34d4ca.BLBEFYBHQFTHZYCG.SEARCH&ppt=None&ppn=None&ssid=x0x8c8o9og0000001625990283536",
  },
  {
    id: 8,
    title: "HAVELLS LHETBPFCAN1Y001-Pk1 Torch",
    rating: "4.1",
    price: "219",
    image:
      "https://rukminim1.flixcart.com/image/612/612/km2clu80/torch/e/a/c/lhetbpfcan1y001-pk1-havells-original-imagffw83cgmchua.jpeg?q=70",
    url: "https://www.flipkart.com/havells-lhetbpfcan1y001-pk1-torch/p/itme12b9b33e4c37?pid=TOHGFFWCHFBPJU7K&lid=LSTTOHGFFWCHFBPJU7KOHDQRU&marketplace=FLIPKART&store=jhg&srno=b_1_8&otracker=browse&fm=organic&iid=en_kYwv51bZBgu1azxG3oCMxSzYEzqp%2BEvrqwwypURCpHf7uB1FCbvO3u4cts2RtUInlTJ5kO1MPavxBY0XfPbWeA%3D%3D&ppt=None&ppn=None&ssid=x0x8c8o9og0000001625990283536",
  },
  {
    id: 9,
    title: "HALONIX LED PRIME INVERTER LIGHT 9W B22 CW PK1 M Bulb E...",
    rating: "4",
    price: "389",
    image:
      "https://rukminim1.flixcart.com/image/612/612/jyhl1u80/emergency-light/a/n/e/led-prime-inverter-light-9w-b22-cw-pk1-m-halonix-original-imafggq3chddqtzw.jpeg?q=70",
    url: "https://www.flipkart.com/halonix-led-prime-inverter-light-9w-b22-cw-pk1-m-bulb-emergency/p/itmcbd2e36d28871?pid=EMLFGGQJZ8SXGANE&lid=LSTEMLFGGQJZ8SXGANEN2RSJI&marketplace=FLIPKART&store=jhg&srno=b_1_9&otracker=browse&fm=organic&iid=8c5de533-ad6b-40b5-b9f2-7a942c34d4ca.EMLFGGQJZ8SXGANE.SEARCH&ppt=None&ppn=None&ssid=x0x8c8o9og0000001625990283536",
  },
  {
    id: 10,
    title: "Syska T0790LA Torch",
    rating: "4.1",
    price: "354",
    image:
      "https://rukminim1.flixcart.com/image/612/612/ke1pnrk0/torch/c/3/8/t0790la-syska-original-imafut9bvvtaqwkp.jpeg?q=70",
    url: "https://www.flipkart.com/syska-t0790la-torch/p/itm5de4d1b7134c3?pid=TOHFNDHUSNBGAC38&lid=LSTTOHFNDHUSNBGAC382BG5GP&marketplace=FLIPKART&store=jhg&srno=b_1_10&otracker=browse&fm=organic&iid=8c5de533-ad6b-40b5-b9f2-7a942c34d4ca.TOHFNDHUSNBGAC38.SEARCH&ppt=None&ppn=None&ssid=x0x8c8o9og0000001625990283536",
  },
  {
    id: 11,
    title: "Syska Led Lights 9 W, 7 W Standard B22 LED Bulb",
    rating: "4.2",
    price: "688",
    image:
      "https://rukminim1.flixcart.com/image/612/612/bulb/j/w/h/ssk-srl-7w-9w-combo-syska-original-imaegngmg3hrhg4d.jpeg?q=70",
    url: "https://www.flipkart.com/syska-led-lights-9-w-7-w-standard-b22-bulb/p/itmd95d63a0ee4f5?pid=BLBEFYBHJRG9VJWH&lid=LSTBLBEFYBHJRG9VJWHD9OCWB&marketplace=FLIPKART&store=jhg&srno=b_1_11&otracker=browse&fm=organic&iid=8c5de533-ad6b-40b5-b9f2-7a942c34d4ca.BLBEFYBHJRG9VJWH.SEARCH&ppt=None&ppn=None&ssid=x0x8c8o9og0000001625990283536",
  },
  {
    id: 12,
    title: "HALONIX 15 W, 8 W, 0.5 W Round B22 LED Bulb",
    rating: "4.3",
    price: "204",
    image:
      "https://rukminim1.flixcart.com/image/612/612/k19lvgw0/bulb/t/w/u/all-rounder-15w-b22-pack-1-halonix-original-imafknh6ugvmw5wd.jpeg?q=70",
    url: "https://www.flipkart.com/halonix-15-w-8-0-5-w-round-b22-led-bulb/p/itm5d24e5f511575?pid=BLBFKT38FGYZZTWU&lid=LSTBLBFKT38FGYZZTWUCTGYTT&marketplace=FLIPKART&store=jhg&srno=b_1_12&otracker=browse&fm=organic&iid=en_kYwv51bZBgu1azxG3oCMxSzYEzqp%2BEvrqwwypURCpHdWx5iE3jeNqTaZrWkc%2FGYNd8LHc9PAJ5tMl%2BvAocZbbA%3D%3D&ppt=None&ppn=None&ssid=x0x8c8o9og0000001625990283536",
  },
  {
    id: 13,
    title: "Syska SSK-TL-8602L Rechargeable Table Lamp",
    rating: "4.3",
    price: "649",
    image:
      "https://rukminim1.flixcart.com/image/612/612/kdxfc7k0/table-lamp/z/5/g/ssk-tl-8602l-rechargeable-ssk-tl-8602l-syska-original-imafuq6445cfvgaa.jpeg?q=70",
    url: "https://www.flipkart.com/syska-ssk-tl-8602l-rechargeable-table-lamp/p/itm35da8cec3b1e9?pid=TLPFSNZRJNHHKZ5G&lid=LSTTLPFSNZRJNHHKZ5G35NF5D&marketplace=FLIPKART&store=jhg&srno=b_1_13&otracker=browse&fm=organic&iid=8c5de533-ad6b-40b5-b9f2-7a942c34d4ca.TLPFSNZRJNHHKZ5G.SEARCH&ppt=None&ppn=None&ssid=x0x8c8o9og0000001625990283536",
  },
  {
    id: 14,
    title: "EVEREADY 9 W Standard B22 LED Bulb",
    rating: "4.3",
    price: "699",
    image:
      "https://rukminim1.flixcart.com/image/612/612/ko8xtow0/bulb/x/s/c/8901691018034-eveready-original-imag2qwxnghu5kzs.jpeg?q=70",
    url: "https://www.flipkart.com/eveready-9-w-standard-b22-led-bulb/p/itmde49767920f40?pid=BLBEUW2DYMPMXNH2&lid=LSTBLBEUW2DYMPMXNH2KVSTUS&marketplace=FLIPKART&store=jhg&srno=b_1_14&otracker=browse&fm=organic&iid=8c5de533-ad6b-40b5-b9f2-7a942c34d4ca.BLBEUW2DYMPMXNH2.SEARCH&ppt=None&ppn=None&ssid=x0x8c8o9og0000001625990283536",
  },
  {
    id: 15,
    title: "Pigeon Radiance-Led Torch Lantern Emergency Light",
    rating: "4.3",
    price: "344",
    image:
      "https://rukminim1.flixcart.com/image/612/612/emergency-light/s/z/z/radiance-pigeon-original-imaeq73gjpzevcpa.jpeg?q=70",
    url: "https://www.flipkart.com/pigeon-radiance-led-torch-lantern-emergency-light/p/itm35a5be16135e2?pid=EMLEQAEWSHAMYSZZ&lid=LSTEMLEQAEWSHAMYSZZLBFNAT&marketplace=FLIPKART&store=jhg&spotlightTagId=BestvalueId_jhg&srno=b_1_15&otracker=browse&fm=organic&iid=8c5de533-ad6b-40b5-b9f2-7a942c34d4ca.EMLEQAEWSHAMYSZZ.SEARCH&ppt=None&ppn=None&ssid=x0x8c8o9og0000001625990283536",
  },
  {
    id: 16,
    title: "iGear Business Desk Lamp - Three Brightness LED Lamp wi...",
    rating: "4.5",
    price: "1,990",
    image:
      "https://rukminim1.flixcart.com/image/612/612/khdqnbk0/table-lamp/4/p/g/business-desk-lamp-three-brightness-led-lamp-with-led-backlit-original-imafxen6krpxfwab.jpeg?q=70",
    url: "https://www.flipkart.com/igear-business-desk-lamp-three-brightness-led-backlit-display-display-time-day-date-temperature-touch-controlled-power-button-alarm-snooze-function-study/p/itm33b2654537cca?pid=TLPFW3YURPEDF4PG&lid=LSTTLPFW3YURPEDF4PGJ3S630&marketplace=FLIPKART&store=jhg&srno=b_1_16&otracker=browse&fm=organic&iid=en_kYwv51bZBgu1azxG3oCMxSzYEzqp%2BEvrqwwypURCpHfrIh8pPEjJ6JlMsvAFFfI3hl%2FW%2B01NcHQPhbd0UJ%2BGvw%3D%3D&ppt=None&ppn=None&ssid=x0x8c8o9og0000001625990283536",
  },
  {
    id: 17,
    title: "Pigeon Vega 2 in 1 desk and Torch Emergency Light",
    rating: "4.2",
    price: "299",
    image:
      "https://rukminim1.flixcart.com/image/612/612/k9u8zgw0/emergency-light/e/p/p/shine-2-in-1-desk-torch-foldable-emergency-light-pigeon-original-imafrjj3x3ymthf7.jpeg?q=70",
    url: "https://www.flipkart.com/pigeon-vega-2-1-desk-torch-emergency-light/p/itm7ad13fce20490?pid=EMLFFP4HRF9XYEXV&lid=LSTEMLFFP4HRF9XYEXVPYS4SE&marketplace=FLIPKART&store=jhg&srno=b_1_17&otracker=browse&fm=organic&iid=8c5de533-ad6b-40b5-b9f2-7a942c34d4ca.EMLFFP4HRF9XYEXV.SEARCH&ppt=None&ppn=None&ssid=x0x8c8o9og0000001625990283536",
  },
  {
    id: 18,
    title: "Syska 9 W Round B22 LED Bulb",
    rating: "4.3",
    price: "571",
    image:
      "https://rukminim1.flixcart.com/image/612/612/j62hrww0/bulb/w/h/m/pag-9w-6-syska-led-lights-original-imaewm7sx2nhpnxr.jpeg?q=70",
    url: "https://www.flipkart.com/syska-9-w-round-b22-led-bulb/p/itme6465044bdf19?pid=BLBFGS74GFTQENAF&lid=LSTBLBFGS74GFTQENAFNFKJWM&marketplace=FLIPKART&store=jhg&srno=b_1_18&otracker=browse&fm=organic&iid=8c5de533-ad6b-40b5-b9f2-7a942c34d4ca.BLBFGS74GFTQENAF.SEARCH&ppt=None&ppn=None&ssid=x0x8c8o9og0000001625990283536",
  },
  {
    id: 19,
    title: "HALONIX 10 W Round B22 LED Bulb",
    rating: "4.2",
    price: "649",
    image:
      "https://rukminim1.flixcart.com/image/612/612/k572gsw0/bulb/y/r/u/led-bulb-astron-plus-10w-b22-cw-pack-of-10-halonix-original-imafnxjngshayfdu.jpeg?q=70",
    url: "https://www.flipkart.com/halonix-10-w-round-b22-led-bulb/p/itm334e0630fa68b?pid=BLBFNXH5FATMHYRU&lid=LSTBLBFNXH5FATMHYRUJGCAKG&marketplace=FLIPKART&store=jhg&srno=b_1_19&otracker=browse&fm=organic&iid=8c5de533-ad6b-40b5-b9f2-7a942c34d4ca.BLBFNXH5FATMHYRU.SEARCH&ppt=None&ppn=None&ssid=x0x8c8o9og0000001625990283536",
  },
  {
    id: 20,
    title: "Pick Ur Needs Study Table Lamp Touch On/Off Switch LED ...",
    rating: "4.4",
    price: "649",
    image:
      "https://rukminim1.flixcart.com/image/612/612/kl2mljk0/table-lamp/t/c/l/desk-light-with-3-shades-touch-control-light-and-mobile-holder-original-imagy9bpyudpq7g8.jpeg?q=70",
    url: "https://www.flipkart.com/pick-ur-needs-study-table-lamp-touch-on-off-switch-led-desk-pen-mobile-holder-5-1/p/itmb0c185b058ce0?pid=TLPGY9BYVMRTYBWG&lid=LSTTLPGY9BYVMRTYBWGNJAF6D&marketplace=FLIPKART&store=jhg&srno=b_1_20&otracker=browse&fm=organic&iid=en_kYwv51bZBgu1azxG3oCMxSzYEzqp%2BEvrqwwypURCpHdstjU%2FwAOS2SE5PtU96%2FUOUoPjKyxZeF6ObT2QUYOdhw%3D%3D&ppt=None&ppn=None&ssid=x0x8c8o9og0000001625990283536",
  },
  {
    id: 21,
    title: "JY SUPER 8990 (RECHARGEABLE LED TORCH) Torch",
    rating: "4",
    price: "322",
    image:
      "https://rukminim1.flixcart.com/image/612/612/k5txifk0/torch/9/u/v/jy-8990-rechargeable-industrial-security-purpose-metal-torch-original-imafzfg48c8ckjy4.jpeg?q=70",
    url: "https://www.flipkart.com/jy-super-8990-rechargeable-led-torch-torch/p/itm135edf2a9a7cf?pid=TOHFVA3F6YD6S6FE&lid=LSTTOHFVA3F6YD6S6FE29CNKA&marketplace=FLIPKART&store=jhg&srno=b_1_21&otracker=browse&fm=organic&iid=8c5de533-ad6b-40b5-b9f2-7a942c34d4ca.TOHFVA3F6YD6S6FE.SEARCH&ppt=None&ppn=None&ssid=x0x8c8o9og0000001625990283536",
  },
  {
    id: 22,
    title: "Pigeon Radiance Led Torch Lantern Emergency Light",
    rating: "4.3",
    price: "349",
    image:
      "https://rukminim1.flixcart.com/image/612/612/ka5oia80/emergency-light/n/a/g/radiance-pigeon-original-imafrspgveghbfet.jpeg?q=70",
    url: "https://www.flipkart.com/pigeon-radiance-led-torch-lantern-emergency-light/p/itmfhurra3rxfk4k?pid=EMLEQ4R66H8Q9NAG&lid=LSTEMLEQ4R66H8Q9NAGCIFDW8&marketplace=FLIPKART&store=jhg&srno=b_1_22&otracker=browse&fm=organic&iid=8c5de533-ad6b-40b5-b9f2-7a942c34d4ca.EMLEQ4R66H8Q9NAG.SEARCH&ppt=None&ppn=None&ssid=x0x8c8o9og0000001625990283536",
  },
  {
    id: 23,
    title: "Syska SSK-EMB-09-01 Pack of 3 Bulb Emergency Light",
    rating: "3.9",
    price: "999",
    image:
      "https://rukminim1.flixcart.com/image/612/612/kmxsakw0/emergency-light/s/n/h/ssk-emb-09-01-pack-of-3-syska-original-imagfqfat5j95wze.jpeg?q=70",
    url: "https://www.flipkart.com/syska-ssk-emb-09-01-pack-3-bulb-emergency-light/p/itmab44830e3c5d5?pid=EMLFGM8UUJ8ZS5BD&lid=LSTEMLFGM8UUJ8ZS5BDZN4V3A&marketplace=FLIPKART&store=jhg&srno=b_1_23&otracker=browse&fm=organic&iid=8c5de533-ad6b-40b5-b9f2-7a942c34d4ca.EMLFGM8UUJ8ZS5BD.SEARCH&ppt=None&ppn=None&ssid=x0x8c8o9og0000001625990283536",
  },
  {
    id: 24,
    title: "Royal piece Gate Light Outdoor Lamp",
    rating: "0",
    price: "1,707",
    image:
      "https://rukminim1.flixcart.com/image/612/612/kp5sya80/outdoor-lamp/g/n/r/gl-02-royal-piece-original-imag3fsfm4ahmtxj.jpeg?q=70",
    url: "https://www.flipkart.com/royal-piece-gate-light-outdoor-lamp/p/itme9464a4f66497?pid=OTLG3FSFFNCAYJQJ&lid=LSTOTLG3FSFFNCAYJQJ26U6XY&marketplace=FLIPKART&store=jhg&srno=b_1_24&otracker=browse&fm=organic&iid=en_kYwv51bZBgu1azxG3oCMxSzYEzqp%2BEvrqwwypURCpHf0U2RQs%2Bizf9FATnRuezS69%2FtrzU8jiACagckn3k5XHg%3D%3D&ppt=None&ppn=None&ssid=x0x8c8o9og0000001625990283536",
  },
  {
    id: 25,
    title: "Syska T053AA Torch",
    rating: "4.2",
    price: "105",
    image:
      "https://rukminim1.flixcart.com/image/612/612/kon887k0/torch/p/1/p/t053aa-syska-original-imag322yhju263jd.jpeg?q=70",
    url: "https://www.flipkart.com/syska-t053aa-torch/p/itm40fce5f233851?pid=TOHF5CMZJXEGDBTE&lid=LSTTOHF5CMZJXEGDBTEEQQ1ES&marketplace=FLIPKART&store=jhg&srno=b_1_25&otracker=browse&fm=organic&iid=8c5de533-ad6b-40b5-b9f2-7a942c34d4ca.TOHF5CMZJXEGDBTE.SEARCH&ppt=None&ppn=None&ssid=x0x8c8o9og0000001625990283536",
  },
  {
    id: 26,
    title: "PHILIPS 2.7 W Standard B22 LED Bulb",
    rating: "4.3",
    price: "260",
    image:
      "https://rukminim1.flixcart.com/image/612/612/klv7ekw0/bulb/l/5/r/2-2-7w-b22-led-bulb-white-pack-of-02-philips-original-imafgprgwe5hbsdm.jpeg?q=70",
    url: "https://www.flipkart.com/philips-2-7-w-standard-b22-led-bulb/p/itmaaca312f803d1?pid=BLBE6539DWJFXXWE&lid=LSTBLBE6539DWJFXXWERWQ575&marketplace=FLIPKART&store=jhg&srno=b_1_26&otracker=browse&fm=organic&iid=8c5de533-ad6b-40b5-b9f2-7a942c34d4ca.BLBE6539DWJFXXWE.SEARCH&ppt=None&ppn=None&ssid=x0x8c8o9og0000001625990283536",
  },
  {
    id: 27,
    title: "PHILIPS 10 W Standard B22 LED Bulb",
    rating: "4.3",
    price: "589",
    image:
      "https://rukminim1.flixcart.com/image/612/612/k6tniq80/bulb/q/h/a/acesaver-10w-6-philips-original-imafgy4crmrzanre.jpeg?q=70",
    url: "https://www.flipkart.com/philips-10-w-standard-b22-led-bulb/p/itm5e15fb1a9eae6?pid=BLBFP6ZYXUTWZQHA&lid=LSTBLBFP6ZYXUTWZQHAR1CJDE&marketplace=FLIPKART&store=jhg&srno=b_1_27&otracker=browse&fm=organic&iid=8c5de533-ad6b-40b5-b9f2-7a942c34d4ca.BLBFP6ZYXUTWZQHA.SEARCH&ppt=None&ppn=None&ssid=x0x8c8o9og0000001625990283536",
  },
  {
    id: 28,
    title: "HALONIX 40 W Standard B22 LED Bulb",
    rating: "4.4",
    price: "485",
    image:
      "https://rukminim1.flixcart.com/image/612/612/jzn0tjk0/bulb/w/h/w/led-bulb-astron-jumbo-40w-b22-cw-halonix-original-imafjmyahhecvkyr.jpeg?q=70",
    url: "https://www.flipkart.com/halonix-40-w-standard-b22-led-bulb/p/itmab155ead9fa92?pid=BLBFGMG2BKHX4WHW&lid=LSTBLBFGMG2BKHX4WHWJFWOMT&marketplace=FLIPKART&store=jhg&srno=b_1_28&otracker=browse&fm=organic&iid=en_kYwv51bZBgu1azxG3oCMxSzYEzqp%2BEvrqwwypURCpHdXANBLzkndMkk3rCVN%2FHRJMZZx1zls1eCA9%2FKpHkYQOg%3D%3D&ppt=None&ppn=None&ssid=x0x8c8o9og0000001625990283536",
  },
  {
    id: 29,
    title: "PHILIPS 9 W Round B22 LED Bulb",
    rating: "4.3",
    price: "449",
    image:
      "https://rukminim1.flixcart.com/image/612/612/km3s1ow0/bulb/g/z/v/9-w-round-b22-led-bulb-white-pack-of-4-philips-original-imagf2n2wq9cmfny.jpeg?q=70",
    url: "https://www.flipkart.com/philips-9-w-round-b22-led-bulb/p/itm3ef4da11cf2d1?pid=BLBE4Q5HBSUGX5VE&lid=LSTBLBE4Q5HBSUGX5VEQRGNXV&marketplace=FLIPKART&store=jhg&srno=b_1_29&otracker=browse&fm=organic&iid=8c5de533-ad6b-40b5-b9f2-7a942c34d4ca.BLBE4Q5HBSUGX5VE.SEARCH&ppt=None&ppn=None&ssid=x0x8c8o9og0000001625990283536",
  },
  {
    id: 30,
    title: "Eveready 10W LED Bulb Pack of 2 with Free 4 Batteries",
    rating: "4.3",
    price: "299",
    image:
      "https://rukminim1.flixcart.com/image/612/612/kqfj1jk0/bulb/y/k/j/10-w-pack-of-2-promo-eveready-original-imag4fxscs5khwgs.jpeg?q=70",
    url: "https://www.flipkart.com/eveready-10w-led-bulb-pack-2-free-4-batteries/p/itm365222c573142?pid=BLBEH3BHQWFP36B5&lid=LSTBLBEH3BHQWFP36B5MYINFD&marketplace=FLIPKART&store=jhg&srno=b_1_30&otracker=browse&fm=organic&iid=8c5de533-ad6b-40b5-b9f2-7a942c34d4ca.BLBEH3BHQWFP36B5.SEARCH&ppt=None&ppn=None&ssid=x0x8c8o9og0000001625990283536",
  },
  {
    id: 31,
    title: "EVEREADY DL-65-digi Jeevan Sathi Torch",
    rating: "4.4",
    price: "399",
    image:
      "https://rukminim1.flixcart.com/image/612/612/emergency-light/c/v/v/eveready-dl-65-digi-jeevan-sathi-original-imadzqknzxhgga83.jpeg?q=70",
    url: "https://www.flipkart.com/eveready-dl-65-digi-jeevan-sathi-torch/p/itmdzzvwrj2feapu?pid=EMLDZZVWTUFGXCVV&lid=LSTEMLDZZVWTUFGXCVV4M0LVW&marketplace=FLIPKART&store=jhg&srno=b_1_31&otracker=browse&fm=organic&iid=8c5de533-ad6b-40b5-b9f2-7a942c34d4ca.EMLDZZVWTUFGXCVV.SEARCH&ppt=None&ppn=None&ssid=x0x8c8o9og0000001625990283536",
  },
  {
    id: 32,
    title: "HAVELLS Ranger 30 Torch",
    rating: "4.2",
    price: "339",
    image:
      "https://rukminim1.flixcart.com/image/612/612/jbb3wcw0/torch/2/z/h/ranger-30-havells-original-imafynzxghf6zhek.jpeg?q=70",
    url: "https://www.flipkart.com/havells-ranger-30-torch/p/itmfyzg5m5dqggph?pid=TOHFYZFRCKFMC2ZH&lid=LSTTOHFYZFRCKFMC2ZHIRN8TB&marketplace=FLIPKART&store=jhg&srno=b_1_32&otracker=browse&fm=organic&iid=en_kYwv51bZBgu1azxG3oCMxSzYEzqp%2BEvrqwwypURCpHcQIkToE818rPnQVTDqROF1aKahNWj1MXlFDLzx43aa6Q%3D%3D&ppt=None&ppn=None&ssid=x0x8c8o9og0000001625990283536",
  },
  {
    id: 33,
    title: "Syska 9 W Standard B22 LED Bulb",
    rating: "4.2",
    price: "329",
    image:
      "https://rukminim1.flixcart.com/image/612/612/kcjexe80/bulb/d/4/8/ssk-srl-9w-po4-syska-original-imaftnbyzhe4ysrp.jpeg?q=70",
    url: "https://www.flipkart.com/syska-9-w-standard-b22-led-bulb/p/itm572259e308579?pid=BLBFTN724YQ5JD48&lid=LSTBLBFTN724YQ5JD48QQVIMM&marketplace=FLIPKART&store=jhg&srno=b_1_33&otracker=browse&fm=organic&iid=8c5de533-ad6b-40b5-b9f2-7a942c34d4ca.BLBFTN724YQ5JD48.SEARCH&ppt=None&ppn=None&ssid=x0x8c8o9og0000001625990283536",
  },
  {
    id: 34,
    title: "EVEREADY DL-63 -digi Jeevan Sathi Torch",
    rating: "4.4",
    price: "339",
    image:
      "https://rukminim1.flixcart.com/image/612/612/emergency-light/9/j/p/eveready-dl-63-digi-jeevan-sathi-original-imadgts8bdfgvjhs.jpeg?q=70",
    url: "https://www.flipkart.com/eveready-dl-63-digi-jeevan-sathi-torch/p/itmdzzvwkx4j8vnb?pid=EMLDZZVWUEZMY9JP&lid=LSTEMLDZZVWUEZMY9JP0G05U4&marketplace=FLIPKART&store=jhg&srno=b_1_34&otracker=browse&fm=organic&iid=8c5de533-ad6b-40b5-b9f2-7a942c34d4ca.EMLDZZVWUEZMY9JP.SEARCH&ppt=None&ppn=None&ssid=x0x8c8o9og0000001625990283536",
  },
  {
    id: 35,
    title: "SALEOCTOPUS Rechargeable LED Touch On/Off Switch Desk L...",
    rating: "4.5",
    price: "383",
    image:
      "https://rukminim1.flixcart.com/image/612/612/kbfeljk0/table-lamp/y/x/x/table-lamp-touch-type-european-style-modern-flexible-neck-original-imafsrc86mgdkd5r.jpeg?q=70",
    url: "https://www.flipkart.com/saleoctopus-rechargeable-led-touch-on-off-switch-desk-lamp-children-eye-protection-student-study-reading-dimmer-table-lamps-usb-charging/p/itm4cdbdbda69e24?pid=TLPFW6EJQFTBF3F6&lid=LSTTLPFW6EJQFTBF3F6TON8M1&marketplace=FLIPKART&store=jhg&srno=b_1_35&otracker=browse&fm=organic&iid=8c5de533-ad6b-40b5-b9f2-7a942c34d4ca.TLPFW6EJQFTBF3F6.SEARCH&ppt=None&ppn=None&ssid=x0x8c8o9og0000001625990283536",
  },
  {
    id: 36,
    title: "HAVELLS LHEXAUPGBNNK001 Torch",
    rating: "3.9",
    price: "370",
    image:
      "https://rukminim1.flixcart.com/image/612/612/km57hjk0/torch/1/y/h/lhexaupgbnnk001-havells-original-imagf3wgz7c3ctqb.jpeg?q=70",
    url: "https://www.flipkart.com/havells-lhexaupgbnnk001-torch/p/itm21b6094b513b2?pid=TOHGF3WJ9EB3RTGT&lid=LSTTOHGF3WJ9EB3RTGTL04OAD&marketplace=FLIPKART&store=jhg&srno=b_1_36&otracker=browse&fm=organic&iid=en_kYwv51bZBgu1azxG3oCMxSzYEzqp%2BEvrqwwypURCpHdNsD1OK2GsLk1lYsdDJkzYHb0ETwPgUixJLYp9PFPysg%3D%3D&ppt=None&ppn=None&ssid=x0x8c8o9og0000001625990283536",
  },
  {
    id: 37,
    title: "PHILIPS 20 W T-Bulb B22 LED Bulb",
    rating: "4.4",
    price: "797",
    image:
      "https://rukminim1.flixcart.com/image/612/612/k4px6kw0/tube-light/u/8/n/20w-b22-t-bulb-beamer-02-feet-philips-original-imafnk37cypsh2kx.jpeg?q=70",
    url: "https://www.flipkart.com/philips-20-w-t-bulb-b22-led-bulb/p/itm6f00dc2e1b8af?pid=BLBFGXPJPKQR4RZY&lid=LSTBLBFGXPJPKQR4RZYPEECZ8&marketplace=FLIPKART&store=jhg&srno=b_1_37&otracker=browse&fm=organic&iid=8c5de533-ad6b-40b5-b9f2-7a942c34d4ca.BLBFGXPJPKQR4RZY.SEARCH&ppt=None&ppn=None&ssid=x0x8c8o9og0000001625990283536",
  },
  {
    id: 38,
    title: "PHILIPS 10 W T-Bulb B22 LED Bulb",
    rating: "4.4",
    price: "689",
    image:
      "https://rukminim1.flixcart.com/image/612/612/jwxuvm80/tube-light/h/w/h/8w-b22-white-linear-led-battan-pack-of-04-philips-original-imaf6yhhghtgxz7d.jpeg?q=70",
    url: "https://www.flipkart.com/philips-10-w-t-bulb-b22-led-bulb/p/itmb34909336848f?pid=BLBEZFHZEGVPGHAD&lid=LSTBLBEZFHZEGVPGHADDERLWG&marketplace=FLIPKART&store=jhg&srno=b_1_38&otracker=browse&fm=organic&iid=8c5de533-ad6b-40b5-b9f2-7a942c34d4ca.BLBEZFHZEGVPGHAD.SEARCH&ppt=None&ppn=None&ssid=x0x8c8o9og0000001625990283536",
  },
  {
    id: 39,
    title: "Pigeon emergency lamp - capella led Lantern Emergency L...",
    rating: "4.2",
    price: "669",
    image:
      "https://rukminim1.flixcart.com/image/612/612/ka5oia80/emergency-light/w/k/d/capella-pigeon-original-imafrsph9vcyg8pa.jpeg?q=70",
    url: "https://www.flipkart.com/pigeon-emergency-lamp-capella-led-lantern-light/p/itmdbb9f36390482?pid=EMLFN2F73K5XVWKD&lid=LSTEMLFN2F73K5XVWKDZPRCFK&marketplace=FLIPKART&store=jhg&srno=b_1_39&otracker=browse&fm=organic&iid=8c5de533-ad6b-40b5-b9f2-7a942c34d4ca.EMLFN2F73K5XVWKD.SEARCH&ppt=None&ppn=None&ssid=x0x8c8o9og0000001625990283536",
  },
  {
    id: 40,
    title: "HAVELLS 30 W Standard B22 LED Bulb",
    rating: "4.5",
    price: "724",
    image:
      "https://rukminim1.flixcart.com/image/612/612/km2clu80/bulb/3/z/k/1-lhldeiedml8x030-pk1-havells-original-imagffsyc9u7hxbz.jpeg?q=70",
    url: "https://www.flipkart.com/havells-30-w-standard-b22-led-bulb/p/itmf214b3d5f8684?pid=BLBGFFSZAVGS57ZG&lid=LSTBLBGFFSZAVGS57ZGV4FFOS&marketplace=FLIPKART&store=jhg&srno=b_1_40&otracker=browse&fm=organic&iid=en_kYwv51bZBgu1azxG3oCMxSzYEzqp%2BEvrqwwypURCpHeHbPGSAYRz9LGKTFW9fYkBQ848rv4CPaJo71U6YJYAmg%3D%3D&ppt=None&ppn=None&ssid=x0x8c8o9og0000001625990283536",
  },
  {
    id: 41,
    title: "WIPRO 10 W Standard B22 LED Bulb",
    rating: "4.2",
    price: "289",
    image:
      "https://rukminim1.flixcart.com/image/612/612/kqb8pzk0/bulb/0/x/v/3-5w-b22-white-led-bulb-pack-of-03-pes-wipro-original-imag4ctpnnr7xbwr.jpeg?q=70",
    url: "https://www.flipkart.com/wipro-10-w-standard-b22-led-bulb/p/itm9c00d262e4780?pid=BLBEZMJMGEG4QTBF&lid=LSTBLBEZMJMGEG4QTBFBUJCYK&marketplace=FLIPKART&store=jhg&srno=b_2_41&otracker=browse&fm=organic&iid=4bb4a6fc-3191-44d5-b9d0-5795e23eeaa2.BLBEZMJMGEG4QTBF.SEARCH&ppt=None&ppn=None&ssid=egq437vhxs0000001625990285210",
  },
  {
    id: 42,
    title: "PHILIPS 18 W T-Bulb B22 LED Bulb",
    rating: "4.4",
    price: "635",
    image:
      "https://rukminim1.flixcart.com/image/612/612/jwxuvm80/tube-light/y/f/q/18w-b22-white-battan-led-t-bulb-pack-of-02-philips-original-imafh7cggjnntaqz.jpeg?q=70",
    url: "https://www.flipkart.com/philips-18-w-t-bulb-b22-led-bulb/p/itm34497bdd916ab?pid=BLBF7TQZPA8BYVNN&lid=LSTBLBF7TQZPA8BYVNNWM8YFR&marketplace=FLIPKART&store=jhg&srno=b_2_42&otracker=browse&fm=organic&iid=4bb4a6fc-3191-44d5-b9d0-5795e23eeaa2.BLBF7TQZPA8BYVNN.SEARCH&ppt=None&ppn=None&ssid=egq437vhxs0000001625990285210",
  },
  {
    id: 43,
    title: "Pigeon Rigel Plus LED Torch Lantern Emergency Light",
    rating: "4.1",
    price: "464",
    image:
      "https://rukminim1.flixcart.com/image/612/612/ka5oia80/emergency-light/f/q/w/rebel-plus-pigeon-original-imafrsphph7bhtgf.jpeg?q=70",
    url: "https://www.flipkart.com/pigeon-rigel-plus-led-torch-lantern-emergency-light/p/itm36465be32d261?pid=EMLFN2F7KGMNSFQW&lid=LSTEMLFN2F7KGMNSFQWSZYKYJ&marketplace=FLIPKART&store=jhg&srno=b_2_43&otracker=browse&fm=organic&iid=4bb4a6fc-3191-44d5-b9d0-5795e23eeaa2.EMLFN2F7KGMNSFQW.SEARCH&ppt=None&ppn=None&ssid=egq437vhxs0000001625990285210",
  },
  {
    id: 44,
    title: "HAVELLS 6 W Tube B22 Inverter Bulb",
    rating: "4.3",
    price: "1,014",
    image:
      "https://rukminim1.flixcart.com/image/612/612/keuagsw0/bulb/r/a/q/lhextep7en1w006-havells-original-imafvfwjh4bmvszn.jpeg?q=70",
    url: "https://www.flipkart.com/havells-6-w-tube-b22-inverter-bulb/p/itm7125a4c43922f?pid=BLBFVFQZZFGYYRAQ&lid=LSTBLBFVFQZZFGYYRAQHMTOCT&marketplace=FLIPKART&store=jhg&srno=b_2_44&otracker=browse&fm=organic&iid=en_aZYzN1AOq9SGkez7%2FbHgf9dOC956eFBqvlHjL4%2BUtFeJnXvQVaxnwf%2BBGSWmEiFIx7FTo9w1KJxHww5H9ZuqoQ%3D%3D&ppt=None&ppn=None&ssid=egq437vhxs0000001625990285210",
  },
  {
    id: 45,
    title: "PHILIPS 10 W T-Bulb B22 LED Bulb",
    rating: "4.4",
    price: "344",
    image:
      "https://rukminim1.flixcart.com/image/612/612/jwxuvm80/tube-light/z/h/k/8w-b22-white-linear-led-battan-pack-of-02-philips-original-imaf6yhhhcmrhwgh.jpeg?q=70",
    url: "https://www.flipkart.com/philips-10-w-t-bulb-b22-led-bulb/p/itm15ce25bd07d9d?pid=BLBEZFHZDWJHJYNU&lid=LSTBLBEZFHZDWJHJYNUFHYTFO&marketplace=FLIPKART&store=jhg&srno=b_2_45&otracker=browse&fm=organic&iid=4bb4a6fc-3191-44d5-b9d0-5795e23eeaa2.BLBEZFHZDWJHJYNU.SEARCH&ppt=None&ppn=None&ssid=egq437vhxs0000001625990285210",
  },
  {
    id: 46,
    title: "Syska SSK-T112ML Torch",
    rating: "4",
    price: "249",
    image:
      "https://rukminim1.flixcart.com/image/612/612/kqv8vww0/torch/o/7/x/ssk-t112ml-syska-original-imag4s3fzvcrhd4s.jpeg?q=70",
    url: "https://www.flipkart.com/syska-ssk-t112ml-torch/p/itm4c59c2c55eb2d?pid=TOHFUNSET2CPGZRR&lid=LSTTOHFUNSET2CPGZRRBV6NST&marketplace=FLIPKART&store=jhg&srno=b_2_46&otracker=browse&fm=organic&iid=4bb4a6fc-3191-44d5-b9d0-5795e23eeaa2.TOHFUNSET2CPGZRR.SEARCH&ppt=None&ppn=None&ssid=egq437vhxs0000001625990285210",
  },
  {
    id: 47,
    title: "HAVELLS LHETBPFCAN1Y001-Pk1 Torch",
    rating: "4.1",
    price: "219",
    image:
      "https://rukminim1.flixcart.com/image/612/612/km2clu80/torch/e/a/c/lhetbpfcan1y001-pk1-havells-original-imagffw83cgmchua.jpeg?q=70",
    url: "https://www.flipkart.com/havells-lhetbpfcan1y001-pk1-torch/p/itme12b9b33e4c37?pid=TOHGFFWCHFBPJU7K&lid=LSTTOHGFFWCHFBPJU7KOHDQRU&marketplace=FLIPKART&store=jhg&srno=b_2_47&otracker=browse&fm=organic&iid=4bb4a6fc-3191-44d5-b9d0-5795e23eeaa2.TOHGFFWCHFBPJU7K.SEARCH&ppt=None&ppn=None&ssid=egq437vhxs0000001625990285210",
  },
  {
    id: 48,
    title: "HAVELLS Ranger 10 Torch",
    rating: "4.1",
    price: "234",
    image:
      "https://rukminim1.flixcart.com/image/612/612/jn3hocw0/torch/u/g/e/ranger-10-havells-original-imaf9vfb6ny9gn6k.jpeg?q=70",
    url: "https://www.flipkart.com/havells-ranger-10-torch/p/itmf9pggyshydqzz?pid=TOHF9ZPHNXEPRUGE&lid=LSTTOHF9ZPHNXEPRUGEATKUMH&marketplace=FLIPKART&store=jhg&srno=b_2_48&otracker=browse&fm=organic&iid=en_aZYzN1AOq9SGkez7%2FbHgf9dOC956eFBqvlHjL4%2BUtFeSKs3SOJl%2BXXBX6H24XrN1eg8Pt2U8RaXWpxiWrgw%2F%2FQ%3D%3D&ppt=None&ppn=None&ssid=egq437vhxs0000001625990285210",
  },
  {
    id: 49,
    title: "EPONYMOUS Romantic Sky Star Master Night Light Projecto...",
    rating: "4",
    price: "389",
    image:
      "https://rukminim1.flixcart.com/image/612/612/kfzq8i80/table-lamp/h/h/3/color-changing-rotating-projection-star-master-lamp-night-lamp-original-imafwc5zmcdkyh9w.jpeg?q=70",
    url: "https://www.flipkart.com/eponymous-romantic-sky-star-master-night-light-projector-children-kids-baby-sleep-lighting-usb-lamp-led-projection/p/itm94fd47f66317b?pid=TLPFWCRXTU2D8EGZ&lid=LSTTLPFWCRXTU2D8EGZERDJ7J&marketplace=FLIPKART&store=jhg&srno=b_2_49&otracker=browse&fm=organic&iid=4bb4a6fc-3191-44d5-b9d0-5795e23eeaa2.TLPFWCRXTU2D8EGZ.SEARCH&ppt=None&ppn=None&ssid=egq437vhxs0000001625990285210",
  },
  {
    id: 50,
    title: "WIPRO 3 W Standard B22 LED Bulb",
    rating: "4.2",
    price: "191",
    image:
      "https://rukminim1.flixcart.com/image/612/612/kqb8pzk0/bulb/w/s/k/2-5-w-led-6500k-cool-day-light-bulb-pack-of-2-wipro-original-imag4ctnzt6rw86v.jpeg?q=70",
    url: "https://www.flipkart.com/wipro-3-w-standard-b22-led-bulb/p/itm66be1e895f769?pid=BLBEH733ZYCVKSRF&lid=LSTBLBEH733ZYCVKSRFYD1DA6&marketplace=FLIPKART&store=jhg&srno=b_2_50&otracker=browse&fm=organic&iid=4bb4a6fc-3191-44d5-b9d0-5795e23eeaa2.BLBEH733ZYCVKSRF.SEARCH&ppt=None&ppn=None&ssid=egq437vhxs0000001625990285210",
  },
  {
    id: 51,
    title: "PHILIPS 12 W Standard B22 Inverter Bulb",
    rating: "4.2",
    price: "999",
    image:
      "https://rukminim1.flixcart.com/image/612/612/kbjox3k0/emergency-light/t/f/b/inverter-bulb-12-watt-rechargeable-emergency-led-bulb-for-home-original-imafsv5xcwsfmtrx.jpeg?q=70",
    url: "https://www.flipkart.com/philips-12-w-standard-b22-inverter-bulb/p/itm8bcc3dd84be45?pid=BLBFPXPQERY5KHKG&lid=LSTBLBFPXPQERY5KHKGYFG59W&marketplace=FLIPKART&store=jhg&srno=b_2_51&otracker=browse&fm=organic&iid=4bb4a6fc-3191-44d5-b9d0-5795e23eeaa2.BLBFPXPQERY5KHKG.SEARCH&ppt=None&ppn=None&ssid=egq437vhxs0000001625990285210",
  },
  {
    id: 52,
    title: "HALONIX 15 W, 8 W, 0.5 W Round B22 LED Bulb",
    rating: "4.3",
    price: "204",
    image:
      "https://rukminim1.flixcart.com/image/612/612/k19lvgw0/bulb/t/w/u/all-rounder-15w-b22-pack-1-halonix-original-imafknh6ugvmw5wd.jpeg?q=70",
    url: "https://www.flipkart.com/halonix-15-w-8-0-5-w-round-b22-led-bulb/p/itm5d24e5f511575?pid=BLBFKT38FGYZZTWU&lid=LSTBLBFKT38FGYZZTWUCTGYTT&marketplace=FLIPKART&store=jhg&srno=b_2_52&otracker=browse&fm=organic&iid=en_aZYzN1AOq9SGkez7%2FbHgf9dOC956eFBqvlHjL4%2BUtFdJDsHRHF9We0UR6nZ%2BfO%2Bid8LHc9PAJ5tMl%2BvAocZbbA%3D%3D&ppt=None&ppn=None&ssid=egq437vhxs0000001625990285210",
  },
  {
    id: 53,
    title: "PDhingra PDh-New latest long & wide range flashligh hig...",
    rating: "4",
    price: "339",
    image:
      "https://rukminim1.flixcart.com/image/612/612/kb3z2q80/torch/t/6/a/pdh-new-latest-long-wide-range-flashligh-high-power-rechargeable-original-imafsjg6xphkyzyr.jpeg?q=70",
    url: "https://www.flipkart.com/pdhingra-pdh-new-latest-long-wide-range-flashligh-high-power-rechargeable-torch-latest-model-2020-light-emergency-light-industrial-security-purpose-super-metal-torch-flashlight-black-rechargeable-by-piyush-dhingra/p/itm97860b216a1f4?pid=TOHFSJC8G8YEKT6A&lid=LSTTOHFSJC8G8YEKT6AUBVPVQ&marketplace=FLIPKART&store=jhg&srno=b_2_53&otracker=browse&fm=organic&iid=4bb4a6fc-3191-44d5-b9d0-5795e23eeaa2.TOHFSJC8G8YEKT6A.SEARCH&ppt=None&ppn=None&ssid=egq437vhxs0000001625990285210",
  },
  {
    id: 54,
    title: "EVEREADY 10 W Standard B22 LED Bulb",
    rating: "4.3",
    price: "369",
    image:
      "https://rukminim1.flixcart.com/image/612/612/kkmwr680/bulb/8/7/l/10w-eveready-original-imafzxkg9jawc7vr.jpeg?q=70",
    url: "https://www.flipkart.com/eveready-10-w-standard-b22-led-bulb/p/itmd21f9eef8e012?pid=BLBF59BDB8NVG6UY&lid=LSTBLBF59BDB8NVG6UY9VGTC2&marketplace=FLIPKART&store=jhg&srno=b_2_54&otracker=browse&fm=organic&iid=4bb4a6fc-3191-44d5-b9d0-5795e23eeaa2.BLBF59BDB8NVG6UY.SEARCH&ppt=None&ppn=None&ssid=egq437vhxs0000001625990285210",
  },
  {
    id: 55,
    title: "Copper String LED light 10 MTR 100 LED USB Operated Dec...",
    rating: "4.3",
    price: "249",
    image:
      "https://rukminim1.flixcart.com/image/612/612/jhgl5e80/rice-light/7/g/d/1-usb10wwy-copper-string-led-light-10-mtr-100-led-usb-operated-original-imaf4z5g9rgww6hs.jpeg?q=70",
    url: "https://www.flipkart.com/copper-string-led-light-10-mtr-100-usb-operated-decorative-lights-393-7-inch-yellow-rice/p/itm34c4572e61f94?pid=RCLF3BCGEHVNU7GD&lid=LSTRCLF3BCGEHVNU7GD4HF1M8&marketplace=FLIPKART&store=jhg&srno=b_2_55&otracker=browse&fm=organic&iid=4bb4a6fc-3191-44d5-b9d0-5795e23eeaa2.RCLF3BCGEHVNU7GD.SEARCH&ppt=None&ppn=None&ssid=egq437vhxs0000001625990285210",
  },
  {
    id: 56,
    title: "iGear Business Desk Lamp - Three Brightness LED Lamp wi...",
    rating: "4.5",
    price: "1,990",
    image:
      "https://rukminim1.flixcart.com/image/612/612/khdqnbk0/table-lamp/4/p/g/business-desk-lamp-three-brightness-led-lamp-with-led-backlit-original-imafxen6krpxfwab.jpeg?q=70",
    url: "https://www.flipkart.com/igear-business-desk-lamp-three-brightness-led-backlit-display-display-time-day-date-temperature-touch-controlled-power-button-alarm-snooze-function-study/p/itm33b2654537cca?pid=TLPFW3YURPEDF4PG&lid=LSTTLPFW3YURPEDF4PGJ3S630&marketplace=FLIPKART&store=jhg&srno=b_2_56&otracker=browse&fm=organic&iid=en_aZYzN1AOq9SGkez7%2FbHgf9dOC956eFBqvlHjL4%2BUtFe1EjZGOMmxiQQ02yk0FiohKDsLcOVsfsHEx5Yni1vtkg%3D%3D&ppt=None&ppn=None&ssid=egq437vhxs0000001625990285210",
  },
  {
    id: 57,
    title: "COMBO 4 quantity bottle cork led string lights 2 meter ...",
    rating: "4.1",
    price: "279",
    image:
      "https://rukminim1.flixcart.com/image/612/612/jsge4cw0/rice-light/h/2/c/4-4bc2ww-combo-4-quantity-bottle-cork-led-string-lights-2-meter-original-imafdzygyvphwasm.jpeg?q=70",
    url: "https://www.flipkart.com/combo-4-quantity-bottle-cork-led-string-lights-2-meter-20-warm-white-78-inch-rice/p/itm43ae400d26c2b?pid=RCLFEYGJWGAYMH2C&lid=LSTRCLFEYGJWGAYMH2CJUIUUD&marketplace=FLIPKART&store=jhg&srno=b_2_57&otracker=browse&fm=organic&iid=4bb4a6fc-3191-44d5-b9d0-5795e23eeaa2.RCLFEYGJWGAYMH2C.SEARCH&ppt=None&ppn=None&ssid=egq437vhxs0000001625990285210",
  },
  {
    id: 58,
    title: "PHILIPS 8.5 W Round B22 LED Bulb",
    rating: "4.3",
    price: "199",
    image:
      "https://rukminim1.flixcart.com/image/612/612/km6mxe80/bulb/7/8/w/8-5w-b22-led-bulb-white-pack-of-2-philips-original-imagf5aabrwq55g9.jpeg?q=70",
    url: "https://www.flipkart.com/philips-8-5-w-round-b22-led-bulb/p/itma47601646e234?pid=BLBEZ6FFWZZZ8PXJ&lid=LSTBLBEZ6FFWZZZ8PXJGETXGV&marketplace=FLIPKART&store=jhg&srno=b_2_58&otracker=browse&fm=organic&iid=4bb4a6fc-3191-44d5-b9d0-5795e23eeaa2.BLBEZ6FFWZZZ8PXJ.SEARCH&ppt=None&ppn=None&ssid=egq437vhxs0000001625990285210",
  },
  {
    id: 59,
    title: "Syska SSK-RDL-R-15W-6500K Flush Mount Ceiling Lamp",
    rating: "4.2",
    price: "409",
    image:
      "https://rukminim1.flixcart.com/image/612/612/k69ncsw0/ceiling-lamp/3/h/b/ssk-rdl-r-15w-6500k-syska-original-imafmkgqh9xtnurh.jpeg?q=70",
    url: "https://www.flipkart.com/syska-ssk-rdl-r-15w-6500k-flush-mount-ceiling-lamp/p/itm6f0b0ba55dc80?pid=CILFJ6B76Z2ME3HB&lid=LSTCILFJ6B76Z2ME3HBPYOW0R&marketplace=FLIPKART&store=jhg&srno=b_2_59&otracker=browse&fm=organic&iid=4bb4a6fc-3191-44d5-b9d0-5795e23eeaa2.CILFJ6B76Z2ME3HB.SEARCH&ppt=None&ppn=None&ssid=egq437vhxs0000001625990285210",
  },
  {
    id: 60,
    title: "Royal piece Gate Light Outdoor Lamp",
    rating: "0",
    price: "1,707",
    image:
      "https://rukminim1.flixcart.com/image/612/612/kp5sya80/outdoor-lamp/g/n/r/gl-02-royal-piece-original-imag3fsfm4ahmtxj.jpeg?q=70",
    url: "https://www.flipkart.com/royal-piece-gate-light-outdoor-lamp/p/itme9464a4f66497?pid=OTLG3FSFFNCAYJQJ&lid=LSTOTLG3FSFFNCAYJQJ26U6XY&marketplace=FLIPKART&store=jhg&srno=b_2_60&otracker=browse&fm=organic&iid=en_aZYzN1AOq9SGkez7%2FbHgf9dOC956eFBqvlHjL4%2BUtFdvXRexBODRwKHS%2B7PHdypXT40gk3XQXaYLCQXtDk8tPg%3D%3D&ppt=None&ppn=None&ssid=egq437vhxs0000001625990285210",
  },
  {
    id: 61,
    title: "WIPRO NE9001 Bulb Emergency Light",
    rating: "3.9",
    price: "349",
    image:
      "https://rukminim1.flixcart.com/image/612/612/k3uhhu80/bulb/w/k/z/inverterbulb-1-wipro-original-imafgmfcvzvtvfun.jpeg?q=70",
    url: "https://www.flipkart.com/wipro-ne9001-bulb-emergency-light/p/itm5423e079b06de?pid=BLBFGMFME5ESCEF5&lid=LSTBLBFGMFME5ESCEF5YIWHIE&marketplace=FLIPKART&store=jhg&srno=b_2_61&otracker=browse&fm=organic&iid=4bb4a6fc-3191-44d5-b9d0-5795e23eeaa2.BLBFGMFME5ESCEF5.SEARCH&ppt=None&ppn=None&ssid=egq437vhxs0000001625990285210",
  },
  {
    id: 62,
    title: "Leo dp-9110 Torch",
    rating: "4",
    price: "284",
    image:
      "https://rukminim1.flixcart.com/image/612/612/j0sg7m80/torch/x/m/x/dp-9110-leo-original-imaesg4s8bxygdgh.jpeg?q=70",
    url: "https://www.flipkart.com/leo-dp-9110-torch/p/itmeshugshgyu5p7?pid=TOHESHUGF3MP8XMX&lid=LSTTOHESHUGF3MP8XMXI33SND&marketplace=FLIPKART&store=jhg&srno=b_2_62&otracker=browse&fm=organic&iid=4bb4a6fc-3191-44d5-b9d0-5795e23eeaa2.TOHESHUGF3MP8XMX.SEARCH&ppt=None&ppn=None&ssid=egq437vhxs0000001625990285210",
  },
  {
    id: 63,
    title: "SURYA 15 W Globe B22 LED Bulb",
    rating: "4.3",
    price: "244",
    image:
      "https://rukminim1.flixcart.com/image/612/612/k6fd47k0/bulb/n/h/b/15w-pk1-surya-original-imafzwbdrfw6wdzr.jpeg?q=70",
    url: "https://www.flipkart.com/surya-15-w-globe-b22-led-bulb/p/itm3de46ecaeaca5?pid=BLBFZW6KHSMKKNHB&lid=LSTBLBFZW6KHSMKKNHBMS1WCM&marketplace=FLIPKART&store=jhg&srno=b_2_63&otracker=browse&fm=organic&iid=4bb4a6fc-3191-44d5-b9d0-5795e23eeaa2.BLBFZW6KHSMKKNHB.SEARCH&ppt=None&ppn=None&ssid=egq437vhxs0000001625990285210",
  },
  {
    id: 64,
    title: "Pick Ur Needs Study Table Lamp Touch On/Off Switch LED ...",
    rating: "4.4",
    price: "649",
    image:
      "https://rukminim1.flixcart.com/image/612/612/kl2mljk0/table-lamp/t/c/l/desk-light-with-3-shades-touch-control-light-and-mobile-holder-original-imagy9bpyudpq7g8.jpeg?q=70",
    url: "https://www.flipkart.com/pick-ur-needs-study-table-lamp-touch-on-off-switch-led-desk-pen-mobile-holder-5-1/p/itmb0c185b058ce0?pid=TLPGY9BYVMRTYBWG&lid=LSTTLPGY9BYVMRTYBWGNJAF6D&marketplace=FLIPKART&store=jhg&srno=b_2_64&otracker=browse&fm=organic&iid=en_aZYzN1AOq9SGkez7%2FbHgf9dOC956eFBqvlHjL4%2BUtFeBGVLWbAGmDJZhiJGzQo%2F%2B98ZFGzG7tH4yShqbLzGknw%3D%3D&ppt=None&ppn=None&ssid=egq437vhxs0000001625990285210",
  },
  {
    id: 65,
    title: "ANSHKIT 78 inch Yellow Rice Lights",
    rating: "4",
    price: "189",
    image:
      "https://rukminim1.flixcart.com/image/612/612/kjhgzgw0-0/rice-light/r/g/e/clip-1-10-led-clip-light-battery-operated-10-photos-string-original-imafzfgyeznhyxdu.jpeg?q=70",
    url: "https://www.flipkart.com/anshkit-78-inch-yellow-rice-lights/p/itm46b188ab6509e?pid=RCLFZFGYETKMXFKQ&lid=LSTRCLFZFGYETKMXFKQG5KXQO&marketplace=FLIPKART&store=jhg&srno=b_2_65&otracker=browse&fm=organic&iid=4bb4a6fc-3191-44d5-b9d0-5795e23eeaa2.RCLFZFGYETKMXFKQ.SEARCH&ppt=None&ppn=None&ssid=egq437vhxs0000001625990285210",
  },
  {
    id: 66,
    title: "Pick Ur Needs Rocklight High Quality 60 High-Bright LED...",
    rating: "4",
    price: "499",
    image:
      "https://rukminim1.flixcart.com/image/612/612/kb5eikw0/emergency-light/v/d/h/rocklight-high-quality-60-high-bright-led-light-with-android-original-imafsjjhsvyzefwq.jpeg?q=70",
    url: "https://www.flipkart.com/pick-ur-needs-rocklight-high-quality-60-high-bright-led-light-android-charging-support-rechargeable-emergency-lantern/p/itm9eb5ca86a2547?pid=EMLFSJHQTR3KAVDH&lid=LSTEMLFSJHQTR3KAVDHVOJL0X&marketplace=FLIPKART&store=jhg&srno=b_2_66&otracker=browse&fm=organic&iid=4bb4a6fc-3191-44d5-b9d0-5795e23eeaa2.EMLFSJHQTR3KAVDH.SEARCH&ppt=None&ppn=None&ssid=egq437vhxs0000001625990285210",
  },
  {
    id: 67,
    title: "PHILIPS 12 W Standard B22 Inverter Bulb",
    rating: "4.2",
    price: "539",
    image:
      "https://rukminim1.flixcart.com/image/612/612/kbi9h8w0/emergency-light/r/8/d/inverter-bulb-12-watt-rechargeable-emergency-led-bulb-for-home-original-imafsubckzjjzsfy.jpeg?q=70",
    url: "https://www.flipkart.com/philips-12-w-standard-b22-inverter-bulb/p/itmb00e561130fe3?pid=BLBFPXPQPYKSUAMT&lid=LSTBLBFPXPQPYKSUAMTDPVVGV&marketplace=FLIPKART&store=jhg&srno=b_2_67&otracker=browse&fm=organic&iid=4bb4a6fc-3191-44d5-b9d0-5795e23eeaa2.BLBFPXPQPYKSUAMT.SEARCH&ppt=None&ppn=None&ssid=egq437vhxs0000001625990285210",
  },
  {
    id: 68,
    title: "HALONIX 40 W Standard B22 LED Bulb",
    rating: "4.4",
    price: "485",
    image:
      "https://rukminim1.flixcart.com/image/612/612/jzn0tjk0/bulb/w/h/w/led-bulb-astron-jumbo-40w-b22-cw-halonix-original-imafjmyahhecvkyr.jpeg?q=70",
    url: "https://www.flipkart.com/halonix-40-w-standard-b22-led-bulb/p/itmab155ead9fa92?pid=BLBFGMG2BKHX4WHW&lid=LSTBLBFGMG2BKHX4WHWJFWOMT&marketplace=FLIPKART&store=jhg&srno=b_2_68&otracker=browse&fm=organic&iid=en_aZYzN1AOq9SGkez7%2FbHgf9dOC956eFBqvlHjL4%2BUtFc79AQ45I1D%2B%2BmminNPN1%2BE5%2FSFJWGfllMMTjUtwA1xYA%3D%3D&ppt=None&ppn=None&ssid=egq437vhxs0000001625990285210",
  },
  {
    id: 69,
    title: "DPM JH-5800T Lantern Lantern Emergency Light",
    rating: "3.7",
    price: "340",
    image:
      "https://rukminim1.flixcart.com/image/612/612/k5si2kw0/emergency-light/t/d/z/led-solar-emergency-light-lantern-kavid-original-imaezn6hyue5aejj.jpeg?q=70",
    url: "https://www.flipkart.com/dpm-jh-5800t-lantern-emergency-light/p/itmd311ac6bc85da?pid=EMLFUWXZ4KGGZHNQ&lid=LSTEMLFUWXZ4KGGZHNQ0SO2SA&marketplace=FLIPKART&store=jhg&srno=b_2_69&otracker=browse&fm=organic&iid=4bb4a6fc-3191-44d5-b9d0-5795e23eeaa2.EMLFUWXZ4KGGZHNQ.SEARCH&ppt=None&ppn=None&ssid=egq437vhxs0000001625990285210",
  },
  {
    id: 70,
    title: "Esscage Black Table lamp for kids and students Study La...",
    rating: "4",
    price: "279",
    image:
      "https://rukminim1.flixcart.com/image/612/612/ki4w0i80-0/table-lamp/c/x/l/black-table-lamp-for-kids-and-students-black-table-lamp-esscage-original-imafxzszybwy4hyh.jpeg?q=70",
    url: "https://www.flipkart.com/esscage-black-table-lamp-kids-students-study/p/itma807f90f08362?pid=TLPFXZSZPCHJMDNS&lid=LSTTLPFXZSZPCHJMDNS4S1GYH&marketplace=FLIPKART&store=jhg&srno=b_2_70&otracker=browse&fm=organic&iid=4bb4a6fc-3191-44d5-b9d0-5795e23eeaa2.TLPFXZSZPCHJMDNS.SEARCH&ppt=None&ppn=None&ssid=egq437vhxs0000001625990285210",
  },
  {
    id: 71,
    title: "PHILIPS 40 W Round B22 LED Bulb",
    rating: "4.3",
    price: "635",
    image:
      "https://rukminim1.flixcart.com/image/612/612/kmds4nk0/bulb/t/4/j/40-watt-b22-cdl-pack-of-1-old-philips-original-imagfamrbgzze8se.jpeg?q=70",
    url: "https://www.flipkart.com/philips-40-w-round-b22-led-bulb/p/itmf8c1159d124e0?pid=BLBEZYY7UEAYWG74&lid=LSTBLBEZYY7UEAYWG74RWBTAS&marketplace=FLIPKART&store=jhg&srno=b_2_71&otracker=browse&fm=organic&iid=4bb4a6fc-3191-44d5-b9d0-5795e23eeaa2.BLBEZYY7UEAYWG74.SEARCH&ppt=None&ppn=None&ssid=egq437vhxs0000001625990285210",
  },
  {
    id: 72,
    title: "HAVELLS Ranger 30 Torch",
    rating: "4.2",
    price: "339",
    image:
      "https://rukminim1.flixcart.com/image/612/612/jbb3wcw0/torch/2/z/h/ranger-30-havells-original-imafynzxghf6zhek.jpeg?q=70",
    url: "https://www.flipkart.com/havells-ranger-30-torch/p/itmfyzg5m5dqggph?pid=TOHFYZFRCKFMC2ZH&lid=LSTTOHFYZFRCKFMC2ZHIRN8TB&marketplace=FLIPKART&store=jhg&srno=b_2_72&otracker=browse&fm=organic&iid=en_aZYzN1AOq9SGkez7%2FbHgf9dOC956eFBqvlHjL4%2BUtFcZI3v47AE6nXPiHTEtQPEDS5qbrdg%2FNtFKbWgu4S8Few%3D%3D&ppt=None&ppn=None&ssid=egq437vhxs0000001625990285210",
  },
  {
    id: 73,
    title: "EPONYMOUS Mini Rechargeable Torchlight Super Biright Po...",
    rating: "4.3",
    price: "249",
    image:
      "https://rukminim1.flixcart.com/image/612/612/kpk3csw0/emergency-light/s/0/k/zoomable-flashlight-torch-lamp-waterproof-built-in-battery-light-original-imag3rkczpngyhxx.jpeg?q=70",
    url: "https://www.flipkart.com/eponymous-mini-rechargeable-torchlight-super-biright-pocket-zoom-cob-usb-charging-torch-led-flashlight-water-proof/p/itmda40ff5015d2b?pid=TOHG3US8Y7HE85EH&lid=LSTTOHG3US8Y7HE85EHGZSX1X&marketplace=FLIPKART&store=jhg&srno=b_2_73&otracker=browse&fm=organic&iid=4bb4a6fc-3191-44d5-b9d0-5795e23eeaa2.TOHG3US8Y7HE85EH.SEARCH&ppt=None&ppn=None&ssid=egq437vhxs0000001625990285210",
  },
  {
    id: 74,
    title: "PHILIPS 12 W T-Bulb B22 LED Bulb",
    rating: "4.4",
    price: "475",
    image:
      "https://rukminim1.flixcart.com/image/612/612/jusp3m80/bulb/k/g/a/f6501-philips-original-imaffttapfhqgxzh.jpeg?q=70",
    url: "https://www.flipkart.com/philips-12-w-t-bulb-b22-led-bulb/p/itm7e2f5e22cdb21?pid=BLBFFHEG8ZKYNKGA&lid=LSTBLBFFHEG8ZKYNKGA43HGKA&marketplace=FLIPKART&store=jhg&srno=b_2_74&otracker=browse&fm=organic&iid=4bb4a6fc-3191-44d5-b9d0-5795e23eeaa2.BLBFFHEG8ZKYNKGA.SEARCH&ppt=None&ppn=None&ssid=egq437vhxs0000001625990285210",
  },
  {
    id: 75,
    title: "HALONIX PRIME 12W Inverter Bulb Emergency Light",
    rating: "4.1",
    price: "489",
    image:
      "https://rukminim1.flixcart.com/image/612/612/k1qr5ow0/emergency-light/h/x/z/prime-12w-inverter-halonix-original-imafh96j8xg7zkcv.jpeg?q=70",
    url: "https://www.flipkart.com/halonix-prime-12w-inverter-bulb-emergency-light/p/itm384b1b817fcce?pid=EMLFKT3HEVPJAHXZ&lid=LSTEMLFKT3HEVPJAHXZHO36EY&marketplace=FLIPKART&store=jhg&srno=b_2_75&otracker=browse&fm=organic&iid=4bb4a6fc-3191-44d5-b9d0-5795e23eeaa2.EMLFKT3HEVPJAHXZ.SEARCH&ppt=None&ppn=None&ssid=egq437vhxs0000001625990285210",
  },
  {
    id: 76,
    title: "HAVELLS LHEXAUPGBNNK001 Torch",
    rating: "3.9",
    price: "370",
    image:
      "https://rukminim1.flixcart.com/image/612/612/km57hjk0/torch/1/y/h/lhexaupgbnnk001-havells-original-imagf3wgz7c3ctqb.jpeg?q=70",
    url: "https://www.flipkart.com/havells-lhexaupgbnnk001-torch/p/itm21b6094b513b2?pid=TOHGF3WJ9EB3RTGT&lid=LSTTOHGF3WJ9EB3RTGTL04OAD&marketplace=FLIPKART&store=jhg&srno=b_2_76&otracker=browse&fm=organic&iid=en_aZYzN1AOq9SGkez7%2FbHgf9dOC956eFBqvlHjL4%2BUtFdGR4xBMsjMf3IbBMhJuky9Hb0ETwPgUixJLYp9PFPysg%3D%3D&ppt=None&ppn=None&ssid=egq437vhxs0000001625990285210",
  },
  {
    id: 77,
    title: "HALONIX 10 W Round B22 LED Bulb",
    rating: "4.2",
    price: "214",
    image:
      "https://rukminim1.flixcart.com/image/612/612/k547l3k0/bulb/w/g/j/led-bulb-astron-plus-10w-b22-cw-pack-of-2-halonix-original-imafnurkavpxytyx.jpeg?q=70",
    url: "https://www.flipkart.com/halonix-10-w-round-b22-led-bulb/p/itm86a77d8888413?pid=BLBFNUAPEJRDWWGJ&lid=LSTBLBFNUAPEJRDWWGJHZT9WO&marketplace=FLIPKART&store=jhg&srno=b_2_77&otracker=browse&fm=organic&iid=4bb4a6fc-3191-44d5-b9d0-5795e23eeaa2.BLBFNUAPEJRDWWGJ.SEARCH&ppt=None&ppn=None&ssid=egq437vhxs0000001625990285210",
  },
  {
    id: 78,
    title: "UKANI 3D Illusion LED Light Night Lights for 7 Colors L...",
    rating: "4",
    price: "199",
    image:
      "https://rukminim1.flixcart.com/image/612/612/kh2b4i80-0/table-lamp/c/l/s/3d-illusion-led-light-night-lights-for-7-colors-led-changing-original-imafx5u4tz3cvhmz.jpeg?q=70",
    url: "https://www.flipkart.com/ukani-3d-illusion-led-light-night-lights-7-colors-changing-lighting-bedroom-decoration-decorative-gifts-boys-girls-kids-baby-friends-love-you-forever-lamp/p/itm9b4fdd9945210?pid=TLPFXB8MFJQ9QVAC&lid=LSTTLPFXB8MFJQ9QVACHJNGG1&marketplace=FLIPKART&store=jhg&srno=b_2_78&otracker=browse&fm=organic&iid=4bb4a6fc-3191-44d5-b9d0-5795e23eeaa2.TLPFXB8MFJQ9QVAC.SEARCH&ppt=None&ppn=None&ssid=egq437vhxs0000001625990285210",
  },
  {
    id: 79,
    title: "Eveready 9W LED Bulb Pack of 4 with Free 8 Batteries",
    rating: "4.3",
    price: "379",
    image:
      "https://rukminim1.flixcart.com/image/612/612/kkmwr680/bulb/l/x/c/9w-led-bulb-pack-of-4-u-promo-eveready-original-imafzxkgdk54gvy4.jpeg?q=70",
    url: "https://www.flipkart.com/eveready-9w-led-bulb-pack-4-free-8-batteries/p/itm86f7caea751e0?pid=BLBEJXZ9ZHMHYTQK&lid=LSTBLBEJXZ9ZHMHYTQK2PVNKE&marketplace=FLIPKART&store=jhg&srno=b_2_79&otracker=browse&fm=organic&iid=4bb4a6fc-3191-44d5-b9d0-5795e23eeaa2.BLBEJXZ9ZHMHYTQK.SEARCH&ppt=None&ppn=None&ssid=egq437vhxs0000001625990285210",
  },
  {
    id: 80,
    title: "NOGAIYA Pendant Wall Lamp",
    rating: "4.1",
    price: "381",
    image:
      "https://rukminim1.flixcart.com/image/612/612/j9lnyq80/wall-lamp/v/c/3/ssk161-aadya-original-imaezbhfzz2xukmh.jpeg?q=70",
    url: "https://www.flipkart.com/nogaiya-pendant-wall-lamp/p/itmezbgj2hqayg34?pid=WLMEZB5JAYHDHKBS&lid=LSTWLMEZB5JAYHDHKBSM387XR&marketplace=FLIPKART&store=jhg&srno=b_2_80&otracker=browse&fm=organic&iid=en_aZYzN1AOq9SGkez7%2FbHgf9dOC956eFBqvlHjL4%2BUtFcjjtvKeQaWsjFVUsXe1vLBB4HuJUNvPgEk4wGQdkGisA%3D%3D&ppt=None&ppn=None&ssid=egq437vhxs0000001625990285210",
  },
];
