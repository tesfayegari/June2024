JSON (Java Script Object Notation): is a lightweight data interchange format between systems. 

Lets begin with Expense report Sample Data 
Item= Car
Date=2/17/2024
Amount=18,000.00
Category= Car/Transport
Description=""
Receipt=null
Status= New


Syntax for a JSON (key value pair separated by colon )
A record is represented by {}

to represent a simple object/record person with name John Do 

Each property value is separated by comma

{"name": "John Do", "sex": "Male", "age" : 21}

How to represent Collection, example multiple person 
{"name": "John Do", "sex": "Male", "age" : 21}, {"name": "Lee Gu", "sex": "Male", "age" : 30}

collection (Array) is represented by [] - empty collection 
example two people record 
[{"name": "John Do", "sex": "Male", "age" : 21}, {"name": "Lee Gu", "sex": "Male", "age" : 30}]

Scenario 
A pet record has the following properties: name, dateOfBirth, type (dog/cat/reptiles/other), color
Peron has the following properties name, dateOfBirth, Phone, email, address, pets (array of pet)

Based on the above properties of Person and Pet create collection of Persons (persons.json) assuming John Do, and "John Smith"

["Puppy", "kitten"]