/* มอนตี้ได้รับ requirement มาดังนี้ 
1. จาก code ด้านล่างให้แสดงข้อมูลของพนักงานที่ชื่ออเล็กซ์ ในรูปแบบ 'Alex age 25' โดยใช้ string template literal ร่วมกับการเข้าถึงข้อมูลใน array และ object

2. จาก code ด้านล่างให้แสดงข้อมูลของพนักงานที่ชื่อมินอา ในรูปแบบ 'Min Ah age 22' 

3. จาก code ด้านล่างให้แสดงข้อมูลของพนักงานที่ชื่อมินอา ในรูปแบบ 'Min Ah like Dance, Rap and Pets' 

4. จาก code ด้านล่างให้แสดงข้อมูลของพนักงานที่ชื่ออเล็กซ์ ในรูปแบบ 'Alex work as Programmer.' 

5. จาก code ด้านล่างให้แก้ไขข้อมูลพนักงานที่ชื่ออเล็กซ์ โดยเปลี่ยน job title จาก Programmer เป็น Senior Developer และเปลี่ยน salary จาก 40000 เป็น 60000

6. จาก code ด้านล่างให้แสดงข้อมูลพนักงานที่ชื่ออเล็กซ์ ในรูปแบบ 'Alex work as Senior Developer, he earns 60000 thb/month.' 

7. จาก code ด้านล่างให้ลบข้อมูล bonus ของพนักงานที่ชื่อมินอาออก จากนั้นให้แสดงข้อมูลของ object ที่เก็บข้อมูลเกี่ยวกับ Min Ah ออกทางหน้าจอ หากทำถูกต้อง จะเห็นข้อมูลแบบนี้ 
    {
        name: 'Min Ah',
        age: 22,
        hobbies: [ 'Dance', 'Rap', 'Pets' ],
        jobInfo: { title: 'Admin', salary: 20000 }
    }
*/

const employees = [
  {
    name: "Alex",
    age: 25,
    hobbies: ["Cryptocurrency", "Social media"],
    jobInfo: {
        title: 'Programmer',
        salary: 40000,
        bonus: 2000,
    }
  },
  {
    name: "Min Ah",
    age: 22,
    hobbies: ["Dance", "Rap", "Pets"],
    jobInfo: {
        title: 'Admin',
        salary: 20000,
        bonus: 1800,
    }
  },
];

