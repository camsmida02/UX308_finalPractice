import {hello, feetTOacre, mowTime, airQuality, yee_ha, slope} from './functions.js';

function Question1(){
    return <section>
1. Write a function that takes a _name_ as an argument and _returns a string_ that _contains "hello"_ and the name paramerer. Test at least 3 names. <br />*Note ... I solved this one already
      <h2>results</h2>
      <p>hello("Rich") == "{hello('Rich')}"</p>
      <p>hello("Bill") == "{hello('Bill')}"</p>
      <p>hello("Chris") == "{hello('Chris')}"</p>
    </section>;
}

 function Question2(){
    return <section>
2. Write a function that converts fahrenheit to celsius.
    <h2>Results</h2>
    <p>feetTOacre("43560") ==  "{feetTOacre(43560)}"</p>
    <p>feetTOacre("50000")==  "{feetTOacre(50000)}"</p>  
    <p>feetTOacre("100000") ==  "{feetTOacre(100000)}"</p>          
    </section>
 }

 function Question3(){
    return <section>
3. Given the width of a lawn in metres, length of a lawn in metres and the square metres cut per minute calculate the minutes it would take to mow that lawn. Test at least 3 lawn sizes
    <h2>Results</h2>
    <p>mowTime("10, 5, 2") ==  "{mowTime(10, 5, 2)}"</p>
    <p>mowTime("20, 10, 4") ==  "{mowTime(20, 10, 4)}"</p>  
    <p>mowTime("5, 2, 1") ==  "{mowTime(5, 2, 1)}"</p>          
    </section>
 }

 function Question4(){
    return <section>
4. Compute the air quality given an air quality index.
    <h2>Results</h2>
    <p>airQuality("25") ==  "{airQuality(25)}"</p>
    <p>airQuality("75") ==  "{airQuality(75)}"</p>  
    <p>airQuality("125") ==  "{airQuality(125)}"</p> 
    <p>airQuality("175") ==  "{airQuality(175)}"</p> 
    <p>airQuality("250") ==  "{airQuality(250)}"</p> 
    <p>airQuality("350") ==  "{airQuality(350)}"</p>                   
    </section>
 }

 function Question5(){
    return <section>
5. yee_ha takes an integer parameter and returns one of the following strings:

- "Yee" if number is evenly divisible by 3
- "Ha" if number is evenly divisible by 7
- "Yee Ha" if number is evenly divisible by both 3 and 7
- "Nada" if number is none of the above
    <h2>Results</h2>
    <p>yee_ha("21") ==  "{yee_ha(21)}"</p>
    <p>yee_ha("9") ==  "{yee_ha(9)}"</p>  
    <p>yee_ha("14") ==  "{yee_ha(14)}"</p>   
    <p>yee_ha("10") ==  "{yee_ha(10)}"</p>         
    </section>
 }

 function Question6(){
    return <section>
6. Calculate the slope of a line.

- Slope is calculated as rise / run, where rise is distance between y coordinates, and run is distance between x coordinates.
    <h2>Results</h2>
    <p>slope("0, 0, 2, 2") ==  "{slope(0, 0, 2, 2)}"</p>
    <p>slope("1, 2, 3, 6") ==  "{slope(1, 2, 3, 6)}"</p>  
    <p>slope("4, 4, 8, 2") ==  "{slope(4, 4, 8, 2)}"</p>          
    </section>
 }

export {Question1, Question3, Question2, Question4, Question5, Question6}