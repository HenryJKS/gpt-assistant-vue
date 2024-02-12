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
        temperature: 0.5
    });
    res.json(completion.choices[0].message.content);
});

app.post('/api/documents', async (req, res) => {
    const {tracking, funcionario} = req.body;
    const completion = await openai.chat.completions.create({
        messages: [{
            "role": "system", "content": "Você é um assistente especializado em solicitar documentos faltantes, Sua tarefa é redigir uma solicitação de documentos faltantes. Você receberá o código de rastreamento da remessa, e o nome do funcionário que está solicitando o documento."
        },
        { "role": "user", "content": `Por favor, redija a solicitação da seguinte maneira: Prezados responsáveis, Gostaríamos de solicitar a gentileza de enviar os documentos faltantes referente a remessa ${tracking}. Atenciosamente ${funcionario}` }
        ],
        model: "gpt-4-turbo-preview",
        temperature: 0.1,
        max_tokens: 100
    });
    res.json(completion.choices[0].message.content);
});

// passando o tracking para o assistente
app.post('/api/provingvalue', async (req, res) => {
    const {tracking, funcionario} = req.body;
    const completion = await openai.chat.completions.create({
        messages: [{
            "role": "system", 
            "content": "Você é um assistente especializado em logística. Sua tarefa é redigir uma solicitação de comprovação de valor. Você receberá o código de rastreamento da remessa, e o nome do funcionário que está solicitando a comprovação de valor."
        },
        { 
            "role": "user", 
            "content": `Por favor, redija a solicitação da seguinte maneira: Prezados responsáveis para comprovação de valor, Gostaríamos de solicitar a comprovação de valor referente a remessa ${tracking}. Atenciosamente ${funcionario}` 
        }],
        model: "gpt-3.5-turbo",
        temperature: 0.1,
        max_tokens: 100
    });
    res.json(completion.choices[0].message.content);
});


// passando o tracking para o assistente
app.post('/api/cpfirregular', async (req, res) => {
    const { tracking, funcionario } = req.body;
    const completion = await openai.chat.completions.create({
        messages: [{
            "role": "system", "content": "Você é um assistente especializado em logística. Sua tarefa é redigir uma solicitação de análise de uma remessa com CPF irregular. Você receberá o código de rastreamento da remessa, o status para ser atualizado e o nome do funcionário que está solicitando a análise."
        },
        {
            "role": "user", "content": `Por favor, redija a solicitação da seguinte maneira: Prezados responsáveis pela análise de remessas, Gostaríamos de solicitar a gentileza de realizar a análise da remessa com CPF irregular, referente à remessa de código ${tracking}. Atenciosamente, ${funcionario}`
        }
        ],
        model: "gpt-3.5-turbo",
        temperature: 0.1,
        max_tokens: 100
    });
    res.json(completion.choices[0].message.content);
});

// passando o status e o tracking para o assistente
app.post('/api/updateShipment', async (req, res) => {
    const { tracking, funcionario } = req.body;
    const completion = await openai.chat.completions.create({
        messages: [{
            "role": "system",
            "content": `Você é um assistente especializado em logística. Sua tarefa é redigir uma solicitação de alteração de status de uma remessa. Você receberá o código de rastreamento da remessa e o nome do funcionário que está solicitando a atualização.`
        },
        { "role": "user", "content": `Por favor, redija a solicitação da seguinte maneira: Gostaríamos de solicitar a atualização do status da remessa com o código de rastreamento ${tracking}. Atenciosamente, ${funcionario}` }
        ],
        model: "gpt-3.5-turbo",
        temperature: 0.1,
        max_tokens: 100
    });
    res.json(completion.choices[0].message.content);
});

// Traduzindo o texto para o Inglês
app.post('/api/translateEng', async (req, res) => {
    const prompt = req.body.prompt;
    const completion = await openai.chat.completions.create({
        messages: [{
            "role": "system",
            "content": "Você é um assistente de tradução. Sua tarefa é traduzir o texto para o inglês."
        },
        { "role": "user", "content": prompt }
        ],
        model: "gpt-3.5-turbo",
        temperature: 0.1,
    });
    res.json(completion.choices[0].message.content);
});

// Traduzindo o texto para o Espanhol
app.post('/api/translateSpa', async (req, res) => {
    const prompt = req.body.prompt;
    const completion = await openai.chat.completions.create({
        messages: [{
            "role": "system",
            "content": "Você é um assistente de tradução. Sua tarefa é traduzir o texto para o espanhol."
        },
        { "role": "user", "content": prompt }
        ],
        model: "gpt-3.5-turbo",
        temperature: 0.1,
    });
    res.json(completion.choices[0].message.content);
});

// Traduzindo o texto para o Russo
app.post('/api/translateRus', async (req, res) => {
    const prompt = req.body.prompt;
    const completion = await openai.chat.completions.create({
        messages: [{
            "role": "system",
            "content": "Você é um assistente de tradução. Sua tarefa é traduzir o texto para o russo."
        },
        { "role": "user", "content": prompt }
        ],
        model: "gpt-3.5-turbo",
        temperature: 0.1,
    });
    res.json(completion.choices[0].message.content);
});

// Traduzindo o texto para Alemao
app.post('/api/translateGer', async (req, res) => {
    const prompt = req.body.prompt;
    const completion = await openai.chat.completions.create({
        messages: [{
            "role": "system",
            "content": "Você é um assistente de tradução. Sua tarefa é traduzir o texto para o alemão."
        },
        { "role": "user", "content": prompt }
        ],
        model: "gpt-3.5-turbo",
        temperature: 0.1,
    });
    res.json(completion.choices[0].message.content);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
