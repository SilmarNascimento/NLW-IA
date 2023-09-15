import { fastify } from 'fastify';
import { fastifyCors } from '@fastify/cors'
import { getAllPrompts } from './routes/prompt.routes';
import { uploadVideo } from './routes/video.routes';
import { createTranscription } from './routes/transcription.routes';
import { generateAiCompletion } from './routes/completion.routes';

const app = fastify();

app.register(fastifyCors, {
  origin: '*',
})

app.register(getAllPrompts);
app.register(uploadVideo);
app.register(createTranscription);
app.register(generateAiCompletion);

app.listen({
  port: 3001,
}).then(() => {
  console.log('HTTP Server Running'); 
});
