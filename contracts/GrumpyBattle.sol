// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

contract GrumpyBattle {
    address public player1;
    address public player2;
    constructor(address _player1, address _player2, uint256 prizeCard1, uint256 prizeCard2){
        player1 = _player1;
        player2 = _player2;
    }
}
