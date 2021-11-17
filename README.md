# 문동환 201840116
\

패키지 제이슨 오타 수정

## [11월 10일]
- 영화제목 출력을 위한 코드수정  
(detail.js)
```javascript
render() {
    const{location} = this.props;
      return <span>{location.state.title}</span>;
```
영화 데이터가 들어있는 location.state에서 받아서 출력한다.

---

- 영화 정보가 없을때 나타나는 오류 코드수정  
(detail.js)
```javascript
render() {
    const{location} = this.props;
    if(location.state){
      return <span>{location.state.title}</span>;
    }else{
      return null;
    }
```
---
- 깃허브 배포를 위한 홈페이지 주소. "https://RLARN.github.io/clon"
- package.json 수정
```javascript
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
```
- 영화앱 배포 과정에서 오류가 발생한다. (cmd)
```javascript
npm run deploy
> movie_app_2021-4@0.1.0 predeploy
> npm rub build
Unknown command: "rub"
```
rub 는 입력한적도 없는데 언노운 커맨드라고 표시된다. 인터넷에 검색해도 나오지 않는다.

---
\
---
## [11월 3일]
- Navigation.css 생성후, 코드 작성
(코드생략)
---
- Navigation.js 에 'css' import  
div 'className' add

(Navigation.js)
```javascript
import React from "react";
import './Navigation.css'

function Navigation(){

    return(
        <div className="nav">
            <a href="/">Home</a>
            <a href="/about">About</a>
        </div>
    )
}
```
---
- route props 작성  

라우팅 대상이 되는 컴포넌트에 넘겨주는 기본 props다.  

라우트 작동 방식을 확인하기 위해 콘솔을 통해 구동방식을 점검했다.  

(About.js)
```javascript
function About(props){
    console.log(props)
    return (
    <div className="about__container">
        <sapn>
            About this page: I Build it becasuse it becasuse I love movies.
        </sapn>
        <span>- George Orwell, 1984</span>
    </div>
    )
}
```
---
- 실질적인 작동을 위해 Movie.js 의 코드를 수정했다.  

(Movie.js)
```javascript
import React from 'react'
import PropTypes from 'prop-types'
import './Movie.css'
import { Link } from 'react-router-dom'

function Movie({ title, year, summary, poster, genres}){
    return(
        <div className="movie">
            <Link
            to = {{
                pathname: '/movie-detail',
                state: {year, title, summary, poster, genres}
            }}
            >
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="monie__genres">
                    {genres.map((genre, index) => {
                        return <li key={index} className="movie__genre">{genre}</li>
                    })}
                    </ul>
                <p className="movie__summary">{summary.slice(0, 180)}</p>
            </div>
            </Link>
        </div>
    )
}   
이하생략
```
---
- 영화 카드를 클릭했을때 디테일 화면을 컨트롤할 Detail.js 를 생성했다.  
(코드생략)
---

- 디테일 화면을 위한 라우트패스를 추가했다.  

(App.js)
```javascript
.
.
<Route path="/movie-detail" component={Detail} />
.
.
```
  

---
/
## [10월 27일]

- App.css 와 Movie.css를 수정  
css 코드들은 깃허브 출판사 계정에서 크롭했다.  
(코드 생략)
---
- 시놉시스 컨트롤  
글이 너무 길어질때 표시화면 상태에 따라, 가독성이 떨어지게 된다. 이럴때 시놉시스를 이용해서 일정자수 이상은'...'으로 보이게 표현했다.
```javascript
<p className="movie__summary">{summary.slice(0, 180)}...</p>
```
---
- 라우터 폴더 정리 및 개념  
영화앱에서 라우터는 화면을 이동하기 위해 필요하다. 이때 라우터는 path props에 지정한 컴포넌트를 그려주게 된다.  

  Home.js 파일을 만들어 영화 앱화면으로 사용, About.js는 개발자 소개 화면으로 사용하기 위해 새롭게 생성, 기존 App.js에 있는 코드를 Home.js로 옮겼다.

(App.js)
```javascript
 function App(){
   return(
   <HashRouter>
     <Navigation />
    <Route path="/" exact={true} component={Home}/>
    <Route path="/about" component={About}/>    
   </HashRouter>
    )

 }
```

추가적으로 네비게이션 컴포넌트를 이용해 라우터의 기초적인 사용 환경을 만들었다.

(Navigation.js)
```javascript
    return(
        <div>
            <a href="/">Home</a>
            <a href="/about">About</a>
        </div>
    )
}
```


---
/
## [10월 13일]

---
- 컴포넌트 props 추가(movie.js)  
Movie 컴포넌트에서 프롭스를 받을수있게 수정했다.
```javascript
function Movie({ id, title, year, summary, poster}){
return<h4>{title}</h4>;
}
```
---
- 컴포넌트 반환하는 함수 전달 (app.js )
```javascript
  render(){
    const {isLoading, movies} = this.state;
      return <div>{isLoading
         ? 'Loading...' : movies.map()}</div>;
    }
```
---
- html 태그를 이용하기 위해 class 추가 (movie.js)
```javascript
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="monie__genres">
                    {genres.map((genre) => {
                        return <li className="movie__genre">{genre}</li>
                    })}
                    </ul>
                <p className="movie__summary">{summary}</p>
            </div>
        </div>
```
---
- className  
html 에서는 'class' 라고 사용하는 속성을 리엑트 에서는 className으로 사용한다.
이것은 jsx와 html의 class 이름이 곂치지 않기 위함. 수업에서는 이부분을 전부 className 교체해 주었다.
---
- 장르기능 추가 (movie.js)  
장르를 추가하기위해
movie.js에 'genres' props를 추가한뒤
genres의 prop-tyoe을 추가했다

```javascript
function Movie({ title, year, summary, poster, genres}){
  .
  .
  .
Movie.propTypes = { 
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
```
app 컴포넌트에서 movie 컴포넌트로 genre props를 넘겨주어서 기존에 있던 경고 메시지는 사라졌다.

---


- 스타일 적용을 위해 아래 css 파일을 추가했다.  
App.css  
Movie.css
---


- keyProps*  
>리엑트는 컴포넌트의 독립성을 위해 keypros를 추가하여 id를 부여해야 한다.  
>내용은 교제 175p, 97p 에서도 여러번 언급한다.

---
/
## [ 10월 6일 ]
- life cycle
- constructor 함수가 render보다 먼저 실행됨
- loading 기능 구현
- axios를 이용한 영화정보 불러오기

---


## [ 9월 29일 ] 
학습내용
- 마스터에서 메인으로 바꾸기
- 구조분해 할당
- state 시작
- class > render > return

- current 인자 사용
- 생명주기함수()*

---

## [ 9월 15일 ] 
학습내용
- props
- map 함수
- 이미지 출력 


---

## [ 9월 8일 ]
학습내용
- 커밋 
- 외부 export
- 내부 export
---