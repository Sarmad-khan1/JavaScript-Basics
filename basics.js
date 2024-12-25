<script>
        let a = 45;
        let b = 45;
        let c = a + b;
        console.log(c);


        const name = 'Hi I am Sarmad';
        console.log(name);

        console.log(name.length);
        console.log(name.substring(2, 7));
        console.log(name.split(''));
        const file = 'computers, IT, apples, people, 1, 2, 3';
        console.log(file.split(''));
        console.log(file.split(', '));

        //Creating an array using a constructor.

        const number = new Array(1, 2, 3, 4, 5);
        console.log(number);

        const value = new Array('apples', 'dates', 'mangoes', 'strawberries');
        console.log(value);

        const digit = new Array('apples', '1', '2', '3', 'dates', 'strawberry');
        console.log(digit);

        //Creating an array using usual method.

        const fruits = ['apples', 'b', 'c', 'd'];
        console.log(fruits);

        let arrrr = ['a', 'b', 'c', 'd', 'e'];
        console.log(arrrr);


        //To Finding out Element at custom index an array.

        let arri = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
        console.log(arri[4]);

        //To add extra element in array.

        let arrayy = ['a', 'b', 'c', 'e', 'f'];
        arrayy.push('newElement');
        console.log(arrayy);

        //To add elemet at the beginning in an array.

        let arrayys = ['a', 'b', 'c', 'd'];
        arrayys.unshift('startELEMENT');
        console.log(arrayys);

        //To remove last element in array.

        let arayys = ['first', 'second', 'third'];
        arayys.pop();
        console.log(arayys);

        //To find out index of an element.

        let aa = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        console.log(aa.indexOf('b'));
        console.log(aa.indexOf('f'));
        console.log(aa.indexOf('h'));

        //To Check if someting is an Array or not.

        let bb = ['first', 'second', 'third', 'fourth', 'fifth'];
        console.log(Array.isArray(bb));


        //Creating object

        let obj = {
            name: 'SARMAD',
            crush: 'Dont Exist',
            education: 'Uni DropOut',
            age: 24,
            crushAge: 'no Idea',
            YourAddress: {
                city: 'Mianwali',
                state: 'Punjab',
                country: 'Pakistan'
            },
            CrushAddress: {
                residence: 'BFHSC',
                originally: 'HMB',
                education: 'pcs',
                job: 'LAUL',
                skills: 'RS'
            },
            life: 'Life is one'
        }
        // alert(obj);
        console.log(obj);

        //to print some data from child object inside main object.
        console.log(obj.YourAddress.city);

        //creating array inside object.
        let ob = {
            nameii: 'sarmad',
            age: 30,
            life: 'life is one',
            obe: {
                crushUpdates: 'Ni yrrr',
                age: undefined,
                name: 'Hay hi nhi yawr'
            }   
        }
        console.log(ob.obe[0]);

        //Structuring to fetch data from object
        let {nameii, life} = ob;
        console.log(life);



    </script>