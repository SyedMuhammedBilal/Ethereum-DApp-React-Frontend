export const Contract_Address = "0xAEb1C7F87bb234C893C1b5F8E77A0EE02CebF740";

export const Contract_ABi =  [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "hash",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "description",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "tipAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "author",
        "type": "address"
      }
    ],
    "name": "ImageUploaded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "hash",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "description",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "tipAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "author",
        "type": "address"
      }
    ],
    "name": "TipOnPost",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "imageId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "images",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "hash",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "description",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "tipAmount",
        "type": "uint256"
      },
      {
        "internalType": "address payable",
        "name": "author",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_imageHash",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_desc",
        "type": "string"
      }
    ],
    "name": "uploadImage",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "tipPostOwner",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
    "payable": true
  }
]

export const Contract_Network = [
    {
        "networks": {
            "5777": {
              "events": {},
              "links": {},
              "address": "0xF29A576B8B04C84E4b16f98cdF86a084d6Ca4a7b",
              "transactionHash": "0x0f0291931f0ba3d7a2177f207b1e17a9a6a96499d21d098fbbb7cc48a52b6a54"
            }
          },
    }
]