# HOBBIES REPO

## WELCOME TO MY HOBBIES REPO
**UNUSEFUL** codes are stored in this repository.

### WAVES  
----------------------------- 
* [sine wave](./waves/sinewave.html "sine wave")  
* [wave(Only html & CSS)](./waves/waveproto.html "wave proto")  
* [wave](./waves/wave.html "wave")  
wave are inspired by [Adobe XD - Water animation in 6 minutes.](https://youtu.be/Ev3fSi7P66c)  
#### sample images  
<img src="./waves/sinewave.gif" height="280" width="500">
<img src="./waves/wave.gif" height="280" width="500">    

### PRIME NUMBER
-----------------------------
* [Trial Division](./primeNumber/trial-division.ts "Trial Division")  
 This code check the whether an argument is prime or not.
* [Sieve Of Eratosthenes](./primeNumber/sieve-of-eratosthenes.ts "Sieve Of Eratosthenes")  
 This code find the prime number between 2 and argument.
* [Sieve Of Sundaram](./primeNumber/sieve-of-sundaram.ts "Sieve Of Sundaram")  
 This code find the prime number between 2 and (2argument + 2).

### MATH  
-----------------------------
* [GCD](./math/gcd.ts "GCD")  
 This function is based on Euclidean Algorithm.
* [Convert Dec to Bin](./math/convert-dec-to-bin.ts "Convert Dec to Bin")  
 This function return 8 digit binary number from decimal.
* [Determinant](./math/determinant.ts "Determinant")  
 This function solve the determinant and return the answer.
* [Newton's Method](./math/newton's-method.ts)  
 This function return &radic;(argument).  
 tips: Newton's method can find x which f(x) = 0.
* [Statistics](./math/statistics.py "Statistics")  
 This file are written some basic statistics function.(mean/deviation/variance/stdev)

### PI
----------------------------
 * [Gauss Legendre Algorithm](./pi/Gauss-Legendre-Algorithm.ts "Gauss Legendre Algorithm")  
   * initial value  
    a<sub>0</sub> = 1  
    b<sub>0</sub> = 1 / &radic;2  
    t<sub>0</sub> = 1 / 4  
    p<sub>0</sub> = 1  
   * repeat   
    a<sub>n+1</sub> = (a<sub>n</sub> + b<sub>n</sub>) / 2  
    b<sub>n+1</sub> = &radic;(a<sub>n</sub>b<sub>n</sub>)  
    t<sub>n+1</sub> = t<sub>n</sub> - p<sub>n</sub>(a<sub>n</sub> - a<sub>n+1</sub>)<sup>2</sup>  
    p<sub>n+1</sub> = 2p<sub>n</sub>  
   * pi is  
    &pi; &asymp; (a<sub>n+1</sub> + b<sub>n+1</sub>)<sup>2</sup> / 4t<sub>n+1</sub>
 * [Leibniz Formula](./pi/Leibniz-Formula.ts "Leibniz Formula")  
 &sum;[n=0&rarr;&infin;] (-1)<sup>n</sup> / 2n + 1 = &pi; / 4  
 * [Monte Carlo Method](./pi/Monte-Carlo-method.ts "Monte Carlo method")  
 X = number of points are x<sup>2</sup> + y<sup>2</sup> &le; 1  
 N = number of total  
 &pi; &asymp; 4X / N  

### Math.max() VS Array.prototype.reduce()  
-------------------------------
 [Math.max() VS Array.prototype.reduce()](./Math.max()-vs-Array.prototype.reduce().ts "Math.max() VS Array.prototype.reduce()")  
    If you want to find out the largest number from array, you can use `Math.max(...array)`. However this function can't work if the array is so big. If you need to find out the largest number from big array, you should use `array.reduce((a,b) => (a > b) ? a : b)`. This file compare the speed of `Math.max()` with the speed of `Array.prototype.reduce()`.
