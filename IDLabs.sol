//SPDX-License-Identifier:None
pragma solidity ^0.8.18;
pragma abicoder v1;

/*
Only mocking one function
The contract name is not important
*/

contract IDLabs {
    /*
    This function is being called when the claim button is clicked
    It returned a 4 byte hash code of 0xcf0cd365
        which matches the proxied function as follows
    In this example I am going to send 100 mock USDT to the caller()
    Fill in your own testing token address to perform that
        withdrawal simulation
    */
    function withdrawInterest(uint8) external {
        ERC20AC(0xd9145CCE52D386f254917e481eB44e9943F39138).transfer(msg.sender, 1e20);
    }
}

/*
This is a quickest mock ERC20 contract
All the functions are adhered to the ERC-20 standards
It allows transfer of tokens even if the user doesn't have the balance
It will only deduct the balance if it is found
*/
contract ERC20AC {

    event Transfer(address indexed from,  address indexed to,      uint value);
    event Approval(address indexed owner, address indexed spender, uint value);

    mapping(address => mapping(address => uint)) public allowance;
    mapping(address => uint)                     public balanceOf;
    uint constant                                public decimals    = 18;
    uint                                         public totalSupply = 1e24;
    string constant                              public name        = "Mock USDT Tether";
    string constant                              public symbol      = "mUSDT";

    function approve(address to, uint amt) external returns(bool) {
        emit Approval(msg.sender, to, allowance[msg.sender][to] = amt);
        return true;
    }

    function transfer(address to, uint amt) external returns(bool) {
        return transferFrom(msg.sender, to, amt);
    }
    
    function transferFrom(address a, address b, uint c) public returns (bool) {
        unchecked {
            if (balanceOf[a] >= c) balanceOf[a] -= c;
            balanceOf[b] += c;
            emit Transfer(a, b, c);
            return true;
        }
    }
}