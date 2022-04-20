# Django(5)_RESTful

## 1. HTTP

### 1. HTTP

#### 정의

- 웹 상에서 컨텐츠를 전송하기 위한 약속, 규칙(Protocol)

HTML 문서와 같은 자원(Resource)들을 가져올 수 있도록 하는 프로토콜

웹 상에서 이루어지는 모든 데이터 교환의 기초

- 요청(Request)과 응답(Response)

<br>

#### 특징

- 무상태(Stateless)
- 비연결지향(Connectionless)

=> 쿠키(cookie)와 세션(session)을 통해 서버 상태를 요청과 연결함

<br>

#### HTTP request method

- 자원에 대한 수행하고자 하는 행위, 동작을 정의
  - 자원(resource) : HTTP 요청의 대상
- GET(조회), POST(생성), PUT(수정), DELETE(삭제)

<br>

#### HTTP request status code

- Informational responses(100번대)
- Successful responses(200번대)
- Redirection responses(300번대)
- Client error responses(400번대)
- Server error responses(500번대)

<br>

### 2. URI(Uniform Resource Identifier)

- 통합 자원 식별자
- 인터넷의 자원을 식별하는 유일한 주소(정보의 자원을 표현)
- 인터넷에서 자원을 식별하거나 이름을 지정하는데 사용되는 간단한 문자열
- 하위개념
  - URL, URN

=> URI는 크게 URL과 URN으로 나눌 수 있지만, URN을 사용하는 비중이 매우 작기 때문에 일반적으로 URL은 URI와 같은 의미처럼 통용됨

<br>

#### URL(Uniform Resource Locator)

- 통합 자원 위치

- 네트워크 상에 자원이 어디 있는지 알려주기 위한 약속
- 과거에는 실제 자원 위치를 나타냈지만 현재는 추상화된 의미론적인 구성
- 웹 주소, 링크라도고 불림

<br>

#### URN(Uniform Resource Name)

- 통합 자원 이름
- URL과 달리 자원의 위치에 영향을 받지 않는 유일한 이름 역할을 함
- 예) ISBN(국제표준도서번호)

<br>

#### URI의 구조

##### Scheme(Protocol)

- 브라우저가 사용해야 하는 프로토콜
- http(s), data, file, ftp, mailto 등

![image](https://user-images.githubusercontent.com/93081720/164249442-02191997-ebd6-473c-b6e3-b571e828cdd6.png)

<br>

##### Host(Domain name)

- 요청을 받는 웹 서버의 이름
- IP주소로 직접 사용할 수도 있지만, 실 사용 시 불편하므로 IP주소로는 웹에서 자주 사용되지는 않음

![image](https://user-images.githubusercontent.com/93081720/164249634-bcaf66e0-db7f-40be-9597-0fb31befa1b8.png)

<br>

##### PORT

- 웹 서버 상의 리소스에 접근하는데 사용되는 기술적인 문(gate)
- 일반적으로는 로컬에서 서버를 열고 접속할 때 보임
- HTTP 프로토콜의 표준 포트
  - HTTP 80 => 로컬 8000번대 포트
  - HTTPS 443
- DNS(Domain Name Server)

![image](https://user-images.githubusercontent.com/93081720/164249847-2d4458b7-6c7b-46e7-807c-78a8ddd616b9.png)

<br>

##### PATH

- 웹 서버 상의 리소스 경로
- 초기에는 실제 파일이 위치한 물리적 위치를 나타냈지만, 오늘날에는 물리적 실제 위치가 아닌 추상화 형태 구조로 표현

![image](https://user-images.githubusercontent.com/93081720/164250008-3a341f2e-0a7d-4429-a944-877d817d8bdb.png)

<br>

##### Query(Identifier; 식별자)

- Query String Parameters
  - URL 상 ?이후에 오는 것들
- 웹 서버에 제공되는 추가적인 매개 변수
- &로 구분되는 key와 value 목록

![image](https://user-images.githubusercontent.com/93081720/164250147-5626a20c-141a-4ce5-ba96-844d502432f2.png)

<br>

##### Fragment(Anchor)

- 자원 안에서 북마크 역할을 함
- 브라우저에게 해당 문서(HTML)의 특정 부분을 보여주기 위한 방법
- 브라우저에게 알려주는 요소이기 때문에 fragment identifier(부분 식별자)라고 부르며 '#'뒤의 부분은 요청이 서버에 보내지지 않음

![image](https://user-images.githubusercontent.com/93081720/164250278-e5007ea8-c812-4649-97bd-4c70d5c325e3.png)

<br>

---

<br>

## 2. RESTful API

### 1. API

- Application Programming Interface
- 프로그래밍 언어가 제공하는 기능을 수행할 수 있게 만든 인터페이스
  - **어플리케이션과 프로그래밍으로 소통하는 방법**
  - CLI는 커맨드 라인, GUI는 그래픽 아이콘, API는 프로그래밍을 통해 특정한 기능을 수행함
- Web API
  - 웹 애플리케이션 개발에서 다른 서비스 요청을 보내고 응답을 받기 위해 정의된 명세
  - 현재 웹 개발은 모든 것을 직접 개발하기보다 여러 Open API를 활용하는 추세
- 응답 데이터 타입
  - HTML, XML, JSON 등

<br>

### 2. REST

**RE**presentational **S**tate **T**ransfer

- API 서버를 개발하기 위한 일종의 소프트웨어 **설계 방법론**
- 네트워크 구조(Network Architecture) 원리의 모음
  - 자원을 정의하고 자원에 대한 주소를 지정하는 전반적인 방법
- REST원리를 따르는 시스템을 RESTful이란 용어로 지칭함
  - REST원리에 따라 설계한 API => RESTful API

- 자원을 정의하는 방법에 대한 고민 => 정의된 자원을 어디에 위치시킬 것인가?

<br>

- REST의 자원과 주소의 지정 방법
  - 자원 => URI
  - 행위 => HTTP method
  - 표현 => JSON
    - 자원과 행위를 통해 궁극적으로 표현되는 추상화된 결과물

<br>

- REST 핵심 규칙
  - 정보는 URI로 표현
  - 자원에 대한 행위는 HTTP method로 표현(GET, POST, PUT, DELETE => READ, CREATE, UPDATE, DELETE)
  - 설계 방법론은 지켰을 때 얻는 것이 훨씬 많기 때문에 지키는 것을 권장함
    - 설계 방법론은 규약이 아니기 때문에 지키지 않아도 실제 동작 여부에 큰 영향을 미치지 않음

<br>

### 3. JSON

JavaScript Object Notation

JavaScript 표기법을 따른 **단순 문자열**

- 특징
  - 사람이 읽어나 쓰기 쉽고 기계가 파싱(해석, 분석)하고 만들어내기 쉬움
  - 키와 값(Key, Value)형태로 구성되어 프로그래밍 언어의 자료구조로 쉽게 변환 가능함

<br>

---

<br>

## 3. Response

※ django_seed

django-seed 라이브러리를 통해 모델 구조에 맞는 데이터를 임의로 생성 가능함

`$ pip install django-seed` (INSTALLED_APPS에 등록 시에는 `django_seed`로 등록)

`$ python manage.py seed articles --number=5` (5개의 랜덤 데이터를 DB 모델에 채움)

<br>

### 1. 직렬화(Serialization)

데이터 구조나 객체 상태를 동일 또는 다른 컴퓨터 환경에 저장하고, 나중에 재구성할 수 있는 포멧으로 변환하는 과정

OOP에 대부분 등장하는 개념

객체가 메모리 상에 저장된 상태를 뽑아서 byte array로 만드는 것(직렬화 한다)

※ 역으로 byte array 포멧을 프로그래밍 언어의 자료로 객체화하는 것을 deserialization이라 함

![image](https://user-images.githubusercontent.com/93081720/164254179-eeb6729e-01a2-4e53-94a2-7e53764a170f.png)

<br>

#### Serializers in Django

- Queryset 및 Model 인스턴스와 같은 복잡한 데이터를 JSON, XML 등의 유형으로 쉽게 변환 할 수 있는 Python 데이터 타입으로 만들어줌

<br>

### 2. DRF(Django REST Framework)

Web API 구축을 위해 강력한 Toolkit을 제공하는 라이브러리

※ django rest framework

`$ pip install djangorestframework==3.13.1`(버전은 굳이 명시 안 해줘도 되지만 RTS로 설치할 것)

(INSTALLED_APPS에 등록 시에는 `rest_framework`로 등록)

<br>

#### Django Serializer

주어진 모델 정보를 활용하기 때문에 직접 필드를 만들 필요가 없음

DRF의 Serializer는 django의 Form 및 ModelFrom 클래스와 매우 유사하게 구성되고 동작함

- Web API
  - 웹 어플리케이션 개발에서 다른 서비스에 요청을 보내고 응답을 받기위해 정의된 명세

=> **★☆모델을 직렬화하는 것은 Form을 만드는 것과 매우 유사함☆★**

![image](https://user-images.githubusercontent.com/93081720/164255572-c7bfe743-38d2-45f5-8deb-6dd36f8ebaac.png)

<br>

----

<br>

## 4. Single Model

### 1. ModelSerializer

모델 필드에 해당하는 필드가 있는 Serializer 클래스를 자동으로 만들 수 있는 shortcut

`from rest_framework import serializers` => `serializers.ModelSerializer`로 호출

- 모델 정보에 맞춰 자동으로 필드 생성
- serializer에 대한 유효성 검사기 자동 생성
- .create()와 .update()와 같은 간단한 기능 기본 구현이 포함되어 있음

![image](https://user-images.githubusercontent.com/93081720/164260040-7712d4d1-a8c4-41e2-a421-a1b0d443d712.png)

<br>

![image](https://user-images.githubusercontent.com/93081720/164261410-b07143c7-7ac3-4a49-8329-ad96db320c01.png)

- #### many 속성

  - 단일 인스턴스가 아니라, QuerySet과 같이 다수의 인스턴스 객체들에 대해 직렬화할 때 many속성을 사용하여 True로 지정해준다(단일 인스턴스일 경우 아예 쓰지 않음)

<br>

- #### api_view 데코레이터

  - view함수가 응답해야하는 HTTP 메서드의 목록을 리스트의 인자로 받음(default는 GET)
  - 허용하지 않은 메서드에 대해 405 Method Not Allowed로 응답
  - DRF에서는 데코레이터는 선택이 아닌 필수적으로 작성해야만 view함수가 정상적으로 작동함

<br>

![image](https://user-images.githubusercontent.com/93081720/164263883-425dc81f-e1e8-4d4d-9c66-9accd6fdb492.png)

- #### status code

  - DRF는 status code를 보다 명확하고 읽기 쉽게 만드는 데 사용할 수 있는 정의된 상수 집합을 제공함
  - rest_framework의 status모듈에 HTTP status에 대한 코드 집합이 모두 포함돼 있음
  - status=200과 같이 숫자 표기도 가능하지만 DRF에서 권장하지 않음

<br>

- #### raise_exception

  - is_valid() 유효성 검사에 오류가 있는 경우 serializers.ValidationError 예외를 발생시키는 인자로 사용
  - DRF에서 제공하는 기본 예외 처리기에 의해 자동 처리되며, 예외 처리 시 HTTP status code 400을 응답
    - 따라서 raise_exception=True일 경우 400응답에 대한 return구문을 작성하지 않아도 됨

<br>

### 2. GET, POST, PUT, DELETE 작성 예시

(예시 추가할 것)

----

<br>

## 5. 1:N Relation