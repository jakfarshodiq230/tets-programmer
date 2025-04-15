import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

function randomNumber() {
    const results = [];
    for (let i = 0; i < 5; i++) {
        let num;
        do {
            num = Math.floor(Math.random() * 100) + 1;
        } while (num % 5 !== 0);

        if (num <= 60) {
            results.push(`${num} kurang`);
        } else if (num > 60 && num <= 70) {
            results.push(`${num} cukup`);
        } else if (num > 70 && num <= 80) {
            results.push(`${num} baik`);
        } else {
            results.push(`${num} luar biasa`);
        }
    }
    return results;
}

const SoalPertama = () => {
    const results = randomNumber();

    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h4" gutterBottom>
                Soal 1. Hasil Random Number
            </Typography>
            <List>
                {results.map((result, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={result} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default SoalPertama;