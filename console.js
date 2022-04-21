function toNum(v) {
  return BigInt(v * 10 ** 18).toString();
}

function fromNum(v) {
  return (BigInt(v) / BigInt(10 ** 18)).toString();
}

async function balanceOf(s, a) {
  const b = await s.balanceOf(a);
  return fromNum(b);
}


module.exports = {
  toNum,
  fromNum,
  balanceOf,
  nullAddress: "0x0000000000000000000000000000000000000000"
};
