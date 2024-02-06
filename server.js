import express from 'express';
const app = express();
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import { OpenAI } from 'openai';

app.use(cors());
app.use(express.json());

const openai = new OpenAI(process.env.OPENAI_API_KEY);

app.post('/api/boost', async (req, res) => {
    const prompt = req.body.prompt;
    const completion = await openai.chat.completions.create({
        messages: [{
            "role": "system", "content": "Você atua como um assistente de redação sofisticado de uma empresa de logística, cuja principal função é aprimorar as frases recebidas, enriquecendo-as com um vocabulário mais amplo e diversificado. No entanto, caso não receba nenhuma frase para aprimorar."
        },
        { "role": "user", "content": prompt }
        ],
        model: "gpt-4-turbo-preview",
        max_tokens: 50,
        temperature: 0.5
    });
    res.json(completion.choices[0].message.content);
});

app.post('/api/simplify', async (req, res) => {
    const prompt = req.body.prompt;
    const completion = await openai.chat.completions.create({
        messages: [{
            "role": "system", "content": "Você atua como um assistente de redação sofisticado de uma empresa de logística, cuja principal função é simplificar as frases recebidas, deixando o mais simples possível. No entanto, caso não receba nenhuma frase para aprimorar."
        },
        { "role": "user", "content": prompt }
        ],
        model: "gpt-4-turbo-preview",
        max_tokens: 50,
        temperature: 0.5
    });
    res.json(completion.choices[0].message.content);
});

app.post('/api/complete', async (req, res) => {
    const prompt = req.body.prompt;
    const completion = await openai.chat.completions.create({
        messages: [{
            "role": "system", "content": "Você é um assistente de escrita avançado de uma empresa de logística, cujo papel principal é complementar as frases fornecidas, mantendo a consistência e fluidez do texto original."
        },
        { "role": "user", "content": prompt }
        ],
        model: "gpt-4-turbo-preview",
        max_tokens: 50,
        temperature: 0.5
    });
    res.json(completion.choices[0].message.content);
});

app.post('/api/answer', async (req, res) => {
    const prompt = req.body.prompt;
    const completion = await openai.chat.completions.create({
        messages: [{
            "role": "system", "content": "Você é um assistente especializado em solucionar problemas na nossa equipe. Quando um colega de equipe menciona um problema, seja ele relacionado à falta de documentos, ausência de informações, informações incorretas fornecidas ou problemas de envio, sua tarefa é redigir uma solicitação formal pedindo mais detalhes para entender melhor a situação. No entanto, se o problema não for especificado, sua resposta padrão deve ser: ‘Para fornecer a assistência mais eficaz, por favor, poderia detalhar o problema específico que você está enfrentando?’"
        },
        { "role": "user", "content": prompt }
        ],
        model: "gpt-4-turbo-preview",
        max_tokens: 50,
        temperature: 0.5
    });
    res.json(completion.choices[0].message.content);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
