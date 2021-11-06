function q(date) {
  var saal = date.substring(0, 2);
  var maah = date.substring(2, 4);
  var rooz = date.substring(4);

  console.log(`saal: ${saal}`);
  console.log(`maah: ${maah}`);
  console.log(`rooz: ${rooz}`);
}

q("710612");
q("711101");
q("001222");
