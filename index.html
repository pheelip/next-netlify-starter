<!DOCTYPE html>
<html>
<head>
    <title>Q&A Interface</title>
    <style>
        body { font-family: Arial; max-width: 600px; margin: 0 auto; padding: 20px; }
        #question { background: #f5f5f5; padding: 15px; margin-bottom: 20px; }
        textarea { width: 100%; height: 100px; }
        button { background: #00ad9f; color: white; border: none; padding: 10px 15px; }
    </style>
</head>
<body>
    <h1>Answer the Question</h1>
    <div id="question"></div>
    <textarea id="answer" placeholder="Type your response..."></textarea>
    <button onclick="submitAnswer()">Submit</button>

    <script>
        // Fetch question via Netlify function
        async function loadQuestion() {
            try {
                const response = await fetch('/.netlify/functions/get-question');
                const data = await response.json();
                document.getElementById('question').innerText = data.question || "No question available";
            } catch (error) {
                console.error("Error loading question:", error);
            }
        }

        // Submit to n8n webhook
        async function submitAnswer() {
            const answer = document.getElementById('answer').value.trim();
            if (!answer) return alert("Please enter an answer");
            
            try {
                await fetch('YOUR_N8N_ANSWER_WEBHOOK_URL', {
                    method: 'POST',
                    body: JSON.stringify({ answer }),
                    headers: { 'Content-Type': 'application/json' }
                });
                alert("Answer submitted successfully!");
                document.getElementById('answer').value = "";
            } catch (error) {
                alert("Submission failed. Please try again.");
            }
        }

        loadQuestion();
    </script>
</body>
</html>
