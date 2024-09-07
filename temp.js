const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Adhyay = require('./models/adhyay.model'); // Adjust the path as necessary

// Replace with your MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/geetaAPI'; // Update this as needed

mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Read the JSON file
const filePath = path.join(__dirname, 'data.json'); // Adjust the file path if necessary
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    const jsonData = JSON.parse(data);
    const chapters = jsonData.chapters;

    const adhyayArray = [];

    // Iterate over each chapter and extract the necessary data
    Object.keys(chapters).forEach((chapterKey, index) => {
        const chapter = chapters[chapterKey];
        adhyayArray.push({
            name: chapter.name,
            summary: chapter.chapter_summary,
            hindiNumber:chapter.chapter_number,
            number: index + 1,
            nameMeaning: chapter.name_meaning
        });
    });

    // Insert all chapters into the database
    Adhyay.insertMany(adhyayArray)
        .then(docs => {
            console.log('Chapters inserted successfully:', docs);
            mongoose.connection.close();
        })
        .catch(err => {
            console.error('Error inserting chapters:', err);
            mongoose.connection.close();
        });
});
