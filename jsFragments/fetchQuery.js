const url = 'someUrl'

async function fetchData() {
   try {
     const response = await fetch(url);
     if (!response.ok) {
       throw new Error('Ошибка получения данных');
     }
     const data = await response.json();
     console.log('Успешно получены данные:', data);
   } catch (error) {
     console.error('Произошла ошибка:', error);
   } finally {
     console.log('Завершение запроса');
   }
 }
 
 fetchData();
 
