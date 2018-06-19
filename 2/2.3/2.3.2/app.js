var Person = require('./person');
var Student = require('./student');
var Teacher = require('./teacher');
var Coder = require('./coder');
var Overload = require('./Overload');
var personObj = new Person();
var studentObj = new Student();
var teacherObj = new Teacher();
var coderObj = new Coder();
var overloadObj = new Overload();
var student_static = require('./student_static');
/*personObj.sleep()
personObj.eat()
studentObj.sleep()
studentObj.eat()
studentObj.study()

teacherObj.teach()

coderObj.code()
overloadObj.eat()*/
student_static.study();
student_static.eat();
student_static.sleep()
