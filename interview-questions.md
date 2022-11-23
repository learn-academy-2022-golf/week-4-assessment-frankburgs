# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

# Your answer:
Object oriented programming (OOP) is a way of writing code where objects are the focus of how it works. Objects have properties and methods which can be used in a dynamic fashion. OOP is an alternative to older methods of writing software which were written and run by a computer using line-by-line execution. I am not familiar with functional programming.

# Researched answer:
Functional programming is a use of functions to create the program, as opposed to objects. Functions can be passed as arguments and also returned. It appears to be possible to implement either functional or object oriented programming in some subset of programming languages.  

2. What is the difference between a Float and an Integer in Ruby?

# Your answer:
An integer is a whole number, where a float is a decimal. Each have their upper and lower limits on how many digits they ca consist of.

Using division operator with integers will only return an integer, and may be a rounded answer. The same problem occurs with floats, where the answer, despite also being a decimal, may be a rounded-off number.

# Researched answer:
A float in ruby is "an inexact number." We have seen examples of where rounding of a float does not come out as the precise answer. 

Depending on the situation, the float may round out somewhat far from the mathematically expected result.

3. Ruby has an implicit return. What does that mean?

# Your answer:
An implicit return is the opposite of an explicit return. The explicit return has it stated as such, using the language-specific syntax, usually using the keyword "return". 

The implicit return has no such declaration, and is instead in Ruby the last line in a method. 

# Researched answer:

Apparently describing the implicit return in a ruby block as being the "last line" is a little simplistic, and it would be more accurate to use the term "last expression." The default return is nil. Ruby has the option of using either implicit or explicit return, however taking advantage of the implicit version appears to be convention.

4. What is a block in Ruby?

# Your answer:
A block in Ruby is analogous to functions in javascript, they have a name and return a value. They do not belong to objects, those are known as methods. 

# Researched answer:
A ruby block is enclosed in do/end statements, along with curly braces {}. Arguments for the block are included within pipes ||. To amend my earlier answer, blocks do not have to have a name. They can execute built-in ruby methods and avoid being given an identifier. Or they can be given a name and execute custom code.

1. How do you extract a value in a Ruby hash?

# Your answer:
To extract a value in a Ruby hash, you use the "symbol" for the hash. The symbol is text which identifies the specific entry in the hash, and can be used to reference the value of that particular symbol/value pair.

# Researched answer:
I was mistaken in the use of a symbol for the key in the key value pair. The key in Ruby can be almost any data type. 

## Looking Ahead: Terms for Next Week

1. Class Inheritance:
Class inheritance appears to involve basing new classes off of existing classes so as to implement many of the same features while minimizing the effort of writing code for new behavior. 

2. RSpec:
RSpec is the Ruby equivalent of a Jest testing framework for Ruby code. It was written in Ruby as well. It is possible that it is not the default Ruby testing framework, however appears to be the most popular one. The term "behavior driven development" appears to be popular in the relevant Google searches, and appears to be a loose technical term.

3. CRUD:
Create, Read, Update, and Display is a basic concept of information management within a piece of software. One is ideally able to use software to create an entry or upload data, to read/ display that entry or others like it, to update it, and to delete it. 

4. Test-driven development:
An approach to programming which emphasizes what outputs are expected for any given input and are coded into tests. We have used Jest to do tests with JavaScript. RSpec appears to be a related tool in this toolset.

5. HTTP:
Hyper Text Transfer Protocol is the method of transferring website information over the web. It is located 7th as the application layer of the open systems interconnection model. Just below it on the 6th layer is the presentation layer. Is the format set by the application layer for outgoing messages. 