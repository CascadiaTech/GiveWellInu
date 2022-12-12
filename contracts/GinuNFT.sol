// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
// @cryptoconner simple but effective. 
//1 billion = 1eth mintPrice for gwei denomented price 
//https://ipfs.io/ipfs/QmVeMWpbq3UzbfPZnQrwSWAC9qrSPhqzWmV8ZmKyxPqH5H/ base uri
//encoded constructors: 000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000005f5e1000000000000000000000000000000000000000000000000000000000005f5e100000000000000000000000000000000000000000000000000000000000000004468747470733a2f2f697066732e696f2f697066732f516d56654d5770627133557a6266505a6e51727753574143397172535068717a576d56385a6d4b797850714835482f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004468747470733a2f2f697066732e696f2f697066732f516d56654d5770627133557a6266505a6e51727753574143397172535068717a576d56385a6d4b797850714835482f00000000000000000000000000000000000000000000000000000000
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract RuneStoneNFT is ERC721, Ownable {
	using Strings for uint256;
	using Counters for Counters.Counter;

	Counters.Counter private _supply;

    using SafeERC20 for IERC20;
    //using SafeMath for uint256;

    struct TokenCycle {
        IERC20 tokenaddress;
        uint256 rewardsamount;
        uint256 time;
        }
    uint256 private MAX_INT = 2**256 - 1;
    uint256 public currentRewardPeriodId;

    mapping(address=>uint256[]) public UserClaimableTokenAmount;
    mapping(address => uint256) public amountofRewardRoundsuserholds;
    mapping(IERC20=>uint256) public TokenID;
    mapping(address => uint256) public lastUpdateTime; // userdeposittime
    mapping(address =>IERC20[]) public UserClaimableTokens; 
    mapping(address => uint256) public usersPeriodId; // this use this to keep track of what rewards they are due
    mapping(uint256 => TokenCycle) public rewardCycle;
    mapping(address => uint256) public ClaimedRounds;

    //events
    event ClaimedRewards(address to);

	string private baseURI;
	string private baseExt = ".json";

	bool public revealed = false;
	string private notRevealedUri;

	// Total supply
	uint256 public constant MAX_SUPPLY = 10000;

	// Whitelist mint constants
	bool public wlMintActive = false;
	uint256 private constant WL_MAX_PER_WALLET = 1000; // 2/wallet (uses < to save gas)
	//uint256 private constant WL_MINT_PRICE = 0.05 ether;
	mapping(address => bool) private whitelists;


	// Public mint constants
	bool public pubMintActive = false;
	uint256 private constant PUB_MAX_PER_WALLET = 10000; // 3/wallet (uses < to save gas)
	//uint256 private constant PUB_MINT_PRICE = 0.065 ether;

	bool private _locked = false; // for re-entrancy guard

    uint256 public WL_MINT_PRICE;
    uint256 public PUB_MINT_PRICE;

	// Initializes the contract by setting a `name` and a `symbol`
	constructor(string memory _initBaseURI, string memory _initNotRevealedUri, uint256 PUB_PRICE, uint256 WL_PRICE) ERC721("ApeMotorcycleClub", "APE") {
		setBaseURI(_initBaseURI);
		setNotRevealedURI(_initNotRevealedUri);
        setWlPrice(WL_PRICE);
        setPrice(PUB_PRICE);
	}

  //if user is reward cycle 3 and we are on 6 his ids are 4 in length- 3-4-5-6
function FetchIdByDetails(IERC20 token) public view returns (uint256) {
    return TokenID[token];
}

function FetchTokenById(uint256 id) public view  returns (IERC20) {
        return rewardCycle[id].tokenaddress;
    }
function FetchAmountById(uint256 id) public view  returns (uint256) {
        return rewardCycle[id].rewardsamount;
    }
function FetchTimeById(uint256 id) public view  returns (uint256) {
        return rewardCycle[id].time;
    }

function approveERC20(address spender, uint256 amount, IERC20 token) public returns (bool) {
        token.approve(spender, amount);
        return true;
    }


function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public virtual override {
        //solhint-disable-next-line max-line-length
        require(_isApprovedOrOwner(_msgSender(), tokenId), "ERC721: caller is not token owner nor approved");
        if(usersPeriodId[msg.sender] <= currentRewardPeriodId) {
        claimall();
        _transfer(from, to, tokenId);

        }else {

        _transfer(from, to, tokenId);
        }
    }

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId,
        bytes memory data
    ) public virtual override {
        require(_isApprovedOrOwner(_msgSender(), tokenId), "ERC721: caller is not token owner nor approved");
                if(usersPeriodId[msg.sender] <= currentRewardPeriodId) {
        claimall();
        _safeTransfer(from, to, tokenId, data);

        }else {

        _safeTransfer(from, to, tokenId, data);
        }
    }
   

function setReward(IERC20 tokenaddress) external onlyOwner {
        updateRewardCycle(currentRewardPeriodId + 1, tokenaddress.balanceOf(address(this)), tokenaddress );
        currentRewardPeriodId = currentRewardPeriodId + 1;

    }
function updateUsersRewardCycle(address account) private {
    lastUpdateTime[msg.sender] = block.timestamp;
    usersPeriodId[account] = currentRewardPeriodId + 1;
   }

function updateRewardCycle(uint index, uint256 amount, IERC20 tokenaddress) private {
        TokenID[IERC20(tokenaddress)] = currentRewardPeriodId + 1;
        rewardCycle[index].time = block.timestamp;
        rewardCycle[index].rewardsamount = amount;
        rewardCycle[index].tokenaddress= tokenaddress;
    }


IERC20 public claimabletokens;

function claimall() public {
    require(balanceOf(msg.sender) > 0, "Go buy an nft you fool.");
    require(usersPeriodId[msg.sender] <= currentRewardPeriodId, "not the correct period id to claim");
    for(uint i=usersPeriodId[msg.sender]; i < currentRewardPeriodId + 1; i++) {
    claimabletokens = rewardCycle[i].tokenaddress;
    approveERC20(msg.sender, MAX_INT, claimabletokens);
    updateUsersRewardCycle(msg.sender);
    claimabletokens.transfer(msg.sender, rewardCycle[i].rewardsamount * (balanceOf(msg.sender) / (_supply.current())));
     }
    emit ClaimedRewards(msg.sender);
}



function claimone(IERC20 token) public {
        //require(token == erc20Contract, "You are only allowed to compound the official erc20 token address which was passed into this contract's constructor");
    require(balanceOf(msg.sender) > 0, "Go buy an nft you fool.");
    approveERC20(msg.sender, MAX_INT, token);
    updateUsersRewardCycle(msg.sender);
    token.transfer(msg.sender, FetchAmountById(usersPeriodId[msg.sender]) * (balanceOf(msg.sender) / (_supply.current())));
    emit ClaimedRewards(msg.sender);
}


	// Whitelist mint
	function whitelistMint(uint256 _quantity) external payable nonReentrant {
		require(wlMintActive, "Whitelist sale is closed at the moment.");

		address _to = msg.sender;
		require(_quantity > 0 && (balanceOf(_to) + _quantity) < WL_MAX_PER_WALLET, "Invalid mint quantity.");
		require(whitelists[_to], "You're not whitelisted.");
		require(msg.value >= (WL_MINT_PRICE * _quantity), "Not enough ETH.");
        updateUsersRewardCycle(msg.sender);
		mint(_to, _quantity);
	}

	// Public mint
	function publicMint(uint256 _quantity) external payable nonReentrant {
		require(pubMintActive, "Public sale is closed at the moment.");

		address _to = msg.sender;
		require(_quantity > 0 && (balanceOf(_to) + _quantity) < PUB_MAX_PER_WALLET, "Invalid mint quantity.");
		require(msg.value >= (PUB_MINT_PRICE * _quantity), "Not enough ETH.");
        updateUsersRewardCycle(msg.sender);

		mint(_to, _quantity);
	}

	/**
	 * Airdrop for promotions & collaborations
	 * You can remove this block if you don't need it
	 */
	function airDropMint(address _to, uint256 _quantity) external onlyOwner {
		require(_quantity > 0, "Invalid mint quantity.");
        updateUsersRewardCycle(_to);
		mint(_to, _quantity);
	}

	// Mint an NFT
	function mint(address _to, uint256 _quantity) private {
		/**
		 * To save gas, since we know _quantity won't underflow / overflow
		 * Checks are performed in caller functions / methods
		 */
		unchecked {
			require((_quantity + _supply.current()) <= MAX_SUPPLY, "Max supply exceeded.");

			for (uint256 i = 0; i < _quantity; i++) {
				_safeMint(_to, _supply.current());
				_supply.increment();
			}
		}
	}

	// Toggle whitelist sales activity
	function toggleWlMintActive() public onlyOwner {
		wlMintActive = !wlMintActive;
	}

	// Toggle public sales activity
	function togglePubMintActive() public onlyOwner {
		pubMintActive = !pubMintActive;
	}

	// Set whitelist
	function toggleWhitelist(address _address) public onlyOwner {
		whitelists[_address] = !whitelists[_address];
	}

	// Get total supply
	function totalSupply() public view returns (uint256) {
		return _supply.current();
	}

    function setWlPrice(uint256 WL_PRICE) public onlyOwner {
        WL_MINT_PRICE = WL_PRICE * 1e9;
    
    }

    function setPrice(uint256 PUB_PRICE) public onlyOwner {
        PUB_MINT_PRICE = PUB_PRICE * 1e9;
    
    }

    

	// Get whitelist
	function isWhitelisted(address _address) public view returns (bool) {
		return whitelists[_address];
	}

	// Base URI
	function _baseURI() internal view virtual override returns (string memory) {
		return baseURI;
	}

	// Set base URI
	function setBaseURI(string memory _newBaseURI) public {
		baseURI = _newBaseURI;
	}

	// Get metadata URI
	function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
		require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token.");

		if (revealed == false) {
			return notRevealedUri;
		}

		string memory currentBaseURI = _baseURI();
		return
			bytes(currentBaseURI).length > 0
				? string(abi.encodePacked(currentBaseURI, tokenId.toString(), baseExt))
				: "";
	}

	// Activate reveal
	function setReveal() public onlyOwner {
		revealed = true;
	}

	// Set not revealed URI
	function setNotRevealedURI(string memory _notRevealedURI) public onlyOwner {
		notRevealedUri = _notRevealedURI;
	}

	// Withdraw balance
	function withdraw() external onlyOwner {
		// Transfer the remaining balance to the owner
		// Do not remove this line, else you won't be able to withdraw the funds
		(bool sent, ) = payable(owner()).call{ value: address(this).balance }("");
		require(sent, "Failed to withdraw Ether.");
	}

	// Receive any funds sent to the contract
	receive() external payable {}

	// Reentrancy guard modifier
	modifier nonReentrant() {
		require(!_locked, "No re-entrant call.");
		_locked = true;
		_;
		_locked = false;
	}
}