"use strict";
// ref.
// - https://postd.cc/a-blockchain-in-200-lines-of-code/
//   - https://github.com/lhartikk/naivechain/blob/master/main.js
// - https://mizchi.hatenablog.com/entry/2017/11/30/002046
// - https://ty-engineer.com/javascript/blockcahin-create/

import {SHA256} from 'crypto-js';

class Block {
  constructor(index, prevHash, timestamp, data, hash) {
    this.index = index;
    this.previousHash = prevHash;
    this.timestamp = timestamp;
    this.data = data;
    this.hash = hash.toString();
  }
}

// Create Block Hash
const calculateHash = (index, prevHash, timestamp, data) => {
  return SHA256(index + prevHash + timestamp + data).toString();
};

const generateNextBlock = (blockData) => {
  const prevBlock = getLatestBlock();
  const nextIndex = prevBlock.index + 1;
  const nextTimestamp = new Date().getTime() / 1000;
  const nextHash = calculateHash(nextIndex, prevBlock.hash, nextTimestamp, blockData);
  return new Block(nextIndex, prevBlock.hash, nextTimestamp, blockData, nextHash);
};

// TODO: get latest Block by BlockChane
const getLatestBlock = () => {
  return 'Block';
};
