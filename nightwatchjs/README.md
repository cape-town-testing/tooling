# nigthwatch

## Perequisites
```
Latest Git installed - https://www.atlassian.com/git/tutorials/install-git
Java Installed - https://java.com/en/download/
Lastest nodejs installed - https://nodejs.org/en/
Browser installed (Chrome)
```

## Setup
Open a command prompt window `start > run  > cmd`
`$` means run in the command prompt window

Clone the repository to your project folder 
```
$ git clone https://github.com/cape-town-testing/tooling.git
```
Navigate to project folder `$ cd nightwatchjs` 
Install dependencies
```
$ npm install
```

### Execute tests
```
$ npm run test
```

#### Troubleshooting
Cert issues run or selenium sever didnt start
```
$ set NODE_TLS_REJECT_UNAUTHORIZED=0
```

### Execute tests with verbose logging
```
$ npm run test:debug
```