// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;
import "GrumpyPokemon.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155URIStorage.sol";
import "@openzeppelin/contracts/token/ERC1155/enumerable/ERC1155Enumerable.sol"
contract GrumpyPokemon is ERC1155URIStorage, Ownable, ERC1155Enumerable {
    constructor() ERC1155("") {}

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function mint(
        address account,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) public onlyOwner {
        _mint(account, id, amount, data);
    }

    function mintBatch(
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) public onlyOwner {
        _mintBatch(to, ids, amounts, data);

    }

    struct Battle{
        address player1,
        address player2;

    }

    // Mapping of players address to array of their game contract
    

    function initiateBattle(address player1, address player2, uint256 prizeCard1, uint256 prizeCard2) {
        GrumpyPokemon battle = new GrumpyPokemon(player1, player2);
        playerGames[player1].push(battle);
        playergames[player2].push(battle);
    }
}
