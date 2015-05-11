# Up and Developing Cyberia Server

The Cyberia Server is build with Test Driven Design in mind, so the first step to getting started is to create your 
testing environment. This document assumes the following:

1. You have git cloned the repository.
2. You have **node and mongodb installed**.
3. You have npm installed globally.
4. You have Grunt installed globally. This requires admin rights.
    
    ```sh
    npm i -g grunt grunt-cli
    ```
5. You have Jasmine installed globally. This requires admin rights.

    ```sh
    npm i -g jasmine
    ```
6. We recommend updating npm globally to the latest version.


## Getting Started with Unit testing

1. Move to the base of the project folder.
2. Install the project dependencies.
```sh
npm install
```
3. Verify Run the tests to verify the pull is currently valid.
    
    ```sh
    npm test
    ```
    And if there are no errors, everything will be ok!

    
## Erata
1. Node is known as nodejs under many linux enviroments. 

    You must provide a symbolic link from nodejs to node. `npm install` may fail due to this.
     
    On Ubuntu you can also use:
    ```sh
    sudo update-alternatives --install /usr/bin/node node /usr/bin/nodejs 10
    ```
