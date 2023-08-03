const abi = [
    {
      inputs: [
        {
          internalType: 'uint32',
          name: 'serial',
          type: 'uint32',
        },
      ],
      name: 'redeem',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint32',
          name: '',
          type: 'uint32',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'bytes',
          name: '',
          type: 'bytes',
        },
      ],
      name: 'withdrawBonus',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'enum StakeManager.StakeType',
          name: '',
          type: 'uint8',
        },
      ],
      name: 'withdrawInterest',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  abi2 = [
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'transfer',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ];
