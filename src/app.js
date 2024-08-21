import express from 'express';
import http from 'http';
import path from 'path';
import url from 'url';
import OpenAI from 'openai';
import fs from 'fs';
import { Server } from 'socket.io';

import * as views from './views/views.js';
import writeToDb from './functions/writeToDb.js';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
const port = 3000
const server = http.createServer(app);
const io = new Server(server);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

app.use(express.static(path.join(__dirname, 'static')));
app.use(express.urlencoded({ extended: true }));


// INDEX
app.get('/', (req, res) => {
  const body = views.header + views.index + views.footer;
  res.send(body)
})

// PRESENTATION
app.get('/intro', (req, res) => {
  const body = views.header + views.intro + views.footer;
  res.send(body)
})

app.get('/om-xlent', (req, res) => {
  const body = views.header + views.xlent + views.footer;
  res.send(body)
})

app.get('/nyfiken-qr', (req, res) => {
  const body = views.header + views.nyfikenQr + views.footer;
  res.send(body)
})

app.get('/demos', (req, res) => {
  const body = views.header + views.demos + views.footer;
  res.send(body)
})

app.get('/framtiden', (req, res) => {
  const body = views.header + views.future + views.footer;
  res.send(body)
})


// INPUT
app.get('/nyfiken', (req, res) => {
  const body = views.header + views.input + views.footer;
  res.send(body)
})

app.get('/resultat', (req, res) => {
  const body = views.header + views.results + views.footer;
  res.send(body)
})

app.get('/stream', async (req, res) => {
  try {
    // Setting headers for SSE
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    const content = `
      Du ska nu sammanfatta svaren från publiken på en föreläsning jag håller.
      Publiken är nya studenter på Linköpings universitet (även kallat LiU i talspråk) på campus Norrköping. Och de har svarat på frågorna nedan.
      * Var kommer du ifrån?
      * Hur gammal är du?
      * Vad är ditt främsta intresse?
      
      Och det här är deras samlade svar:

      Städer:
      ${fs.readFileSync(`${__dirname}/dbs/city.txt`, 'utf8')}

      Åldrar:
      ${fs.readFileSync(`${__dirname}/dbs/age.txt`, 'utf8')}

      Intressen:
      ${fs.readFileSync(`${__dirname}/dbs/fun.txt`, 'utf8')}

      Dra gärna slutsatser och tipsa om ett par relevanta aktiviteter som kan passa målgruppen i Norrköping.
      Skriv som att du pratar med studenterna i publiken. Se gärna till att nämna specifika detaljer om svaren, så att det märks att det inte bara är ett boilerplate-svar. Och skriv gärna med en trevlig välkomnande ton men håll dig till två eller tre paragrafer. 
    `

    
    const stream = await openai.chat.completions.create({
      messages: [{ role: 'user', content: content }],
      model: 'gpt-4o-mini',
      stream: true
    });

    // Send an initial SSE comment to establish the connection
    res.write(':connected\n\n');
    // Handling the streaming data from OpenAI

    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content || '';
      if (content.includes("\n\n")) {
        res.write(`data: ${content.trim() + '<br><br>'}\n\n`);
      } else {
        res.write(`data: ${content}\n\n`);
      }
    }

    res.write('event: end\ndata: end\n\n');
    res.end();

  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('An error occurred while processing your request.');
  }
});


app.get('/qanda', async (req, res) => {
  const body = views.header + views.qaa + views.footer;
  res.send(body)
});

app.get('/chat', async (req, res) => {
  const body = views.header + views.inputQA + views.footer;
  res.send(body)
});


app.post('/chat', async (req, res) => {
  if (req.body.chat) {
    const chat = req.body.chat;
    const name = req.body.name;
    io.emit('newMessage', {chat, name}); // Broadcast new message to 
    writeToDb('chat', `${name}°${chat}`)
  }

  if (req.body.typing) {
    io.emit('typing'); // Broadcast typing
  }

  const body = views.header + views.inputQA + views.footer;
  res.send(body)
});



app.get('/tack', (req, res) => {
  const body = views.header + views.theend + views.footer;
  res.send(body)
})

app.post('/tack', (req, res) => {
  const body = views.header + `
    <main>
      <h1>Tack för att du bidrar!</h1>
      <p>Här är en unik robot som genererats baserat på just dina svar. (<a href="https://robohash.org/">via robohash.org</a>)</p>
      <img src="https://robohash.org/${req.body}" alt=""/>
    </main>
    ` + views.footer;
  res.send(body)

  if (req.body.city) {
    const city = req.body.city;
    writeToDb('city', city)
  }

  if (req.body.age) {
    const age = req.body.age;
    writeToDb('age', age)
  }

  if (req.body.fun) {
    const fun = req.body.fun;
    writeToDb('fun', fun)
  }
})



// 404
app.get('*', (req, res) => {
  const body = views.header + views.fourOhFour + views.footer;
  res.status(404).send(body)
})

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});