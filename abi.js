abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'parent',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint32',
        name: 'uid',
        type: 'uint32',
      },
    ],
    name: 'Bind',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'orderSerial',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'bonusAmount',
        type: 'uint256',
      },
    ],
    name: 'BonusWithdraw',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint8',
        name: 'version',
        type: 'uint8',
      },
    ],
    name: 'Initialized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'enum StakeManager.StakeType',
        name: 'stakeType',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'interestAmount',
        type: 'uint256',
      },
    ],
    name: 'InterestWithdraw',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint32',
        name: 'serial',
        type: 'uint32',
      },
      {
        indexed: false,
        internalType: 'enum StakeManager.StakeType',
        name: 'stakeType',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'Redeem',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'enum StakeManager.StakeType',
        name: 'stakeType',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'interestRate',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint32',
        name: 'interval',
        type: 'uint32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'stakeAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'interest',
        type: 'uint256',
      },
    ],
    name: 'Settle',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint32',
        name: 'serial',
        type: 'uint32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'receiveAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'enum StakeManager.StakeType',
        name: 'stakeType',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'Stake',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
    ],
    name: 'addReceiveAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'parent',
        type: 'address',
      },
    ],
    name: 'bind',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'bindTotal',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'bonusTotalWithdraw',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'pair',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount0',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_amount1',
        type: 'uint256',
      },
    ],
    name: 'getPairAmount',
    outputs: [
      {
        internalType: 'uint256',
        name: 'amount0',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amount1',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'pair',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'usdtAmount',
        type: 'uint256',
      },
    ],
    name: 'getPairTokenAmount',
    outputs: [
      {
        internalType: 'uint256',
        name: 'tokenAmount',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'pair',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'usdt',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenAmount',
        type: 'uint256',
      },
    ],
    name: 'getPairUSDTAmount',
    outputs: [
      {
        internalType: 'uint256',
        name: 'usdtAmount',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'enum StakeManager.StakeType',
        name: 'stakeType',
        type: 'uint8',
      },
    ],
    name: 'getStakeInfo',
    outputs: [
      {
        components: [
          {
            internalType: 'enum StakeManager.StakeType',
            name: 'stakeType',
            type: 'uint8',
          },
          {
            internalType: 'uint256',
            name: 'stakeAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'interestTotal',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'interestRemain',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'quotaRemain',
            type: 'uint256',
          },
        ],
        internalType: 'struct StakeManager.MemberStakeInfo',
        name: 'memberStakeInfo',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'enum StakeManager.StakeType[]',
        name: 'stakeTypes',
        type: 'uint8[]',
      },
    ],
    name: 'getStakeInfos',
    outputs: [
      {
        components: [
          {
            internalType: 'enum StakeManager.StakeType',
            name: 'stakeType',
            type: 'uint8',
          },
          {
            internalType: 'uint256',
            name: 'stakeAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'interestTotal',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'interestRemain',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'quotaRemain',
            type: 'uint256',
          },
        ],
        internalType: 'struct StakeManager.MemberStakeInfo[]',
        name: 'memberStakeInfos',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getStakeStat',
    outputs: [
      {
        internalType: 'uint32',
        name: 'totalOrder',
        type: 'uint32',
      },
      {
        internalType: 'uint256',
        name: 'totalAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'totalInterest',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'totalBonus',
        type: 'uint256',
      },
      {
        internalType: 'uint32',
        name: 'totalOrderRemain',
        type: 'uint32',
      },
      {
        internalType: 'uint256',
        name: 'totalAmountRemain',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_usdt',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_signAccount',
        type: 'address',
      },
      {
        internalType: 'address[]',
        name: '_receiveAddresses',
        type: 'address[]',
      },
    ],
    name: 'initialize',
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
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    name: 'memberStakeStats',
    outputs: [
      {
        internalType: 'uint32',
        name: 'order',
        type: 'uint32',
      },
      {
        internalType: 'uint32',
        name: 'orderRemain',
        type: 'uint32',
      },
      {
        internalType: 'uint32',
        name: 'lastInterestSettle',
        type: 'uint32',
      },
      {
        internalType: 'uint256',
        name: 'total',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'remain',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'interestRemain',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'interestTotal',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'members',
    outputs: [
      {
        internalType: 'uint32',
        name: 'uid',
        type: 'uint32',
      },
      {
        internalType: 'uint16',
        name: 'shareTotal',
        type: 'uint16',
      },
      {
        internalType: 'address',
        name: 'parent',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'bonusWithdraw',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'oldAddr',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'newAddr',
        type: 'address',
      },
    ],
    name: 'modAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'nowTime',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'orderTotal',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    name: 'orders',
    outputs: [
      {
        internalType: 'uint32',
        name: 'serial',
        type: 'uint32',
      },
      {
        internalType: 'enum StakeManager.OrderState',
        name: 'state',
        type: 'uint8',
      },
      {
        internalType: 'enum StakeManager.StakeType',
        name: 'stakeType',
        type: 'uint8',
      },
      {
        internalType: 'uint32',
        name: 'time',
        type: 'uint32',
      },
      {
        internalType: 'uint32',
        name: 'redeemTime',
        type: 'uint32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'receiveAddresses',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
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
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_manager',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: '_state',
        type: 'bool',
      },
    ],
    name: 'setManager',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_signAccount',
        type: 'address',
      },
    ],
    name: 'setSignAccount',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'enum StakeManager.StakeType',
        name: 'stakeType',
        type: 'uint8',
      },
      {
        internalType: 'bool',
        name: '_state',
        type: 'bool',
      },
    ],
    name: 'setStakeState',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'signAccount',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'enum StakeManager.StakeType',
        name: 'stakeType',
        type: 'uint8',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'stake',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    name: 'stakeTypeInfos',
    outputs: [
      {
        internalType: 'bool',
        name: 'state',
        type: 'bool',
      },
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'uint32',
        name: 'stakeTotal',
        type: 'uint32',
      },
      {
        internalType: 'uint32',
        name: 'redeemTotal',
        type: 'uint32',
      },
      {
        internalType: 'uint32',
        name: 'timeLimit',
        type: 'uint32',
      },
      {
        internalType: 'uint256',
        name: 'stakeAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'redeemAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'minStake',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maxStake',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'interestWithdraw',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'interestRate',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'swapV2Router',
    outputs: [
      {
        internalType: 'contract IUniswapV2Router02',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'usdt',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'bonus',
        type: 'uint256',
      },
      {
        internalType: 'uint32',
        name: 'signTime',
        type: 'uint32',
      },
      {
        internalType: 'uint256',
        name: 'orderSerial',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'sign',
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
        name: 'stakeType',
        type: 'uint8',
      },
    ],
    name: 'withdrawInterest',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
