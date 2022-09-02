# 220831_TIL

## Solidity

### address(0)의 의미

과제 1을 수행하면서 address(0)이라는 키워드가 많이 나와서 address(0)에 대해서 알아보았다

- 스택 오버플로우의 답변

```
address(0) is a short way to write 0x0000000000000000000000000000000000000000(which is essentially 0x0). The address is sometimes used to burn tokens, since it's very unlikely that someone has the private key for this address.

The deposit function in your code assigns an amount of ETH (msg.value) to tokens[0x0][sender address], it does not actually send any ETH or tokens.
```

- 레딧의 답변

```
The 0 address is usually used for contract creation (or sometimes token burns). No-one knows the private key of this address, so if you send a token there it's gone forever.
```



address(0)은 `zero-address`라고도 불리며, 아무도 해당 주소에 대한 프라이빗 키를 모른다.



### address(0)의 용도

#### burn

아무도 해당 주소에 대한 프라이빗 키를 모르기 때문에 해당 주소로 무엇인가를 보내면 그것은 영원히 사라지므로, 토큰을 burn할 때 사용한다