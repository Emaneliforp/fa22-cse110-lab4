1. Console prints 3. Since i was declared using var, i is accessible anywhere within the function. And length of prices is 3 so i would be 3 when the for no long satisfy the condition.
2. Console prints 150. First, discountedPrice is accessible because it is var. Second, discountedPrice is reassigned every for loop iteration. In the last iteration, the last item in prices is 300. 300 * (1 - 0.5) = 150.
3. Console prints 150. First, finalPrice is accessible because it is var. Second, finalPrice is reassigned every for loop iteration. In the last iteration, discountedPrice is 150. Math.round(150 * 100) / 100 = 150.
4. [50, 100, 150]. The discountedPrice is added to discount every iteration of the for loop. The discountedPrice of 100, 200, 300 at 50% rate is 50, 100, 150.
5. i isn't defined error. Since i was declared using let in the for loop, i is only accessible within the for loop.
6. discountedPrice isn't defined error. Since discountedPrice declared using let in the for loop, discountedPrice is only accessible within the for loop after its declaration.
7. Console prints 150. Since finalPrice was declared using let in the discountPrices function, it is accessible within the function.
8. [50, 100, 150]. There were no error scope because discounted was declared at the top of the function as well.
9. i isn't defined error. Since i was declared using let in the for loop, i is only accessible within the for loop.
10. Console prints 3. Since length was declared at the top of the function, it is accessible within the function.
11. [50, 100, 150]. push doesn't reassign discounted so there is no error.
12. 
    A. student.name
    B. student['Grad Year']
    C. student.greeting()
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]
13. 
    A. '3' + 2 => '32', '3' casted to string so 2 is concatenated
    B. '3' - 2 => 1, - isn't a concatenation operation so 3 is taken as integer
    C. 3 + null => 3, null casted to integer
    D. '3' + null => '3null', '3' casted to string so null is concatenated
    E. true + 3 => 4, true is 1
    F. false + null => 0, both are casted to integer
    G. '3' + undefined => '3undefined', '3' casted to string so undefined is concatenated
    H. '3' - undefined => NaN, - isn't a concatenation operation so 3 is taken as integer
14. 
    A. '2' > 1 => true, '2' is casted to integer
    B. '2' < '12' => false, in string comparison first character is more significant, '2' > '1'
    C. 2 == '2' => true, '2' is casted to integer
    D. 2 === '2' => false, === checks type so integer and string aren't equal
    E. true == 2 => false, true is 1
    F. true === Boolean(2) => true, Boolean(2) is true
15. == only checks if the values are equal, === also checks if the values are the same type.
16. It will return [2, 4, 6].
    Explanation:
    array = [1, 2, 3]
    callback = doSomething
    newArr = []

    For each iteration of the for loop
        The doSomething function is called with the i element in array as parameter.
        And its returned value will be pushed to newArr.
    
    - Iteration 1: callback(arr[0]) is called which is equivalent to doSomething(1) which return 2.
    - Iteration 2: callback(arr[1]) is called which is equivalent to doSomething(2) which return 4.
    - Iteration 3: callback(arr[2]) is called which is equivalent to doSomething(3) which return 6.

    Then the results are added accordingly. Thus, the returned newArr is [2, 4, 6]
17. 1
    4
    3
    2 
