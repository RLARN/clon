# 문동환 201840116

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
---




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