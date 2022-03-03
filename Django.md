# Django

### 웹 프레임워크(Web Framework)

#### 1. Static Web vs. Dynamic Web

##### Static Web(정적 웹)

- 서버에 미리 저장된 html, css 등과 같은 파일이 사용자에게 전달되는 형태
- 이미 완성된 파일을 전달하며, 추가적인 작업이 필요없으므로 속도가 빠르다
  - 그러나 모든 파일을 다 만들어야 하며, 수정/관리 시 작업량이 많다
- 모든 상황에서 모든 사용자에게 동일한 내용의 웹을 보여준다



##### Dynamic Web(동적 웹)

- 웹 페이지에 대한 요청을 받은 뒤에 추가적인 과정을 거쳐 다시 클라이언트에게 응답하는 구조
  - 프로그래밍 언어와 DB를 활용하여 추가적인 작업을 거침
  - 정적 웹에 비해서 처리 속도가 느리다
- 사용자와 상호작용하기 때문에, 사용자마다 다른 페이지 내용을 보여줄 수 있음(개인화)
- 스크립트 파일만 관리하면 되기 때문에 유지보수 및 관리에 용이하다



※ 웹(Web)의 핵심 키워드 4가지

클라이언트(Client), 요청(Request), 서버(Server), 응답(Response)

<div><img src="https://user-images.githubusercontent.com/93081720/156373401-9082e9a9-c4b8-47be-8964-6d6f8df95fa7.jpg" /></div>



#### 2. Framework

- 프로그래밍에서 특정 운영 체제를 위한 응용 프로그램 표준 구조를 구현하는 클래스와 라이브러리의 모임
- 재사용할 수 있는 수많은 코드를 프레임워크로 통합함으로써 개발자가 새로운 어플리케이션을 위한 표준 코드를 다시 작성하지 않아도록 하여 작업의 효율성을 가져온다
- Web Framework(웹 프레임워크)는 웹 서버를 구축하기 위해 만들어진 프레임 워크로, 페이지 구현, DB 관리, 유저 인증, API 서버, Routing(라우팅), 사이트맵, 세션 관리 등 여러 기능들이 들어가 있음 → 이렇게 어떤 목적을 위해 필요한 각 기능들을 보유한 라이브러리를 한데 모아 묶은 것이 프레임워크이다.



#### 3. Django

파이썬 웹 프레임워크

#####  Design Pattern

사용자 인터페이스로부터 프로그램 로직을 분리하여 서로 영향없이 개발 가능함
Django의 디자인 패턴은 **MTV(Model - Template - View)**라고 함
※ 다른 프레임워크는 MVC(Model - View - Controller) 디자인 패턴을 갖고 있음

- **Model** : 프로그램의 데이터 구조를 정의하고 데이터베이스의 기록을 관리함 
- **Template** : 파일의 구조나 레이아웃을 정의함. 표현(Presentation)/ 렌더링(Rendering)이 템플릿의 핵심
- **View** : 요청을 수신하고 응답을 반환함. Model을 통해서 요청에 따른 필요 데이터에 접근. Template을 통해 응답의 서식을 결정함(조작)

![Model, View, Template](https://user-images.githubusercontent.com/93081720/156356726-d0a3712a-48fc-43a8-bf9a-eb91193b7787.png)



##### 장고 설치 시 유의

- 설치 시 버전 유의: `3.2. 버전`을 설치할 것

- 이유? 3.2 버전이 LTS(Long-Term Support)버전이기 때문임
  ※ LTS: 장기간에 걸쳐 지원하도록 고안된 SW버전을 의미함. SW의 수명 주기 관리 정책이며, 배포자는 LTS확정을 통해 장기적, 안정적 지원을 보장함

<div><img src="https://user-images.githubusercontent.com/93081720/156373017-2f982514-c117-4709-b4e7-ca066c9ce1d7.jpg"/></div>

#### 4. 프로젝트 환경 구축 순서

##### 1. 가상환경(venv) 생성 및 활성화

- 가상환경 생성 : `$ python -m venv vevn`
- 가상환경 활성화 : `$ source venv/Scripts/activate`
- 가상환경 파이썬 인터프리터 설정

##### 2. 가상환경에 Django 설치

- django 설치 : `$ pip install django==3.2.12`

- 필요한 모든 패키지 설치 후 freeze: `$ pip freeze > requirements.txt`
  - 다른 환경에서 필요 패키지 설치 : `$ pip install -r requirements.txt`

##### 3. 프로젝트 생성

- 프로젝트 생성 전 `.gitignore` 및 `README.md` 생성하기
- 프로젝트 생성: `$ django-admin startproject <프로젝트명> .`
  - 끝에 있는 `.`은 현재 디렉토리를 의미함. 프로젝트명만 쓸 경우 해당 프로젝트명 디렉토리 아래
    프로젝트명 디렉토리가 생성됨

##### 4. 서버 실행 및 확인

- 서버 실행 및 확인 : `$ python manage.py runserver`
- 서버 끄기 : `ctrl + c`

##### 5. 앱 생성 및 등록

- 어플리케이션 생성 : `$ python manage.py startapp <어플리케이션명>` ,
  								   `$ django-admin startapp <어플리케이션명> `
  - 어플리케이션명은 가급적 복수형으로 명명하는 것을 권장한다.

- 어플리케이션은 반드시 `생성 후 등록`할것
  - settings.py의 INSTALLED_APPS 리스트에 등록을 먼저하면 어플리케이션이 만들어지지 않음
- 어플리케이션을 등록하는 이유? 프로젝트 폴더가 먼저 생성되고, 그 하위에 어플리케이션이 만들어진 구조가 아님. 따라서 프로젝트는 어떤 어플리케이션이 만들어졌는지 알 수 없음(기본 장고 앱 6개만 아는 상태임)

<div><img src= "https://user-images.githubusercontent.com/93081720/156358341-d005a4b0-8d51-4bf7-99d6-192865d8f631.png" /></div>

`# locals apps`, `# third party apps` `# django apps` 순서로 등록

※ 위 그림 리스트 맨 끝 요소에도 `,`콤마가 찍혀있는데, 이를 `trailing comma`라고 부른다. python에서는 쓰지 않지만, django에서는 권장사항이므로 쓰도록하자



#### 5. 코드의 작성 순서

`urls.py` → `views.py` → `template.html`을 순서로 작성한다.

그 이유는 요청 ~ 응답에 이르기까지 data가 흐르는 순서이기 때문이다.



#### 6. urls.py

주소에 따른 요청을 알맞은 view함수로 전달
※ url에서는 주소를 쓸 때 `_`(언더바)보다는 `-`(하이픈)을 쓴다.



#### 7. views.py

요청을 수신하고, 응답을 반환하는 함수를 작성함
Model을 통해 요청에 맞는 필요 데이터에 접근함
Template에 요청에 맞는 응답 서식을 맞기고 불러옴



#### 8. Template

실제 내용을 표현하는 파일,  데이터 표현(presentation)을 제어하는 도구이자 표현과 관련된 로직
어플리케이션 폴더 안 하위 디렉토리로 `templates`폴더를 만들고 그 안에 django html로 저장함

※ django의 설계 철학

- 표현과 로직(view)의 분리: Template 시스템은 표현을 제어하는 도구이자 표현과 관련된 로직일 뿐, 이 기본 목표를 넘어서는 기능은 지원하지 말아야 한다.(템플릿의 핵심은 표현)
- 중복을 배제함: 대다수의 동적 웹사이트는 header, footer, navbar와 같은 공통 디자인을 갖는데, django 템플릿 시스템은 이러한 요소를 한곳에 저장하여 중복을 뱌제한다.(상속의 개념)

##### 1. Django Template Language(DTL)

HTML은 마크업 언어이기 때문에 변수나 반복이 없음
하지만 DTL은 조건, 반복, 변수, 치환, 필터 등의 기능을 제공함
단, HTML에 Python이 적용된 개념이 아니라, 단순히 표현을 위한 것인데 파이썬의 프로그래밍 구조와 비슷함



##### 2. DTL Sytax(DTL 문법)

- 변수(Variable) : `{{ variable }}`
  - 변수명과 중괄호 사이에 스페이스를 양쪽에 한칸씩 써서 띄워씀(스타일 권장사항)
  - 변수명은 영어, 숫자, 언더바의 조합으로 구성하되, 언더바로 시작할 수는 없고, 공백이나 구두점 문자 또한 사용할 수 없다
  - `.`을 사용하여 변수 속성 및 자료형에 따라 인덱스에 접근할 수도 있음
    - 예) `info.name`, `foods.2`
  - render()함수의 세번째 인자로 {'key' : value}로 구성된 딕셔너리 형태로 넘겨주며, 이를 보통 `context`라고 쓴다. 
    - 여기서 정의한 키에 해당하는 문자열이 template에 사용가능한 변수명이 된다.
    - 해당 변수명을 키로하여 결국 value를 불러오는 구조임
    - 권장사항으로 context에 'key'와 value의 이름은 동일하게 맞춘다.
  
- 필터(Filter) : `{{ variable|filter }}`
  - 표시할 변수를 수정할 때 사용함
    - 그러나 사실 변수를 조작한다면 파이썬 코드를 통해 조작을 다 한 상태에서 넘겨받는 게 더 낫다
  - 약 60여개의 built-in template filter가 존재함

- 태그(Tag) : `{% tag %}`
  - 반복, 논리(if/else)를 수행하여 제어흐름을 만드는 등의 복잡한 과정을 수행
  - 일부 태그는 시작과 종료 태그가 필요함
    - `{% if %}{% endif %}` , `{% for %}{% endfor %}`

※ DTL의 주석

-  한줄 주석 : `{# #}`
- 여러 줄 주석 : `{% comment %}{% endcomment %}`



##### 3. Template 상속(inheritance)

코드의 재사용성에 초점을 맞춰 템플릿은 상속이 가능함
템플릿을 상속하면 사이트의 모든 공통 요소를 포함하면서 하위 템플릿이 재정의(오버라이딩) 할 수 있는 블록을 정의한 기본틀을 만들 수 있음(base.html)

상속을 위한 부모 템플릿은 보통 다른 디렉토리에 만드는데, `settings.py`에 TEMPLATE 리스트 안에 있는 딕셔너리에 'DIRS'에 해당하는 값에다가 객체 지향적인 주소를 작성해준다.
예) `'DIRS': [BASE_DIR / 'templates']`
→ 개별 어플리케이션 하위 디렉토리인 templates가 아니라 부모 디렉토리의 templates를 경로로 인식 가능케함

- `{% extends 'base.html' %}`
  - 자식(하위) 템플릿이 부모 템플릿('base.html')을 확장(상속받음)한다는 것을 알림
  - 반드시 템플릿의 최상단에 작성되어야함
- `{% block 블록명 %} {% endblock 블록명 %}`
  - 하위 템플릿에서 재지정할 수 있는 블록
  - 하위 템플릿에 채울 내용을 해당 블록 안에 씀
  - 블록명은 여는 태그 안에 작성하지만, 닫는 태그 안에도 작성하여 명확성을 확보할 수도 있음
- `{% include '_템플릿명.html' %}`
  - 다른 템플릿을 불러와서 현재 페이지에서 표현함(렌더링함)
  - `_`(언더바)는 include되는 템플릿이라는 의미를 분류하기 위함이지, 특수한 기능 및 규칙은 따로 없음



#### 9. Throw & Catch(HTTP request GET관련)



#### 10. URL

웹 어플리케이션은 URL을 통한 client의 request에서부터 시작하므로 중요함

##### Variable Routing

url 주소를 변수로 동적으로 사용하는 것을 말함.
url의 일부를 변수로 지정하여 view함수의 인자로 넘길 수 있음.
변수 값에 따라 urls.py의 하나의 path()에 여러 페이지를 넘길 수 있음

![image-20220304000102439](Django.assets/image-20220304000102439.png)



#### 기타

- 주소(경로)
  - `http://127.0.0.1:8000/주소`
    - 앞에 있는 `http://127.0.0.1:8000/`는 기본 IP 주소
    - 중간에 `:8000`은 포트 번호
    - 주소는 세부 주소를 의미함
- settings.py 설정
  - LANGUAGE_CODE = 'ko-kr'
    - 모든 사용자에게 제공되는 번역을 결정
    - 디폴트 값은 'us-en'
    - USE_I18N = True
  - TIME_ZONE = 'Asia/Seoul'
    - 데이터베이스 연결의 시간대를 나타내는 문자열을 지정함
    - 디폴트 값은 'UTC'
    - USE_TZ = True
- 서버를 실행(run)한 상태에서 스크립트 파일을 수정한 것은 저장 후 새로고침하면 html, css와 마찬가지로
  적용이 가능하지만, 폴더/파일의 생성/변경 등 구조적으로 무엇인가 바뀌었을 때는 서버를 껐다가 켜야함