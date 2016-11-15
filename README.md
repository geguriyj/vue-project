# vue-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Vue.js + webpack 개발 환경설정 (Node.js npm 사용시)
: Node.js 설치 된 상태에서..

    1) 프로젝트 루트에 package.json 파일생성
       json포멧으로 name 설정만 우선 해둔다.
    2) Webpack 설치
       npm install webpack -g --save-dev
    3) Vue.js 설치 (프레임웍/플러그인들)
       npm install vue --save
       npm install vuex --save
       npm install vue-router --save
       npm install vue-resource --save

    package.json 설정 방법
    {
        name: "project name",
    }