# Mobile boilerplate

A cross platform mobile app boilerplate using react native.

# Getting start

1. clone the project
2. install npm package by `$ yarn`
3. replace all projectName
4. install the latest `$ yarn add -dev @visuallylab/tslint-config-frontend`
5. Delete `ios/` and `android/` directories
6. Run `$ react-native eject`
7. Run `$ react-native link`

## Prerequisites

Install the React Native CLI and CocoaPods

```shell
$ npm install -g react-native-cli
$ sudo gem install cocoapods
```

Install the NPM package dependencies and podfiles

```shell
$ npm install
$ cd ios && pod install
```

If your are developing with Android, setup the `Android Studio`.

If your are developing with iOS, setup the `Xcode`.

Follow this [link](https://facebook.github.io/react-native/docs/getting-started.html) for more details.

## Running App

Run on the Android device or emulator

```shell
$ react-native run-android
```

Run on the iOS Simulator

```shell
$ react-native run-ios
```
