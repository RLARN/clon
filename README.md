# 문동환 201840116


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
- 장르기능 추가  (movie.js)
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