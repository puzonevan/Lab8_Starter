# Lab 8 - Starter

Evan Puzon 

1. Within a Github action that runs whenever code is pushed because the testing process 
should be automated. It does not need to be manually run locally if it can be done through 
software such as github actions. Running all tests after development is bad practice 
as you should be testing little by little and not by the whole.

2. No, a returned value of a function can be achieved through unit testing because a function 
can be treated as a unit. 

3. I would not use a unit test for the message feature because it needs to interact with the receiver to make sure the message was sent and correct. It also needs to interact with the messager to make sure a message is not empty and such. There are too many components interacting with each other. 

4. I would use a unit test for the max message length feature because the length does not interact with any other component. Max message length is smaler in scale and more of a single thing (or unit) to test compared to a whole message feature.