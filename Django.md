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
  - models.py를 통해 DB에 쿼리(query)를 요청하여 응답을 반환하는 것이 동적 웹

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



#### 4. 프로젝트 환경 구축 순서

##### 1. 가상환경(venv) 생성 및 활성화

- 가상환경 생성 : `$ python -m venv vevn`

- 가상환경 활성화 : `$ source venv/Scripts/activate`

- 가상환경 파이썬 인터프리터 설정

  ※ 가상환경을 생성하는 이유

  1. 나만의 공간을 따로 만들어 관리 및 유지, 보수의 용이성을 확보하기 위함이며, 문제 발생 시 해당 가상 환경만 없애면 됨
  2. 다른 사람과 공동으로 작업할 때, 똑같은 환경을 유지하면서 작업을 하기 위함

##### 2. 가상환경에 Django 설치

- django 설치 : `$ pip install django==3.2.12`

- ★필요한 모든 패키지 설치 후 freeze ★: `$ pip freeze > requirements.txt`
  - 다른 환경에서 필요 패키지 설치 : `$ pip install -r requirements.txt`

##### 3. 프로젝트 생성

- 프로젝트 생성 전 `.gitignore` 및 `README.md` 생성하기
- 프로젝트 생성: `$ django-admin startproject <프로젝트명> .`
  - 끝에 있는 `.`은 현재 디렉토리를 의미함. 프로젝트명만 쓸 경우 해당 프로젝트명 디렉토리 아래
    프로젝트명 디렉토리가 생성됨

##### 4. 서버 실행 및 확인

- 서버 실행 및 확인 : `$ python manage.py runserver`
  - db.sqlite3 파일 생성됨(model, DB와 관련)

- 서버 끄기 : `ctrl + c`

##### 5. 앱 생성 및 등록

- 어플리케이션 생성 : `$ python manage.py startapp <어플리케이션명>` ,
  								   `$ django-admin startapp <어플리케이션명> `
  - 어플리케이션명은 가급적 `복수형으로 명명`하는 것을 권장한다.

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

**주소에 따른 요청을 알맞은 view함수로 전달**
※ url에서는 주소를 쓸 때 `_`(언더바)보다는 `-`(하이픈)을 쓴다.



#### 7. views.py

**요청을 수신하고, 응답을 반환하는 함수를 작성함**
Model을 통해 요청에 맞는 필요 데이터에 접근함
Template에 요청에 맞는 응답 서식을 맞기고 불러옴



#### 8. Template

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



#### 9. HTTP request

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



#### 10. URL

웹 어플리케이션은 URL을 통한 client의 request에서부터 시작하므로 중요함

##### 1. Variable Routing

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



##### 2. App URL Mapping

urls.py에 사용하는 path()가 많아지면 어플리케이션의 views.py의 함수 또한 많아진다. 또한 어플리케이션도 더 생길 수 있기 때문에 프로젝트 단위에서 urls.py에서 관리하는 것은 유지보수에 있어 좋지 않다. 따라서 각 app에서 urls.py를 작성하여 path()를 관리하게 한다.

 **[프로젝트의 urls.py 수정]**

`from django.urls import include`를 해준 다음, 기존에 views.OOO 이렇게 썼던 부분을
`include('App이름.urls')`로 변경한다. 이는 해당 App의 이름으로 요청된 주소와 일치하는 부분까지 잘라내고, 이후에 이어지는 상세 주소를 그 App의 urls.py 모듈로 넘긴다는 의미이다.

![image](https://user-images.githubusercontent.com/93081720/156593377-dd55a1c4-db0f-4b5d-8c33-0d80c4a21577.png)



**[어플리케이션의 urls.py 작성]**

어플리케이션 폴더에서 urls.py를 만들고 해당 어플리케이션으로 들어오는 상세 주소에 대한 urlpatters를 작성한다. 이 때, 현재 디렉토리에서 views 모듈을 호출하는`from . import views`를 써줘야한다.(함수를 호출해야하니까)

![image](https://user-images.githubusercontent.com/93081720/156594369-49e6fddb-7ecd-4967-ba0a-96b056a062bb.png)



##### 3. Naming URL Pattern

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