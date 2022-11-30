# Binary Search Tree Projesi

**[7, 5, 1, 8, 3, 6, 0, 9, 4, 2] aşamalarını yazınız.**



 ![image](https://user-images.githubusercontent.com/84670856/204888645-429e0901-475d-4244-b303-919d1971a095.png)
 > **1.adım** root->7 olarak belirlendi. Bütün adımlar roota göre yapılacaktır. Root'dan küçük değerler rootun soluna büyük değerler sağına yazılacaktır. 5, 7'den küçük olduğu için soluna yazılır.

 ![image](https://user-images.githubusercontent.com/84670856/204889597-50c0225e-1b67-4f48-95bd-57d93f7f1895.png)
> **2.adım :** 1 sayısı 7'den küçük olduğu için soluna giderken orada 5 ile karşılaşır, 5'ten küçük olduğu için 5'in soluna konulur.


 ![image](https://user-images.githubusercontent.com/84670856/204890101-4be9ea98-33e8-4335-897d-f875599fd77f.png)
> **3.adım:** 8 sayısı 7'den büyük olduğu için direkt asğına yazılır.

![image](https://user-images.githubusercontent.com/84670856/204891997-ef94030a-0a8f-4747-9478-2c0b4e62d893.png)
> **4.adım:** 3 sayısı 7'den küçük olduğu için sola, 5'ten küçük olduğu için bir alt satırın soluna geçerken 1 ile karşılaşır ve 1'den büyük olduğu için sağına yazılır.

![image](https://user-images.githubusercontent.com/84670856/204892120-ddb836b3-ec9c-4f03-9c1d-269e9119fa92.png)
> **5.adım:** 6 sayısı 7'den küçük olduğu için sola, 5'ten büyük olduğu için 5'in sağına yazılır.

![image](https://user-images.githubusercontent.com/84670856/204892358-a86202b6-47d0-4681-964c-b111645a2c63.png)
> **6.adım:** 0 sayısı 7'den küçük olduğu için sola, 5'ten küçük olduğu için sola,1'den küçük olduğu için yine onun soluna yerleştirilir.

![image](https://user-images.githubusercontent.com/84670856/204892795-3f4702a4-9016-47c2-be09-44ed607f80d6.png)
> **7.adım:** 9 sayısı 7'den büyük olduğu için sağa, 8'den büyük olduğu için onunda sağına yazılır.

![image](https://user-images.githubusercontent.com/84670856/204893047-e9687004-5e6b-4bfb-a25d-a639212186f5.png)
> **8.adım:** 4 sayısı 7'den küçük olduğu için soluna, 5'den küçük olduğu için soluna, 1'den büyük olduğu için sağına, 3'den de büyük olduğu için onun da sağına yazılır.

![image](https://user-images.githubusercontent.com/84670856/204893317-c664d07e-64bc-45b5-90ec-cdaa64e6388f.png)
> **9.adım:** 2 sayısı 7'den küçük olduğu için soluna, 5'den küçük olduğu için soluna, 1'den büyük olduğu için sağına, 3'den de küçük olduğu için soluna yazılır. 
