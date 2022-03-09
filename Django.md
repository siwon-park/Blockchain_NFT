# Django

### 1. 웹 프레임워크(Web Framework)

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
  - model을 통해 DB에 쿼리(query)를 요청하여 결과를 반환받아 Template과 함께 응답하면 동적 웹

- **Template** : 파일의 구조나 레이아웃을 정의함. 표현(Presentation)/ 렌더링(Rendering)이 템플릿의 핵심
- **View** : 요청을 수신하고 응답을 반환함. Model을 통해서 요청에 따른 필요 데이터에 접근. Template을 통해 응답의 서식을 결정함(조작)
  - 단순히 views.py의 함수와 templates의 템플릿으로 요청에 따른 응답을 한다면 그것은 정적 웹이랑 같음


![Model, View, Template](https://user-images.githubusercontent.com/93081720/156356726-d0a3712a-48fc-43a8-bf9a-eb91193b7787.png)



##### 장고 설치 시 유의

- 설치 시 버전 유의: `3.2. 버전`을 설치할 것
- 이유? 3.2 버전이 LTS(Long-Term Support)버전이기 때문임
  ※ LTS: 장기간에 걸쳐 지원하도록 고안된 SW버전을 의미함. SW의 수명 주기 관리 정책이며, 배포자는 LTS확정을 통해 장기적, 안정적 지원을 보장함



**[django 프레임워크 구조]**

<div><img src="https://user-images.githubusercontent.com/93081720/156373017-2f982514-c117-4709-b4e7-ca066c9ce1d7.jpg"/></div>

- 프로젝트(Project): 어플리케이션(Application; App)의 집합
- 어플리케이션: 실제 요청을 처리하고 응답을 하는 등의 역할을 담당
  앱은 여러 프로젝트에 있을 수도 있으며, 하나의 프로젝트는 여러 앱을 가진다.
  일반적으로 앱은 하나의 역할 및 기능 단위로 작성함



### 2. 프로젝트 환경 구축 순서

모든 과정에서 꼭꼭 오타를 유의할 것!!! 오타 때문에 생각보다 많은 시간을 소비할 때가 많았음

#### 1. 가상환경(venv) 생성 및 활성화

- 가상환경 생성 : `$ python -m venv vevn`

- 가상환경 활성화 : `$ source venv/Scripts/activate`

- 가상환경 파이썬 인터프리터 설정

  ※ 가상환경을 생성하는 이유

  1. 나만의 공간을 따로 만들어 관리 및 유지, 보수의 용이성을 확보하기 위함이며, 문제 발생 시 해당 가상 환경만 없애면 됨
  2. 다른 사람과 공동으로 작업할 때, 똑같은 환경을 유지하면서 작업을 하기 위함

#### 2. 가상환경에 Django 설치

- django 설치 : `$ pip install django==3.2.12`

- ★필요한 모든 패키지 설치 후 freeze ★: `$ pip freeze > requirements.txt`
  - 다른 환경에서 필요 패키지 설치 : `$ pip install -r requirements.txt`

#### 3. 프로젝트 생성

- 프로젝트 생성 전 `.gitignore` 및 `README.md` 생성하기
- 프로젝트 생성: `$ django-admin startproject <프로젝트명> .`
  - 끝에 있는 `.`은 현재 디렉토리를 의미함. 프로젝트명만 쓸 경우 해당 프로젝트명 디렉토리 아래
    프로젝트명 디렉토리가 생성됨

#### 4. 서버 실행 및 확인

- 서버 실행 및 확인 : `$ python manage.py runserver`
  - db.sqlite3 파일 생성됨(model, DB와 관련)

- 서버 끄기 : `ctrl + c`

#### 5. 앱 생성 및 등록

- 어플리케이션 생성 : `$ python manage.py startapp <어플리케이션명>` ,
  								   `$ django-admin startapp <어플리케이션명> `
  - 어플리케이션명은 가급적 `복수형으로 명명`하는 것을 권장한다.

- 어플리케이션은 반드시 `생성 후 등록`할것
  - settings.py의 INSTALLED_APPS 리스트에 등록을 먼저하면 어플리케이션이 만들어지지 않음
- 어플리케이션을 등록하는 이유? 프로젝트 폴더가 먼저 생성되고, 그 하위에 어플리케이션이 만들어진 구조가 아님. 따라서 프로젝트는 어떤 어플리케이션이 만들어졌는지 알 수 없음(기본 장고 앱 6개만 아는 상태임)

<div><img src= "https://user-images.githubusercontent.com/93081720/156358341-d005a4b0-8d51-4bf7-99d6-192865d8f631.png" /></div>

`# locals apps`, `# third party apps` `# django apps` 순서로 등록

※ 위 그림 리스트 맨 끝 요소에도 `,`콤마가 찍혀있는데, 이를 `trailing comma`라고 부른다. python에서는 쓰지 않지만, django에서는 권장사항이므로 쓰도록하자



### 3. 코드의 작성 순서

`urls.py` → `views.py` → `template.html`을 순서로 작성한다.

그 이유는 요청 ~ 응답에 이르기까지 data가 흐르는 순서이기 때문이다.

#### 1. urls.py

**주소에 따른 요청을 알맞은 view함수로 전달**
※ url에서는 주소를 쓸 때 `_`(언더바)보다는 `-`(하이픈)을 쓴다.



#### 2. views.py

**요청을 수신하고, 응답을 반환하는 함수를 작성함**
Model을 통해 요청에 맞는 필요 데이터에 접근함
Template에 요청에 맞는 응답 서식을 맞기고 불러옴



#### 3. Template

**실제 내용을 표현하는 파일,  데이터 표현(presentation)을 제어하는 도구이자 표현과 관련된 로직**
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
  - 커스텀 필터를 함수를 통해 작성하여 필터에 등록 후 임포트해서 사용 가능함(향후 작성)
  
- 태그(Tag) : `{% tag %}`
  - 반복, 논리(if/else)를 수행하여 제어흐름을 만드는 등의 복잡한 과정을 수행
  - 일부 태그는 시작과 종료 태그가 필요함
    - `{% if %}{% endif %}` , `{% for %}{% endfor %}`

※ DTL의 주석

-  한줄 주석 : `{# #}`
   -  예) `{# lorem #}`

-  여러 줄 주석 : `{% comment %}{% endcomment %}`



##### 3. Template 상속(inheritance)

코드의 재사용성에 초점을 맞춰 템플릿은 상속이 가능함
템플릿을 상속하면 사이트의 모든 공통 요소를 포함하면서 하위 템플릿이 재정의(오버라이딩) 할 수 있는 블록을 정의한 기본틀을 만들 수 있음(base.html)

상속을 위한 부모 템플릿은 보통 다른 디렉토리에 만드는데, `settings.py`에 TEMPLATE 리스트 안에 있는 딕셔너리에 'DIRS'에 해당하는 값에다가 `객체 지향적인 주소`를 작성해준다.
예) `'DIRS': [BASE_DIR / 'templates']`
→ 개별 어플리케이션 하위 디렉토리인 templates가 아니라 부모 디렉토리의 templates를 경로로 인식 가능케함

- `{% extends 'base.html' %}`
  - 자식(하위) 템플릿이 부모 템플릿('base.html')을 확장(상속받음)한다는 것을 알림
  - 반드시 템플릿의 최상단에 작성되어야함
- `{% block 블록명 %} {% endblock 블록명 %}`
  - 하위 템플릿에서 재지정할 수 있는 블록
  - 하위 템플릿에 채울 내용을 해당 블록 안에 씀
  - 블록명은 여는 태그 안에 작성하지만, 닫는 태그 안에도 작성하여 명확성을 확보할 수도 있음

**[부모 템플릿]**

아래 그림과 같이 블록태그 외에 모든 것이 자식 템플릿에 상속됨.
`<head>`부분의 블록태그는 자식 템플릿에서 CSS를 개별적으로 활용하기 위해 블록을 준 것임.
반드시 부모에 블록이 있어야 자식도 블록을 쓸 수 있음.
자식 템플릿의 이름이 지정된 블록태그(예- `content`블록 태그) 안에 내용을 쓰면 부모 템플릿의 동일한 이름으로 지정한 블록 부분의 위치에 그 내용이 표현됨
※ 상속받은 부모의 양식을 바탕으로 자식 템플릿에서 표현하는 개념이지, 부모가 바뀌는 건 아님

![image](https://user-images.githubusercontent.com/93081720/156858745-0f9e2188-0147-48ff-b1eb-6a9d6a33ec2c.png)



**[자식 템플릿]**

![image](https://user-images.githubusercontent.com/93081720/156858901-85f0b020-09d8-4cf8-adfa-eee2d455124b.png)



##### 4. Template Tag - `include` 태그

- `{% include '_템플릿명.html' %}`
  - 다른 템플릿을 불러와서(load) 현재 페이지에서 표현함(렌더링함)
  - 한 템플릿 내에서 다른 템플릿을 포함(including)하는 개념임
  - `_`(언더바)는 include되는 템플릿이라는 의미를 분류하기 위함이지, 특수한 기능 및 규칙은 따로 없음



### 4. HTTP request

##### 1. HTTP(HyperText Transfer Protocol)

- HTML 문서와 같은 리소스들을 가져올 수 있도록 해주는 프로토콜(규칙, 규약)

- 웹에서 이루어지는 모든 데이터 교환의 기초

- 요청에 따라 주어진 리소스가 수행할 작업을 나타내는 Request method 정의
  - GET(조회), POST(생성), PUT(수정), DELETE(삭제)



##### 2. Request Object 

- 요청 간의 모든 정보를 담고 있는 변수
- 페이지가 요청되면 django는 요청에 대한 메타 데이터를 포함하는 `HttpRequest`객체를 만들고, 적절한 view함수를 로드해서 객체를 함수의 첫번째 인자로 전달하여 `HttpResponse`객체를 반환함



##### 3. Throw & Catch

[프로젝트 urls.py]

```python
# firstproject/urls.py

urlpatterns = [ 
    path('throw/', views.throw),
	path('catch/', views.catch),
]
```



[어플리케이션 views.py]

```python
def throw(request):
    return render(request, 'throw.html')

def catch(request):
    message = request.GET.get('message') # HTTP GET request method
    context = {
        'message': message,
    }
    return render(request, 'catch.html', context)
```



### 5. URL

웹 어플리케이션은 URL을 통한 client의 request에서부터 시작하므로 중요함

#### 1. Variable Routing

url 주소를 변수로 동적으로 사용하는 것을 말함.
url의 일부를 변수로 지정하여 view함수의 인자로 넘길 수 있음.
변수 값에 따라 urls.py의 하나의 path()에 여러 페이지를 넘길 수 있음

- `<>`을 사용함
- str: 모든 문자열과 매칭(`/`, 비어있는 문자열 제외)
- int: 0 또는 양의 정수와 매칭

**[urls.py]**

![image](https://user-images.githubusercontent.com/93081720/156591374-11eb5015-322c-41c6-a938-59414994f9af.png)

**[views.py]**

![image](https://user-images.githubusercontent.com/93081720/156591967-e59b8708-0759-405c-8e18-8e1376b837e5.png)

**[hello.html]**

![image](https://user-images.githubusercontent.com/93081720/156592219-439e6820-08e4-4b35-b006-ef2476bf5cfd.png)



#### 2. App URL Mapping

urls.py에 사용하는 path()가 많아지면 어플리케이션의 views.py의 함수 또한 많아진다. 또한 어플리케이션도 더 생길 수 있기 때문에 프로젝트 단위에서 urls.py에서 관리하는 것은 유지보수에 있어 좋지 않다. 따라서 각 app에서 urls.py를 작성하여 path()를 관리하게 한다.

 **[프로젝트의 urls.py 수정]**

`from django.urls import include`를 해준 다음, 기존에 views.OOO 이렇게 썼던 부분을
`include('App이름.urls')`로 변경한다. 이는 해당 App의 이름으로 요청된 주소와 일치하는 부분까지 잘라내고, 이후에 이어지는 상세 주소를 그 App의 urls.py 모듈로 넘긴다는 의미이다.

![image](https://user-images.githubusercontent.com/93081720/156593377-dd55a1c4-db0f-4b5d-8c33-0d80c4a21577.png)



**[어플리케이션의 urls.py 작성]**

어플리케이션 폴더에서 urls.py를 만들고 해당 어플리케이션으로 들어오는 상세 주소에 대한 urlpatters를 작성한다. 이 때, 현재 디렉토리에서 views 모듈을 호출하는`from . import views`를 써줘야한다.(함수를 호출해야하니까)

![image](https://user-images.githubusercontent.com/93081720/156594369-49e6fddb-7ecd-4967-ba0a-96b056a062bb.png)



#### 3. Naming URL Pattern

path()함수 안에 `name='index'`, `name='dinner'`와 같이 naming을 하여 template의 html에서
url태그를 활용하여 name의 값을 사용 가능함

**[App의 urls.py]**

![image](https://user-images.githubusercontent.com/93081720/156597275-d28fbcfc-247e-4594-ae1d-457e8a01893a.png)

**[Template의 html]**

![image-20220304003647001](https://user-images.githubusercontent.com/93081720/156602855-4a841b16-9b85-485f-ba09-4f6e852d7f39.png)



#### 11. Namespace

django는 templates, static 등과 같은 폴더를 한 군데에 모아서 보기 때문에 중간에 임의로 폴더를 넣어줘서 어떤 앱의 template, img파일인지 구분해줘야한다. 그렇지 않으면 Namespace 이슈가 발생한다.

##### 1. Template Namespace; 이름이 같은 파일이 각 어플리케이션의 templates에 존재할 경우

- django는 기본적으로 `app_name/templates/` 로 끝나는 경로의 templates파일만 찾을 수 있음 

- 따라서 이름이 같은 `.html` 파일이 각 App의 templates 폴더에 존재할 경우에 django는 settings.py에 INSTALLED_APPS에 등록된 App 순서대로 파일을 찾기 시작하기 때문에, 상단에 있는 apps에 있는 .html파일을 불러온다. → 우리가 필요한건 다른 App의 동일한 이름의 .html인데 이는 문제이다.

**해결법?** 

- 각 app의 templates의 폴더 구조를 `app_name/templates/app_name` 형태로 변경해 공간 생성 및 각 함수에 추가 경로 작성

1. 각 App의 templates폴더 하위에 App명과 동일한 폴더를 만들고 해당 폴더에 기존 templates에 있던 html파일을 옮긴다.

<div><img src="https://user-images.githubusercontent.com/93081720/156600407-8ccaaf5a-295c-45eb-a34f-4b46ce9950f3.png" alt="image" style="zoom: 67%;" /></div>

2. 그 후, 해당 App의 views.py에 있는 함수들의 html 경로를 `'App이름/ooo.html'`과 같이 수정한다.
   - 우리가 그동안 `.html`이라고 쓴 것은 파일명을 쓴 것이 아니라 사실 경로에 있는 파일명을 쓴 것이며, 경로의 일부가 단지 생략되었을 뿐이다. → '(app_name/templates/)index.html'

![image](https://user-images.githubusercontent.com/93081720/156599326-5fd32396-0067-44eb-9e54-8a472a95cf4d.png)



##### 2. URL Namespace; 템플릿에서 다른 어플리케이션의 동일한 이름의 html을 불러오고 싶을 경우

1. App의 urls.py에 `app_name='App명'`을 작성한다.(변수명을 app_name이라고 쓰는 것은 규칙)

![image](https://user-images.githubusercontent.com/93081720/156601435-0494a9bd-3f38-493b-a581-94e7b85708af.png)

2.  각 template(.html)의 url 태그에 있는 url을 `'App명:지정한name'`형태로 수정한다.
   단, 이 때 해당 url로 call되는 모든 url태그의 url을 이런 형식으로 수정해줘야 오류 및 충돌이 나지 않음

※ app_name을 urls.py에 쓰는 이유?
우리가 어떤 사람과 처음 만났을 때 서로의 이름을 먼저 이야기하듯이, app도 마찬가지로 프로젝트의 urls.py에서 해당 앱에 해당하는 주소를 넘겨받아 왔을 때, 앱 자신의 이름을 먼저 이야기한다고 이해 		

예) articles앱의 index.html에서 page앱의 index를 url로 호출

![image-20220304005854625](https://user-images.githubusercontent.com/93081720/156602972-54f237ac-f0ea-45b8-8d9e-d8c322f70f96.png)



#### 12. Static files(정적 파일)

응답 시 별도의 처리 없이 파일 내용을 그대로 보여주면 되는 파일, 사용자의 요청에 따라 내용이 바뀌는 것이 아니라 요청한 것을 그대로 보여주는 파일(서버에 존재하는 정적 자원) → 이미지, CSS, JS 파일 등

기본 경로는 `app_name/static/`이나 어플리케이션이 여러 개일 경우 역시 Namespace이슈가 발생할 수 있기 때문에,  `app_name/static/app_name`의 디렉토리 구조로 static파일을 저장함

![image](https://user-images.githubusercontent.com/93081720/156861289-3458d016-4dc6-4dbb-8bbb-49e3fd918578.png)

##### 1. STATIC_URL

- `STATIC_ROOT`에 있는 정적 파일을 참조할 때 사용할 URL, 기본값은 '`/static/`'
  - 실제 파일이나 디렉토리가 아니며, URL로만 존재 → 이미지에 대한 url이라고 보면 됨.
    예) `http://127.0.0.1:8000/static/app_name/sample.png`
  - 비어 있지 않은 값으로 설정 한다면 반드시 `/`로 끝나야 함(end slash 규칙)

- 개발 단계에서는 실제 정적 파일들이 저장되어 있는 기본 경로(`app_name/static/`)  및STATICFILES_DIRS에 정의된 추가 경로들에서 탐색함



##### 2. STATICFILES_DIRS

- 기본 경로(`app_name/static/`) 외에 추가적인 정적 파일 경로 목록을 정의하는 리스트

- 추가 파일 디렉토리에 대한 전체 경로를 포함하는 문자열 목록, 객체형식 주소로 작성되어야 함

- 직접 작성해야하는 부분으로 오타 조심



##### 3. STATIC_ROOT

- 프로젝트에서 사용하는 모든 정적 파일을 한 곳에 모아 넣는 경로
- `collectstatic`(명령어)이 배포를 위해 정적 파일을 수집하는 디렉토리의 절대 경로
  `$ python manage.py collectstatic` :프로젝트 배포 시 흩어져있는 정적 파일들을 모아 특정 디렉토리로 옮기는 작업을 수행함

- settings.py의 DEBUG = True일 경우 유효하지 않음
- `STATICFILES_DIR`과 마찬가지로 직접 작성해야하는 부분

```python
# settings.py

STATIC_ROOT = BASE_DIR / 'staticfiles'
```

- STATIC_ROOT 설정 이후, 터미널에서 collectstatic 명령어 수행



**[적용]**

static 파일을 html에서 불러오기 위해서는 static태그`{% static '' %}`를 사용해야한다.
그런데 static태그를 사용하기위해서는 그전에 load태그`{% load static %}`를 반드시 써줘야한다.
url태그와 헷갈리지 않게 주의!

![image](https://user-images.githubusercontent.com/93081720/156863088-ef2167fd-8ae0-45cc-8189-4bf5e047453f.png)

```html
<!-- base.html -->

<head>
  {% block css %}{% endblock %}
</head>
```

```css
/* static/style.css */

h1 {
    color: royalblue;
}
```



### Model

웹 어플리케이션의 데이터를 구조화하고 조작하기 위한 도구

- Django는 Model을 통해 데이터 베이스에 접속하고 관리함
- 저장된 데이터 베이스(DB)의 구조(Layout)이며, 구조화/통합된 데이터에 대한 정보를 가짐
  - 사용자가 사용/저장하는 데이터들의 필수 필드와 관련된 동작을 포함함
- 일반적으로 각각의 Model은 하나의 DB 테이블(Table)에 맵핑됨
  - django에서는 파이썬의 Class를 활용함



### Data Base

체계화된 데이터들의 모임, 집합

#### 1. 쿼리(Query)

- 데이터를 조회하거나, 조건에 맞는 데이터를 추출/조작하는 명령어
- "Query를 날린다" == "DB를 조작한다"
- SQL(Structured Query Language): RDB(관계형 데이터 베이스)를 조작하기 위해 구조화된 쿼리 언어



#### 2. 구조(Structure)

##### 1. 스키마(Schema)

- DB의 구조와 제약 조건(자료의 구조, 타입, 표현 방법, 관계 등)에 대한 전반적인 **명세**를 기술한 것
  - 저장하려는 데이터들의 메타 정보, 명세서; 이런 데이터들을 이렇게 저장할 것이다라고 명명
- 스키마를 먼저 작성한 후 데이터 테이블을 작성하기 시작한다.

##### 2. 테이블(Table)

열/행의 형식을 사용해 조직된 데이터 요소들의 집합. **django에서는 클래스가 하나의 데이터 테이블**

- 열(column): 필드(field), 속성
  - id(pk), name, age, phone, email 등의 속성
  - 열에는 각 속성, 필드에 해당하는 값들만 저장됨
    - 예) age열에는 나이에 해당하는 정수값만 저장됨
  - **파이썬 클래스를 정의하면서 클래스 속성(멤버)를 정의**
    - 클래스의 멤버가 테이터 테이블의 속성이 됨
- 행(row): 레코드(record)
  - 실제 데이터는 행별로 저장된다
    - 각 사용자별 모든 항목에 대한 데이터
  - **파이썬 클래스 인스턴스 생성**
    - 인스턴스가 하나의 데이터 셋이 됨
- pk(primary key) 또는 id
  - 각 행(레코드)의 고유값(중복 x)으로, 반드시 설정해야하며, DB관리 및 관계 설정 시 주요하게 활용

| pk   | name  | age  | phone             |
| ---- | ----- | ---- | ----------------- |
| 1    | SIWON | 30   | 010 - 1234 - 5678 |
| 2    | KIM   | 25   | 011 - 1234 - 8839 |
| 3    | LEE   | 28   | 010 - 2424 - 4545 |



※ DBMS(Data Base Management System): DB를 관리하기 위한 서버 및 프로그램



### ORM(Object-Relational-Mapping)

객체 지향 프로그래밍 언어(OOP)를 사용하여, 서로 호환되지 않는 유형의 시스템(Django- SQL) 간에 데이터를 변환하는 프로그래밍 기술을 말함 → **DB를 객체로 조작하기 위해 ORM을 쓴다**
Django는 내장 django ORM을 사용함

![image](https://user-images.githubusercontent.com/93081720/157417164-56aeb626-fc38-48e6-b1de-b803a967973f.png)

- 장점
  - SQL을 잘 알지 못해도 사용하는 OOP언어만 알고 있으면 사용 가능함
  - SQL의 절차적 접근이 아닌 객체 지향적 접근으로 인한 높은 생산성
    - 현대 웹 프레임워크의 요점은 웹 개발 속도를 높이는 것(높은 생산성)
- 단점
  - ORM만으로 완전한 서비스를 구현하기 어려운 경우가 있음



### models.py

models.py에 작성하는 모든 클래스들은 각각의 모델들이며,
각 모델들은 django.db의 models의 Model 클래스의 서브 클래스로 표현된다

![image](https://user-images.githubusercontent.com/93081720/157382940-8d3e85e5-dcaf-4b8f-af3c-2b23e1272e6c.png)

- 클래스를 정의하는 것은 어떤 타입의 DB칼럼을 정의할 것인지 정의하는 것과 같음
  => 클래스 속성이 데이터 테이블의 열에 맵핑되기 때문
  - 위 그림에서 title, content, created_at, updated_at은 모델의 field이자, DB의 칼럼이 됨
- `CharField(max_length=None, **options)`
  - 길이에 제한이 있는 문자열을 데이터 값으로 넣을 때 사용(따라서 max_length는 필수 인자임)
- `TextField(**options)`
  - 글자 수가 많을 때 사용함
  - max_length 옵션 작성 시 html의 textarea위젯에는 반영이 되지만 모델과 DB에서는 적용 X
- `DateTimeField(**options)`
  - (DateTimeField는 DateField의 서브 클래스임)
  - auto_now_add: 최초 생성 일자; True일 경우, 최초 생성 일자를 기록함
  - auto_now: 최종 수정 일자; True일 경우




#### Migrations

django가 model에 생긴 변화를 반영하는 방법

[명령어]

##### 1. makemigrations(★)

- 모델에 반영한 것에 기반한 새로운 마이그레이션(=설계도)을 만들 때 사용

- `$ python manage.py makemigrations` : migration파일 생성
  - app명/migrations/0001_initial.py 생성됨

##### 2. migrate(★)

- 마이그레이션을 DB에 반영하기 위해 사용함(=설계도를 실제 DB에 반영하는 과정)
- 모델의 변경 사항들과 DB의 스키마를 동기화

- `$ python manage.py migrate <app이름>` : migrate실행(model과 DB의 동기화)
  - app이 여러 개일 경우 migrate 뒤에 app이름을 명명해줘야 명령이 실행됨

##### 3. sqlmigrate

- 마이그레이션에 대한 SQL구문을 볼 수 있음
- 마이그레이션이 SQL문으로 어떻게 해석되어 동작할지 미리 확인 가능함
- `$ python manage.py sqlmigrate <app이름> <migration 번호>`
  - 예) python manage.py sqlmigrate articles 0001

##### 4. showmigrations

- 프로젝트 전체의 마이그레이션 상태를 확인하기 위해 사용하며, 마이그레이션 파일들이 migrate됐는지 여부를 확인 할 수 있음
- `$ python manage.py showmigrations`
  - 실행하면 네모 박스 안에 X표시된 아이콘이 마이그레이션 파일 앞에 있는데, 이는 migrate되었다는 체크표시임



### DB API

DB를 조작하기 위한 도구

Django가 기본적으로 ORM을 제공함에 따른 것으로 DB를 편하게 조작할 수 있도록 도와줌.
Model을 만들면 django는 객체들을 만들고, 읽고, 수정하고 지울 수 있는 database-abstract API(혹은 database-access API)를 자동으로 만듦

※ DB API 구문 테스트는 `$ python manage.py shell_plus`를 하여 진행한다.

#### DB API 구문

![image](https://user-images.githubusercontent.com/93081720/157427156-66c8f17d-2ed9-4475-a5d7-5a00f254b51c.png)

- `Class Name`: models.py 파이썬 클래스에서 정의한 클래스 명

- `Manager`: Django 모델에 DB query 작업이 제공되는 인터페이스
  기본적으로 모든 django 모델 클래스에 `objects`라는 manager를 추가(objects 복수형 유의!)

- `QuerySet API`: DB로부터 조회, 필터, 정렬 등의 요청을 하는 명령어
  QuerySet API method는 크게 2가지로 분류 →
  1. 새로운 쿼리셋을 반환하는 메서드
  2. 반환이 없는 메서드 

  - `all()`: 모든 쿼리셋을 가져와라(조회)
  - `get(조건)`: 특정 조건에 부합하는 쿼리셋을 1개만 조회(고유성을 보장하는 조회에서만 사용)
  - `filter(조건)`: 특정 조건에 부합하는 쿼리셋들을 조회함
  - `create(*args)`: 쿼리셋 데이터를 생성해라
  - `delete()`: 쿼리셋을 삭제함

  ※ QuerySet: DB로 부터 전달받은 객체 목록, queryset안의 객체는 0개 이상임

  ※ [장고 공식 쿼리셋 레퍼런스](https://docs.djangoproject.com/en/3.2/ref/models/querysets/)



### CRUD

컴퓨터 소프트웨어가 기본적으로 가지는 데이터 처리 기능 Create(생성), Read(읽기), Update(갱신), Delete(삭제)를 묶어 부르는 말

#### 1. Create

※ 기본적으로 pk(혹은 id)값은 따로 지정하지 않을 경우 save를 하여 DB에 반영되는 순간, 번호값을 부여받아 생성됨

##### 첫번째 방법 - 인스턴스 생성 후 인스턴스 변수 변경

```python
>>> article = Article() # Article클래스의 article 인스턴스 생성
>>> article.title = 'first'
>>> article.content = 'django!'
>>> article.save() # 반드시 save메서드로 save를 해줘야함
```



##### 두번째 방법 - 초기값과 함께 인스턴스 생성

```python
# Article클래스의 article 인스턴스를 생성하면서 기본값을 부여함
>>> article = Article(title="second", content="django!!")
>>> article.save() # save하여 DB에 저장
```



##### 세번째 방법 - QuertSet API `create()`사용

```python
>>> Article.objects.create(title="third", content="django!") # 바로 저장됨
```

※ **save 메서드**(`save()`)
객체를 DB에 저장하는 메서드
데이터 생성 시 save를 하기 전에는 객체의 id값이 무엇인지 알 수 없음 → id값은 DB에서 계산되기 때문
**모델을 인스턴스화 하는 것은 DB에 영향을 미치는 행동이 아니므로 반영을 위해선 반드시 save가 필요함**



#### 2. Read

QuerySet API method를 사용해 다양한 방식으로 조회가 가능함.

- `all()`: 현재 모든 쿼리셋을 반환

  - `ClassName.objects.all()`

- `get()`: 주어진 조건과 일치하는 객체를 반환함(1개)

  - 객체를 찾을 수 없으면 `DoesNotExist` 예외 발생
  - 둘 이상의 객체를 찾으면 `MultipleObjectsReturned` 예외 발생
  - 따라서 pk값과 같이 유일성(uniqueness)이 보장되는 조건이어야함
  - `ClassName.objects.get(pk=1)`

- `filter()`: 주어진 조건과 일치하는 쿼리셋(들)을 반환함

  - `ClassName.objects.filter(content='django!')`

  

#### 3. Update

- 인스턴스의 변수값을 변경하고 save()



#### 4. Delete

- `인스턴스.delete()` 또는 `ClassName.objects.get(pk=int).delete()`
- 쿼리셋을 삭제하고 삭제된 객체 수와 객체 유형당 삭제 수가 포함된 딕셔너리를 반환함



#### 5. Field Lookups

`get()`, `filter()`를 통한 조회 시 검색 조건을 줄 수 있음

예시)

- `ClassName.objects.filter(pk__gt=2)` → pk값이 2보다 큰 객체를 반환해라

- `ClassName.objects.filter(content__contains='ja')` → content에 'ja'가 포함된 객체를 반환



### Admin Site

- 서버의 관리자가 활용하기 위한 페이지
  - record 생성 여부 확인에 매우 유용하며, 직접 record를 삽입할 수도 있음

- models.py의 클래스를 admin.py에 등록하고 관리함

#### 1. admin 생성

- 관리자 계정 생성: `$ python manage.py createsuperuser`
  - 주의) auth에 관련된 기본 테이블이 생성되지 않으면 관리자 계정을 생성할 수 없음
    - django.contrib.auth이 django 기본 앱으로 등록되어 있어 이상한 짓만 하지 않으면 괜찮음 



#### 2. admin 등록

- admin.py 파일 생성
  - 만든 model을 보기 위해서는 admin.py에 해당 내용을 작성해서 django admin 서버에 등록해야함
  - admin.py는 admin site에 내가 만든 model이 관리자 인터페이스를 가지고 있다고 알리는 것임
- `from django.contrib import admin`
- `from .models import ClassName` : 현재 app의 models에서 클래스를 import
  - `.models`는 django만의 명시적 표기임
- `admin.site.register(ClassName, **options)`: admin stie에 model을 등록하겠다 

![image](https://user-images.githubusercontent.com/93081720/157456206-edf63d97-2cdd-4452-9c31-31f0fd76e0b6.png)

#####  ※ admin options

admin.py에 admin.ModelAdmin을 상속하는 클래스를 만들어서 옵션을 정의한 다음, register을 할 때, 클래스명 다음에 넣음 예) admin.site.register(Article, ArticleAdmin)

[ModelAdimin options](https://docs.djangoproject.com/en/3.2/ref/contrib/admin/#modeladmin-options)

- `list_display`
  - models.py에 정의한 클래스에 있는 각각의 속성들과 그에 따른 값을 admin site에 출력하게 설정
- `list_filter`
  - 지정한 속성값에 필터링 기능을 추가함
- `list_display_links`
  - 지정한 속성값이 하이퍼링크를 갖게 함



### HTTP method

#### 1. GET

- 특정 리소스를 가져오도록 요청할 때 사용
- 단, 반드시 데이터를 가져올 때만 사용해야함
- DB에 변화를 주지 않음
- CRUD에서 R 역할을 담당



#### 2. POST

- 서버로 데이터를 전송할 때 사용
- 데이터를 생성/변경하기 위해 HTTP의 body에 담아 전송함
- DB/서버에 변경사항을 만듦
- CRUD에서 C, U, D 역할을 담당



#### ※ 사이트 간 요청 위조(CSRF; Cross-Site Request Forgery)

- 웹 어플리케이션의 취약점 중 하나로 사용자가 자신의 의지와 무관하게 해커가 의도한 행동을 하여 특정 웹 페이지를 보안에 취약하게 하거나 수정 및 삭제 등의 작업을 하게 끔 만드는 공격 방법

- Django에서는 CSRF에 대항하기 위해 Middleware와 CSRF token template tag를 제공함
- Middleware
  - 공통 서비스 및 기능을 앱에 제공하는 소프트웨어
  - 데이터 관리, 앱 서비스, 인증 및 API관리를 주로 미들웨어를 통해서 처리함
  - 개발자들이 앱을 보다 효율적으로 구축할 수 있도록 지원하며, 앱과 데이터 및 사용자 사이를 연결하는 요소처럼 작동함
- CSRF Token
  - 사용자의 데이터에 임의의 난수 값을 부여해, 매 요청마다 해당 난수 값을 포함하여 전송하도록 함
  - 이후 서버에서 요청을 받을 때마다 전달된 토큰값이 유효한지 검증
  - GET을  제외한, 데이터 변경이 가능한 POST, DELETE 메서드 등에 적용

-  `{% csrf_token %}`
  - from 태그 밑에 작성하여 form 태그 안의 label, input에 대해 csrf 방어를 적용함
  - input type이 hidden으로 작성되며, value값은 해시(hash)값으로 설정됨
  - 만약 해당 태그 없이 요청을 보낸다면 django 서버에서 403 forbidden을 응답함



#### ※ redirect()

우리가 어떤 웹 페이지에서 행동을 하고나서 다른 웹 페이지로 이동시키고자 설계를 할 때, 단순히 render를 쓴다면 다른 웹 페이지로 이동하는 것이 아니라 해당 웹 페이지에 머물러 있고 화면만 해당 웹 페이지의 views함수를 통해서 다른 웹 페이지를 표현한 것을 보여줌 => 머무르고 있는 해당 웹 페이지의 views함수의 데이터로 이동하고자 하는 웹 페이지를 표현하고 있음

물론 여기서 이동하고자 하는 웹 페이지의 views함수와 마찬가지로 똑같이 데이터를 조작하게 현재 웹 페이지의 views함수를 수정하면 되지만, 그것은 너무 비효율적이고 하드 코딩임

따라서 우리는 이 문제를 간단히 해결하기 위해 redirect를 사용함

- `redirect()`
  - 해당 URL로 요청을 다시 보냄. 브라우저는 현재 경로에 따라 전체 URL 자체를 재구성(reconstruct)
  - urlpattern name이나 view object, model, 절대 경로, 상대 경로가 인자로 사용 가능함

**[app의 urls.py 수정]**

![image](https://user-images.githubusercontent.com/93081720/157469194-a8c5225b-e55c-4a92-98cb-1031446326f0.png)

**[app의 views.py 수정]**

![image](https://user-images.githubusercontent.com/93081720/157469924-27d34a35-429d-4cf4-8669-778bee10ef4e.png)



#### 기타

- django의 기본 규칙
  - trailing comma(`,`) → 시퀀스 자료형에서 파이썬과 달리 마지막 요소에도 콤마(`,`)를 붙임
  - end slash(`/`) → 각 경로의 끝은 슬래시로 끝남

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
      - django의 번역 시스템 활성화 유무 결정
  - TIME_ZONE = 'Asia/Seoul'
    - 데이터베이스 연결의 시간대를 나타내는 문자열을 지정함
    - 디폴트 값은 'UTC'
    - USE_TZ = True
      - datetimes가 기본적으로 시간대를 인식하는지 여부 결정
  - `DEBUG = True/False`
    - 개발 단계: `DEBUG = True` → 에러 발생 시, 에러 화면을 보여주는데, 코드가 노출됨(보안)
    - 배포 단계: `DEBUG = False` → 에러 시 이용자에게 에러 메시지만 나오는 화면을 보여줌
      - `ALLOWED_HOSTS = []`에 값을 넣어야 False로 변경 가능
- 서버를 실행(run)한 상태에서 스크립트 파일을 수정한 것은 저장 후 새로고침하면 html, css와 마찬가지로
  적용이 가능하지만, 폴더/파일의 생성/변경 등 구조적으로 무엇인가 바뀌었을 때는 서버를 껐다가 켜야함

- Django shell
  - 일반 python shell을 통해선 django 프로젝트 환경에 접근할 수 없음. 그래서 django 프로젝트 설정이 load된 python shell을 통해 DB API 구문 테스트를 진행해야함
  - 설치
    - `$ pip install ipython`
    - `$ pip install django-extensions`
      ※ django-extensions는 반드시 `settings.py`의 `INSTALLED_APPS`에 `django_extensions`로 등록해줘야함(등록시 하이픈(`-`) → 언더바(`_`) 유의!!)
  - 실행
    - `$ python manage.py shell_plus`
    - `.py`파일을 수정하였다면 반드시 shell_plus를 재시작해야 반영된 것을 실행시킬 수 있음