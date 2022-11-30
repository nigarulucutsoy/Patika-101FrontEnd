# Insertion Sort Project

[22,27,16,2,18,6] -> Insertion Sort

Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.

- [22|27,16,2,18,6] *-> ilk eleman için arama yapılır ve en küçük eleman bulunduğunda yer değişimi yapılır.*
- [2,27|,16,22,18,6] *-> Yer değişimi yapıldıktan sonra ikinci eleman için arama yapılır.*
- [2,6,16|,22,18,27]
- [2,6,16,22|18,27]
- [2,6,16,18,22,27] *-> İstenilen sıralama tamamdandı.*
 
## Big-O gösterimi

- Birinci kısımda n arama, ikinci kısımda n-1 arama şeklinde +1'e kadar gider. Bu sayede formülü şu şekilde yazarız;
- (n.(n+1))/2 
- (n^2+n)/2
- Sonuç olarak Big O gösterimi => O(n^2)

## Time Complexity 

18 sayısı sıralanan dizinin ortalarında olduğu için Average Case kapsamına girmektedir.

## [7,3,5,8,2,9,4,15,6] dizisinin Selection Sort'a göre ilk 4 adımını yazınız

- [2|3,5,8,7,9,4,15,6]
- [2,3|5,8,7,9,4,15,6]
- [2,3,5|8,7,9,4,15,6]
- [2,3,4,8|7,9,5,15,6]
- [2,3,4,5,7|9,8,15,6]
