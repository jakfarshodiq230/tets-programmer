import React, { useState } from "react";
import { TextField, Button, Typography, Box, Container } from "@mui/material";

function SoalKedua() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    function katakLoncat(X) {
        if (X <= 0) {
            return "Tinggi tiang harus bilangan bulat positif.";
        }

        const loncatanBesar = Math.floor(X / 3);
        const loncatanKecil = X % 3;

        return `${loncatanBesar} Loncatan Besar dan ${loncatanKecil} Loncatan Kecil`;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const parsedInput = parseInt(input, 10);
        if (isNaN(parsedInput)) {
            setResult("Masukkan angka yang valid.");
        } else {
            setResult(katakLoncat(parsedInput));
        }
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Soal 2. Hitung Loncatan Katak
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <TextField
                    label="Masukkan tinggi tiang"
                    type="number"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    variant="outlined"
                    fullWidth
                />
                <Button type="submit" variant="contained" color="primary">
                    Hitung
                </Button>
            </Box>
            {result && (
                <Typography variant="h6" color="textSecondary" sx={{ mt: 2 }}>
                    Hasil: {result}
                </Typography>
            )}
        </Container>
    );
}

export default SoalKedua;