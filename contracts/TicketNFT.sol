// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract TicketNFT is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    struct Event {
        uint256 eventId;
        string name;
        uint256 price;
        uint256 totalSupply;
        uint256 maxPerWallet;
        bool transferable;
        bool resellable;
        address organizer;
        bool active;
    }

    mapping(uint256 => Event) public events;
    mapping(uint256 => uint256) public ticketToEvent;
    mapping(uint256 => mapping(address => uint256)) public ticketsPurchased;

    event EventCreated(
        uint256 indexed eventId,
        string name,
        uint256 price,
        uint256 totalSupply,
        address organizer
    );

    event TicketMinted(
        uint256 indexed tokenId,
        uint256 indexed eventId,
        address indexed buyer
    );

    constructor() ERC721("BlockTix", "BTIX") Ownable(msg.sender) {}

    function createEvent(
        string memory name,
        uint256 price,
        uint256 totalSupply,
        uint256 maxPerWallet,
        bool transferable,
        bool resellable
    ) public returns (uint256) {
        uint256 eventId = _tokenIds.current();
        _tokenIds.increment();

        events[eventId] = Event(
            eventId,
            name,
            price,
            totalSupply,
            maxPerWallet,
            transferable,
            resellable,
            msg.sender,
            true
        );

        emit EventCreated(eventId, name, price, totalSupply, msg.sender);
        return eventId;
    }

    function mintTicket(uint256 eventId) public payable {
        Event storage eventDetails = events[eventId];
        require(eventDetails.active, "Event is not active");
        require(msg.value >= eventDetails.price, "Insufficient payment");
        require(
            ticketsPurchased[eventId][msg.sender] < eventDetails.maxPerWallet,
            "Exceeds max tickets per wallet"
        );

        uint256 tokenId = _tokenIds.current();
        _tokenIds.increment();

        _safeMint(msg.sender, tokenId);
        ticketToEvent[tokenId] = eventId;
        ticketsPurchased[eventId][msg.sender]++;

        emit TicketMinted(tokenId, eventId, msg.sender);
    }

    function transferTicket(address to, uint256 tokenId) public {
        require(ownerOf(tokenId) == msg.sender, "Not ticket owner");
        uint256 eventId = ticketToEvent[tokenId];
        require(events[eventId].transferable, "Ticket not transferable");

        _transfer(msg.sender, to, tokenId);
    }

    function getEvent(uint256 eventId) public view returns (Event memory) {
        return events[eventId];
    }

    function getTicketEvent(uint256 tokenId) public view returns (uint256) {
        return ticketToEvent[tokenId];
    }

    // Override required functions
    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId) public view override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}