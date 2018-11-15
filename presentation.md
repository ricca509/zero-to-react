# Presentation walkthrough

- Talk about UI as function of data, what components are, props, React.createElement, JSX
- Create empty app with `create-react-app`
- Build main component, add a `Post` section into main component
- Refactor `Post` into own file, pass content as props, introduce `p ropTypes` and `defaultProps` as ES6 class properties
- Create `Comments` main component that will hold all comments logic for now
- Add `input` to enter comment text and introduce internal state
- Add action and event handler for input, explain `this` binding and how it works by showing the event loop
- Add internal state for new comments with action/handler that adds new comments to an array
- Build comments list all in main `Comments` component
- Explain how to lift state (refactor `CommentsList` and `CommentsInput` in their own files) and transform into stateless components. Split state into "App" state and "ui" state, showing the different meaning and where they belong
- Introduce the first pattern: Container/UI components
- Introduce HOC and how it can make things more generic
