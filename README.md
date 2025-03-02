# fluid

[Try Fluid here!](https://fluid-08e12e--bny20e58fy.expo.app/)

Fluid is a project for HackIllinois 2025.

## Inspiration

As college students, we find it difficult to plan for our financial goals. If we want to save up for, say, concert tickets, there isn't a way for us to track that goal; bank apps usually require you to parse through individual transactions to figure out if you're meeting your savings goals. Without an easy way to track progress toward financial goals, it's difficult to learn financial literacy.

## What it does

Fluid solves two main issues; it provides a custom interface for setting and tracking both long- and short-term financial goals, and it gamifies financial literacy. You can set your own financial goals—for example, saving up for concert tickets, or paying off a car loan—and Fluid will create a simple interface for you to see your progress. When you reach your goal, you get rewarded with a surprise avatar—a fish to add to your virtual aquarium. This app—which is currently functional on both web and mobile—is a great way for young people to build financial literacy.

## How we built it

- **Frontend:** React Native. We used this framework for its versatility; it is compatible with both Android and Apple, and is easy to convert into a web app. Our app is currently functioning on both web and mobile.

- **Backend:** Node.js. We built a backend server with Node.js and connected it to our frontend and database.

- **Database:** We used MongoDB, a NoSQL database service, to host our dummy data accounts. We also used the Capital One Hackathon API, Nessie, to simulate accessing a customer's financial data and expenses.

- **Deployment:** We deployed our app with Expo, an easy-to-use, versatile ecosystem of tools to deploy web apps; it is highly compatible with React Native.

## Challenges we ran into
- **Connecting backend and frontend:** We had many moving 
- **React Native:** versatility
- **UI/UX:** drawing

## Accomplishments that we're proud of
- Functional application that can be accessed through both a web browser and a mobile application
- Connected backend, database, and frontend for a fully-connected application
- Created a user-friendly, aesthetic UI and intuitive UX 

## What we learned
- How to create a versatile React Native application
- How to deploy an app on multiple platforms (mobile, web)
- How to create and manage databases, customer data, and API data to maximize efficiency of the app

## What's next for Fluid
One thing we want to add to Fluid is a social component. We were heavily inspired from an app called Habitica, which gamifies to-do lists with fantasy-inspired avatars. Habitica has a social aspect, where you can take quests with friends as you work toward your individual goals.

We wanted to integrate a method for you to share your personal aquarium with friends, and for you to join a leaderboard that shows your progress toward your goals. This adds a fun twist to the game and encourages social support while reaching your individual financial goals.

## Expo Quickstart

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

### Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

### Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

### Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
