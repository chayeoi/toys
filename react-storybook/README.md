# React Storybook Tutorial

## 2.1 Getting Started with v6

```bash
npx sb init
```

> `create-react-app`으로 프로젝트를 초기화한 상태에서 위 명령으로 Storybook을 세팅하면 [`yarn storybook` 스크립트가 정상 동작하지 않는 이슈](https://github.com/storybookjs/storybook/issues/11907)가 있다.
> node_modules 및 yarn.lock 삭제 후 의존성 패키지를 재설치하면 문제는 해결된다.

## 4.1 Story Heirarchy

스토리를 알파벳 순으로 정렬하고 싶을 경우 `.storybook/preview.js`에 다음 코드를 추가한다.

```javascript
options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
```

## Resources

- [React Storybook Tutorial | Codevolution - YouTube](https://youtu.be/BySFuXgG-ow)
