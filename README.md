# 문동환 201840116
test

[10월 13일]

컴포넌트 props 추가(movie.js)
```javascript
function Movie({ id, title, year, summary, poster}){
return<h4>{title}</h4>;
}
```

컴포넌트 반환하는 함수 전달(app.js )
```javascript
  render(){
    const {isLoading, movies} = this.state;
      return <div>{isLoading
         ? 'Loading...' : movies.map()}</div>;
    }
```

html 태그를 이용하기 위해 class 추가






[ 10월 6일 ]
- life cycle
- constructor 함수가 render보다 먼저 실행됨
- loading 기능 구현
- axios를 이용한 영화정보 불러오기




[ 9월 29일 ] 
학습내용
- 마스터에서 메인으로 바꾸기
- 구조분해 할당
- state 시작
- class > render > return

- current 인자 사용
- 생명주기함수()*




[ 9월 15일 ] 
학습내용
- props
- map 함수
- 이미지 출력 




[ 9월 8일 ]
학습내용
- 커밋 
- 외부 export
- 내부 export