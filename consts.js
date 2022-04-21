module.exports.TEST_TOKENS = {
  USDT: "0x9c960a5df8df917d6aF153b717312b225A1d8f55",
  DAO: "0xEFE57e02FFaF32f1C47F614d6f89d0e7a903cd43",
  PNL: "0x4573353c9a6e0966B387E538585556DDFE4AD874",
  AVAX: "0x81CBAd2EB7C16e3aFe3C211e450EDef73Ea85a05",
  JOE: "0x2F3a76a02447c796067D5A49050c0ddF91834dc4",
  XAVA: "0x3fEb34b2E71FA49C57E27dD2F769092307f73a71",
  QI: "0x6Cf88D9317d59Ab076cB7F69A3180eCd99477ea5",
  PTP: "0x1eCD9BB0f5a08929bb2D7b8374Cb50450c1932DC",
  PNG: "0xd51957d5eA4F8EB8aD610Db1030aEFf581AF7Af7",
  ETH: "0x94a348e55cE9476e1C08FfD3798791c8144B7c1B",
  BNB: "0x65297b238D5Ca5995eF6fC0aAf844bc664466878",
  Near: "0xf435a29407F4B726b929A6c37eEf6543d5bfa557",
  Chromia: "0xb6aC87C4066CAE7498449b1921cd5B6379B900e6",
  MATIC: "0x546cCD057EA39949493b92C14D8e9748bB43d845",
}

module.exports.UNISWAP = {
  address: {
    test: "0xB7926C0430Afb07AA7DEfDE6DA862aE0Bde767bc",
    router: "0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3",
  },
  weth: {
    test: "0xae13d989dac2f0debff460ac112a837c89baa7cd"
  },
  pools: {
    test: [
      "0xADeA50A82BA1CC4062653ed591FFAf08278bF635",
      "0x88fBf73EdFC619E2985701C6cC65767AFd0ca12C",
      "0x78D9F9aB08Fa4A119454E9d5FC8704A58D971bBC", // USDT/AVAX
      "0x8cDb5E1C314289107b00542c0b95C3Ba4205694F", //USDT/JOE
      "0x97bF69264Ed7412D85b361194a1c0506121d27D2", //USDT/XAVA
      "0x69B5aCCb870146d7c6ED9cC8830Dec6C28fd62D4", //USDT/QI
      "0xb241B2aBa05deff6b3B6c6b768DAFBE6a44F9CC3", //USDT/PTP
      "0x1487aFcc0E7F6B87994E146d64EBB064a839de8C", //USDT/PNG

      "0xd16b9115f55D92eC6Cf4207fe90d1FEA84d3Cc1e", //USDT/ETH
      "0x682240D10F8539Ac52D569438214e95BA2a3104e", //USDT/BNB
      "0x7d92E91c69677Ffd741442AB57FF29e3A6cD252B", //USDT/Near
      "0xC7451E35585459176261b092Bd835983683D1576", //USDT/Chromia
      "0x2a94814E4363D332B3A962f2D94DaF74969591dC", //USDT/MATIC
    ]
  }
}

module.exports.NULL_ADDRESS = "0x0000000000000000000000000000000000000000";