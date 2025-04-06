// functions/get-question.js
exports.handler = async (event) => {
    try {
        const response = await fetch('YOUR_N8N_QUESTION_WEBHOOK_URL');
        const data = await response.json();
        
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to fetch question" })
        };
    }
};
