import axios from 'axios';

export default async (req, res) => {
    try {
        // Obtém a URL da API do ambiente
        const apiUrl = `${process.env.URL}/api/quote/result`;

        // Define o cabeçalho de controle de cache
        res.setHeader('Cache-Control', 'max-age=3600');

        // Faz uma solicitação para obter todos os dados disponíveis
        const { data: allData } = await axios.get(apiUrl);

        // Obtém a consulta da requisição
        const { query } = req.query;

        // Verifica se a consulta está presente
        if (!query) {
            return res.status(400).json({ error: 'Query parameter "query" is required' });
        }

        // Converte a consulta para maiúsculas para garantir correspondência insensível a maiúsculas e minúsculas
        const queryUpperCase = query.toUpperCase();

        // Filtra os dados com base na consulta
        const filteredData = {
            stocks: allData.data.stocks.filter(stock => stock.stock.includes(queryUpperCase) || stock.name.includes(query)),
            indexes: allData.data.indexes.filter(index => index.stock.includes(queryUpperCase) || index.name.includes(query)),
        };

        // Responde com os dados filtrados
        res.status(200).json({ data: filteredData });
    } catch (error) {
        // Trata erros durante a execução da função
        console.error('Error searching data:', error);

        // Verifica o tipo de erro e responde adequadamente
        if (error.response) {
            res.status(error.response.status).json({ error: error.response.data });
        } else if (error.request) {
            res.status(500).json({ error: 'No response from the server. Please try again.' });
        } else {
            res.status(500).json({ error: 'An unexpected error occurred. Please try again.' });
        }
    }
};
