const express = require('express');
const cors = require('cors');
const path = require('path');

require('./db/database'); // init DB
require('./db/seed');    // seed data

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/services', require('./routes/services'));
app.use('/api/news', require('./routes/news'));
app.use('/api/subscribers', require('./routes/subscribers'));

app.get('/api/health', (_, res) => res.json({ status: 'ok', project: 'An Khang Clean' }));

const PORT = 5022;
app.listen(PORT, () => console.log(`✅ An Khang backend running at http://localhost:${PORT}`));
