pragma solidity ^0.4.0;

contract Notaire
{
    
    //Variables
    string hash;
    address public owner;
    
    
    modifier isowner(){
        if(msg.sender != owner){
            throw;
            _;
        }
    }
    
    function verif(string _hash){
        if(keccak256(hash) == keccak256(_hash)){
            "Il s'agit du document original";
        }
        else{
            "Il ne s'agit pas du document original";
        }
    }
    
    function kill() isowner(){
        delete owner;
        selfdestruct(msg.sender);
    }
}
