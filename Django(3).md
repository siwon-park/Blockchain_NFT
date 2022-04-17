# DB - 모델 관계(model relationship)

## 01. foreign key(외래 키)

### 01. 개념

- 관계형 데이터베이스에서 한 테이블의 필드 중 다른 테이블의 행을 식별할 수 있는 키
- 참조되는 테이블(부모 테이블)의 기본 키(Primary key)를 가르킴
- 참조하는 테이블의 외래 키는 참조되는 테이블 행 1개에 대응됨
- **1:N 관계에서 외래 키는 N의 역할을 하는 테이블쪽에서 갖고 있음**
  - 참조하는 테이블의 행 여러 개가 참조되는 테이블의 동일한 행을 참조할 수 있음



### 02. 특징

- 키를 사용하여 부모 테이블(참조되는 테이블)의 유일한 값을 참조함(참조 무결성 원칙)

- 외래 키의 값이 반드시 부모 테이블의 기본 키일 필요는 없지만 유일한 값이어야 함

※ 참조 무결성

데이터베이스 관계 모델에서 관련된 2개의 테이블 간의 일관성을 말함



### 03. ForeignKey Field

Many-to-one relationship(N:1관계)

`models.ForeignKey(참조하려는 모델, on_delete 옵션)`

![image](https://user-images.githubusercontent.com/93081720/163208777-a13808de-1f8f-409a-be15-f7fdb31996ef.png)

#### on_delete 옵션

- 외래 키가 참조하는 객체가 사라졌을 때 외래 키를 가진 객체를 어떻게 처리할 것인지 정의

- 데이터 무결성(Database Integrity)을 위해서 매우 중요한 설정
  - CASCADE : 부모 객체(참조되는 객체)가 삭제 됐을 때 이를 참조하는 객체도 삭제


※ 데이터 무결성(Database Integrity)

데이터의 정확성과 일관성을 유지하고 보증하는 것을 가리키며, DB와 RDBMS의 중요한 기능

- 개체 무결성(Entity Integrity)
  - PK개념과 관련 => 모든 테이블이 PK를 가져야 하며 PK로 선택된 열은 고유한 값이어야 하고 빈값은 허용하지 않음

- 참조 무결성(Referential Integrity)
  - FK 개념과 관련 => FK의 값이 데이터베이스의 특정 테이블의 PK값을 참조함



#### 특징

ForeignKey는 makemigrations을 하면 테이블의 끝에 만들어짐

ForeignKey는 migrate되고 나면 **참조되는 객체의 소문자 단수형_id** 형태로 만들어짐

예) abcd -> abcd_id (만약 abcd_id로 만든다면 ForeignKey는 abcd_id_id로 만들어짐)

※ 단수형을 쓰는 이유?

- 누구를 참조하는지 모델 명을 알 수 있음

- 1:N에서 1을 참조하는 개념이기 때문에 단수형을 씀



### 04. 1:N 관계 related manager

#### 역참조(참조되는 쪽에서 참조하는 쪽으로 참조하는 것) - `comment_set`

예) Article(1) → Comment(N)

- article`.comment_set`형태로 사용하며 `comment_set`은 manager역할을 함

  - `참조하는 클래스명_set` 형태의 manager를 활용

- 게시글에 몇 개의 댓글이 작성되었는지 모름

  - article에 comment가 있을 수도 있고 없을 수도 있음

  - 또한 실제로 Article 클래스는 참조되는 클래스이기 때문에 Comment와의 어떠한 관계도 작성되어 있지 않음

  - article`.comment_set`.all() => 1:N 관계에서의 역참조라는 것을 명시적으로 알 수 있음

    article`.comments`.all() => 1:N, M:N 어떤 관계에 해당하는 것인지 알기 힘들다

※ related_name 속성 - 역참조 시 사용할 이름(model_set manager)의 이름을 변경할 수 있는 옵션

![image](https://user-images.githubusercontent.com/93081720/163698245-88bbd3f0-1560-4757-9eaf-c027d7c7c7ef.png)

위 예시와 같이 변경 시 article.comment_set 사용 불가. article.comments로 역참조를 해야함(migration과정 필요)



#### 참조

예) Comment(N) → Article(1)

- 댓글의 경우, 어떠한 댓글이든 반드시 자신이 참조하고 있는 게시글이 존재하기 때문에 comment.article과 같은 형태로 접근할 수 있음

  - comment`.article_id` = article.pk

  - **comment`.article` = article (권장)**

----

## 02. 댓글 기능 구현

댓글 기능은 게시판의 기능 중 하나이므로 게시판 앱에서 작성한다.

### 00. 공통 - ulrs.py 추가

![image](https://user-images.githubusercontent.com/93081720/163213632-62a56d13-ea2a-4daa-aa2a-f78f092152a0.png)

### 01. CommentForm 작성

![image](https://user-images.githubusercontent.com/93081720/163212339-24fc773c-c1cb-4a00-8238-0c8ca20a774d.png)



### 02. articles의 detail 수정(views함수, template)

![image](https://user-images.githubusercontent.com/93081720/163212789-f1e2ec9e-a811-4b64-862b-1559458e6b44.png)

comments를 통해 Comment Read 구현

![image](https://user-images.githubusercontent.com/93081720/163213259-b3c3ecac-8e35-42a0-bfcf-a08208e65aa7.png)



### 03. Comment Create

![image](https://user-images.githubusercontent.com/93081720/163213854-9aff5493-a6f6-4107-a6d0-4c2c55aa9e7c.png)

- #### save(`commit=False`)

  - 인스턴스를 만들지만, DB에 저장은 하지 않음(아직 DB에 저장되지 않은 인스턴스를 반환)
  - 저장하기 전에 객체에 대한 사용자 지정 처리를 수행할 때 유용하게 사용
  - 기본값은 True



### 04. Comment Delete

- detail 템플릿 수정/추가

![image](https://user-images.githubusercontent.com/93081720/163214860-dff56b30-7767-4af6-ad57-0c670d7c1d88.png)

- delete 함수 작성

![image](https://user-images.githubusercontent.com/93081720/163215172-a6de5b31-5cdc-412e-bae5-3ca78ce9400d.png)



---

## 02. Customizing Authentication in Django

### 01. User 모델 대체하기

일부 프로젝트에서는 Django의 내장 User모델에서 제공하는 인증 요구사항이 적절하지 않을 수 있음

예) username 대신 email을 식별 토큰으로 사용하는 것이 더 적합한 경우

##### `AUTH_USER_MODEL`을 통해 기본 내장 user model을 재정의(override) 가능

Django에서는 커스텀 유저 모델을 설정하는 것을 강력하게 권장함

**※ 프로젝트의 모든 migrations, 첫 migrate를 하기 전에 이 작업을 마치고 시작해야함**

=> 그만큼 중요하며, 프로젝트가 진행되는 동안 변경이 매우 어려우므로, DB 모델링을 하는데에 엄청난 시간과 공수를 들이는 것임

 => 프로젝트가 진행되는 중간에 변경이 매우 어려운 이유는 모델 관계에 영향을 미치기 때문



#### 02. AUTH_USER_MODEL

User를 나타내는데 사용하는 모델

- 기본 값: 'auth.User' (auth앱의 User 모델을 의미)



##### 01. accounts.models.py에 모델 정의

AbstractUser를 상속받아 새로운 User모델 작성

![image](https://user-images.githubusercontent.com/93081720/163217087-cd0a9ee2-9e84-49c3-bb74-5f796fc26164.png)

##### 02. settings.py에 추가

accounts 앱의 User 모델을 사용하겠다고 설정

![image](https://user-images.githubusercontent.com/93081720/163216758-ac72baec-8336-4762-b1df-c5dbf631fc58.png)

##### 03. admin site에 Custom User 모델 등록

![image](https://user-images.githubusercontent.com/93081720/163217493-e74101da-0c59-4c94-8ca5-ef145485a20b.png)

##### 04. makemigrations & migrate 

- 만약 프로젝트 중간에 변경했다면 데이터 베이스 초기화 후 migrate진행

  - 데이터 베이스 초기화 방법

    - db.sqlite3 파일 삭제

    - migrations 파일 모두 삭제(파일명에 숫자가 붙은 파일만 삭제)


---

### 02. Custom User Form

기존 내장 UserModelForm을 썼다면 Form에 대해서도 커스텀 필요 => 왜냐하면 UserCreationForm, UserChangeForm은 기존 내장 ModelForm인데, Meta 클래스에서 참조하고 있는 모델이 Django의 기본 User 모델이기 때문이다.

##### 01. UserCreationForm, UserChangeForm을 상속받아 커스텀 Form 작성

Meta 클래스도 역시 UserCreationForm.Meta, UserChangeForm.Meta를 상속받아야함

![image](https://user-images.githubusercontent.com/93081720/163698471-5b1c67db-6929-4f2b-823e-c12797e231c2.png)

##### 02. signup view함수 수정

![image](https://user-images.githubusercontent.com/93081720/163219728-455536f8-e318-48f4-bba0-05c6097f447d.png)



#### get_user_model()

- 현재 프로젝트에서 활성화된 사용자 모델(active user model)을 반환함
  - User 모델을 커스터마이징했다면 커스터마이징한 User 모델을 반환함
- 따라서 Django에서는 User 클래스를 직접 참조하지 말고 django.contrib.auth.get_user_model()을 사용해야함을 강조함
  - User모델을 직접 참조하면 커스터마이징한 User 모델이 아니기 때문에 유의해야함 

---

### 03. 1:N 관계 설정

- User(1) - Article(N) => 사용자는 여러 개의 게시글을 작성 가능함
- User(1) - Comment(N) => 사용자는 여러 개의 댓글을 작성 가능함

#### 01. User모델 참조하기

- ##### settings.AUTH_USER_MODEL

  - 리턴값: str
  - **models.py의 User 모델을 참조할 때 사용**

![image](https://user-images.githubusercontent.com/93081720/163221970-e2d240cf-4b1a-4b36-bbf7-fd40fa8944f6.png)

- ##### get_user_model()

  - 리턴값: User Object
  - **models.py가 아닌 곳에서 User모델을 참조할 때 사용**

![image](https://user-images.githubusercontent.com/93081720/163221500-d8b98f99-c3ae-4d5f-9b2c-67a0cd3d0e3f.png)



