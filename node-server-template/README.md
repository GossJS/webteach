Архив здесь: http://kodaktor.ru/node-server-template.zip

... curl 'http://kodaktor.ru/{node-server-template.zip}' -o  '#1'

ИЛИ

wget https://raw.githubusercontent.com/gossoudarev/webteach/master/node-server-template/install.sh

bash install.sh создаст каталог, далее cd в этот каталог и ...

Обратите внимание на способ указания порта

listen(process.env.PORT || PORT,()=>

		  	        console.log(`--> Port ${  process.env.PORT || PORT  } listening!`)
					
в среде c9 будет установлена переменная окружения PORT

при запуске получите   --> Port 8080 listening!			

если запускать локально, то 

  если npm start   или node index.js - будет использовано внутренне указанное 4444 в server.js
  
  иначе если PORT=7777 npm start  или  PORT=7777 node index.js   - будет взято это значение
  
 аналогично с pm2
 
    pm2 start index.js --watch
	
	или
	
	PORT=8765 pm2 start index.js --watch  

=======

в проекте express-template написано не в стиле c9 строчными буквами process.env.PORT

поэтому там уже port=7777 npm start  или  port=7777 node index.js

    (там  nodemon)

=======

в развитие этого темплейта - примитивный файл-сервер

https://github.com/gossoudarev/webteach/tree/master/node-server-file

=======

и минималистичный веб-сервер с сохранением состояния в одну строчку

require('http').createServer((i=>(req,res)=>res.end(`${++i}`))(0)).listen(1234); 

Можно воспользоваться моим образом для его быстрого запуска 

https://hub.docker.com/r/igossoudarev/nodesimple/

[docker pull igossoudarev/nodesimple]

docker run -itd -p 1234:80 --name n1 igossoudarev/nodesimple

docker exec -it n1 bash

curl 192.168.99.100:1234

=======

и простой серверок от Тимура Шемсединова (timur.js)

=======

изнутри контейнера можно забирать и другой код, естественно

wget https://raw.githubusercontent.com/gossoudarev/webteach/master/node-server-file/index.js



см. также 

https://github.com/HowProgrammingWorks/NodeServer