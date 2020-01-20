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
* [Trial Division](./primeNumber/trial-division.js "Trial Division")  
 This code check the whether an argument is prime or not.
* [Sieve Of Eratosthenes](./primeNumber/sieve-of-eratosthenes.js "Sieve Of Eratosthenes")  
 This code find the prime number between 2 and argument.
* [Sieve Of Sundaram](./primeNumber/sieve-of-sundaram.js "Sieve Of Sundaram")  
 This code find the prime number between 2 and (2argument+1).

### MATH
-----------------------------
* [GCD](./math/gcd.js "GCD")  
 This function is based on Euclidean Alogorithm.
* [Convert Dec to Bin](./math/convert-dec-to-bin.js "Convert Dec to Bin")  
 This function return 8 digit binary number from decimal.

 ### PI
 ----------------------------
 * [Gauss Legendre Algorithm](./pi/Gauss-Legendre-Algorithm.js "Gauss Legendre Algorithm")  
   * initial value  
    a<sub>0</sub> = 1  
    b<sub>0</sub> = 1 / &radic;2  
    t<sub>0</sub> = 1 / 4  
    p<sub>0</sub> = 1  
   * repeat   
    a<sub>n+1</sub> = (a<sub>n</sub> + b<sub>n</sub>) / 2  
    b<sub>n+1</sub> = &radic;(a<sub>n</sub>b<sub>n</sub>)  
    p<sub>n+1</sub> = t<sub>n</sub> - p<sub>n</sub>(a<sub>n</sub> - a<sub>n+1</sub>)<sup>2</sup>  
    t<sub>n+1</sub> = 2p<sub>n</sub>  
   * pi is  
    &pi; &asymp; (a<sub>n+1</sub> + b<sub>n+1</sub>)<sup>2</sup> / 4t<sub>n+1</sub>
 * [Leibniz Formula](./pi/Leibniz-Formula.js "Leibniz Formula")  
 &sum;[n=0&rarr;&infin;] (-1)<sup>n</sup> / 2n + 1 = &pi; / 4  
 * [Monte Carlo Method](./pi/Monte-Carlo-method.js "Monte Carlo method")  
 X = number of points are x<sup>2</sup> + y<sup>2</sup> &le; 1  
 N = number of total  
 &pi; &asymp; 4X / N  
