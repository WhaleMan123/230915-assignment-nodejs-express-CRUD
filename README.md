# Router 나누기 샘플 코드 제작

- GET /
- GET /boards/list
- GET /boards/write
- GET /boards/view
- GET /boards/modify

- POST /boards/write
- POST /boards/modify
- POST /boards/delete

- GET /users/login
- GET /users/join
- POST / users/login
- POST / users/join

# 디렉토리

```
/
| - /npm_modules
| - /src
| --- /board
| ----- /board.route.js
| --- /user
| ----- /user.route.js
| --- index.js
| - /views
| - /public
| - server.js
| - package.json


```

# 패키지 설치

```sh
npm init -y
npm install express nunjucks --> 이런 식으로 여러개의 모듈을 써도 한 번에
다 다운로드 된다.
npm install nunkucks

```

## 글쓰기

```js
const boards = [];
```

# 테일윈드 CSS

이것을 배운 후 활용해서 게시판 만든 것에 적용할 계획임

# controller, service, repository, model or entity

컨트롤러 -> 서비스 -> 레포지토리 -> 모델 or 엔티티

따라서
board.route.js
board.controller.js // 요청과 응답에 대해서 관리해주는 역할
board.service.js // 요청 데이터를 가지고 응답을 해줄 데이터를 가공하는 역할
(로직적인 부분이 들어간다)
board.repository.js // 데이터를 저장하는 역할
board.entity.js // 저장할 데이터의 규격
이것들이 필요하게 된다.

만드는 순서는 아래에서부터 위로 만드는 것이다.(이것이 익숙한 고수의 영역이다)
