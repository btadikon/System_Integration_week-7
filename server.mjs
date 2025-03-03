import express from 'express';

const app = express();
const PORT = 3003;

app.get('/say', (req, res) => {
    const keyword = req.query.keyword;
    
    if (!keyword) {
        return res.status(400).json({ error: "No keyword provided" });
    }

    res.json({ message: `Bharadwaaja says ${keyword}` });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
