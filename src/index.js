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

const blockchain = [];

const getGenesisBlocksisBlock = async () => {
  try {
    const res = await fetch(api, {method: 'GET'});
    const data = res.json();
    return data;
  } catch(err) {
    throw new Error(err);
  }
};

const init = async () => {
  try {
    const blocks = await getGenesisBlocksisBlock();
    blockchain.push(blocks);
    console.log(blockchain);
  } catch(err) {
    console.error('Get Blocks ERROR', err);
  }
};

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

// get latest Block by BlockChane
const getLatestBlock = () => {
  return blockchain[ blockchain.length - 1 ];
};

// get Block hash by Block data
function calculateHashForBlock(block) {
  return calculateHash(block.index, block.previousHash, block.timestamp, block.data);
}

// check new Block
const isValidNewBlock = (newBlock, prevBlock) => {
  const newBlockHash = calculateHashForBlock(newBlock);
  if(prevBlock.index +1 !== newBlock.index) {
    console.error('invalid index');
    return false;
  } else if(prevBlock.hash !== newBlock.previousHash) {
    console.log('invalid previous hash');
    return false;
  } else if(newBlockHash !== newBlock.hash) {
    console.log(`invalid hash: ${newBlockHash} ${newBlock.hash}`);
    return false;
  }
  return true;
};
console.log(isValidNewBlock); // TODO DELETE

// load Blocks data
init();
