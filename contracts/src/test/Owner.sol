// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {Ownable} from '../../abstracts/access/Ownable.sol';

contract Owner is Ownable {
    constructor() {}

    event Execution();

    function execution() external onlyOwner {
        emit Execution();
    }
}
