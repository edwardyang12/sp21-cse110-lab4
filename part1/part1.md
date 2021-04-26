## Part 1a
1. values added: 20
2. values added: 20
3. values added: 20
4. Uncaught ReferenceError: result is not defined
This error is caused because the variable "result" is defined in the "if" block while on line 13 it is being called in the "else" block which is not in the same scope as it is a different block.
5. Uncaught TypeError: Assignment to constant variable.
This error is caused because on line 7 we are trying to assign num1 + num2 to result after we already assigned 0 to result. Since it is a const, we are not allowed to reassign it.
6. No output becaue of the error in line 9.

## Part 1b
1. console log will output 3 because the length of prices is 3 so the incrementer, i, will be 3 at the end after incrementing through the array.
2. console log will output 150 because the variable "discountedPrice" is overridden at each step and at the last step the value that remains is 150 because 300*0.5 = 150.
3. console log will output 150 because the variable "finalPrice" is reassigned at each step and at the last step the value that remains is 150 because 150*100/100 = 150.
4. This function will return [50, 100, 150] because at each step the finalPrice, which is half of the original price, is pushed to the discounted array.
5. The error "ReferenceError: i is not defined" is thrown because the variable "i" is in the "for" block scope which is not in the same scope as the console log.
6. The error "ReferenceError: discountedPrice is not defined" is thrown because the variable "discountedPrice" is in the "for" block scope which is not in the same scope as the console log.
7. console log will output 150 because the scope of the console log is the same as when finalPrice was declared.
8. This function will return [50, 100, 150] because the scope of the return is the same as when discounted was declared.
9. The error "ReferenceError: i is not defined" is thrown because the variable "i" is in the "for" block scope which is not in the same scope as the console log.
10. console log will output 3 because the length of prices is 3.
11. This function will return [50, 100, 150] because discounted is never reassigned but is only appended to.

12. 
A. student.name
B. student['Grad Year']
C. student.greeting()
D. student['Favorite Teacher'].name
E. student.courseLoad[0]

13. 
A. "32", string concatenation
B. 1, converts '3' to 3
C. 3, null is 0
D. "3null", string concatenation
E. 4, true is 1
F. 0, false and null are 0
G. "3undefined", string concatenation
H. Nan, undefined output

14.
A. true, compares value and 2>1
B. false, compares first value in each string
C. true, compares values only
D. false, compares value and type
E. false, true is 1
F. true, boolean conversion of 2 is true

15.
== checks for value equality while === checks for value and type equality 

16.
in part1b-question16.js

17. 
The result is [2,4,6]. The function modifyArray goes through array and calls callback for each element. The function callback doubles the value and returns the result which is pushed into newArr.

18.
in part1b-question18.js

19. 
1
4
3
2