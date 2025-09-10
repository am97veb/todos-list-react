# 🧾 Task List

## 📖 Description

Hello! 
I would like to present a simple task list application. This application is easy and intuitive. Just write in the field what you have to do and then press the “add task” button or “enter” on the keyboard. You can download sample tasks via the button above. Below you will see the typed tasks. You can mark them as completed or uncompleted (green button) or delete them (red button). Once tasks have been added to the list, two additional buttons will appear - the first one hides the completed task and the second marks all tasks as completed. You can also filter the tasks by entering their content in the correspondingly marked field.

Below is the presentation, link to the application, used technologies and available scripts.

## 🎬 Presentation

![App presentation](./README%20files/TodoListGif.gif)

## 📄 Demo

https://am97veb.github.io/todos-list-react/

## ⚙ Technologies

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses technologies implemented in Java Script ECMAScript 6. In addition, tools such as:

- TypeScript,
- Redux,
- Redux-Saga,
- Redux Toolkit,
- React Router,
- Grid,
- Styled Components,
- ThemeProvider,
- Media Queries,
- Normalize.css,
- BEM convention.

## Files Structure
```
public/
src/
├── common/
│   ├── Container/ 
│   │   └── index.tsx
│   ├── Header/
│   │   ├── index.tsx
│   │   └── types.ts
│   └── Section/
│       ├── index.tsx
|       ├── styed.ts
│       └── types.ts
│
├── core/
│   ├── App/
│   │   ├── Navigation/
|   |   |   ├── index.tsx
│   │   │   └── styled.ts
│   │   └── App.tsx
│   ├── GlobalStyles.ts
│   ├── hooks.ts
│   ├── routes.ts
│   ├── store.ts
│   ├── styled.d.ts
│   └── theme.ts
│
├── features/
│   ├── author/
│   │   └── index.tsx
│   └── tasks/
│       ├── ExampleTaskButton/
│       │   └── index.tsx
│       ├── ExtraHeaderButtons/
│       │   └── index.tsx
│       ├── FilterTasks/
│       │   ├── index.tsx
│       │   ├── styles.ts
│       |   └── useFilterParameters.tsx
│       ├── Form/
│       │   ├── index.tsx
│       │   └── styles.ts
│       ├── Input/
│       │   └── index.tsx
│       ├── TaskDetailsPage/
│       │   └── index.tsx
│       ├── TaskList/
│       │   ├── index.tsx
│       │   └── styles.ts
│       ├── TaskListButtons/
│       │   └── index.tsx
│       ├── TaskPage/
│       │   └── index.tsx
│       ├── fetchApiData.tsx
│       ├── localStorageTasks.tsx
│       ├── searchTaskParamName.ts
│       ├── sourceApiDetails.ts
│       ├── tasksSaga.tsx
│       ├── tasksSlice.tsx
│       └── types.ts
│
├── index.tsx
└── reportWebVitals.js
.gitignore
package-lock.json
package.json
README.md
tsconfig.json
```
    
## 📃 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.