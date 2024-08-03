const http = require('http');

const PORT=8000;
const fs = require('fs');


const server=http.createServer((req,res)=>{

    try {
        if (req.method === 'GET'){
            if (req.url=== '/')
            {
                 
fs.readFile('index.html', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.setHeader('Content-Type','text/html')
    res.end(data);
  });
            }
            else if (req.url==='/about'){
                fs.readFile('about.html', 'utf8', (err, data) => {
                    if (err) {
                      console.error(err);
                      return;
                    }
                    res.setHeader('Content-Type','text/html')
                    res.end(data);
                  })
            }
            else if(req.url ==='/contact-me'){
                fs.readFile('contact-me.html', 'utf8', (err, data) => {
                    if (err) {
                      console.error(err);
                      return;
                    }
                    res.setHeader('Content-Type','text/html')
                    res.end(data);
                  })}
              else{
                res.writeHead(404,{'Content-Type':'text/html'})
                res.end('<h1>Not found</h1>')
                 }
              
                
            
        }
        
       
      } catch (error) {
        
        console.error("An error occurred:", error.message);
      }
      
})



server.listen(PORT,()=>{
    console.log('server running')
}
)






