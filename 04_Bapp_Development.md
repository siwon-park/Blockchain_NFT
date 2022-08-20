# 04_BApp_Development

## 01_BApp(BlockChain Application)

>카카오가 클레이튼 메인넷을 알리면서 처음 등장한 용어
>
>개인키와 주소를 기반으로 하고 있으며, 블록체인(스마트 컨트랙트)를 실행하여 동작함

<br>

#### ※ DApp(Decentralized Application)

>  이더리움과 같은 블록체인 플랫폼 네트워크 상에서 작동하는 탈중앙화 분산 어플리케이션

<br>

#### ※ DApp vs. BApp

DApp은 완전 탈중앙화 앱이며, 오픈소스이기 때문에 누구나 참여할 수 있게 만들어지지만,

반면에 BApp은 운용 주체가 존재하고 운용 주체들이 중앙에서 검증하는 구조로 동작하는 프라이빗 블록체인(Private BlockChain)이며, 일부분에만 참여할 수 있다.

=> BApp은 조금 더 실생활 서비스에 접목하기 쉽게 하기 위해서 만들어진 개념이라고 이해하면 편하다

<br>

### 01_개발 환경 세팅

- react-scripts 버전은 4.0.3으로 할 것
  - package.json의 react-scripts의 버전을 4.0.3으로 고치고
  - package-lock.json과 node_modules를 지운 다음 npm install 하면 됨

```
npx create-react-app klay-market
npm install axios
npm install caver-js
npm install qrcode.react
```

<br>

### 02_Klaytn docs

[Klaytn docs](https://ko.docs.klaytn.foundation/)

<br>

### 03_ABI; Application Binary Interface

Application Binary Interface

사용 설명서

코드 -> 컴퓨터가 이해 가능한 16진수로 바꿔줌

<br>

## 02_caver.js

caver.js란 무엇인가?

`caver.js`는 개발자가 HTTP 또는 웹소켓(Web Socket) 연결을 사용하여 Klaytn 노드와 상호작용할 수 있도록 하는 자바스크립트 API 라이브러리

<br>

## 03_Klip API

### 01_BApp 서비스를 유저가 이용하게 하려면?

`개인키(private key)`가 필요함

#### 사용자가 어떻게 개인키를 입력하고 사용하게 할 것인가?

Klip API를 통해 개인키 관리, 개인키 사용에 대한 흐름을 쉽게 할 수 있음

<br>

### 02_Klip API 이해

[Klip Docs](https://docs.klipwallet.com/)

#### Prepare → Request → Result

#### (1) Prepare

지갑을 사용해도 되는지 질문

#### (2) Request

스마트 컨트랙트 실행

#### (3) Result

결과 확인

<br>

※ 테스트넷: Baobab / 메인넷: Cypress
