# 03_NFT Basic

### NFT(Non Fungible Token)

디지털 자산의 일종으로 대체 불가능한 특정 암호 디지털 자산

디지털 자산에 대한 소유권을 블록체인에 저장함으로써 위조 및 변조가 불가능하도록 영구 보존하고, 그 소유권을 탈중앙화한 형태로 확인할 수 있도록 함

<br>

#### Fungible

100원짜리 2개가 있다고 한다면 그 100원 중 어떤 것을 쓰든 큰 의미가 없고 둘 다 똑같은 가치를 지니고 있음

#### Non-Fungible

하나 하나가 다른 것이고 유일하며 그 가치가 다름

<br>

토큰을 발행하고 전송하기 위해서 필요한것?

- 발행(일련번호, 글자, 소유자)
- 전송(누가, 누구에게, 무엇을)

<br>

### .sol 코딩

값을 get하는 행동은 수수료가 들지 않지만, 값을 변경하는 것은 트랜잭션을 새로 만들어야하므로 수수료가 소비됨

- 코딩 예시

![image](https://user-images.githubusercontent.com/93081720/180603611-d69fd9d1-4000-4385-9d7f-92d4344e7fc0.png)

<br>

### Contract 연동

#### 필요한 것들

- 두 컨트랙트의 인터페이스

- 컨트랙트의 주소

```java
pragma solidity >=0.4.24 <=0.5.6;

contract NFTSimple {
    string public name="Klay SIWON";
    string public symbol = "KL";

    // mapping에서 숫자를 넣으면 문자열을 반환하겠다고 지정
    mapping (uint256 => address) public tokenOwner;
    mapping (uint256 => string) public tokenURIs;

    // 소유한 토큰 리스트(배열을 반환)
    mapping(address => uint256[]) private ownedTokensList;

    // mint(발행; 일련번호, 글자, 소유자)
    function mintWithTokenURI(address to, uint256 tokenId, string memory tokenURI) public returns (bool) {
        // to에게 tokenId(일련번호)를 발행하겠다
        tokenOwner[tokenId] = to;
        // 적힐 글자는 tokenURI
        tokenURIs[tokenId] = tokenURI;

        // add token to tokenlist
        ownedTokensList[to].push(tokenId);

        return true;
    }

    // transfer(전송; 누가, 누구에게, 무엇을(토큰 id)) => owner가 from에서 to로 바뀌는 것
    function safeTransferFrom(address from, address to, uint256 tokenId) public {
        // 토큰 소유자일 경우에만 해당 함수를 호출해서 정상 작동하게끔 함
        require(from == msg.sender, "from != msg.sender");
        require(from == tokenOwner[tokenId], "your not owner of the token");
        // to에게 토큰 아이디를 줌
        tokenOwner[tokenId] = to;
        ownedTokensList[to].push(tokenId);
        // from으로 부터 토큰 아이디를 삭제함
        removeTokenFromList(from, tokenId);
    }

    // 토큰 리스트에서 소유주가 가진 토큰을 확인
    function ownedTokens(address owner) public view returns (uint256[] memory) {
        return ownedTokensList[owner];
    }

    // 토큰 리스트에서 토큰을 삭제함
    function removeTokenFromList(address from, uint256 tokenId) private {
        uint256 lastTokenIdx = ownedTokensList[from].length - 1;
        for(uint256 i=0; i<ownedTokensList[from].length; i++) {
            if (tokenId == ownedTokensList[from][i]) {
                // 스왑(끝에 있는 요소와 스왑함)
                ownedTokensList[from][i] = ownedTokensList[from][lastTokenIdx];
                ownedTokensList[from][lastTokenIdx] = tokenId;
                break;
            }
        }
        ownedTokensList[from].length--;
    }



    function setTokenURI(uint256 id, string memory uri) public {
        tokenURIs[id] = uri;
    }

}

// 새로운 컨트랙트
contract NFTMarket {
    function buyNFT(uint256 tokenId, address NFTAddress, address to) public returns (bool) {
        NFTSimple(NFTAddress).safeTransferFrom(address(this), to, tokenId);
        return true;
    }
}
```

<br>

## KIP

[Klaytn Improvement Proposals](https://kips.klaytn.foundation/)

=> 클레이튼 오픈소스가 더 나은 방향으로 나아가기 위한 제안

NFT 설명서

[KIP - 17](https://kips.klaytn.foundation/KIPs/kip-17)

<br>

## Bapp NFT Market

#### 1. 발행

#### 2. 판매: Market에게 전송

#### 3. 구매: Market에서 Buy 실행

```
pragma solidity >=0.4.24 <=0.5.6;

contract NFTSimple {
    string public name="Klay SIWON";
    string public symbol = "KL";

    // mapping에서 숫자를 넣으면 문자열을 반환하겠다고 지정
    mapping (uint256 => address) public tokenOwner;
    mapping (uint256 => string) public tokenURIs;

    // 소유한 토큰 리스트(배열을 반환)
    mapping(address => uint256[]) private ownedTokensList;

    // onKIP17Received bytes value
    bytes4 private constant _KIP17_RECEIVED = 0x6745782b;

    // mint(발행; 일련번호, 글자, 소유자)
    function mintWithTokenURI(address to, uint256 tokenId, string memory tokenURI) public returns (bool) {
        // to에게 tokenId(일련번호)를 발행하겠다
        tokenOwner[tokenId] = to;
        // 적힐 글자는 tokenURI
        tokenURIs[tokenId] = tokenURI;

        // add token to tokenlist
        ownedTokensList[to].push(tokenId);

        return true;
    }

    // transfer(전송; 누가, 누구에게, 무엇을(토큰 id)) => owner가 from에서 to로 바뀌는 것
    function safeTransferFrom(address from, address to, uint256 tokenId, bytes memory _data) public {
        // 토큰 소유자일 경우에만 해당 함수를 호출해서 정상 작동하게끔 함
        require(from == msg.sender, "from != msg.sender");
        require(from == tokenOwner[tokenId], "your not owner of the token");
        // to에게 토큰 아이디를 줌
        tokenOwner[tokenId] = to;
        ownedTokensList[to].push(tokenId);
        // from으로 부터 토큰 아이디를 삭제함
        removeTokenFromList(from, tokenId);

        // 만약에 받는 쪽이 실행할 코드가 있는 스마트 컨트랙트이면, 코드를 실행함
        require(
            _checkOnKIP17Received(from, to, tokenId, _data), "KIP17: transfer to non KIP17Receiver implementer"
        );
    }

    function _checkOnKIP17Received(address from, address to, uint256 tokenId, bytes memory _data) internal returns (bool) {
        bool success;
        bytes memory returndata;

        if (!isContract(to)) {
            return true;
        }

        (success, returndata) = to.call(
            abi.encodeWithSelector(
                _KIP17_RECEIVED,
                msg.sender,
                from,
                tokenId,
                _data
            )
        );
        if (
            returndata.length != 0 && abi.decode(returndata, (bytes4)) == _KIP17_RECEIVED
        ) {
            return true;
        }
        return false;
    }

    // 스마트 컨트랙트인지 확인하는 함수
    function isContract(address account) internal view returns (bool) {
        uint256 size;
        assembly {
            size := extcodesize(account) // extcodesize => 코드가 존재하냐
        }
        return size > 0;
    }


    // 토큰 리스트에서 소유주가 가진 토큰을 확인
    function ownedTokens(address owner) public view returns (uint256[] memory) {
        return ownedTokensList[owner];
    }

    // 토큰 리스트에서 토큰을 삭제함
    function removeTokenFromList(address from, uint256 tokenId) private {
        uint256 lastTokenIdx = ownedTokensList[from].length - 1;
        for(uint256 i=0; i<ownedTokensList[from].length; i++) {
            if (tokenId == ownedTokensList[from][i]) {
                // 스왑(끝에 있는 요소와 스왑함)
                ownedTokensList[from][i] = ownedTokensList[from][lastTokenIdx];
                ownedTokensList[from][lastTokenIdx] = tokenId;
                break;
            }
        }
        ownedTokensList[from].length--;
    }



    function setTokenURI(uint256 id, string memory uri) public {
        tokenURIs[id] = uri;
    }

}

contract NFTMarket {
    // tokenId를 누가 보냈냐
    mapping(uint256 => address) public seller;

    // NFTAddress => 스마트 컨트랙트 주소
    function buyNFT(uint256 tokenId, address NFTAddress) public payable returns (bool) {
        // 구매한 사람에게 0.01 klay를 보내야함
        address payable receiver = address(uint160(seller[tokenId]));

        // 0.01 klay
        // 10 ** 18 PEB = 1 KLAY , 10 ** 16 PEB = 0.01 KLAY
        receiver.transfer(10 ** 16); // 0.01 KLAY + 수수료가 있어야 보낼 수 있음

        NFTSimple(NFTAddress).safeTransferFrom(address(this), msg.sender, tokenId, "0x00");
        return true;
    }

    // 마켓이 토큰을 받았을 때(판매대에 올라왔을 때), 판매자가 누구인지 기록해야함
    function onKIP17Received(address operator, address from, uint256 tokenId, bytes memory data) public returns (bytes4) {
        seller[tokenId] = from;
        return bytes4(keccak256("onKIP17Received(address,address,uint256,bytes)"));
    }

}
```

컴파일 에러가 발생하는데 이유를 모르겠음

Warning: Unused function parameter ....

